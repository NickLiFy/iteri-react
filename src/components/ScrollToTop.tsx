import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Если в URL нет хэша (например, просто перешли на страницу), скроллим в самый верх
        if (!hash) {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
};