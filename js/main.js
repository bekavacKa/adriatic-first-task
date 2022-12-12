import data from '../json/data.json' assert {type: 'json'};

let mainTitleSection = document.querySelector('#main-title');
let quickLinksSection = document.querySelector('#quick-links');
let aboutSection = document.querySelector('#about');
let missionsSection = document.querySelector('#missions');
let valuesSection = document.querySelector('#values');
let discoverMoreSection = document.querySelector('#discover-more');
let userAboutUsSection = document.querySelector('#user-about-us');
let meniSection = document.querySelector('#meni-section');

const setMainTitle = () => {
    mainTitleSection.innerHTML = 
    ` 
        <h4 class="col-12 col-md-2 p-2 mx-2">${data.mainTitle}</h4>
    `
};

const setQuickLinks = () => {
    let quickLinksTemplate = '';
    data.quickLinks.map((link, index) => {
        quickLinksTemplate += `<a class="col-5 col-md-2 py-1 mr-1 mb-1 bg-secondary rounded" key=${index}>${link.title}</a>`;
    });
    quickLinksSection.innerHTML = quickLinksTemplate;
};

const setAbout = () => {
    let aboutTemplate = '';
    aboutTemplate += `<h3 class="mb-3">${data.about.seactionTitle}</h3>`;
    aboutTemplate += `<p class="text-justify">${data.about.text}</p>`;
    aboutSection.innerHTML = aboutTemplate;
};

const setMissions = () => {
    let missionsTemplate = '';
    missionsTemplate += `<h3 class="mb-3">${data.mission.sectionTitle}</h3>`;
    missionsTemplate += `<p class="text-justify">${data.mission.textMission}</p>`
    missionsTemplate += `<p class="text-justify">${data.mission.textVision}</p>`
    missionsSection.innerHTML = missionsTemplate;
};

const setValues = () => {
    let cardTemplate = '';
    data.values.items.map((item, index) => {
        cardTemplate += `
            <div class="col-6 col-md-4 d-flex" key=${index}>
                <div class="col-md-12 card mb-4 bg-secondary">
                    <div class="card-body text-center p-0 py-3 d-flex flex-column justify-content-between align-items-center">
                        <img src="./${item.image}" class="rounded pt-3 pb-4 values-image" alt="${item.alt}">
                        <div>
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text">${item.alt}</p>
                        </div>
                    </div>
                </div>
             </div>
        `
    });
    let valuesTemplate = `
        <h3 class="mb-3">${data.values.sectionTitle}</h3>
        <div class="row px-2 px-md-0">
            ${cardTemplate}
        </div>
    `;
    valuesSection.innerHTML = valuesTemplate;
};

const setDiscoverMore = () => {
    let cardTemplate = '';
    data.discoverMore.items.map((item, index) => {
        cardTemplate += `
            <div class="col-12 col-md-6" key=${index}>
                <div class="card mb-4 bg-secondary">
                    <div class="card-body">
                        <h3 class="card-title">${item.title}</h3>
                        <img src="./${item.image}" class="card-img-top" alt="...">
                        <p class="card-text text-right">${item.urlText}</p>
                    </div>
                </div>
            </div>
        `
    });
    let discoverMoreTemplate = `
        <h3 class="mb-3">${data.discoverMore.sectionTitle}</h3>
        <div class="row">
            ${cardTemplate}
        </div>
    `;
    discoverMoreSection.innerHTML = discoverMoreTemplate;
};

const setUserAboutUs = () => {
    let userAboutUsTemplate = '';
    userAboutUsTemplate += `
    <h3 class="mb-3">${data.usersAboutUs.sectionTitle}</h3>
    <div class="card bg-secondary">
        <div class="card-body">
            <p class="card-text text-justify">${data.usersAboutUs.text}</p>
            <h6 class="card-title text-right">${data.usersAboutUs.user}</h6>
        </div>
    </div>
    `;
    userAboutUsSection.innerHTML = userAboutUsTemplate;
};

const setAboutMeni = () => {
    let cardTemplate = '';
    data.aboutMenu.items.map((item, index) => {
        cardTemplate += `
            <li class="nav-item" key=${index}>
                <a class="nav-link ${index === 0 ? 'active' : 'null'} " href="#">${item.title}</a>
            </li>
        `
    });
    let aboutMeniTemplate = `
    <article class="col-11 col-lg-8 py-3 bg-secondary ml-auto my-3 text-center rounded">
        <h5>${data.aboutMenu.title}</h5>
        <ul class="nav flex-column nav-pills">
            ${cardTemplate}
        </ul>
    </article>
    `;
    meniSection.innerHTML += aboutMeniTemplate;
};

const setUsefulLinks = () => {
    let cardTemplate = '';
    data.usefulLinks.items.map((item, index) => {
        cardTemplate += `
            <li class="nav-item key=${index}">
                <a class="nav-link ${index === 0 ? 'active' : 'null'} " href="#">${item.title}</a>
            </li>
        `
    });
    let usefulLinksMeniTemplate = `
    <article class="col-11 col-lg-8 py-3 bg-secondary ml-auto my-3 text-center rounded">
        <h5>${data.usefulLinks.title}</h5>
        <ul class="nav flex-column nav-pills">
            ${cardTemplate}
        </ul>
    </article>
    `;
    meniSection.innerHTML += usefulLinksMeniTemplate;
};

const setAllContent = () => {
    setMainTitle();
    setQuickLinks();
    setAbout();
    setMissions();
    setValues();
    setDiscoverMore();
    setUserAboutUs();
    setAboutMeni();
    setUsefulLinks();
};

setAllContent();