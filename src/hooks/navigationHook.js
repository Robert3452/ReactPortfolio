import { useEffect } from 'react';
const useNav = () => {
    useEffect(() => {
        var menu = document.querySelector(".header");
        document.querySelector('.btn-menu').addEventListener('click', () => {
            document.querySelector('.navbar__right').classList.toggle("toggle");
        });
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 0) {
                menu.classList.add("fixed-nav")
            } else {
                menu.classList.remove("fixed-nav")
            }
        })
    }, [])
}
export default useNav;