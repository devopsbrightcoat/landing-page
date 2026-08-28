# [PLACEHOLDER] Nombre de la Empresa — Landing Page

Landing page construida con **React 19 + TypeScript + Vite + Tailwind CSS v4**, lista para desplegar en **Vercel** vía GitHub.

## Estructura

```
src/
  content.ts          ← todo el texto/copy editable (empieza aquí)
  components/
    Navbar.tsx
    Hero.tsx
    Services.tsx
    About.tsx
    Testimonials.tsx
    CTA.tsx
    Contact.tsx
    Footer.tsx
  App.tsx
  index.css           ← tema de colores (Tailwind @theme)
```

Todo el contenido de la página (títulos, textos, servicios, testimonios, datos
de contacto) vive en `src/content.ts`. Para personalizar la landing con la
información real del cliente, edita ese archivo — no hace falta tocar los
componentes.

Los colores de marca (`brand-*`) se definen en `src/index.css` dentro del
bloque `@theme`. Cambia esos valores hex para ajustar la paleta a la
identidad del cliente.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Build de producción

```bash
npm run build
npm run preview   # para probar el build localmente
```

## Subir a GitHub

```bash
# Si el repo aún no existe en GitHub, créalo primero (vacío, sin README)
# desde github.com/new, luego:

git remote add origin https://github.com/<tu-usuario>/<nombre-repo>.git
git branch -M main
git push -u origin main
```

## Desplegar en Vercel

1. Entra a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
2. Click en **Add New → Project**.
3. Selecciona el repositorio que acabas de subir.
4. Vercel detecta automáticamente el framework (Vite) — no hace falta cambiar nada:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click en **Deploy**.

Cada `git push` a la rama `main` genera un nuevo deploy de producción
automáticamente. Los pushes a otras ramas o los Pull Requests generan Preview
Deployments con su propia URL.

## Dominio propio (opcional)

En el proyecto dentro de Vercel: **Settings → Domains** → agrega el dominio
del cliente y sigue las instrucciones para apuntar el DNS.

## Pendiente antes de entregar al cliente

- [ ] Reemplazar todos los `[PLACEHOLDER]` en `src/content.ts` e `index.html`
- [ ] Ajustar la paleta de colores en `src/index.css` a la marca del cliente
- [ ] Agregar logo real (actualmente no hay logo, solo el nombre en texto)
- [ ] Conectar el formulario de contacto a un servicio real (ver comentario
      `[PLACEHOLDER]` en `src/components/Contact.tsx` — opciones simples:
      [Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com),
      o un endpoint propio)
- [ ] Reemplazar el favicon genérico en `public/`
- [ ] Revisar copy y textos legales (Privacidad/Términos en el footer)
