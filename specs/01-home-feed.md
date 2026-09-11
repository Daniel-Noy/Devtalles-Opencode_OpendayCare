# SPEC 01 — Implementación de Plantilla del Feed en Inicio (Home)

> **Status:** Implemented
> **Depends on:** None
> **Date:** 2026-09-11
> **Objective:** Implementar la interfaz estática del feed de educador como página principal (/) a partir de `references/pantallas/feed.dc.html`, replicando exactamente su diseño, tipografía y estilo visual.

---

## Scope

**In:**

- Configurar las fuentes tipográficas `Fredoka` y `Nunito` usando `next/font/google` en [app/layout.tsx](file:///app/layout.tsx).
- Configurar en [app/globals.css](file:///app/globals.css) los colores de fondo base (`#F6ECDF`), color de texto (`#3F362E`), estilos de scrollbar y utilidades de fuente.
- Definir interfaces de TypeScript en [app/types/feed.ts](file:///app/types/feed.ts) para modelar educador, sala y publicaciones.
- Crear datos de prueba representativos en [app/data/feed.mock.ts](file:///app/data/feed.mock.ts) con el contenido exacto de `feed.dc.html`.
- Crear componentes modulares y limpios en `app/components/feed/`:
  - `Sidebar`: Barra lateral fija con logo, sala, botón "Nueva publicación", navegación y perfil de la educadora con botón de salida.
  - `FeedHeader`: Cabecera del feed con badge de sala, saludo a la educadora y conteo de niños/fecha.
  - `SharePromptCard`: Botón/tarjeta para invitar a compartir un momento con avatar e ícono de cámara.
  - `PostBadge`: Indicador de categoría según tipo de publicación (`milestone`, `activity`, `announcement`) mostrando las etiquetas visuales correspondientes.
  - `PostCard`: Tarjeta de publicación con avatar del autor/niño, destinatario, contenido textual, soporte de imagen/placeholder, contadores de reacciones y enlace a editar.
- Actualizar [app/page.tsx](file:///app/page.tsx) para componer la barra lateral y el feed centralizado con scroll independiente.
- Todos los enlaces y botones de navegación apuntan a `href="#"` para mantener la fidelidad visual sin romper navegación.

**Out of scope (for future specs):**

- Sistema de autenticación o control de sesiones.
- Conexión a base de datos o mutaciones vía Server Actions / API routes.
- Funcionalidad interactiva en botones (crear post, dar me gusta, agregar comentarios o editar).
- Implementación de rutas secundarias vinculadas (`/ninos`, `/avisos`, `/mi-cuenta`, `/crear-publicacion`, `/detalle-publicacion`, `/foto`).
- Carga real o almacenamiento de archivos e imágenes en CDN/S3.

---

## Data model

Modelos en [app/types/feed.ts](file:///app/types/feed.ts):

```typescript
export type PostCategory = "milestone" | "activity" | "announcement";

export interface EducatorProfile {
  name: string;
  initial: string;
  role: string;
  roomName: string;
}

export interface RoomInfo {
  centerName: string;
  name: string;
  dateLabel: string;
  childrenCount: number;
}

export interface PostAttachment {
  type: "photo";
  label: string;
  url?: string;
}

export interface FeedPost {
  id: string;
  category: PostCategory;
  authorOrChildName: string;
  avatarInitial: string;
  avatarBgColor: string;
  avatarTextColor: string;
  timeAgo: string;
  publishedBy: string;
  audienceLabel: string;
  content: string;
  attachment?: PostAttachment;
  likesCount: number;
  commentsCount: number;
}
```

---

## Implementation plan

1. **Tipografía y estilos globales**:
   - Cargar `Fredoka` y `Nunito` con `next/font/google` en [app/layout.tsx](file:///app/layout.tsx).
   - Ajustar [app/globals.css](file:///app/globals.css) con el color de fondo `#F6ECDF`, texto `#3F362E`, scrollbar personalizado y mapeo de variables tipográficas.
2. **Modelado y datos mock**:
   - Crear [app/types/feed.ts](file:///app/types/feed.ts) con las interfaces `FeedPost`, `EducatorProfile`, `RoomInfo`, y `PostCategory`.
   - Crear [app/data/feed.mock.ts](file:///app/data/feed.mock.ts) con los 3 posts de ejemplo (logro de Mateo, témperas de Mateo, anuncio general de excursión al parque) y el perfil de Caro Giménez.
3. **Componentes visuales del feed**:
   - Crear `app/components/feed/post-badge.tsx` con estilos diferenciados por categoría (verde para `milestone`, celeste para `activity`, azul para `announcement`).
   - Crear `app/components/feed/post-card.tsx` para renderizar cada publicación con avatar, badges, contenido, adjuntos y botones inferiores.
   - Crear `app/components/feed/share-prompt-card.tsx` para el bloque "Compartí un momento…".
   - Crear `app/components/feed/feed-header.tsx` para el saludo y metadatos de la sala.
   - Crear `app/components/feed/sidebar.tsx` con navegación lateral sticky, logo, accesos y perfil inferior.
4. **Composición de la página principal**:
   - Reemplazar [app/page.tsx](file:///app/page.tsx) importando los componentes y conectando la lista de posts desde `app/data/feed.mock.ts`.
5. **Verificación visual y calidad**:
   - Ejecutar `npm run build` y `npm run lint` para confirmar cero errores de compilación y tipado.
   - Contrastar contra `references/pantallas/feed.dc.html` verificando colores, bordes, sombras, espaciados y tipografías.

---

## Acceptance criteria

- [ ] Las fuentes `Fredoka` y `Nunito` cargan correctamente y se aplican a los títulos y textos según la plantilla.
- [ ] La barra lateral permanece fija a la izquierda (`sticky`) con altura `100vh`, ancho de `248px` y muestra el logo, botón de nueva publicación, menú y perfil de educadora.
- [ ] El contenedor principal tiene scroll vertical independiente y ancho máximo de `760px` centrado.
- [ ] Se renderizan los tres posts mock exactamente como en la plantilla:
  - [ ] Post 1: Categoría `milestone` ("LOGRO", Mateo, orinal, badge verde, 3 likes, 1 comentario).
  - [ ] Post 2: Categoría `activity` ("ACTIVIDAD", Mateo, témperas, badge celeste, caja de foto discontinua, 5 likes, 2 comentarios).
  - [ ] Post 3: Categoría `announcement` ("ANUNCIO", Anuncio general, badge azul, ícono de megáfono, 8 likes, 0 comentarios).
- [ ] La paleta cromática coincide con los valores hexadecimales de la referencia (`#F6ECDF` de fondo, `#FFFDF9` para tarjetas, etc.).
- [ ] `npm run lint` y `npm run build` terminan sin advertencias ni errores.

---

## Decisions

- **Yes:** Uso de `next/font/google` para `Nunito` y `Fredoka`. Optimiza la carga sin parpadeos (FOUT) y sin requerir CDNs externos directos en tiempo de ejecución.
- **Yes:** Separación de datos mock en [app/data/feed.mock.ts](file:///app/data/feed.mock.ts). Mantiene los componentes desacoplados y listos para conectar un fetch/query en el futuro.
- **Yes:** Modularización en componentes pequeños (`Sidebar`, `PostCard`, `FeedHeader`, `SharePromptCard`). Favorece Single Responsibility Principle (SRP) y mantenibilidad.
- **Yes:** Enlaces con `href="#"`. Evita páginas 404 o errores de navegación mientras no existan las demás pantallas.
- **No:** Creación de rutas de prueba (`/ninos`, `/crear-publicacion`, etc.). Quedan diferidas a sus especificaciones dedicadas para no mezclar alcances.

---

## Identified risks

| Riesgo | Mitigación |
| :--- | :--- |
| Discrepancias en Tailwind v4 con estilos en línea de la plantilla HTML original | Utilizar utilidades Tailwind v4 y clases arbitrarias o variables temáticas para los colores pastel específicos (`#F6ECDF`, `#FFFDF9`, `#ECE0D0`). |
| Conflictos con los estilos oscuros por defecto del template inicial de Next.js | Limpiar las variables oscuras en [app/globals.css](file:///app/globals.css) para que la interfaz mantenga su tono cálido constante. |

---

## What is **not** in this spec

- Lógica de autenticación, login o logout funcional.
- Persistencia de datos o base de datos.
- Creación, edición o eliminación de publicaciones.
- Reacciones y comentarios interactivos.
- Pantallas secundarias (`crear-publicacion`, `ninos`, `avisos`, `mi-cuenta`, etc.).
