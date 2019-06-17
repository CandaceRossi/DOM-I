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
logo.setAttribute('src', siteContent["nav"]["img-src"])

// letnewAtag = document.querySelector('nav');
// newATag.append
let navItem1 = document.querySelector('nav > a:first-child');
navItem1.textContent = siteContent["nav"]["nav-item-1"];

let navItem2 = document.querySelector('nav > a:nth-child(2)');
navItem2.textContent = siteContent["nav"]["nav-item-2"];

let navItem3 = document.querySelector('nav > a:nth-child(3)');
navItem3.textContent = siteContent["nav"]["nav-item-3"];

let navItem4 = document.querySelector('nav > a:nth-child(4)');
navItem4.textContent = siteContent["nav"]["nav-item-4"];

let navItem5 = document.querySelector('nav > a:nth-child(5)');
navItem1.textContent = siteContent["nav"]["nav-item-5"];

let navItem6 = document.querySelector('nav > a:nth-child(6)');
navItem6.textContent = siteContent["nav"]['nav-item-6'];

let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent['cta']['img-src']);

let ctah1 = document.querySelector('.cta  .cta-text  h1');
ctah1.textContent = siteContent['cta']['h1'];

let textContentPara = document.querySelectorAll('.textContent');
textContentPara[0].textContent = siteContent['main-content']['features - content'];
textContentPara[1].textContent = siteContent['main-content']['about - content'];
textContentParag[2].textContent = siteContent['main-content']['services - content'];
textContentParag[3].textContent = siteContent['main-content']['product - content'];
textContentParag[4].textContent = siteContent['main-content']['vision - content'];

let middleimg = document.querySelector('.maincontent .middle-img');

let textContentMain = document.querySelectorAll('.textContent');
textContentMain[0].textContent = siteContent['main-content']['features - h4'];
textContentMain[1].textContent = siteContent['main-content']['about - h4'];
textContentMain[2].textContent = siteContent['main-content']['services - h4'];
textContentMain[3].textContent = siteContent['main-content']['product - h4'];
textContentMain[4].textContent = siteContent['main-content']['vision - h4'];