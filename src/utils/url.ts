/**
 * Prepend Astro's base URL to an absolute path.
 * Handles both development (base="/") and production (base="/bbsd-astro/").
 *
 * Usage:
 *   url('/about-us')        → '/bbsd-astro/about-us'
 *   url('/images/logo.png') → '/bbsd-astro/images/logo.png'
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL ?? '/'
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${base}${cleanPath}`
}
