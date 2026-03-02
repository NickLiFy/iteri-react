// utils/galleryLoader.ts

export const getGalleryImages = (category: string) => {
    // Используем 'eager: true' для немедленной загрузки 
    // и попробуем более широкий захват файлов
    const images = import.meta.glob('../assets/gallery/**/*.{png,jpg,jpeg,svg,webp,PNG,JPG,JPEG,SVG,WEBP}', {
        eager: true,
        as: 'url',
    });

    const allPaths = Object.keys(images);

    // ВАЖНЫЙ ТРЮК: Мы ищем категорию в ключе. 
    // В Vite после билда ключи могут выглядеть так: "/src/assets/gallery/topenarske-prace/..."
    const filtered = allPaths.filter((key) => {
        const lowerKey = key.toLowerCase();
        const lowerCat = category.toLowerCase();

        // Проверяем, что в пути есть и папка gallery, и наша категория
        return lowerKey.includes('gallery') && lowerKey.includes(`/${lowerCat}/`);
    });

    console.log("--- DEBUG ---");
    console.log("Категория:", category);
    console.log("Найдено путей:", filtered.length);
    console.log("Примеры путей:", filtered.slice(0, 3));

    return filtered.map((key) => images[key] as string);
};