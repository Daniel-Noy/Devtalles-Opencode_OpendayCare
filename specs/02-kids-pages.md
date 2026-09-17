# SPEC 02 — Implementación de Páginas de Niños y Perfil de Niño (/kids y /kids/[id])

> **Status:** Implemented
> **Depends on:** SPEC 01
> **Date:** 2026-09-17
> **Objective:** Implementar las vistas de listado de niños (/kids) y detalle de perfil individual (/kids/[id]) a partir de las plantillas [references/pantallas/ninos.dc.html](../references/pantallas/ninos.dc.html) y [references/pantallas/perfil-nino.dc.html](../references/pantallas/perfil-nino.dc.html), conectándolas con la navegación del feed existente.

---

## Scope

**In:**

- Refactorizar la barra lateral a un componente compartido ([app/components/shared/sidebar.tsx](../app/components/shared/sidebar.tsx)) que admita navegación activa (Feed apuntando a `/` y Niños apuntando a `/kids`).
- Actualizar [app/page.tsx](../app/page.tsx) para utilizar el nuevo componente compartido de barra lateral conservando la visualización activa de Feed.
- Definir tipos e interfaces TypeScript en [app/types/kids.ts](../app/types/kids.ts) para modelar niños, información médica/alergias y padres vinculados.
- Crear dataset de prueba en [app/data/kids.mock.ts](../app/data/kids.mock.ts) con los 8 niños presentes en `ninos.dc.html`, incluyendo datos completos para Mateo Fernández (`mateo-fernandez`) y estructura de fallback consistente para los otros 7 niños.
- Implementar la página de listado de niños en [app/kids/page.tsx](../app/kids/page.tsx):
  - Cabecera con sección "GESTIÓN", título "Niños" y botón "Agregar niño".
  - Input estático de búsqueda ("Buscar niño…") con ícono de lupa.
  - Indicador de sala ("SALA SOLES", "8 niños") y separador.
  - Cuadrícula de 2 columnas con las 8 tarjetas de niños (`KidCard`), con avatares, nombre, edad, padres vinculados y badges de estado ("MANÍ", "LACTOSA", "VINCULAR" o chevron de navegación).
  - Enlaces en cada tarjeta apuntando a `/kids/${kid.id}`.
- Implementar la página dinámica de perfil en [app/kids/\[id\]/page.tsx](../app/kids/[id]/page.tsx):
  - Manejo de rutas desconocidas con `notFound()` de Next.js.
  - Enlace de retorno "Volver a Niños" con `href="/kids"`.
  - Encabezado con avatar grande, nombre, edad, sala y botón "Editar" (`href="#"`).
  - Tarjeta de advertencia de "Alergias y notas" con ícono de alerta y estilos específicos.
  - Tarjeta de información general (fecha de nacimiento, sala, fecha de ingreso).
  - Botón "Resumen del día" (`href="#"`) en la columna lateral derecha.
  - Tarjeta de "PADRES VINCULADOS" con lista de padres (avatar, nombre, rol/estado, badge "ACTIVA" o "PENDIENTE") y botón "Vincular otro padre" (`href="#"`).
- Componentes modulares limpios en `app/components/kids/`:
  - `KidCard`: Tarjeta de niño en la cuadrícula del listado.
  - `KidsHeader`: Encabezado y acción de agregar niño.
  - `KidProfileHeader`: Cabecera del perfil de niño.
  - `AllergyCard`: Bloque de alergias y notas médicas.
  - `KidInfoCard`: Metadatos de nacimiento, sala e ingreso.
  - `LinkedParentsCard`: Lista de padres vinculados y acción para vincular.

**Out of scope (for future specs):**

- Lógica de filtrado en tiempo real en el input de búsqueda de `/kids` (se mantiene como elemento estático visual).
- Implementación funcional de "Agregar niño" (`agregar-nino.dc.html`), "Editar", "Resumen del día" (`resumen-dia.dc.html`) y "Vincular otro padre" (`vincular-padre.dc.html`).
- Mutaciones de datos o persistencia en base de datos.
- Subida o almacenamiento real de imágenes de perfil.

---

## Data model

Modelos en [app/types/kids.ts](../app/types/kids.ts):

```typescript
export type KidBadgeType = "allergy" | "action";

export interface KidBadge {
  label: string;
  type: KidBadgeType;
  bgColor: string;
  textColor: string;
}

export interface LinkedParent {
  id: string;
  name: string;
  relation: string; // ej. "Mamá", "Papá"
  status: "active" | "pending";
  initial: string;
  avatarBgColor: string;
}

export interface KidAllergyInfo {
  title: string;
  details: string;
}

export interface KidGeneralInfo {
  birthDate: string;
  roomName: string;
  enrollmentDate: string;
}

export interface KidListItem {
  id: string;
  name: string;
  initial: string;
  age: number;
  parentsCountLabel: string;
  avatarBgColor: string;
  avatarTextColor: string;
  badge?: KidBadge;
  hasChevron?: boolean;
}

export interface KidProfile extends KidListItem {
  roomName: string;
  allergies?: KidAllergyInfo;
  generalInfo: KidGeneralInfo;
  linkedParents: LinkedParent[];
}
```

---

## Implementation plan

1. **Abstracción de la barra lateral compartida**:
   - Crear [app/components/shared/sidebar.tsx](../app/components/shared/sidebar.tsx) a partir de la barra existente en `app/components/feed/sidebar.tsx`.
   - Añadir soporte para la propiedad `activeNav: "feed" | "kids" | "announcements" | "account"`.
   - Conectar los enlaces de navegación: Feed apunta a `/` y Niños apunta a `/kids`.
   - Actualizar [app/page.tsx](../app/page.tsx) para importar y usar el componente compartido con `activeNav="feed"`.

