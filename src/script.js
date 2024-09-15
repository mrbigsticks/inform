const categories = [
    { id: 1, name: "Productivity" },
    { id: 2, name: "Design" },
    { id: 3, name: "Development" },
    { id: 4, name: "Communication" },
    { id: 5, name: "Finance" }
];

const softwareItems = [
    { id: 1, name: "Notion", category: 1 },
    { id: 2, name: "Figma", category: 2 },
    { id: 3, name: "Visual Studio Code", category: 3 },
    { id: 4, name: "Slack", category: 4 },
    { id: 5, name: "QuickBooks", category: 5 },
    { id: 6, name: "Trello", category: 1 },
    { id: 7, name: "Adobe XD", category: 2 },
    { id: 8, name: "GitHub", category: 3 },
    { id: 9, name: "Zoom", category: 4 },
    { id: 10, name: "Wave", category: 5 }
];

let selectedCategory = categories[0].id;

function renderCategories() {
    const categoryList = document.getElementById('categoryList');
    categoryList.innerHTML = '';
    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category.name;
        button.classList.add('category-btn');
        if (category.id === selectedCategory) {
            button.classList.add('active');
        }
        button.addEventListener('click', () => {
            selectedCategory = category.id;
            renderCategories();
            renderSoftware();
            updateCategoryTitle();
        });
        categoryList.appendChild(button);
    });
}

function renderSoftware() {
    const softwareGrid = document.getElementById('softwareGrid');
    softwareGrid.innerHTML = '';
    const filteredSoftware = softwareItems.filter(item => item.category === selectedCategory);
    filteredSoftware.forEach(software => {
        const div = document.createElement('div');
        div.classList.add('software-item');
        div.textContent = software.name;
        softwareGrid.appendChild(div);
    });
}

function updateCategoryTitle() {
    const categoryTitle = document.getElementById('categoryTitle');
    const category = categories.find(c => c.id === selectedCategory);
    categoryTitle.textContent = `${category.name} Software`;
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

document.getElementById('openSidebar').addEventListener('click', toggleSidebar);
document.getElementById('closeSidebar').addEventListener('click', toggleSidebar);

renderCategories();
renderSoftware();
updateCategoryTitle();
