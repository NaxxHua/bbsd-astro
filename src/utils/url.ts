/**
 * Prepend Astro's base URL to an absolute path.
 * Adapts automatically to the `base` set in astro.config.mjs.
 *
 * Usage (base="/"):
 *   url('/about-us')        → '/about-us'
 *   url('/images/logo.png') → '/images/logo.png'
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL ?? '/'
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${base}${cleanPath}`
}
