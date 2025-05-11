# Manual Técnico - BodyRun

## Índice
1. [Introducción](#introducción)
2. [Arquitectura del Sistema](#arquitectura-del-sistema)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)
4. [Estructura de Archivos](#estructura-de-archivos)
5. [Componentes Principales](#componentes-principales)
6. [Funcionalidades Implementadas](#funcionalidades-implementadas)
7. [Guía de Mantenimiento](#guía-de-mantenimiento)

## Introducción

Este manual técnico documenta la arquitectura, componentes y funcionamiento interno de la aplicación web BodyRun, una plataforma dedicada a la nutrición y bienestar que ofrece calculadoras de índice de masa corporal (IMC), superávit calórico, déficit calórico y otras herramientas relacionadas con la alimentación saludable.

## Arquitectura del Sistema

La aplicación sigue una arquitectura cliente-servidor simplificada:

- **Frontend**: Interfaz de usuario desarrollada con HTML5, CSS3 y JavaScript.
- **Backend**: Actualmente implementado con JavaScript del lado del cliente, con planes futuros para migrar a una API RESTful.
- **Base de Datos**: Actualmente utiliza almacenamiento local (localStorage) y objetos JavaScript para la información de alimentos.

## Tecnologías Utilizadas

### Frontend
- HTML5 para la estructura de la página
- CSS3 para estilos y animaciones
- JavaScript para la lógica de la aplicación
- Bootstrap 4.5.2 como framework CSS
- jQuery 3.6.0 para manipulación del DOM
- Fontello para iconos personalizados

### Herramientas de Desarrollo
- Visual Studio Code como IDE
- Git para control de versiones
- GitHub para alojamiento del repositorio

## Estructura de Archivos

```
/
├── css/                  # Archivos de estilos
│   ├── fontello.css      # Estilos para iconos
│   ├── preloader.css     # Estilos para animación de carga
│   ├── main.css          # Estilos principales
│   └── login-register.css # Estilos para autenticación
├── font/                 # Fuentes e iconos
├── img/                  # Imágenes del sitio
├── js/                   # Scripts JavaScript
│   ├── bootstrap.bundle.min.js # Componentes Bootstrap
│   ├── preloader.js      # Animación de carga
│   ├── food-database.js  # Base de datos de alimentos
│   └── main.js           # Lógica principal
└── index.html           # Página principal
```

## Componentes Principales

### 1. Sistema de Navegación

Implementado con Bootstrap Navbar, permite acceder a las diferentes secciones de la aplicación. Incluye menús desplegables para servicios y opciones de usuario.

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-main sticky-top" id="menu">
    <!-- Estructura de navegación -->
</nav>
```

### 2. Carrusel de Imágenes

Implementado con Bootstrap Carousel, muestra imágenes promocionales con superposición de texto.

```html
<div id="mainCarousel" class="carousel slide" data-ride="carousel">
    <!-- Estructura del carrusel -->
</div>
```

### 3. Tarjetas de Servicios

Muestran los diferentes servicios ofrecidos (IMC, superávit calórico, déficit calórico) con imágenes y botones para acceder a cada calculadora.

```html
<div class="card">
    <!-- Estructura de tarjeta de servicio -->
</div>
```

### 4. Modales de Calculadoras

Ventanas emergentes que contienen los formularios para cada calculadora. Implementadas con CSS y JavaScript personalizado.

```html
<div id="bmiModal" class="modal">
    <!-- Estructura del modal de IMC -->
</div>
```

### 5. Animación de Precarga

Implementada con CSS y JavaScript, muestra una animación mientras se carga la página.

```html
<div id="loader">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
</div>
```

## Funcionalidades Implementadas

### 1. Calculadora de IMC

Permite al usuario calcular su Índice de Masa Corporal ingresando peso y altura.

**Fórmula implementada**: IMC = peso (kg) / (altura (m))²

**Archivo**: `main.js`

### 2. Calculadora de Superávit Calórico

Calcula el gasto energético total (TEE) del usuario basado en sexo, peso, altura, edad y nivel de actividad, y luego añade calorías adicionales para ganar peso.

**Fórmula base**: 
- Hombres: TMB = 10 × peso (kg) + 6.25 × altura (cm) - 5 × edad (años) + 5
- Mujeres: TMB = 10 × peso (kg) + 6.25 × altura (cm) - 5 × edad (años) - 161

**Archivo**: `main.js`

### 3. Calculadora de Déficit Calórico

Similar a la calculadora de superávit, pero resta calorías del gasto energético total para promover la pérdida de peso.

**Archivo**: `main.js`

## Guía de Mantenimiento

### Añadir Nuevas Funcionalidades

1. Para añadir una nueva calculadora:
   - Crear una nueva tarjeta en la sección de servicios
   - Implementar el modal correspondiente
   - Añadir la lógica JavaScript en `main.js`

2. Para modificar la base de datos de alimentos:
   - Editar el archivo `food-database.js`
   - Seguir el formato de objetos existente

### Actualización de Dependencias

- Bootstrap: Actualizar los archivos CSS y JS en sus respectivas carpetas
- jQuery: Actualizar el archivo en la carpeta `js`
- Fontello: Generar un nuevo paquete y reemplazar los archivos en `css` y `font`

### Optimización de Rendimiento

- Minificar archivos CSS y JavaScript para producción
- Optimizar imágenes para reducir tiempos de carga
- Implementar carga diferida (lazy loading) para imágenes

---

Este manual técnico está sujeto a actualizaciones conforme el proyecto evolucione. Para cualquier consulta técnica, contactar al equipo de desarrollo.