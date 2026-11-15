<div align="center">

# ScoutGoat Web

**Sitio web presentacional del toolkit de ciberseguridad ScoutGoat**

![Angular](https://img.shields.io/badge/Angular-22-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![SSR](https://img.shields.io/badge/SSR-Express%205-000000?logo=express&logoColor=white)
![Estado](https://img.shields.io/badge/estado-en%20desarrollo-yellow)

</div>

---

ScoutGoat es una aplicación de escritorio de ciberseguridad que centraliza herramientas de escaneo, análisis de red y auditoría de vulnerabilidades. Este repositorio contiene su **sitio web de presentación**: una SPA hecha con Angular que muestra información de la empresa, permite explorar las versiones descargables del programa y ofrece acceso para usuarios con planes de pago.

> El sitio actualmente es presentacional. Las funciones que incluye (navegación, filtro de descargas, login, FAQ) son de interfaz y no dependen de un backend.

##  Tabla de contenidos

- [Características](#-características)
- [Stack tecnológico](#-stack-tecnológico)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Instalación y uso](#-instalación-y-uso)
- [Scripts disponibles](#-scripts-disponibles)
- [Notas importantes](#-notas-importantes)
- [Contribución](#-contribución)
- [Licencia](#-licencia)

##  Características

| Sección | Ruta | Descripción |
| --- | --- | --- |
| **Home** | `/home` | Presentación del toolkit: herramientas integradas, rendimiento optimizado y enfoque en la privacidad. |
| **About us** | `/about` | Información de la empresa, misión y visión. |
| **Download** | `/download` | Listado de versiones del programa por sistema operativo, arquitectura, fecha y tipo (`stable`, `deprecated`, `nightly`), con **buscador en tiempo real**. |
| **Sign in** | `/login` | Formulario de acceso pensado para usuarios con planes de pago. |
| **FAQ** | `/faq` | Preguntas frecuentes sobre planes (Free, Premium, Enterprise), requisitos y protección de datos. |

Además:

- Navegación entre secciones con **Angular Router** y redirección a `/home` para rutas desconocidas.
- Filtro de descargas reactivo con `FormControl` y `debounceTime(300)`, que busca por versión, sistema operativo, arquitectura, tipo o fecha.
- Componentes compartidos de **header** y **footer**.
- Renderizado en servidor (**SSR**) con hidratación del cliente.

## 🛠 Stack tecnológico

| Categoría | Tecnología |
| --- | --- |
| Framework | [Angular](https://angular.dev/) 22 (componentes standalone) |
| Lenguaje | TypeScript 6, HTML5, CSS3 |
| Programación reactiva | RxJS 7.8 |
| Servidor SSR | Express 5 + `@angular/ssr` |
| Pruebas | Vitest + jsdom |
| Formato de código | Prettier + EditorConfig |
| Gestor de paquetes | npm |

## Estructura del proyecto

```text
Scout-Goat-web/
├── public/                     # Recursos estáticos (logo, imágenes, favicon)
├── src/
│   ├── app/
│   │   ├── features/           # Páginas de la aplicación
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── download/       # Componente, modelo de datos y datos de versiones
│   │   │   ├── faq/
│   │   │   └── login/
│   │   ├── shared/
│   │   │   └── components/     # Header y footer reutilizables
│   │   ├── app.routes.ts       # Definición de rutas
│   │   ├── app.config.ts       # Configuración de la aplicación
│   │   └── app.ts / app.html   # Componente raíz
│   ├── index.html
│   ├── main.ts                 # Arranque en el navegador
│   ├── main.server.ts          # Arranque en el servidor
│   ├── server.ts               # Servidor Express para SSR
│   └── styles.css              # Estilos globales
├── angular.json
├── package.json
└── tsconfig*.json
```

## Instalación y uso

### Requisitos previos

- [Node.js](https://nodejs.org/) (versión LTS compatible con Angular 22)
- npm

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/goatythegoat/Scout-Goat-web.git
cd Scout-Goat-web

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm start
```

Abre `http://localhost:4200/` en tu navegador. La aplicación se recargará automáticamente al modificar los archivos.

### Compilar para producción

```bash
npm run build
npm run serve:ssr:mi-app
```

El servidor SSR escucha por defecto en `http://localhost:4000` (configurable con la variable de entorno `PORT`).

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm start` | Servidor de desarrollo (`ng serve`). |
| `npm run build` | Compilación de producción en `dist/`. |
| `npm run watch` | Compilación en modo observación (desarrollo). |
| `npm test` | Ejecuta las pruebas unitarias con Vitest. |
| `npm run serve:ssr:mi-app` | Inicia el servidor SSR a partir del build. |

También esta actualmente disponible mediante una pagina publicada mediante vercel
Link:

## Notas importantes

- **Login de demostración:** la validación de credenciales se hace en el cliente con valores fijos y **no es un sistema de autenticación real**. No debe usarse en producción; para ello haría falta un backend con autenticación segura.
- **Descargas de ejemplo:** el listado de versiones proviene de datos locales (`download.data.ts`) y los botones de descarga aún no están enlazados a instaladores reales.
- **Imágenes de marcador:** la captura de la interfaz en Home es un placeholder.

## Licencia

Este proyecto **aún no tiene una licencia definida**.

---

<div align="center">

Hecho por [goatythegoat](https://github.com/goatythegoat) e [Dudu0702]

</div>
