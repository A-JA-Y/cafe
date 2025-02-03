document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    const body = document.body;

    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        updateThemeIcon(isDarkMode);
    }

    function updateThemeIcon(isDarkMode) {
        const icon = isDarkMode ? 'sun' : 'moon';
        themeToggle.innerHTML = `<i data-lucide="${icon}"></i>`;
        mobileThemeToggle.innerHTML = `<i data-lucide="${icon}"></i><span>Switch to ${isDarkMode ? 'Light' : 'Dark'} Mode</span>`;
        lucide.createIcons();
    }

    themeToggle.addEventListener('click', toggleDarkMode);
    mobileThemeToggle.addEventListener('click', toggleDarkMode);

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'true' || (savedTheme === null && systemPrefersDark)) {
        body.classList.add('dark-mode');
        updateThemeIcon(true);
    }

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    mobileMenuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('show');
        const isOpen = mobileNav.classList.contains('show');
        mobileMenuToggle.innerHTML = `<i data-lucide="${isOpen ? 'x' : 'menu'}"></i>`;
        lucide.createIcons();
    });

    // Services data
    const services = [
        { icon: 'printer', title: 'Printing & Photocopying', description: 'High-quality prints and copies for all your document needs.' },
        { icon: 'copy', title: 'Stationery', description: 'Wide range of stationery items for office and personal use.' },
        { icon: 'file-text', title: 'Government Forms', description: 'Assistance with filling and submitting various government forms.' },
        { icon: 'credit-card', title: 'Scholarship Applications', description: 'Help with applying for various scholarship programs.' },
        { icon: 'user-plus', title: 'Bank Account Opening', description: 'Assist in opening new bank accounts with partner banks.' },
        { icon: 'smartphone', title: 'Aadhaar Card Updates', description: 'Help with Aadhaar card demographic information updates.' }
    ];

    // Populate services
    const servicesGrid = document.querySelector('.services-grid');
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <i data-lucide="${service.icon}"></i>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        servicesGrid.appendChild(serviceCard);
    });

    // Web development features data
    const webDevFeatures = [
        { icon: 'code', title: 'Custom Web Development', description: 'Tailored websites built to meet your specific needs and goals.' },
        { icon: 'smartphone', title: 'Responsive Design', description: 'Websites that look great on all devices, from desktop to mobile.' },
        { icon: 'search', title: 'SEO Optimization', description: 'Improve your website\'s visibility in search engine results.' },
        { icon: 'zap', title: 'Fast Performance', description: 'Optimized websites that load quickly and run smoothly.' }
    ];

    // Populate web development features
    const webDevGrid = document.querySelector('.webdev-grid');
    webDevFeatures.forEach(feature => {
        const featureCard = document.createElement('div');
        featureCard.className = 'webdev-card';
        featureCard.innerHTML = `
            <i data-lucide="${feature.icon}"></i>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        `;
        webDevGrid.appendChild(featureCard);
    });

    // Initialize Lucide icons for dynamically added content
    lucide.createIcons();

    // Form submission (you may want to add actual form submission logic here)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted! (This is a demo, no actual submission occurred)');
        contactForm.reset();
    });
});