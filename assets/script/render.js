(async () => {
    const components = [
        'Navbar',
        'home',
        'about',
        'skills',
        'cerificate',
        'Activity',
        // 'Projects',
        // 'Footer',
    ];
const path_components = './assets/components';
    for (const name of components) {
        const response = await fetch(`${path_components}/${name}.html`);
        const data = await response.text()
        const documents = document.querySelector(name);
        if (documents) documents.innerHTML = data;
    }s
    const scripts = [
        "Navbar",
        "Typing"
    ];
    
const script_components = './assets/script';
    for (const name of scripts) {
        let e = document.createElement("script");
        e.src = `${script_components}/${name}.js`;
        e.defer = true;
        document.head.append(e);
    }
})();
