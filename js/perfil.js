// Archivo para manejar la funcionalidad de la página de perfil
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar la base de datos
    initDatabase();
    
    // Escuchar el evento de base de datos lista
    document.addEventListener('db-ready', function() {
        // Verificar si hay sesión activa
        const sesion = usuariosDB.getSesion();
        if (!sesion) {
            // Redirigir a la página de login si no hay sesión
            window.location.href = 'login.html';
            return;
        }
        
        // Cargar datos del perfil
        cargarDatosPerfil(sesion);
        
        // Cargar historial de registros
        cargarHistorialRegistros(sesion.id);
        
        // Configurar filtros
        configurarFiltros();
        
        // Configurar formularios
        configurarFormularios(sesion);
    });
});

// Función para cargar los datos del perfil
function cargarDatosPerfil(sesion) {
    // Actualizar avatar con la primera letra del nombre de usuario
    const avatarElement = document.getElementById('profileAvatar');
    if (avatarElement) {
        avatarElement.textContent = sesion.username.charAt(0).toUpperCase();
    }
    
    // Actualizar nombre y correo en el encabezado
    const nameElement = document.getElementById('profileName');
    const emailElement = document.getElementById('profileEmail');
    
    if (nameElement) {
        nameElement.textContent = sesion.nombre || sesion.username;
    }
    
    if (emailElement) {
        emailElement.textContent = sesion.email;
    }
    
    // Actualizar campos del formulario de perfil
    const usernameInput = document.getElementById('profileUsername');
    const emailInput = document.getElementById('profileEmailInput');
    const nombreInput = document.getElementById('profileNombre');
    
    if (usernameInput) {
        usernameInput.value = sesion.username;
    }
    
    if (emailInput) {
        emailInput.value = sesion.email;
    }
    
    if (nombreInput) {
        nombreInput.value = sesion.nombre || '';
    }
}

