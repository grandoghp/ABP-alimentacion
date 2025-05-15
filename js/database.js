// Base de datos para BodyRun
// Este archivo maneja la conexión y operaciones con la base de datos IndexedDB

// Inicializar la base de datos
const initDatabase = () => {
    // Verificar si el navegador soporta IndexedDB
    if (!window.indexedDB) {
        console.error("Tu navegador no soporta IndexedDB, que es necesario para la base de datos.");
        return false;
    }

    // Abrir o crear la base de datos
    const dbRequest = window.indexedDB.open("BodyRunDB", 1);

    // Manejar errores
    dbRequest.onerror = (event) => {
        console.error("Error al abrir la base de datos:", event.target.error);
        alert("No se pudo inicializar la base de datos. Algunas funciones pueden no estar disponibles.");
    };

    // Configurar la estructura de la base de datos cuando se crea o actualiza
    dbRequest.onupgradeneeded = (event) => {
        const db = event.target.result;
        console.log("Creando o actualizando la estructura de la base de datos...");

        // Crear tabla de usuarios si no existe
        if (!db.objectStoreNames.contains("usuarios")) {
            const usuariosStore = db.createObjectStore("usuarios", { keyPath: "id", autoIncrement: true });
            usuariosStore.createIndex("email", "email", { unique: true });
            usuariosStore.createIndex("username", "username", { unique: true });
            console.log("Tabla de usuarios creada.");
        }

        // Crear tabla para registros de IMC
        if (!db.objectStoreNames.contains("registrosIMC")) {
            const imcStore = db.createObjectStore("registrosIMC", { keyPath: "id", autoIncrement: true });
            imcStore.createIndex("usuarioId", "usuarioId", { unique: false });
            imcStore.createIndex("fecha", "fecha", { unique: false });
            console.log("Tabla de registros IMC creada.");
        }

        // Crear tabla para registros de calorías (superávit/déficit)
        if (!db.objectStoreNames.contains("registrosCalorias")) {
            const caloriasStore = db.createObjectStore("registrosCalorias", { keyPath: "id", autoIncrement: true });
            caloriasStore.createIndex("usuarioId", "usuarioId", { unique: false });
            caloriasStore.createIndex("fecha", "fecha", { unique: false });
            caloriasStore.createIndex("tipo", "tipo", { unique: false }); // 'superavit', 'deficit', 'mantenimiento'
            console.log("Tabla de registros de calorías creada.");
        }

        // Crear tabla para dietas guardadas
        if (!db.objectStoreNames.contains("dietas")) {
            const dietasStore = db.createObjectStore("dietas", { keyPath: "id", autoIncrement: true });
            dietasStore.createIndex("usuarioId", "usuarioId", { unique: false });
            dietasStore.createIndex("nombre", "nombre", { unique: false });
            console.log("Tabla de dietas creada.");
        }
    };

    // Cuando la base de datos está lista
    dbRequest.onsuccess = (event) => {
        const db = event.target.result;
        console.log("Base de datos inicializada correctamente.");
        
        // Guardar la conexión para uso posterior
        window.bodyRunDB = db;
        
        // Disparar un evento para notificar que la BD está lista
        const dbReadyEvent = new Event('db-ready');
        document.dispatchEvent(dbReadyEvent);
    };

    return true;
};

