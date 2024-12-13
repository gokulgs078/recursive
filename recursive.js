

const menuData = [
    {
        name: 'Home',
        link: '#home',
        subMenu: []
    },
    {
        name: 'About',
        link: '#about',
        subMenu: [
            {
                name: 'Team',
                link: '#team',
                subMenu: [
                    { name: 'Member 1', link: '#member1', subMenu: [] },
                    { name: 'Member 2', link: '#member2', subMenu: [] }
                ]
            },
            { name: 'Mission', link: '#mission', subMenu: [] }
        ]
    },
    {
        name: 'Services',
        link: '#services',
        subMenu: [
            {
                name: 'Web Development',
                link: '#web',
                subMenu: [
                    { name: 'Frontend', link: '#frontend', subMenu: [] },
                    { name: 'Backend', link: '#backend', subMenu: [] }
                ]
            },
            {
                name: 'Mobile App',
                link: '#mobile',
                subMenu: [
                    { name: 'Android', link: '#android', subMenu: [] },
                    { name: 'iOS', link: '#ios', subMenu: [] }
                ]
            }
        ]
    },
    { name: 'Contact', link: '#contact', subMenu: [] }
];

function generateMenu(menuItems) {
    const ul = document.createElement('ul');
    menuItems.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('menu-item');

        const a = document.createElement('a');
        a.href = item.link;
        a.classList.add('menu-link');
        a.textContent = item.name;

        if (item.subMenu.length > 0) {
            const arrow = document.createElement('span');
            arrow.classList.add('arrow');
            arrow.textContent = '▶'; 
            a.appendChild(arrow);
        }

        li.appendChild(a);

        if (item.subMenu.length > 0) {
            const submenuDiv = document.createElement('div');
            submenuDiv.classList.add('submenu');
            submenuDiv.style.display = 'none'; 
            submenuDiv.appendChild(generateMenu(item.subMenu));
            li.appendChild(submenuDiv);
        }

        ul.appendChild(li);
    });

    return ul;
}

function setupMenuToggle() {
    const menuLinks = document.querySelectorAll('.menu-link');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const clickedLink = event.target.closest('.menu-link');
            const submenu = clickedLink.nextElementSibling; 
            const arrow = clickedLink.querySelector('.arrow'); 

            if (submenu && submenu.classList.contains('submenu')) {
                event.preventDefault(); 

                const isExpanded = submenu.style.display === 'block';
                submenu.style.display = isExpanded ? 'none' : 'block';

                if (arrow) {
                    arrow.textContent = isExpanded ? '▶' : '▼'; 
                }
            }
        });
    });
}

const menuElement = generateMenu(menuData);
document.getElementById('menu').appendChild(menuElement);

setupMenuToggle();
