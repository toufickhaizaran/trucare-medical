// Import every image in /src/assets and fetch by file name.
export const images = import.meta.glob('../assets/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  as: 'url',
})

export function getAssetUrl(fileName) {
  const key = `../assets/${fileName}`
  return images[key] || null
}
