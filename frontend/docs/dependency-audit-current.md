# Auditoría de dependencias frontend

## Versiones principales

| Dependencia         | Versión      | Tipo         | Comentario |
|--------------------|--------------|--------------|------------|
| Vue                | ^3.5.25      | dependency   | Compatible con shadcn-vue |
| Vite               | ^7.3.1       | devDependency| Compatible con shadcn-vue |
| Tailwind           | ^4.2.0 (@tailwindcss/vite), ^4.2.0 (@tailwindcss/postcss) | dependency/devDependency | Compatible con shadcn-vue |
| PostCSS            | ^4.2.0 (@tailwindcss/postcss) | devDependency | Compatible |
| Autoprefixer       | ^10.4.24     | devDependency| Compatible |
| Typescript         | ~5.9.3       | devDependency| Compatible |
| Vue Router         | ^5.0.3       | dependency   | Compatible con shadcn-vue |
| Pinia              | ^3.0.4       | dependency   | Compatible con shadcn-vue |
| ESLint             | No presente  | -            | Falta integración |
| Prettier           | No presente  | -            | Falta integración |
| UI Libraries       | No detectadas| -            | Falta integración |
| Icon Libraries     | No detectadas| -            | Falta integración |

## Dependencias críticas para shadcn-vue
- Vue 3.x
- Vite >=4.x
- Tailwind >=3.x
- Vue Router >=4.x
- Pinia >=2.x

Todas presentes y compatibles.

## Posibles conflictos de integración
- Falta ESLint y Prettier: puede dificultar la integración de convenciones de shadcn-vue.
- No se detectan librerías UI ni icon libraries: posible necesidad de instalar shadcn-vue/ui y shadcn-vue/icons.
- Revisar compatibilidad de plugins de Tailwind y PostCSS si se agregan componentes de shadcn-vue.
- Confirmar configuración de TypeScript y tsconfig para evitar errores de tipado con shadcn-vue.

---

**Auditoría generada automáticamente.**