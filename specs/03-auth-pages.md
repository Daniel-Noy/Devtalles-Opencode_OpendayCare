# SPEC 03 — Vistas de Autenticación (/auth/login y /auth/activate-account)

> **Status:** Implemented
> **Depends on:** SPEC 01
> **Date:** 2026-09-17
> **Objective:** Implementar las vistas estáticas de inicio de sesión (/auth/login) y activación de cuenta (/auth/activate-account) a partir de `references/pantallas/login.dc.html` y `references/pantallas/activar-cuenta.dc.html`, omitiendo el selector de rol (Personal/Familia) y preparando la interfaz visual para su posterior integración funcional.

---

## Scope

**In:**

- Crear estructura de rutas en inglés bajo la sub-URL `/auth`:
  - [app/auth/login/page.tsx](file:///app/auth/login/page.tsx): Página de inicio de sesión.
  - [app/auth/activate-account/page.tsx](file:///app/auth/activate-account/page.tsx): Página de activación de cuenta por invitación.
- Diseñar la vista de Login ([app/auth/login/page.tsx](file:///app/auth/login/page.tsx)):
  - Disposición en pantalla dividida (2 columnas en escritorio, adaptable a 1 columna en móvil) con fondo `#FBF4EC`.
  - Panel izquierdo ilustrativo (Hero): gradiente cálido (`linear-gradient(155deg,#F6A98E 0%,#F2937A 45%,#EC7E62 100%)`), formas circulares translúcidas de fondo, isotipo de sol con texto "OpenDayCare" (fuente Fredoka), título principal *"El día de cada niño, compartido con su familia"*, bajada descriptiva y pie con *"🌿 Guardería Sala Soles"*.
  - Panel derecho de formulario centrado:
    - Encabezado con título *"Iniciar sesión"* (Fredoka, 30px) y subtítulo *"Ingresá para ver el día de hoy."*.
    - **Omitir por completo la sección "INGRESO COMO" (Personal / Familia)** según requerimiento explícito.
    - Campo de EMAIL con etiqueta en mayúsculas pequeñas (`text-[12px] font-bold tracking-[0.7px] text-[#94887B]`), input estilizado con borde `#EADFD0`, fondo blanco y placeholder `"tu@email.com"`.
    - Campo de CONTRASEÑA (`type="password"`), input con placeholder `••••••••`.
    - Enlace a la derecha *"¿Olvidaste tu contraseña?"* con estilo de acento (`text-[#C5503A] font-bold text-[13.5px]`).
    - Botón de acción principal *"Iniciar sesión"* con gradiente (`linear-gradient(180deg,#F4977E,#EE8164)`), sombra difusa y enlace a `/` (Feed principal).
    - Enlace inferior *"¿Te invitó la guardería? Activá tu cuenta"* apuntando a `/auth/activate-account`.
- Diseñar la vista de Activación de Cuenta ([app/auth/activate-account/page.tsx](file:///app/auth/activate-account/page.tsx)):
  - Disposición centrada en pantalla completa (`min-h-screen`, contenedor `max-w-[440px]`, fondo `#FBF4EC`).
  - Isotipo de sol en contenedor redondeado con gradiente y sombra.
  - Título *"Bienvenida a OpenDayCare"* (Fredoka, 32px) y texto explicativo *"Te invitaron a seguir el día de tu hijo. Creá tu contraseña para activar la cuenta."*.
  - Tarjeta de contexto de invitación: avatar redondo con inicial "M" (`bg-[#A9D9E8] text-[#1F7A93]`), subtítulo *"Te invitaron a seguir a"* y título en Fredoka *"Mateo · Sala Soles"*.
  - Formulario con inputs vacíos y placeholders para entrada del usuario:
    - CÓDIGO DE INVITACIÓN con font Fredoka y espaciado de letras amplio (`tracking-[3px]`, placeholder `"Ej. 7K4P9"`).
    - EMAIL (`type="email"`, placeholder `"ejemplo@correo.com"`).
    - CREAR CONTRASEÑA (`type="password"`, placeholder `"Ingresá tu contraseña"`).
  - Casilla de consentimiento / autorización de fotos con fondo `#FBF1D6`, check verde (`bg-[#5FB97E]`) y texto informativo para familias.
  - Botón de acción principal *"Activar mi cuenta"* con gradiente, sombra y enlace a `/` (Feed principal).
  - Enlace inferior *"¿Ya tenés cuenta? Iniciar sesión"* apuntando a `/auth/login`.
- Crear componentes modulares y limpios en [app/components/auth/](file:///app/components/auth/):
  - `AuthHeroPanel`: Panel ilustrativo lateral para la pantalla de inicio de sesión.
  - `LoginForm`: Formulario de login limpio sin selector de rol.
  - `ActivateAccountForm`: Formulario de activación de cuenta con tarjeta de invitación y casilla de consentimiento.
  - `InvitationInfoCard`: Tarjeta que muestra el niño y sala a la que fue invitada la familia.
- Definir tipos de TypeScript en [app/types/auth.ts](file:///app/types/auth.ts) para modelar los datos de invitación.

**Out of scope (for future specs):**

- Lógica de autenticación real, gestión de sesiones, cookies o integración con servicios backend (NextAuth, Supabase, JWT, etc.).
- Funcionalidad de recuperación de contraseña ("¿Olvidaste tu contraseña?").
- Validación en servidor y canje real de códigos de invitación contra base de datos.
- Persistencia real del consentimiento de fotos o términos de servicio.
- Selector de rol ("Personal / Familia") en el login (descartado explícitamente).

---

## Data model

Modelos en [app/types/auth.ts](file:///app/types/auth.ts):

```typescript
export interface ChildInvitationContext {
  childName: string;
  roomName: string;
  avatarInitial: string;
  avatarBgColor: string;
  avatarTextColor: string;
}
```

Datos mock por defecto en [app/data/auth.mock.ts](file:///app/data/auth.mock.ts) para la vista de activación:

```typescript
import { ChildInvitationContext } from "@/app/types/auth";

export const mockInvitationContext: ChildInvitationContext = {
  childName: "Mateo",
  roomName: "Sala Soles",
  avatarInitial: "M",
  avatarBgColor: "#A9D9E8",
  avatarTextColor: "#1F7A93",
};
```

---

## Implementation plan

1. **Tipos y datos mock**:
   - Crear [app/types/auth.ts](file:///app/types/auth.ts) con la interfaz `ChildInvitationContext`.
   - Crear [app/data/auth.mock.ts](file:///app/data/auth.mock.ts) con el objeto de contexto `mockInvitationContext` para Mateo.
2. **Componentes visuales de autenticación**:
   - Crear `app/components/auth/auth-hero-panel.tsx`: Componente con gradiente, círculos decorativos, logo con ícono de sol OpenDayCare y textos de bienvenida.
   - Crear `app/components/auth/login-form.tsx`: Tarjeta de inicio de sesión sin selector de rol, con inputs para email y contraseña, enlace a recuperar contraseña, botón CTA a `/` y enlace a `/auth/activate-account`.
   - Crear `app/components/auth/invitation-info-card.tsx`: Tarjeta que presenta al niño y la sala asociada a la invitación.
   - Crear `app/components/auth/activate-account-form.tsx`: Formulario de activación centrado con ícono superior, tarjeta de invitación, inputs con placeholders, checkbox de autorización de fotos, botón CTA a `/` y enlace a `/auth/login`.
3. **Páginas de ruta en App Router**:
   - Crear [app/auth/login/page.tsx](file:///app/auth/login/page.tsx): Componer `AuthHeroPanel` y `LoginForm` dentro de una cuadrícula de 2 columnas con fondo `#FBF4EC`.
   - Crear [app/auth/activate-account/page.tsx](file:///app/auth/activate-account/page.tsx): Componer `ActivateAccountForm` centrado con fondo `#FBF4EC`.
4. **Verificación de compilación y calidad**:
   - Ejecutar `npm run build` y `npm run lint` para comprobar tipado TypeScript y estándares ESLint.
   - Validar responsividad y renderizado visual de ambas rutas (`/auth/login` y `/auth/activate-account`).

---

## Acceptance criteria

- [x] La ruta `/auth/login` existe y renderiza correctamente la vista de inicio de sesión inspirada en `login.dc.html`.
- [x] En `/auth/login`, el panel lateral ilustrativo muestra el gradiente, eslogan, logo OpenDayCare y mención a la sala.
- [x] En `/auth/login`, **no se muestra** la sección ni los botones "INGRESO COMO" (Personal / Familia).
- [x] En `/auth/login`, el botón "Iniciar sesión" enlaza a la ruta principal `/`.
- [x] En `/auth/login`, el enlace "Activá tu cuenta" apunta a `/auth/activate-account`.
- [x] La ruta `/auth/activate-account` existe y renderiza correctamente la vista de activación inspirada en `activar-cuenta.dc.html`.
- [x] En `/auth/activate-account`, se muestra la tarjeta de invitación con "Mateo · Sala Soles" y avatar con inicial "M".
- [x] En `/auth/activate-account`, los campos de código de invitación, email y contraseña se muestran vacíos con sus respectivos placeholders.
- [x] En `/auth/activate-account`, el checkbox de consentimiento de fotografías se muestra seleccionado/estilizado de forma visual con tilde verde.
- [x] En `/auth/activate-account`, el botón "Activar mi cuenta" enlaza a `/`.
- [x] En `/auth/activate-account`, el enlace "Iniciar sesión" apunta a `/auth/login`.
- [x] `npm run lint` pasa sin errores de linting.
- [x] `npm run build` compila la aplicación exitosamente sin errores de TypeScript ni rutas rotas.

---

## Decisions taken and discarded

- **Sub-URL `/auth` y nombres en inglés**: Se seleccionaron `/auth/login` y `/auth/activate-account` por instrucción directa del usuario para mantener las rutas de autenticación agrupadas semánticamente en inglés.
- **Omisión del selector de rol ("INGRESO COMO")**: Se descartó incluir los botones "Personal" y "Familia" presentes en el prototipo original por requerimiento explícito del usuario.
- **Redirección temporal a `/` en los botones CTA**: Los botones principales "Iniciar sesión" y "Activar mi cuenta" enlazan al feed principal (`/`) para permitir una demostración visual fluida del flujo antes de contar con la lógica de autenticación real.
- **Inputs vacíos con placeholders en activación**: Se descartaron valores prellenados en los campos de entrada para ofrecer una experiencia visual más realista de formulario, manteniendo fija la tarjeta de invitación de Mateo.

---

## Identified risks

- **Contraste de color de fondo con el layout raíz**: El layout raíz (`app/layout.tsx`) aplica `bg-[#F6ECDF]`, mientras que las vistas de autenticación prototipadas usan `bg-[#FBF4EC]`.
  - *Mitigación*: Envolver cada página de autenticación en un contenedor de altura completa (`min-h-screen`) con la clase `bg-[#FBF4EC]`.
