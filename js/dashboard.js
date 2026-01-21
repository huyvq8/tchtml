// Dashboard JavaScript

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    // Some pages manage their own header layout and must NOT get an auto-injected mobile menu button.
    const disableAutoMobileMenu =
        document.body.classList.contains('no-auto-mobile-menu') ||
        /(^|\/)faq\.html$/i.test(window.location.pathname.replace(/\\/g, '/'));

    // Add mobile menu button if on mobile
    if (!disableAutoMobileMenu && window.innerWidth <= 768) {
        createMobileMenuButton();
    } else if (disableAutoMobileMenu) {
        const menuBtn = document.querySelector('.mobile-menu-btn');
        if (menuBtn) menuBtn.remove();
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) sidebar.classList.remove('open');
    }

    // Handle window resize
    window.addEventListener('resize', function() {
        // If page disables auto mobile menu, do not interfere with sidebar state.
        if (disableAutoMobileMenu) return;

        if (!disableAutoMobileMenu && window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-btn')) {
                createMobileMenuButton();
            }
        } else {
            const menuBtn = document.querySelector('.mobile-menu-btn');
            if (menuBtn) {
                menuBtn.remove();
            }
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) {
                sidebar.classList.remove('open');
            }
        }
    });

    // Account toggle functionality
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            toggleBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Account dropdown (future implementation)
    const accountToggle = document.querySelector('.account-toggle');
    if (accountToggle) {
        accountToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            // Dropdown functionality can be added here
        });
    }
});

function createMobileMenuButton() {
    if (document.querySelector('.mobile-menu-btn')) return;

    const header = document.querySelector('.dashboard-header');
    const sidebar = document.querySelector('.sidebar');
    
    const menuBtn = document.createElement('button');
    menuBtn.className = 'mobile-menu-btn';
    menuBtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
    `;
    menuBtn.style.cssText = `
        background: transparent;
        border: none;
        color: white;
        cursor: pointer;
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    menuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('open');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });

    const headerContent = header.querySelector('.header-content');
    headerContent.insertBefore(menuBtn, headerContent.firstChild);
}
