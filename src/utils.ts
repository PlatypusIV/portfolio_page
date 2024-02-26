export function getImageUrl(path:string): string {
    return new URL(`/assets/${path}`, import.meta.url).href;
}