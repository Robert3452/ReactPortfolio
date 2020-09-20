import { useEffect } from 'react';
const sidebarHook = () => {
    useEffect(() => {
        var btn_sidebar = document.querySelector('.btn-sidebar'),
            sidebarBody = document.querySelector('.sidebar-content'),
            sidebar = document.querySelector('.sidebar'),
            fileInput = document.querySelector('.form__group-input-file'),
            button = document.querySelector('.form__group-input-file-trigger'),
            fileReturn = document.querySelector('.file-return');

        if (button) {
            button.addEventListener("keydown", function (event) {
                if (event.keyCode == 13 || event.keyCode == 32) {
                    fileInput.focus();
                }
            })
        }
        if (fileInput)
            fileInput.addEventListener("change", function (event) {
                fileReturn.innerHTML = this.value;
            })

        if (btn_sidebar)
            btn_sidebar.addEventListener('click', () => {
                sidebarBody.classList.toggle("sidebar-active");
                sidebar.classList.toggle("toggle")
            })

    }, []);
}
export default sidebarHook;
