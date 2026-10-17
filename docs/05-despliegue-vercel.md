# 05 · Despliegue en Vercel

La app web (`apps/web`) es Next.js dentro de un monorepo pnpm. Vercel lo detecta solo;
el único ajuste necesario es el **Root Directory**.

## Primera vez

1. Entra en https://vercel.com/signup y regístrate con **Continue with GitHub**.
2. Pulsa **Add New… → Project** e importa el repositorio `readup`
   (si no aparece: **Adjust GitHub App Permissions** y da acceso al repo).
3. En **Configure Project**:
   - **Root Directory** → **Edit** → selecciona `apps/web`.
   - Framework Preset: **Next.js** (automático).
   - Build/Install/Output: dejar por defecto.
4. Pulsa **Deploy**. En 1–2 minutos tendrás una URL tipo `https://readup-xxxx.vercel.app`.

## Después

- Cada `git push` a `main` publica una nueva versión automáticamente.
- Cada rama o pull request recibe su propia URL de vista previa.
- Dominio propio: Project → Settings → Domains.

## Si falla el build

- "Couldn't find any `pages` or `app` directory": el Root Directory no es `apps/web`.
- Errores con pnpm: en Settings → Environment Variables añade
  `ENABLE_EXPERIMENTAL_COREPACK=1` y vuelve a desplegar (usa la versión de pnpm de `package.json`).
