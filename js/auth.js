// Archivo de autenticación para BodyRun
// Este archivo maneja la lógica de inicio de sesión y registro

document.addEventListener('DOMContentLoaded', () => {
    // Verificar si la base de datos está lista
    if (window.bodyRunDB) {
        initAuthForms();
    } else {
        // Esperar a que la base de datos esté lista
        document.addEventListener('db-ready', initAuthForms);
    }

    // Verificar si hay sesión activa
    actualizarInterfazUsuario();
});

// Inicializar formularios de autenticación
function initAuthForms() {
    // Formulario de inicio de sesión
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
            const errorElement = document.getElementById('loginError');
            
            try {
                const sesion = await DB.usuarios.login(username, password);
                errorElement.style.display = 'none';
                
                // Redirigir al usuario a la página principal
                window.location.href = 'index.html';
            } catch (error) {
                errorElement.textContent = error;
                errorElement.style.display = 'block';
            }
        });
    }
    
    // Formulario de registro
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const username = document.getElementById('registerUsername').value;
            const email = document.getElementById('registerEmail').value;
            const nombre = document.getElementById('registerNombre').value;
            const password = document.getElementById('registerPassword').value;
            const passwordConfirm = document.getElementById('registerPasswordConfirm').value;
            const errorElement = document.getElementById('registerError');
            
            // Validar que las contraseñas coincidan
            if (password !== passwordConfirm) {
                errorElement.textContent = 'Las contraseñas no coinciden';
                errorElement.style.display = 'block';
                return;
            }
            
            try {
                const userId = await DB.usuarios.registrar({
                    username,
                    email,
                    nombre,
                    password
                });
                
                errorElement.style.display = 'none';
                
                // Iniciar sesión automáticamente
                await DB.usuarios.login(username, password);
                
                // Redirigir al usuario a la página principal
                window.location.href = 'index.html';
            } catch (error) {
                errorElement.textContent = error;
                errorElement.style.display = 'block';
            }
        });
    }
    
    // Botón de cerrar sesión
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            DB.usuarios.logout();
            actualizarInterfazUsuario();
            // Redirigir a la página principal si estamos en una página protegida
            if (window.location.pathname.includes('perfil.html')) {
                window.location.href = 'index.html';
            }
        });
    }
}

// Actualizar la interfaz según el estado de la sesión
function actualizarInterfazUsuario() {
    const sesion = DB.usuarios.getSesion();
    
    // Elementos de la interfaz
    const loginItem = document.getElementById('loginItem');
// Remove this line since userProfileItem is already declared below
// Remove duplicate declaration since logoutButton is already declared below
    
    // Elementos de la interfaz que cambian según la sesión
    const loginMenuItem = document.querySelector('.dropdown-item[data-login="true"]');
    const userProfileItem = document.getElementById('userProfileItem');
    const logoutButton = document.getElementById('logoutButton');
    const userWelcome = document.getElementById('userWelcome');
    
    if (sesion) {
        // Usuario con sesión activa
        if (loginMenuItem) {
            loginMenuItem.style.display = 'none';
        }
        
        if (userProfileItem) {
            userProfileItem.style.display = 'block';
            userProfileItem.href = 'perfil.html';
        }
        
        if (logoutButton) {
            logoutButton.style.display = 'block';
        }
        
        if (userWelcome) {
            userWelcome.textContent = `¡Bienvenido, ${sesion.nombre || sesion.username}!`;
            userWelcome.style.display = 'block';
        }
        
        // Mostrar elementos que requieren sesión
        document.querySelectorAll('.requiere-sesion').forEach(elem => {
            elem.style.display = 'block';
        });
    } else {
        // Usuario sin sesión
        if (loginMenuItem) {
            loginMenuItem.style.display = 'block';
            loginMenuItem.href = 'login.html';
        }
        
        if (userProfileItem) {
            userProfileItem.style.display = 'none';
        }
        
        if (logoutButton) {
            logoutButton.style.display = 'none';
        }
        
        if (userWelcome) {
            userWelcome.style.display = 'none';
        }
        
        // Ocultar elementos que requieren sesión
        document.querySelectorAll('.requiere-sesion').forEach(elem => {
            elem.style.display = 'none';
        });
        
        // Redirigir si estamos en una página protegida
        if (window.location.pathname.includes('perfil.html')) {
            window.location.href = 'login.html';
        }
    }
}

// Función para guardar registros de IMC
function guardarRegistroIMC(peso, altura, imc, estado) {
    const sesion = DB.usuarios.getSesion();
    if (!sesion) {
        // Si no hay sesión, mostrar mensaje para iniciar sesión
        alert('Inicia sesión para guardar tu registro de IMC');
        return false;
    }
    
    return DB.imc.guardar({
        usuarioId: sesion.id,
        peso,
        altura,
        imc,
        estado,
        fecha: new Date().toISOString()
    });
}

// Función para guardar registros de calorías
function guardarRegistroCalorias(tipo, calorias, detalles) {
    const sesion = DB.usuarios.getSesion();
    if (!sesion) {
        // Si no hay sesión, mostrar mensaje para iniciar sesión
        alert('Inicia sesión para guardar tu registro de calorías');
        return false;
    }
    
    return DB.calorias.guardar({
        usuarioId: sesion.id,
        tipo, // 'superavit', 'deficit', 'mantenimiento'
        calorias,
        detalles,
        fecha: new Date().toISOString()
    });
}

// Función para guardar dietas
function guardarDieta(nombre, descripcion, comidas) {
    const sesion = DB.usuarios.getSesion();
    if (!sesion) {
        // Si no hay sesión, mostrar mensaje para iniciar sesión
        alert('Inicia sesión para guardar tu dieta');
        return false;
    }
    
    return DB.dietas.guardar({
        usuarioId: sesion.id,
        nombre,
        descripcion,
        comidas,
        fechaCreacion: new Date().toISOString()
    });
}