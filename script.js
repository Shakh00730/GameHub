document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search input');
    const searchButton = document.querySelector('.search button');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        alert(`Ищем игры с запросом: ${query}`);
        // Реализация поиска будет добавлена позже
    });
});