// Funciones para gestionar usuarios
const usuariosDB = {
    // Registrar un nuevo usuario
    registrar: (usuario) => {
        return new Promise((resolve, reject) => {
            if (!window.bodyRunDB) {
                reject("Base de datos no inicializada");
                return;
            }

            const transaction = window.bodyRunDB.transaction(["usuarios"], "readwrite");
            const store = transaction.objectStore("usuarios");

            // Verificar si el usuario ya existe
            const emailIndex = store.index("email");
            const usernameIndex = store.index("username");
            
            const emailCheck = emailIndex.get(usuario.email);
            emailCheck.onsuccess = () => {
                if (emailCheck.result) {
                    reject("El correo electrónico ya está registrado");
                    return;
                }
                
                const usernameCheck = usernameIndex.get(usuario.username);
                usernameCheck.onsuccess = () => {
                    if (usernameCheck.result) {
                        reject("El nombre de usuario ya está en uso");
                        return;
                    }
                    
                    // Si no existe, agregarlo
                    const request = store.add({
                        username: usuario.username,
                        email: usuario.email,
                        password: usuario.password, // En una aplicación real, esto debería estar hasheado
                        nombre: usuario.nombre || '',
                        fechaRegistro: new Date().toISOString(),
                    });
                    
                    request.onsuccess = () => {
                        resolve(request.result); // Devuelve el ID del nuevo usuario
                    };
                    
                    request.onerror = () => {
                        reject("Error al registrar usuario");
                    };
                };
            };
        });
    },

    // Iniciar sesión
    login: (username, password) => {
        return new Promise((resolve, reject) => {
            if (!window.bodyRunDB) {
                reject("Base de datos no inicializada");
                return;
            }

            const transaction = window.bodyRunDB.transaction(["usuarios"], "readonly");
            const store = transaction.objectStore("usuarios");
            const index = store.index("username");
            const request = index.get(username);

            request.onsuccess = () => {
                const usuario = request.result;
                if (usuario && usuario.password === password) { // En una app real, verificar hash
                    // Guardar sesión en localStorage
                    const sesion = {
                        id: usuario.id,
                        username: usuario.username,
                        nombre: usuario.nombre,
                        email: usuario.email,
                        fechaLogin: new Date().toISOString()
                    };
                    localStorage.setItem('sesionUsuario', JSON.stringify(sesion));
                    resolve(sesion);
                } else {
                    reject("Usuario o contraseña incorrectos");
                }
            };

            request.onerror = () => {
                reject("Error al iniciar sesión");
            };
        });
    },

    // Cerrar sesión
    logout: () => {
        localStorage.removeItem('sesionUsuario');
        return true;
    },

    // Verificar si hay sesión activa
    getSesion: () => {
        const sesionData = localStorage.getItem('sesionUsuario');
        return sesionData ? JSON.parse(sesionData) : null;
    },

    // Actualizar perfil de usuario
    actualizarPerfil: (usuarioId, datosActualizados) => {
        return new Promise((resolve, reject) => {
            if (!window.bodyRunDB) {
                reject("Base de datos no inicializada");
                return;
            }

            const transaction = window.bodyRunDB.transaction(["usuarios"], "readwrite");
            const store = transaction.objectStore("usuarios");
            const request = store.get(usuarioId);

            request.onsuccess = () => {
                const usuario = request.result;
                if (!usuario) {
                    reject("Usuario no encontrado");
                    return;
                }

                // Actualizar campos
                Object.keys(datosActualizados).forEach(key => {
                    if (key !== 'id' && key !== 'email' && key !== 'username') { // No permitir cambiar campos clave
                        usuario[key] = datosActualizados[key];
                    }
                });

                // Guardar cambios
                const updateRequest = store.put(usuario);
                updateRequest.onsuccess = () => {
                    // Actualizar sesión si existe
                    const sesion = usuariosDB.getSesion();
                    if (sesion && sesion.id === usuarioId) {
                        sesion.nombre = usuario.nombre;
                        localStorage.setItem('sesionUsuario', JSON.stringify(sesion));
                    }
                    resolve(true);
                };

                updateRequest.onerror = () => {
                    reject("Error al actualizar perfil");
                };
            };

            request.onerror = () => {
                reject("Error al buscar usuario");
            };
        });
    }
};

