// script.js
document.addEventListener("DOMContentLoaded", () => {
    const addSemesterClickEvent = (semester) => {
        semester.addEventListener('click', () => {
            const url = semester.dataset.url;
            if (url) {
                window.location.href = url;
            }
        });
    };

    document.querySelectorAll('.semester').forEach(addSemesterClickEvent);
});
