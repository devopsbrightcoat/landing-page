# BrightCoat Painting & Remodeling, LLC — Landing Page

Landing page construida con **React 19 + TypeScript + Vite + Tailwind CSS v4**, lista para desplegar en **Vercel** vía GitHub.

Cliente: BrightCoat Painting & Remodeling, LLC (Austin, TX)
Contacto del cliente: David Lopez — Owner / Project Manager

## Estructura

```
src/
  content.ts          ← todo el texto/copy editable (empieza aquí)
  components/
    Navbar.tsx
    Hero.tsx
    Services.tsx
    About.tsx
    Testimonials.tsx  ← construido pero NO se renderiza aún (ver abajo)
    CTA.tsx
    Contact.tsx
    Footer.tsx
  App.tsx
  index.css           ← tema de colores (Tailwind @theme) — Navy + Gold
public/
  brightcoat-logo.png ← logo con fondo transparente (extraído del original)
  favicon.png         ← ícono cuadrado recortado del logo
```

Todo el contenido de la página vive en `src/content.ts` — para editarlo no hace
falta tocar los componentes.

Los colores de marca (`brand-*` = navy, `gold-*` = dorado) se definen en
`src/index.css` dentro del bloque `@theme`, tomados del logo del cliente.
Tipografía: **Montserrat** (encabezados) + **Inter** (texto), cargadas desde
Google Fonts en `index.html`.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:5173

⚠️ Si clonas/copias este proyecto desde otra máquina (o desde un `.zip`
descargado), siempre corre `npm install` de nuevo ahí — `node_modules`
contiene binarios nativos específicos del sistema operativo/arquitectura y
no es portable entre máquinas.

## Build de producción

```bash
npm run build
npm run preview   # para probar el build localmente
```

## Subir a GitHub

```bash
git remote add origin https://github.com/<tu-usuario>/<nombre-repo>.git
git branch -M main
git push -u origin main
```

## Desplegar en Vercel

1. Entra a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
2. Click en **Add New → Project**.
3. Selecciona el repositorio que acabas de subir.
4. Vercel detecta automáticamente el framework (Vite):
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click en **Deploy**.

Cada `git push` a `main` genera un nuevo deploy de producción automáticamente.

## Dominio propio (opcional)

En el proyecto dentro de Vercel: **Settings → Domains** → agrega el dominio
del cliente y sigue las instrucciones para apuntar el DNS.

## Activar el envío de correo del formulario de contacto (Formspree)

El formulario de "Get In Touch" ya está conectado por código a Formspree —
solo falta el endpoint real. Pasos:

1. Entra a [formspree.io](https://formspree.io) y crea una cuenta gratis
   (hasta 50 envíos/mes).
2. Crea un nuevo formulario y pon `brightcoatpainting@gmail.com` como
   correo de destino — Formspree manda un correo de verificación a esa
   bandeja, hay que confirmarlo ahí.
3. Copia el endpoint que te dan (algo como
   `https://formspree.io/f/xxxxxxxx`).
4. Pégalo en `src/content.ts`, reemplazando
   `formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID'` con el real.
5. Prueba el formulario en `npm run dev` o en el sitio ya desplegado — el
   mensaje debe llegar a brightcoatpainting@gmail.com.

Ya tiene honeypot anti-spam (`_gotcha`) y un asunto fijo (`_subject`)
incluidos en el formulario.

## Pendiente antes de entregar al cliente

- [ ] **Fotos de proyectos (Before & After)**: la sección "Recent Projects"
      (`src/components/Projects.tsx`) ya está construida y muestra un estado
      "coming soon" honesto mientras `projects.items` esté vacío en
      `content.ts`. Cuando el cliente mande fotos reales, agrégalas a
      `public/projects/` y llena `projects.items` con los pares before/after.
- [ ] **Fotos para "See Our Work in Action"** (`src/components/WorkGallery.tsx`,
      la franja con fotos corriendo de fondo justo debajo del Hero): mientras
      `gallery.images` esté vacío en `content.ts`, muestra tiles placeholder
      ("Photo coming soon"). Agrega las rutas de las fotos reales (bajo
      `public/gallery/`) en ese arreglo para reemplazarlos — no hace falta
      que sean fotos before/after, sirven fotos generales del trabajo/equipo.
- [ ] **Reviews de Google**: la sección "What Our Clients Say"
      (`src/components/Reviews.tsx`) también está lista con estado
      "coming soon". Falta: (1) el link real al perfil de Google Business de
      BrightCoat (`reviews.googleUrl` en `content.ts`, ahora es `'#'`), y
      (2) el texto real de las reviews que el cliente quiera destacar — NUNCA
      inventar reviews ni nombres de clientes.
- [ ] **Formulario de contacto**: el código ya envía vía Formspree — solo
      falta pegar el endpoint real (ver sección "Activar el envío de correo"
      más arriba).
- [ ] **Instagram**: pendiente de que el cliente lo confirme.
- [ ] **Alcance/secciones técnicas**: el cliente marcó "Technical
      Requirements" y parte del "Website Scope" como pendientes de discusión
      en su brief original.
