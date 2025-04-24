# Reto BProSys

Esta es una aplicación web desarrollada como parte del reto **BProSys**. La aplicación permite explorar productos financieros, ver detalles de cada producto y navegar a través de un catálogo interactivo.

Para ver el sitio en el entorno productivo puede acceder en el navegador a [https://reto-bprosy s-ocds.vercel.app/](https://reto-bprosys-ocds.vercel.app/)

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/Andreseag/reto-bprosys.git
   cd reto-bprosys
   ```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Abre la aplicación en tu navegador en [http://localhost:3000](vscode-file://vscode-app/c:/Users/castr/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html).

## Características

- **Catálogo de productos financieros**: Explora una lista de productos financieros como cuentas, tarjetas, fondos y seguros.
- **Página de detalles**: Visualiza información detallada de cada producto, incluyendo tasas de interés, nivel de riesgo y beneficios.
- **Diseño responsivo**: La aplicación está optimizada para dispositivos móviles, tabletas y escritorios.
- **Animaciones**: Se utilizan animaciones suaves para mejorar la experiencia del usuario.
- **Filtros y navegación**: Navega fácilmente entre productos y categorías.

## Tecnologías utilizadas

### Frameworks y Librerías

- **[Next.js](https://nextjs.org/)**: Framework de React para aplicaciones web modernas.
- **[React](https://reactjs.org/)**: Biblioteca para construir interfaces de usuario.
- **[Framer Motion](https://www.framer.com/motion/)**: Librería para animaciones en React.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de utilidades CSS para un diseño rápido y responsivo.
- **[styled-components](https://styled-components.com/)**: Librería para estilos en componentes de React.

### Herramientas adicionales

- **TypeScript**: Lenguaje de programación tipado para mejorar la calidad del código.
- **React Icons**: Iconos listos para usar en React.
- **ESLint y Prettier**: Herramientas para mantener un código limpio y consistente.

## Descripción de Carpetas y Archivos

### `app/`

- Contiene las páginas principales de la aplicación.
- Usa el sistema de enrutamiento de Next.js para definir las rutas.
- Incluye el layout principal (`layout.tsx`) y las páginas dinámicas para los productos (`products/[productId]/page.tsx`).

### `components/`

- Contiene los componentes reutilizables de la aplicación, organizados por funcionalidad.
- Cada componente tiene su archivo de estilos correspondiente (`.styles.ts`).

### `data/`

- Contiene datos estáticos, como la lista de productos financieros (`products.data.ts`).

### `styles/`

- Contiene los estilos globales de la aplicación (`globals.css`).

### `types/`

- Define los tipos TypeScript utilizados en la aplicación para garantizar un código tipado y seguro.

### `utils/`

- Contiene funciones auxiliares reutilizables que pueden ser utilizadas en diferentes partes de la aplicación.
