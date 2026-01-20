// Menu Loader Script
// Loads sidebar menu from template and sets active state based on current page

(function() {
    'use strict';

    // Map page names to menu item identifiers
    const pageMenuMap = {
        'trade.html': 'trade',
        'referral.html': 'referral',
        'wallet.html': 'wallet',
        'dashboard.html': 'dashboard',
        'faq.html': 'faq',
        'about.html': 'about',
        'command.html': 'command',
        'settings.html': 'settings',
        'logout.html': 'logout'
    };

    /**
     * Get current page identifier
     */
    function getCurrentPage() {
        const path = window.location.pathname;
        const filename = path.split('/').pop() || 'dashboard.html';
        return pageMenuMap[filename] || null;
    }

    /**
     * Load menu template and insert into sidebar
     */
    function loadMenu() {
        const sidebarNav = document.querySelector('.sidebar-nav');
        if (!sidebarNav) {
            console.warn('Sidebar navigation container not found');
            return;
        }

        // Check if menu template is available
        if (typeof window.SidebarMenuTemplate === 'undefined') {
            console.warn('SidebarMenuTemplate not found. Make sure sidebar-menu-template.js is loaded before this script.');
            return;
        }

        // Create a temporary container to parse HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = window.SidebarMenuTemplate.trim();

        // Clear existing menu items
        sidebarNav.innerHTML = '';

        // Move all menu items from template to sidebar
        const menuItems = tempDiv.querySelectorAll('.nav-item');
        menuItems.forEach((item, index) => {
            // Fix clipPath IDs to avoid conflicts
            const svg = item.querySelector('svg');
            if (svg) {
                const clipPath = svg.querySelector('clipPath');
                if (clipPath) {
                    const uniqueId = `aff-clip-path-${Date.now()}-${index}`;
                    clipPath.id = uniqueId;
                    
                    // Update clip-path references
                    const gWithClipPath = svg.querySelector('[clip-path]');
                    if (gWithClipPath) {
                        gWithClipPath.setAttribute('clip-path', `url(#${uniqueId})`);
                    }
                }
            }
            sidebarNav.appendChild(item);
        });

        // Set active state based on current page
        setActiveMenu(getCurrentPage());
    }

    /**
     * Set active menu item
     */
    function setActiveMenu(currentPage) {
        if (!currentPage) return;

        const menuItems = document.querySelectorAll('.sidebar-nav .nav-item');
        menuItems.forEach(item => {
            const menuItem = item.getAttribute('data-menu-item');
            if (menuItem === currentPage) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Load menu when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadMenu);
    } else {
        loadMenu();
    }
})();
