# 06 · Cuentas y sincronización (Supabase)

ReadUp funciona sin cuenta (progreso en el dispositivo). Con Supabase, los usuarios pueden
iniciar sesión y ver su avance en todos sus dispositivos. El plan gratuito es suficiente.

## 1. Crear el proyecto (5 min)

1. Entra en https://supabase.com → **Start your project** (puedes entrar con GitHub).
2. **New project**: nombre `readup`, una contraseña de base de datos (guárdala) y la región
   más cercana a tus usuarios.
3. Cuando termine de crearse, ve a **SQL Editor → New query**, pega el contenido de
   [`supabase/schema.sql`](../supabase/schema.sql) y pulsa **Run**.

## 2. Configurar el login

1. **Authentication → URL Configuration**:
   - **Site URL**: la URL de Vercel, p. ej. `https://readup-xxxx.vercel.app`.
   - **Redirect URLs**: añade `https://readup-xxxx.vercel.app/cuenta` y
     `http://localhost:3000/cuenta` (para desarrollo).
2. El login por **email (enlace mágico)** viene activado por defecto.
   - El servicio de correo de prueba de Supabase tiene un límite bajo de emails por hora.
     Para uso real, configura un SMTP propio en **Authentication → Emails → SMTP Settings**
     (por ejemplo Resend, que tiene plan gratuito).
3. Opcional, **GitHub**: Authentication → Sign In / Providers → GitHub. Crea una OAuth App en
   https://github.com/settings/developers con la *callback URL* que te indica Supabase.
   Después añade `NEXT_PUBLIC_AUTH_PROVIDERS=github` (o `github,google`).

## 3. Variables de entorno

En Supabase: **Project Settings → API** (o el botón **Connect**) copia la *Project URL* y la
clave pública *anon / publishable*.

- **Vercel**: Project → Settings → Environment Variables:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `NEXT_PUBLIC_AUTH_PROVIDERS` (opcional)

  Después, **Redeploy** (las variables `NEXT_PUBLIC_` se incluyen al compilar).
- **Local**: copia `apps/web/.env.example` a `apps/web/.env.local` y rellénalo.

La clave *anon* es pública por diseño: la seguridad la garantizan las políticas RLS de
`schema.sql` (cada usuario solo puede leer y escribir su propia fila). **Nunca** uses la
clave `service_role` en la app.

## Cómo funciona la sincronización

- Tabla `user_state`: una fila por usuario con un documento JSON (lecturas, documentos,
  días de racha y tarjetas).
- Al iniciar sesión, al volver a la pestaña y ~1,5 s después de cada cambio, la app
  descarga lo remoto, lo **fusiona** con lo local y sube el resultado
  (`packages/core/src/sync.ts`): nunca se pierde avance; ante conflicto gana lo más reciente.