// Funciones para gestionar registros de IMC
const registrosIMCDB = {
    // Guardar un nuevo registro de IMC
    guardar: (registro) => {
        return new Promise((resolve, reject) => {
            if (!window.bodyRunDB) {
                reject("Base de datos no inicializada");
                return;
            }

            // Verificar que el usuario esté autenticado
            const sesion = usuariosDB.getSesion();
            if (!sesion && !registro.usuarioId) {
                reject("Usuario no autenticado");
                return;
            }

            const transaction = window.bodyRunDB.transaction(["registrosIMC"], "readwrite");
            const store = transaction.objectStore("registrosIMC");

            // Preparar el registro con la fecha actual y el ID del usuario si no se proporcionó
            const nuevoRegistro = {
                ...registro,
                usuarioId: registro.usuarioId || sesion.id,
                fecha: registro.fecha || new Date().toISOString()
            };

            const request = store.add(nuevoRegistro);

            request.onsuccess = () => {
                resolve(request.result); // Devuelve el ID del registro creado
            };

            request.onerror = () => {
                reject("Error al guardar el registro de IMC");
            };
        });
    },

    // Obtener todos los registros de IMC de un usuario
    obtenerPorUsuario: (usuarioId) => {
        return new Promise((resolve, reject) => {
            if (!window.bodyRunDB) {
                reject("Base de datos no inicializada");
                return;
            }

            const transaction = window.bodyRunDB.transaction(["registrosIMC"], "readonly");
            const store = transaction.objectStore("registrosIMC");
            const index = store.index("usuarioId");
            const request = index.getAll(usuarioId);

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = () => {
                reject("Error al obtener registros de IMC");
            };
        });
    },
    
    // Eliminar un registro de IMC
    eliminar: (registroId) => {
        return new Promise((resolve, reject) => {
            if (!window.bodyRunDB) {
                reject("Base de datos no inicializada");
                return;
            }

            const transaction = window.bodyRunDB.transaction(["registrosIMC"], "readwrite");
            const store = transaction.objectStore("registrosIMC");
            const request = store.delete(registroId);

            request.onsuccess = () => {
                resolve(true);
            };

            request.onerror = () => {
                reject("Error al eliminar el registro de IMC");
            };
        });
    },
    
    // Obtener un registro específico por ID
    obtenerPorId: (registroId) => {
        return new Promise((resolve, reject) => {
            if (!window.bodyRunDB) {
                reject("Base de datos no inicializada");
                return;
            }

            const transaction = window.bodyRunDB.transaction(["registrosIMC"], "readonly");
            const store = transaction.objectStore("registrosIMC");
            const request = store.get(registroId);

            request.onsuccess = () => {
                if (request.result) {
                    resolve(request.result);
                } else {
                    reject("Registro no encontrado");
                }
            };

            request.onerror = () => {
                reject("Error al obtener el registro");
            };
        });
    }
};

// Funciones para gestionar registros de calorías
const registrosCaloriasDB = {
    // Guardar un nuevo registro de calorías (superávit o déficit)
    guardar: (registro) => {
        return new Promise((resolve, reject) => {
            if (!window.bodyRunDB) {
                reject("Base de datos no inicializada");
                return;
            }

            // Verificar que el usuario esté autenticado
            const sesion = usuariosDB.getSesion();
            if (!sesion && !registro.usuarioId) {
                reject("Usuario no autenticado");
                return;
            }

            const transaction = window.bodyRunDB.transaction(["registrosCalorias"], "readwrite");
            const store = transaction.objectStore("registrosCalorias");

            // Preparar el registro con la fecha actual y el ID del usuario si no se proporcionó
            const nuevoRegistro = {
                ...registro,
                usuarioId: registro.usuarioId || sesion.id,
                fecha: registro.fecha || new Date().toISOString()
            };

            const request = store.add(nuevoRegistro);

            request.onsuccess = () => {
                resolve(request.result); // Devuelve el ID del registro creado
            };

            request.onerror = () => {
                reject("Error al guardar el registro de calorías");
            };
        });
    },

    // Obtener todos los registros de calorías de un usuario
    obtenerPorUsuario: (usuarioId) => {
        return new Promise((resolve, reject) => {
            if (!window.bodyRunDB) {
                reject("Base de datos no inicializada");
                return;
            }

            const transaction = window.bodyRunDB.transaction(["registrosCalorias"], "readonly");
            const store = transaction.objectStore("registrosCalorias");
            const index = store.index("usuarioId");
            const request = index.getAll(usuarioId);

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = () => {
                reject("Error al obtener registros de calorías");
            };
        });
    },
    
    // Eliminar un registro de calorías
    eliminar: (registroId) => {
        return new Promise((resolve, reject) => {
            if (!window.bodyRunDB) {
                reject("Base de datos no inicializada");
                return;
            }

            const transaction = window.bodyRunDB.transaction(["registrosCalorias"], "readwrite");
            const store = transaction.objectStore("registrosCalorias");
            const request = store.delete(registroId);

            request.onsuccess = () => {
                resolve(true);
            };

            request.onerror = () => {
                reject("Error al eliminar el registro de calorías");
            };
        });
    },
    
    // Obtener un registro específico por ID
    obtenerPorId: (registroId) => {
        return new Promise((resolve, reject) => {
            if (!window.bodyRunDB) {
                reject("Base de datos no inicializada");
                return;
            }

            const transaction = window.bodyRunDB.transaction(["registrosCalorias"], "readonly");
            const store = transaction.objectStore("registrosCalorias");
            const request = store.get(registroId);

            request.onsuccess = () => {
                if (request.result) {
                    resolve(request.result);
                } else {
                    reject("Registro no encontrado");
                }
            };

            request.onerror = () => {
                reject("Error al obtener el registro");
            };
        });
    }
};

