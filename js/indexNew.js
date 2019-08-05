const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

//Example Nav Logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//nav bar
let navBar = document.querySelectorAll("a");
navBar[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[4].textContent = siteContent["nav"]["nav-item-5"];
navBar[5].textContent = siteContent["nav"]["nav-item-6"];

for (i = 0; i < 6; i++) {
  navBar[i].style.color = "green";
}

let nav = document.querySelector("nav");
let navA1 = document.createElement("a");
let navA2 = document.createElement("a");

navA1.textContent = "Get it";
navA2.textContent = "Got it";

nav.appendChild(navA1);
nav.prepend(navA2);

//top content
let header = document.querySelector(".cta-text h1");
header.textContent = siteContent["cta"]["h1"];
let button = document.querySelector(".cta-text button");
button.textContent = siteContent["cta"]["button"];
let topImg = document.getElementById("cta-img");
topImg.setAttribute("src", siteContent["cta"]["img-src"]);

//main content
let titles = document.querySelectorAll(".text-content h4");
titles[0].textContent = siteContent["main-content"]["features-h4"];
titles[1].textContent = siteContent["main-content"]["about-h4"];
titles[2].textContent = siteContent["main-content"]["services-h4"];
titles[3].textContent = siteContent["main-content"]["product-h4"];
titles[4].textContent = siteContent["main-content"]["vision-h4"];

let paragraphs = document.querySelectorAll(".text-content p");
paragraphs[0].textContent = siteContent["main-content"]["features-content"];
paragraphs[1].textContent = siteContent["main-content"]["about-content"];
paragraphs[2].textContent = siteContent["main-content"]["services-content"];
paragraphs[3].textContent = siteContent["main-content"]["product-content"];
paragraphs[4].textContent = siteContent["main-content"]["vision-content"];

let midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//Contact info
let contact = document.querySelectorAll(".contact h4");
contact[0].textContent = siteContent["contact"]["contact-h4"];

let contacts = document.querySelectorAll(".contact p");
contacts[0].textContent = siteContent["contact"]["address"];
contacts[1].textContent = siteContent["contact"]["phone"];
contacts[2].textContent = siteContent["contact"]["email"];

//footer
let footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];
