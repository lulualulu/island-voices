/**
 * Get the correct asset path for the current environment
 * In production (GitHub Pages), adds the base path
 */
export function getAssetPath(path: string): string {
  const base = import.meta.env.PROD ? '/island-voices' : '';
  return `${base}${path}`;
}