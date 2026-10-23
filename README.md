# Zona Limpia

Sitio web de marketing (una sola página) para **Zona Limpia**, empresa de limpieza profesional en Honduras (Limpieza Express, corporativa y post construcción).

- **Stack:** Next.js (App Router) + TypeScript + Tailwind CSS + Motion (`motion/react`)
- **Salida:** export estático (`output: 'export'`) — ideal para Vercel free tier
- **Idioma:** español (es-HN)
- **Conversión:** WhatsApp (sin backend)

## Desarrollo local

```bash
npm install
npm run images   # optimiza raw-images → public/images
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # genera /out
npm start       # sirve /out
```

## Contenido de negocio (`src/config.ts`)

Todo el contenido editable vive en **`src/config.ts`**: nombre, teléfono, WhatsApp, email, contacto, servicios, planes Express, condiciones, clientes, zonas, redes, rutas de imágenes y flag de precios.

Los componentes **solo leen de `CONFIG`**. No hardcodees textos de negocio en componentes.

### Contacto

- Fernando Cruz · Gerente Comercial
- Tel / WhatsApp: `+(504) 3184-5847`
- Email: `fcruzzl@zonalimpiahn.com`
- Web: `www.zonalimpiahn.com`
- Facebook: Zona Limpia Honduras
- Instagram: `@zonalimpia.hn`

### Activar precios

Por defecto:

```ts
pricing: { enabled: false }
```

Cada plan muestra **"Cotiza por WhatsApp"**. Para publicar precios:

```ts
pricing: {
  enabled: true,
  plans: {
    semanal: "Desde L …",
    quincenal: "Desde L …",
    mensual: "Desde L …",
  },
}
```

## Fotos

1. Coloca los originales en **`/raw-images/`** (está en `.gitignore`, no se sube a git).
2. Optimiza:

```bash
npm run images
```

`npm run build` ejecuta la optimización **solo si** existe `/raw-images`.

## Despliegue en Vercel

1. Conecta el repo a Vercel.
2. Framework preset: **Next.js**. Build: `npm run build`. Output: estático (`/out` vía `output: 'export'`).
3. **`vercel.json`** limita deploys a **`main`**.
4. Confirma `CONFIG.siteUrl` con tu dominio real antes de publicar.
