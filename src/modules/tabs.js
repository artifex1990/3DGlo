const tabs = () => {
    const tabPanel = document.querySelector('.service-header');
    const tabs = document.querySelector('.service-header-tab');
    const tabsContent = document.querySelectorAll('.service-tab');

    tabPanel.addEventListener('click', (e) => {
        if (e.target.classList.contains('service-header-tab')) {
            tabs.forEach((tab, index) => {
                if (tab === e.target) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
        }
    });
};

export default tabs;
