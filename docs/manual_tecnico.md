# Manual Técnico - BodyRun

## Índice
1. [Introducción](#introducción)
2. [Arquitectura del Sistema](#arquitectura-del-sistema)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Componentes Principales](#componentes-principales)
6. [Funcionalidades Implementadas](#funcionalidades-implementadas)
7. [Algoritmos y Cálculos](#algoritmos-y-cálculos)
8. [Guía de Mantenimiento](#guía-de-mantenimiento)
9. [Requisitos del Sistema](#requisitos-del-sistema)
10. [Consideraciones de Seguridad](#consideraciones-de-seguridad)

## Introducción

Este manual técnico documenta la implementación y estructura del proyecto BodyRun, una aplicación web dedicada al bienestar y la nutrición. El documento está dirigido a desarrolladores y personal técnico que necesiten mantener, modificar o ampliar la aplicación.

## Arquitectura del Sistema

BodyRun implementa una arquitectura cliente-servidor simplificada, con todo el procesamiento realizado en el lado del cliente mediante JavaScript. La aplicación sigue un patrón de diseño modular para facilitar el mantenimiento y la escalabilidad.

### Diagrama de Arquitectura

```
Usuario <-> Navegador Web <-> HTML/CSS/JS <-> Lógica de Cálculo <-> Base de Datos de Alimentos (JS)
```

## Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica para el contenido
- **CSS3**: Estilos y diseño responsivo
- **Bootstrap 4.5.2**: Framework CSS para componentes de interfaz
- **JavaScript**: Lógica de cliente y manipulación del DOM
- **jQuery 3.6.0**: Biblioteca JavaScript para simplificar operaciones DOM

### Recursos
- **Fontello**: Biblioteca de iconos personalizados
- **Imágenes**: Formato JPG, PNG y WebP optimizados

## Estructura del Proyecto

```
/
├── css/                  # Archivos de estilo
│   ├── bootstrap*.css    # Archivos de Bootstrap
│   ├── fontello*.css     # Estilos de iconos
│   ├── main.css          # Estilos principales
│   ├── preloader.css     # Estilos del precargador
│   └── login-register.css # Estilos para autenticación
├── font/                 # Archivos de fuentes
│   └── fontello.*        # Fuentes de iconos
├── img/                  # Recursos de imágenes
├── js/                   # Scripts JavaScript
│   ├── bootstrap*.js      # Scripts de Bootstrap
│   ├── food-database.js   # Base de datos de alimentos
│   ├── main.js            # Lógica principal
│   └── preloader.js       # Funcionalidad de precarga
└── index.html            # Página principal
```

## Componentes Principales

### Navegación
Implementada como una barra de navegación Bootstrap con menús desplegables para servicios y opciones. Incluye enlaces a redes sociales y es completamente responsiva.

### Carrusel
Utiliza el componente Carousel de Bootstrap para mostrar imágenes promocionales con superposición de texto y controles de navegación personalizados.

### Tarjetas de Servicios
Implementadas como componentes Card de Bootstrap con encabezados, imágenes y botones de acción que activan modales específicos.

### Modales
Ventanas emergentes personalizadas para cada calculadora (IMC, Superávit, Déficit) con formularios interactivos y visualización de resultados.

### Footer
Pie de página estructurado con información de contacto, enlaces rápidos y derechos de autor.

## Funcionalidades Implementadas

### Precargador
Implementado en `preloader.js`, muestra una animación durante la carga inicial de la página y se oculta cuando el contenido está listo.

### Calculadora de IMC
Permite al usuario ingresar peso y altura para calcular su Índice de Masa Corporal y mostrar la categoría correspondiente.

### Calculadora de Superávit Calórico
Calcula el gasto energético total (TEE) basado en datos del usuario y permite añadir calorías adicionales para ganar peso.

### Calculadora de Déficit Calórico
Similar a la calculadora de superávit, pero orientada a la reducción de calorías para pérdida de peso.

## Algoritmos y Cálculos

### Cálculo del IMC
```javascript
IMC = peso / (altura * altura)
```
Donde peso está en kilogramos y altura en metros.

### Cálculo del Gasto Energético Basal (BMR)
Utiliza la fórmula de Mifflin-St Jeor:

**Para hombres:**
```javascript
BMR = 10 * peso + 6.25 * altura - 5 * edad + 5
```

**Para mujeres:**
```javascript
BMR = 10 * peso + 6.25 * altura - 5 * edad - 161
```

### Cálculo del Gasto Energético Total (TEE)
Multiplica el BMR por un factor de actividad:

```javascript
TEE = BMR * factorActividad
```

Donde factorActividad varía según el nivel de actividad física seleccionado.

## Guía de Mantenimiento

### Modificación de Estilos
Los estilos principales se encuentran en `css/main.css`. Para modificaciones específicas de componentes, revisar los archivos CSS correspondientes.

### Actualización de Contenido
Las imágenes del carrusel y tarjetas se pueden actualizar modificando las rutas en `index.html`.

### Modificación de Cálculos
Los algoritmos de cálculo se encuentran en `js/main.js`. Cualquier ajuste a las fórmulas debe realizarse en este archivo.

### Adición de Nuevas Funcionalidades
1. Crear los elementos HTML necesarios en `index.html`
2. Implementar la lógica en `js/main.js` o crear un nuevo archivo JS específico
3. Añadir los estilos correspondientes en `css/main.css` o crear un nuevo archivo CSS

## Requisitos del Sistema

### Servidor
- Servidor web básico (Apache, Nginx, etc.)
- No requiere procesamiento del lado del servidor

### Cliente
- Navegadores modernos con soporte para ES6
- Conexión a Internet para cargar recursos externos (Bootstrap CDN)

## Consideraciones de Seguridad

- La aplicación no almacena datos de usuario en servidores externos
- Todo el procesamiento se realiza localmente en el navegador del usuario
- No se implementan cookies de seguimiento
- Los cálculos son aproximaciones y se debe advertir al usuario que consulte a profesionales de la salud para decisiones importantes

Este manual técnico está sujeto a actualizaciones conforme el proyecto evolucione. Para cualquier consulta técnica, contactar al equipo de desarrollo.