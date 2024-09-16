const categories = [
    { id: 1, name: "OSINT" },
    { id: 2, name: "Servers" },
    { id: 3, name: "Development" },
    { id: 4, name: "Tools" }   
];

const softwareItems = [
    { id: 1, name: "ParseHub", category: 1 },
    { id: 2, name: "OSINT Framework", category: 1},
    { id: 3, name: "OneDrive", category: 2 },
    { id: 4, name: "Visual Studio Code", category: 3 },
    { id: 5, name: "Lenso AI", category: 1 },
    { id: 6, name: "Virtual Machine Notes", category: 2 },
    { id: 7, name: "GitHub", category: 3 },
    { id: 8, name: "Nmap", category: 4 },
    { id: 9, name: "Hydra Brute Force", category: 4 },
    { id: 10, name: "SQL Injection", category: 4 },
    { id: 11, name: "DDoS", category: 4 }
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
    categoryTitle.textContent = `${category.name} Softwares`;
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
