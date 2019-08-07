const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


let textContentNav = document.querySelector('nav').children;
textContentNav[0].textContent = siteContent["nav"]["nav-item-1"];
textContentNav[1].textContent = siteContent["nav"]["nav-item-2"];
textContentNav[2].textContent = siteContent["nav"]["nav-item-3"];
textContentNav[3].textContent = siteContent["nav"]["nav-item-4"];
textContentNav[4].textContent = siteContent["nav"]["nav-item-5"];
textContentNav[5].textContent = siteContent["nav"]['nav-item-6'];


//changes to nav color
for (let i = 0; i < 6; i++) {
    textContentNav[i].style.color = 'green';
};

// added new a tags
const newATag = document.querySelector('nav');
const newAnchor1 = document.createElement('a');
const newAnchor2 = document.createElement('a');
newAnchor1.textContent = 'New Item';
newAnchor2.textContent = 'SALE';
newATag.appendChild(newAnchor1);
newATag.prepend(newAnchor2);

newAnchor1.style.color = 'green';
newAnchor2.style.color = 'green';


let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent['cta']['img-src']);

let button = document.querySelector(".cta .cta-text button");
button.textContent = siteContent['cta']['button'];

let ctah1 = document.querySelector('.cta  .cta-text  h1');
ctah1.textContent = siteContent['cta']['h1'];

let textContentPara = document.querySelectorAll('p');
textContentPara[0].textContent = siteContent['main-content']['features-content'];
textContentPara[1].textContent = siteContent['main-content']['about-content'];
textContentPara[2].textContent = siteContent['main-content']['services-content'];
textContentPara[3].textContent = siteContent['main-content']['product-content'];
textContentPara[4].textContent = siteContent['main-content']['vision-content'];
textContentPara[5].textContent = siteContent['contact']['address'];
textContentPara[6].textContent = siteContent['contact']['phone'];
textContentPara[7].textContent = siteContent['contact']['email'];
textContentPara[8].textContent = siteContent['footer']['copyright'];

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let textContentMain = document.querySelectorAll('h4');
textContentMain[0].textContent = siteContent['main-content']['features-h4'];
textContentMain[1].textContent = siteContent['main-content']['about-h4'];
textContentMain[2].textContent = siteContent['main-content']['services-h4'];
textContentMain[3].textContent = siteContent['main-content']['product-h4'];
textContentMain[4].textContent = siteContent['main-content']['vision-h4'];

let textContentH = document.querySelector('.contact h4');
textContentH.textContent = siteContent['contact']['contact-h4'];

// let textContentP = document.querySelectorAll('p');
// textContentP[0].textContent = siteContent['contact']['address'];
// textContentP[1].textContent = siteContent['contact']['phone'];
// textContentP[2].textContent = siteContent['contact']['email'];

// let footer = document.querySelector('p');
// textContentPara[8].textContent = siteContent['footer']['copyright'];