// Función para exportar todos los datos del usuario
const exportarDatosUsuario = (usuarioId) => {
    return new Promise((resolve, reject) => {
        if (!window.bodyRunDB) {
            reject("Base de datos no inicializada");
            return;
        }

        // Obtener todos los datos del usuario
        Promise.all([
            registrosIMCDB.obtenerPorUsuario(usuarioId),
            registrosCaloriasDB.obtenerPorUsuario(usuarioId)
        ])
        .then(([registrosIMC, registrosCalorias]) => {
            // Crear objeto con todos los datos
            const datosExportados = {
                fecha: new Date().toISOString(),
                registrosIMC: registrosIMC,
                registrosCalorias: registrosCalorias
            };

            // Convertir a JSON
            const jsonData = JSON.stringify(datosExportados);
            
            // Crear blob y descargar
            const blob = new Blob([jsonData], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            
            // Crear enlace de descarga
            const a = document.createElement('a');
            a.href = url;
            a.download = `bodyrun_datos_${new Date().toISOString().slice(0,10)}.json`;
            document.body.appendChild(a);
            a.click();
            
            // Limpiar
            setTimeout(() => {
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, 0);
            
            resolve(true);
        })
        .catch(error => {
            reject(`Error al exportar datos: ${error}`);
        });
    });
};

// Función para importar datos
const importarDatosUsuario = (archivo, usuarioId) => {
    return new Promise((resolve, reject) => {
        if (!window.bodyRunDB) {
            reject("Base de datos no inicializada");
            return;
        }

        const reader = new FileReader();
        
        reader.onload = (e) => {
            try {
                const datos = JSON.parse(e.target.result);
                
                // Verificar estructura de datos
                if (!datos.registrosIMC || !datos.registrosCalorias) {
                    reject("Formato de archivo inválido");
                    return;
                }
                
                // Contadores para seguimiento
                let contadorIMC = 0;
                let contadorCalorias = 0;
                
                // Importar registros IMC
                const promesasIMC = datos.registrosIMC.map(registro => {
                    // Asegurar que el registro pertenezca al usuario actual
                    registro.usuarioId = usuarioId;
                    return registrosIMCDB.guardar(registro)
                        .then(() => contadorIMC++)
                        .catch(err => console.error("Error al importar registro IMC:", err));
                });
                
                // Importar registros de calorías
                const promesasCalorias = datos.registrosCalorias.map(registro => {
                    // Asegurar que el registro pertenezca al usuario actual
                    registro.usuarioId = usuarioId;
                    return registrosCaloriasDB.guardar(registro)
                        .then(() => contadorCalorias++)
                        .catch(err => console.error("Error al importar registro de calorías:", err));
                });
                
                // Esperar a que todas las importaciones terminen
                Promise.all([...promesasIMC, ...promesasCalorias])
                    .then(() => {
                        resolve({
                            mensaje: "Importación completada",
                            registrosIMC: contadorIMC,
                            registrosCalorias: contadorCalorias
                        });
                    })
                    .catch(error => {
                        reject(`Error durante la importación: ${error}`);
                    });
                
            } catch (error) {
                reject(`Error al procesar el archivo: ${error}`);
            }
        };
        
        reader.onerror = () => {
            reject("Error al leer el archivo");
        };
        
        reader.readAsText(archivo);
    });
};

// Crear un objeto global DB para agrupar todas las funciones
window.DB = {
    usuarios: usuariosDB,
    imc: registrosIMCDB,
    calorias: registrosCaloriasDB,
    exportarDatos: exportarDatosUsuario,
    importarDatos: importarDatosUsuario,
    init: initDatabase
};

// Inicializar la base de datos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    console.log('Inicializando base de datos...');
    initDatabase();
});