2. **Tipado y dataset mock**:
   - Crear [app/types/kids.ts](../app/types/kids.ts) con las interfaces `KidListItem`, `KidProfile`, `LinkedParent`, `KidBadge`, etc.
   - Crear [app/data/kids.mock.ts](../app/data/kids.mock.ts) con la lista de los 8 niños (Mateo Fernández, Sofía Méndez, Benjamín Ruiz, Valentina Soto, Tomás Díaz, Emma Castro, Lucas Romero, Olivia Vega) y el detalle exhaustivo de Mateo Fernández según `perfil-nino.dc.html`, más fallback estructurado para los restantes.

3. **Componentes del listado de niños (`/kids`)**:
   - Crear `app/components/kids/kid-card.tsx` con estilos hover (`.kid:hover`), badge de alergia o botón de vinculación, y enlace envolvente a `/kids/${kid.id}`.
   - Crear `app/components/kids/kids-header.tsx` con el badge de gestión y el botón "Agregar niño".
   - Crear [app/kids/page.tsx](../app/kids/page.tsx) integrando `Sidebar` (con `activeNav="kids"`), `KidsHeader`, input de búsqueda estático, cabecera de sala y grid de tarjetas.

4. **Componentes del perfil de niño (`/kids/[id]`)**:
   - Crear `app/components/kids/kid-profile-header.tsx` con navegación de retorno "Volver a Niños", avatar grande, datos principales y botón "Editar".
   - Crear `app/components/kids/allergy-card.tsx` con badge y descripción de alergias/medicación.
   - Crear `app/components/kids/kid-info-card.tsx` con filas de fecha de nacimiento, sala y fecha de ingreso.
   - Crear `app/components/kids/linked-parents-card.tsx` con la lista de padres, badges ("ACTIVA" verde, "PENDIENTE" amarillo) y enlace "Vincular otro padre".
   - Crear [app/kids/\[id\]/page.tsx](../app/kids/[id]/page.tsx) como Server Component, resolviendo el `id` recibido por parámetro, recuperando el perfil del mock (o llamando a `notFound()`), y componiendo el layout con `Sidebar` (`activeNav="kids"`).

5. **Verificación y calidad**:
   - Ejecutar `npm run build` para validar rutas estáticas y dinámicas.
   - Ejecutar `npm run lint` para confirmar apego a las reglas de ESLint y TypeScript sin errores.

---

## Acceptance criteria

- [x] La barra lateral compartida se encuentra en [app/components/shared/sidebar.tsx](../app/components/shared/sidebar.tsx) y se usa tanto en `/` como en `/kids` y `/kids/[id]`.
- [x] El enlace "Feed" de la barra lateral navega a `/` y resalta activo únicamente cuando se está en el Feed.
- [x] El enlace "Niños" de la barra lateral navega a `/kids` y resalta activo cuando se está en `/kids` o en `/kids/[id]`.
- [x] La ruta `/kids` renderiza el listado completo con los 8 niños de `references/pantallas/ninos.dc.html`.
- [x] Las tarjetas de niños muestran sus iniciales, colores distintivos, badges correspondientes ("MANÍ", "LACTOSA", "VINCULAR") o chevron según la plantilla.
- [x] Al hacer clic en la tarjeta de un niño (ej. Mateo Fernández), la aplicación navega a `/kids/mateo-fernandez`.
- [x] La ruta `/kids/mateo-fernandez` replica visualmente `references/pantallas/perfil-nino.dc.html`, incluyendo "Alergias y notas", datos generales y padres vinculados (Lucía y Diego Fernández).
- [x] El enlace "Volver a Niños" en el perfil regresa a la ruta `/kids`.
- [x] Rutas inexistentes bajo `/kids/[id]` (ej. `/kids/desconocido`) disparan `notFound()`.
- [x] `npm run build` compila exitosamente sin errores de TypeScript ni de rutas.
- [x] `npm run lint` se ejecuta sin advertencias ni errores.

---

## Decisions taken and discarded

- **Barra lateral compartida**: Se decidió extraer la barra a `app/components/shared/sidebar.tsx` con prop `activeNav` en lugar de duplicar el componente o forzar un layout raíz acoplado, garantizando DRY y respetando la arquitectura actual de la aplicación.
- **Búsqueda estática**: Se descartó la reactividad cliente en el input de búsqueda de `/kids` para esta fase; se mantiene puramente visual conforme a los requerimientos del usuario, aplazando el filtrado para una spec de interacción.
- **Detalle de niños**: Se decidió modelar exhaustivamente a Mateo Fernández según la pantalla prototipo y proveer fallback consistente para el resto de los 8 niños, evitando errores de renderizado si se visita el detalle de otro niño.
- **Acciones secundarias sin implementar**: Botones como "Agregar niño", "Editar", "Resumen del día" y "Vincular otro padre" mantienen `href="#"` para no inventar rutas no especificadas hasta sus specs dedicadas.

---

## Identified risks

- **Rutas dinámicas en Next.js 16**: Los `params` de página en Next.js 16 son asíncronos (`params: Promise<{ id: string }>`). Es necesario utilizar `await params` en `app/kids/[id]/page.tsx` para evitar advertencias o fallos de compilación.
- **Coherencia de colores de avatares**: La plantilla utiliza combinaciones específicas de color de fondo y texto para cada niño (ej. celeste `#A9D9E8` / `#1F7A93`, rosa `#F4B8CC` / `#C44A7A`). Deben mapearse con precisión en el mock para mantener fidelidad visual.
