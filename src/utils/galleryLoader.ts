export const getGalleryImages = (category: string) => {
    // импорт всех изображений из папки gallery
    const images = import.meta.glob('../assets/gallery/**/*.{png,jpg,jpeg,svg,webp}', {
        eager: true,
        query: '?url',
        import: 'default',
    });

    //фильтруем только те, что относятся к нужной категории
    return Object.keys(images)
        .filter((key) => key.includes(`/gallery/${category}/`))
        .map((key) => images[key] as string);
};