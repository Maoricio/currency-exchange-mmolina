# **App Cambio - Calculadora de Monedas**

Esta aplicación permite realizar conversiones entre diferentes monedas utilizando la API de [Vatcomply](https://www.vatcomply.com/documentation).

**Diseño**: [Figma Design](https://www.figma.com/design/B7sfg7erzZUozriMWXD49H/Untitled?node-id=0-1&p=f&t=6YUvHkhH44PGZnmR-0)

## **Instalación**

1. Clonar el repositorio.
2. Dirigirse al directorio donde se clono
3. Ejecutar el comando

```bash
npm install
```

4. Luego, para iniciar la aplicación en desarrollo, ejecuta:

```bash
npm run dev
```

La app se ejecutara en http://localhost:3000/

## Librerías Utilizadas

1. [Chakra UI (v2)](https://v2.chakra-ui.com/getting-started)
   Chakra UI es una biblioteca de componentes para React que permite crear interfaces de usuario modernas, accesibles y personalizables. Proporciona componentes preconstruidos como botones, modales, formularios y tablas, todos siguiendo las mejores prácticas de accesibilidad.

Razón de uso: Elegí Chakra UI por su rapidez en el desarrollo de componentes responsivos. Además, ya tenía experiencia trabajando con esta biblioteca, lo que permitió una integración rápida y eficiente en el proyecto.

2. [TanStack react-query](https://tanstack.com/query/latest/docs/framework/react/overview)
   TanStack React Query es una biblioteca para la gestión de datos asincrónicos en aplicaciones React. Facilita la obtención, almacenamiento en caché, sincronización y actualización de datos remotos sin tener que manejar manualmente estados de carga, error y éxito.

Razón de uso: Opté por TanStack React Query debido a su sistema de caché que optimiza las peticiones al almacenar los datos obtenidos de solicitudes anteriores. Configuré staleTime a 5 horas (en milisegundos), lo que mejora el rendimiento al evitar peticiones innecesarias durante este periodo, reduciendo la carga en el servidor.
