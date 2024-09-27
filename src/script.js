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
    { id: 12, name: "Virtual Machine", category: 2 },
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





const softwareDetails = {
    1: { description: "ParseHub is a visual data extraction tool for extracting data from websites.", links: ["https://parsehub.com"] },
    2: { description: "OSINT Framework provides tools and resources for open-source intelligence gathering.", links: ["https://osintframework.com"] },
    3: { description: "OneDrive is a cloud storage service by Microsoft.", links: ["https://onedrive.live.com"] },
    4: { description: "Visual Studio Code is a code editor for development.", links: ["https://code.visualstudio.com"] },
    5: { description: "Lenso AI helps with image recognition and machine learning.", links: ["https://lenso.ai"] },
    6: { description: "Virtual Machine Notes is a tool for managing virtual machines.", links: ["#"] },
    7: { description: "GitHub is a version control platform for developers.", links: ["https://github.com"] },
    8: { description: "Nmap is a network scanning tool for security professionals.", links: ["https://nmap.org"] },
    9: { description: "Hydra Brute Force is a password-cracking tool.", links: ["#"] },
    11: { description: "DDoS is a denial-of-service attack technique.", links: ["#"] },
    12: { description: "Input correct Credentials and acces the Kali Linux Machine.", links: ["https://cloud.linode.com/linodes/61578532"] },
};

function renderSoftware() {
    const softwareGrid = document.getElementById('softwareGrid');
    softwareGrid.innerHTML = '';
    const filteredSoftware = softwareItems.filter(item => item.category === selectedCategory);
    filteredSoftware.forEach(software => {
        const div = document.createElement('div');
        div.classList.add('software-item');
        div.textContent = software.name;
        div.addEventListener('click', () => displaySoftwareDetails(software.id));
        softwareGrid.appendChild(div);
    });
}

function displaySoftwareDetails(softwareId) {
    const detailsBox = document.getElementById('softwareDetails');
    detailsBox.textContent = softwareDetails[softwareId] || "No details available.";
    detailsBox.style.display = 'block';
}









function displaySoftwareDetails(softwareId) {
    const detailsBox = document.getElementById('softwareDetails');
    const softwareItem = document.querySelector('.software-item');
    const itemWidth = softwareItem ? softwareItem.offsetWidth : 200;

    const software = softwareDetails[softwareId] || { description: "No details available.", links: [] };
    
    // Set the width of the details box
    detailsBox.style.width = `${itemWidth * 1.92}px`;

    // Create the description and links sections
    detailsBox.innerHTML = `
        <p>${software.description}</p>
        <hr>
        <div class="links-section">
            <p>Related Links:</p>
            <ul>
                ${software.links.map(link => `<li><a href="${link}" target="_blank">${link}</a></li>`).join('')}
            </ul>
        </div>
    `;
    
    detailsBox.style.display = 'block';
}

// Hide details when clicking outside software items or the detail box
document.addEventListener('click', function(event) {
    const detailsBox = document.getElementById('softwareDetails');
    const softwareItems = document.querySelectorAll('.software-item');
    const isSoftwareItem = Array.from(softwareItems).some(item => item.contains(event.target));
    const isDetailsBox = detailsBox.contains(event.target);

    // If clicked outside both the software items and the details box, hide the details
    if (!isSoftwareItem && !isDetailsBox) {
        detailsBox.style.display = 'none';
    }
}, true);

// Modify renderSoftware to stop event propagation when software item is clicked
function renderSoftware() {
    const softwareGrid = document.getElementById('softwareGrid');
    softwareGrid.innerHTML = '';
    const filteredSoftware = softwareItems.filter(item => item.category === selectedCategory);
    filteredSoftware.forEach(software => {
        const div = document.createElement('div');
        div.classList.add('software-item');
        div.textContent = software.name;
        div.addEventListener('click', (event) => {
            displaySoftwareDetails(software.id);
            event.stopPropagation(); // Stop event propagation to prevent hiding details
        });
        softwareGrid.appendChild(div);
    });
}

// Stop propagation when clicking inside the details box
document.getElementById('softwareDetails').addEventListener('click', function(event) {
    event.stopPropagation();
});
