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
                    {
                        name: 'Member 1',
                        link: '#member1',
                        subMenu: []
                    },
                    {
                        name: 'Member 2',
                        link: '#member2',
                        subMenu: []
                    }
                ]
            },
            {
                name: 'Mission',
                link: '#mission',
                subMenu: []
            }
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
                    {
                        name: 'Frontend',
                        link: '#frontend',
                        subMenu: []
                    },
                    {
                        name: 'Backend',
                        link: '#backend',
                        subMenu: []
                    }
                ]
            },
            {
                name: 'Mobile App',
                link: '#mobile',
                subMenu: [
                    {
                        name: 'Android',
                        link: '#android',
                        subMenu: []
                    },
                    {
                        name: 'iOS',
                        link: '#ios',
                        subMenu: []
                    }
                ]
            }
        ]
    },
    {
        name: 'Contact',
        link: '#contact',
        subMenu: [] 
    }
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
        
        li.appendChild(a);
        
        
        if (item.subMenu.length > 0) {
            const submenuDiv = document.createElement('div');
            submenuDiv.classList.add('submenu');
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
            const clickedLink = event.target;
            const submenu = clickedLink.nextElementSibling;

            if (submenu && submenu.classList.contains('submenu')) {
                event.preventDefault();

                if (submenu.style.display === '' || submenu.style.display === 'none') {
                    submenu.style.display = 'block'; 
                } else {
                    submenu.style.display = 'none'; 
                }
            }
        });
    });
}

document.getElementById('menu').appendChild(generateMenu(menuData));

setupMenuToggle();
