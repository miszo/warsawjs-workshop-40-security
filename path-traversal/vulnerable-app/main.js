(() => {
    const files = [
        'home.html',
        'contact.html'
    ];

    const navigate = async (page) => {
        if (!files.includes(page)) {
            console.warn('Access denied!');
            return;
        }
        const $page = document.querySelector('#page');
        const response = await fetch(`pages/${page}`);
        $page.innerHTML = await response.text();
    };

    const main = async () => {
        await navigate('home.html')
    };

    window.addEventListener('DOMContentLoaded', async () => {
        await main();
    });

    window.addEventListener('hashchange', async () => {
        const page = location.hash.substring(2);
        await navigate(page);
    });
})();