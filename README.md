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

## Pendiente antes de entregar al cliente

- [ ] **Testimonios**: `Testimonials.tsx` ya está construido pero no se
      renderiza en `App.tsx` — no hay reseñas reales todavía. Cuando el
      cliente las envíe, agrégalas a `testimonials.items` en `content.ts`
      y vuelve a importar/renderizar `<Testimonials />` en `App.tsx`.
- [ ] **Fotos reales**: el cliente mencionó que enviará fotos de proyectos
      (antes/después, trabajo en progreso, equipo). Falta una sección de
      galería/portafolio — actualmente el Hero no tiene imagen de fondo.
- [ ] **Instagram**: pendiente de que el cliente lo confirme — no hay
      enlace a redes sociales todavía.
- [ ] **Formulario de contacto**: actualmente solo simula el envío (no está
      conectado a nada real). Ver comentario `[PENDING]` en
      `src/components/Contact.tsx` — opciones simples: Formspree, EmailJS,
      o un endpoint propio que envíe a brightcoatpainting@gmail.com.
- [ ] **Headline alternativo** para el segmento multifamiliar/property
      management — el cliente dejó este campo pendiente en su brief.
- [ ] **Alcance/secciones técnicas** — el cliente marcó las secciones 5 y 6
      de su brief ("Technical Requirements" y "Website Scope & Sections")
      como pendientes de discusión.
