function updateQuantities(multiplier, recipeId) {
    const recipeSection = document.getElementById(recipeId);
    const ingredients = recipeSection.querySelectorAll('.ingredient');
    ingredients.forEach(ingredient => {
        const baseValue = parseFloat(ingredient.getAttribute('data-base-value'));
        const newValue = Math.ceil(baseValue * multiplier);
        const source = ingredient.getAttribute('data-source');
        ingredient.textContent = `${newValue}x ${ingredient.getAttribute('data-ingredient')} ${source ? '(' + source + ')' : ''}`;
    });
}
function showSection(sectionId) {
    document.getElementById('welcome').style.display = 'none';
    document.querySelector('main').style.display = 'flex';
    document.querySelectorAll('main > section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
function filterItems() {
    const query = document.getElementById('search').value.toLowerCase();
    document.querySelectorAll('details').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? '' : 'none';
    });
}
function expandAllDetails() {
    document.querySelectorAll('details').forEach(item => item.setAttribute('open', 'open'));
}
function collapseAllDetails() {
    document.querySelectorAll('details').forEach(item => item.removeAttribute('open'));
}