// Función para cargar el historial de registros
function cargarHistorialRegistros(usuarioId) {
    // Obtener el contenedor de registros
    const recordsContainer = document.getElementById('recordsContainer');
    const emptyState = document.getElementById('emptyState');
    
    if (!recordsContainer) return;
    
    // Limpiar contenedor
    recordsContainer.innerHTML = '';
    
    // Promesas para obtener todos los tipos de registros
    const promesas = [
        registrosIMCDB.obtenerPorUsuario(usuarioId),
        registrosCaloriasDB.obtenerPorUsuario(usuarioId)
    ];
    
    Promise.all(promesas)
        .then(([registrosIMC, registrosCalorias]) => {
            // Combinar todos los registros
            let todosRegistros = [
                ...registrosIMC.map(r => ({...r, tipo: 'imc'})),
                ...registrosCalorias
            ];
            
            // Ordenar por fecha (más reciente primero)
            todosRegistros.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
            
            if (todosRegistros.length === 0) {
                // Mostrar estado vacío
                if (emptyState) {
                    emptyState.style.display = 'block';
                }
                return;
            }
            
            // Ocultar estado vacío
            if (emptyState) {
                emptyState.style.display = 'none';
            }
            
            // Crear tarjetas para cada registro
            todosRegistros.forEach(registro => {
                const card = crearTarjetaRegistro(registro);
                recordsContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error al cargar registros:', error);
            recordsContainer.innerHTML = `
                <div class="alert alert-danger">
                    Error al cargar los registros: ${error}
                </div>
            `;
        });
}

// Función para crear una tarjeta de registro
function crearTarjetaRegistro(registro) {
    const card = document.createElement('div');
    card.className = 'card record-card';
    card.dataset.tipo = registro.tipo;
    
    // Formatear fecha
    const fecha = new Date(registro.fecha);
    const fechaFormateada = fecha.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    // Determinar título y contenido según el tipo de registro
    let titulo = '';
    let contenido = '';
    let icono = '';
    let colorClase = '';
    
    switch (registro.tipo) {
        case 'imc':
            titulo = 'Índice de Masa Corporal';
            contenido = `
                <p><strong>IMC:</strong> ${registro.imc.toFixed(2)}</p>
                <p><strong>Categoría:</strong> ${registro.categoria}</p>
                <p><strong>Peso:</strong> ${registro.peso} kg</p>
                <p><strong>Altura:</strong> ${registro.altura} m</p>
            `;
            icono = 'icon-chart-bar';
            colorClase = 'bg-info';
            break;
            
        case 'superavit':
            titulo = 'Superávit Calórico';
            contenido = `
                <p><strong>Gasto Energético Total:</strong> ${registro.tee} calorías</p>
                <p><strong>Calorías adicionales:</strong> ${registro.caloriasAdicionales} calorías</p>
                <p><strong>Total para superávit:</strong> ${registro.total} calorías</p>
            `;
            icono = 'icon-up-bold';
            colorClase = 'bg-success';
            break;
            
        case 'deficit':
            titulo = 'Déficit Calórico';
            contenido = `
                <p><strong>Gasto Energético Total:</strong> ${registro.tee} calorías</p>
                <p><strong>Calorías reducidas:</strong> ${registro.caloriasReducidas} calorías</p>
                <p><strong>Total para déficit:</strong> ${registro.total} calorías</p>
            `;
            icono = 'icon-down-fat';
            colorClase = 'bg-warning';
            break;
    }
    
    card.innerHTML = `
        <div class="card-header ${colorClase} text-white">
            <h5 class="card-title mb-0"><i class="${icono}"></i> ${titulo}</h5>
        </div>
        <div class="card-body">
            ${contenido}
        </div>
        <div class="card-footer text-muted">
            <small>Registrado el ${fechaFormateada}</small>
        </div>
    `;
    
    return card;
}

// Función para configurar los filtros
function configurarFiltros() {
    const filtroTipo = document.getElementById('recordTypeFilter');
    
    if (filtroTipo) {
        filtroTipo.addEventListener('change', function() {
            const tipoSeleccionado = this.value;
            const tarjetas = document.querySelectorAll('.record-card');
            
            tarjetas.forEach(tarjeta => {
                if (tipoSeleccionado === 'all' || tarjeta.dataset.tipo === tipoSeleccionado) {
                    tarjeta.style.display = 'block';
                } else {
                    tarjeta.style.display = 'none';
                }
            });
        });
    }
}

// Función para configurar los formularios
function configurarFormularios(sesion) {
    // Formulario de perfil
    const profileForm = document.getElementById('profileForm');
    
    if (profileForm) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('profileNombre').value;
            const password = document.getElementById('profilePassword').value;
            const passwordConfirm = document.getElementById('profilePasswordConfirm').value;
            
            // Validar contraseñas si se están cambiando
            if (password && password !== passwordConfirm) {
                mostrarMensaje('profileUpdateMessage', 'Las contraseñas no coinciden', 'danger');
                return;
            }
            
            // Datos a actualizar
            const datosActualizados = {
                nombre: nombre
            };
            
            // Añadir contraseña si se está cambiando
            if (password) {
                datosActualizados.password = password;
            }
            
            // Actualizar perfil
            usuariosDB.actualizarPerfil(sesion.id, datosActualizados)
                .then(() => {
                    mostrarMensaje('profileUpdateMessage', 'Perfil actualizado correctamente', 'success');
                    
                    // Actualizar nombre en el encabezado
                    const nameElement = document.getElementById('profileName');
                    if (nameElement) {
                        nameElement.textContent = nombre || sesion.username;
                    }
                })
                .catch(error => {
                    mostrarMensaje('profileUpdateMessage', `Error al actualizar perfil: ${error}`, 'danger');
                });
        });
    }
    
    // Formulario de preferencias
    const preferencesForm = document.getElementById('preferencesForm');
    
    if (preferencesForm) {
        preferencesForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const unidades = document.getElementById('unitPreference').value;
            const notificaciones = document.getElementById('emailNotifications').checked;
            
            // Guardar preferencias en localStorage
            const preferencias = {
                unidades: unidades,
                notificaciones: notificaciones
            };
            
            localStorage.setItem('bodyRunPreferencias', JSON.stringify(preferencias));
            mostrarMensaje('preferencesUpdateMessage', 'Preferencias guardadas correctamente', 'success');
        });
        
        // Cargar preferencias guardadas
        const preferenciasGuardadas = localStorage.getItem('bodyRunPreferencias');
        
        if (preferenciasGuardadas) {
            const preferencias = JSON.parse(preferenciasGuardadas);
            
            document.getElementById('unitPreference').value = preferencias.unidades || 'metric';
            document.getElementById('emailNotifications').checked = preferencias.notificaciones || false;
        }
    }
}

// Función para mostrar mensajes
function mostrarMensaje(elementId, mensaje, tipo) {
    const elemento = document.getElementById(elementId);
    
    if (elemento) {
        elemento.textContent = mensaje;
        elemento.className = `alert alert-${tipo}`;
        elemento.style.display = 'block';
        
        // Ocultar después de 5 segundos
        setTimeout(() => {
            elemento.style.display = 'none';
        }, 5000);
    }
}