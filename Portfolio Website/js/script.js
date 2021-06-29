// selecting element for page loader
let loader = document.querySelector(".page-loader");

function startLoading() {
    loader.classList.add("slide-down");
    setTimeout(() => {
        loader.style.display = "none";
    }, 4000);
}


// selecting profile lightbox elements
let profileLightbox = document.querySelector(".profile-lightbox");
let lightboxShadow = document.querySelector(".lightbox-shadow");
let closeProfile = document.querySelector("#close-profile");
let lightboxProfileImg = document.querySelector("#my-pic");
let profileContent = document.querySelector(".profile-image");
let profileImg = document.querySelector(".profile-image img");
let controllScrolling = document.querySelector("body");

profileContent.addEventListener('click', function () {
    let getProfileImg = profileImg.src;
    lightboxProfileImg.src = getProfileImg;

    profileLightbox.classList.add("show-profile-lightbox");
    lightboxShadow.classList.add("show-shadow");
    controllScrolling.style.overflow = "hidden";

    closeProfile.onclick = function () {
        profileLightbox.classList.remove("show-profile-lightbox");
        lightboxShadow.classList.remove("show-shadow");
        controllScrolling.style.overflow = "initial";
    }
});


// selecting education section elements
let educationTitle = document.querySelector(".education-title").children;
let myEducation = document.querySelector(".container-myedu");
let myExperience = document.querySelector(".container-myexp");
let mySkills = document.querySelector(".container-skills");

for (let i = 0; i < educationTitle.length; i++) {
    educationTitle[i].addEventListener('click', function () {
        for (let j = 0; j < educationTitle.length; j++) {
            educationTitle[j].classList.remove('active-title');
        }

        educationTitle[i].classList.add('active-title');

        let getDataAttr = this.getAttribute("data-edu");

        myEducation.classList.remove('active-edu');
        myExperience.classList.remove('acitve-edu');
        mySkills.classList.remove('active-edu');

        if (myEducation.getAttribute('data-edu') === getDataAttr) {
            myEducation.classList.add('active-edu');
            myExperience.classList.remove('active-edu');
            mySkills.classList.remove('active-edu');
        } else if (myExperience.getAttribute('data-edu') === getDataAttr) {
            myEducation.classList.remove('active-edu');
            myExperience.classList.add('active-edu');
            mySkills.classList.remove('active-edu');
        } else {
            myEducation.classList.remove('active-edu');
            myExperience.classList.remove('active-edu');
            mySkills.classList.add('active-edu');
        }
    });
}


// selecting header elements, slider & footer
let navbarItems = document.querySelectorAll('.nav-items > li > a');
let sectionItems = document.querySelectorAll('section');
let slider = document.querySelector('.slider');
let sliderText = document.querySelector('.slider-inner');
let footer = document.querySelector('#footer');

for (let i = 0; i < navbarItems.length; i++) {
    navbarItems[i].addEventListener('click', function () {
        for (let j = 0; j < navbarItems.length; j++) {
            navbarItems[j].classList.remove('menu-active');
        }

        this.classList.add('menu-active');
        let attrVal = this.getAttribute('data-list');

        for (let k = 0; k < sectionItems.length; k++) {
            sectionItems[k].classList.remove('active');
            footer.classList.remove('footer-active');

            if (sectionItems[k].getAttribute('id') === attrVal) {
                sectionItems[k].classList.add('active');
                if(attrVal === 'Contact'){
                    footer.classList.add('footer-active');
                }
                slider.classList.add('slide-move');
                sliderText.innerText = sectionItems[k].getAttribute('id');
                setTimeout(() => {
                    slider.classList.remove('slide-move');
                }, 900);
            }
        }
    });
}


// selecting elements for about and hire buttons
let sectionAbout = document.querySelector(".about");
let sectionHome = document.querySelector(".home");
let sectionContact = document.querySelector(".contact");
let menuAbout = document.querySelector("#menu-about");
let menuContact = document.querySelector("#menu-contact");

document.querySelector('#about-btn').onclick = function () {
    for (let j = 0; j < navbarItems.length; j++) {
        navbarItems[j].classList.remove('menu-active');
    }

    menuAbout.classList.add('menu-active');
    sectionAbout.classList.add('active');
    sectionHome.classList.remove('active');
    slider.classList.add('slide-move');
    sliderText.innerText = sectionAbout.getAttribute('id');
    setTimeout(() => {
        slider.classList.remove('slide-move');
    }, 900);
};

document.querySelector("#my-name").onclick = function () {
    for (let j = 0; j < navbarItems.length; j++) {
        navbarItems[j].classList.remove('menu-active');
    }

    for (let k = 0; k < sectionItems.length; k++) {
        sectionItems[k].classList.remove('active');
    }
    
    footer.classList.remove('footer-active');
    menuAbout.classList.add('menu-active');
    sectionAbout.classList.add('active');
    slider.classList.add('slide-move');
    
    sliderText.innerText = sectionAbout.getAttribute('id');
    setTimeout(() => {
        slider.classList.remove('slide-move');
    }, 900);
};

document.querySelector('#hire-me-btn').onclick = function () {
    for (let j = 0; j < navbarItems.length; j++) {
        navbarItems[j].classList.remove('menu-active');
    }

    menuContact.classList.add('menu-active');
    sectionContact.classList.add('active');
    sectionAbout.classList.remove('active');
    slider.classList.add('slide-move');
    sliderText.innerText = sectionContact.getAttribute('id');
    footer.classList.add('footer-active');
    setTimeout(() => {
        slider.classList.remove('slide-move');
    }, 900);
};


// selecting elements for portfolio filter
let filterMenu = document.querySelector('.portfolio-filter-menu').children;
let filterItems = document.querySelector('.portfolio-filter-items').children;

for (let i = 0; i < filterMenu.length; i++) {
    filterMenu[i].addEventListener('click', function () {
        for (let j = 0; j < filterMenu.length; j++) {
            filterMenu[j].classList.remove('filter-active');
        }

        this.classList.add('filter-active');

        let attributeValue = this.getAttribute('data-item');

        for (let k = 0; k < filterItems.length; k++) {
            filterItems[k].classList.remove('active-project-contents');
            filterItems[k].classList.add('delete-project-contents');

            if (filterItems[k].getAttribute('data-item') === attributeValue || attributeValue === "all") {
                filterItems[k].classList.add('active-project-contents');
                filterItems[k].classList.remove('delete-project-contents');
            }
        }
    });
}


// selecting project preview box, preview-category, image and close btn
const containerActive = document.querySelector(".container");
const projectPreview = document.querySelector(".portfolio-lightbox");
const previewCategory = document.querySelector("#lightbox-category");
const previewProjectImg = document.querySelector("#lightbox-image");
const closePreview = document.querySelector("#close-lightbox");
const previewShadow = document.querySelector(".portfolio-lightbox-shadow");

// selecting project preview details
const projectTitle = document.querySelector("#project-title");
const projectCategory = document.querySelector("#project-category");
const dateCreated = document.querySelector("#created-date");
const techonology = document.querySelector("#technology-used");
const projectType = document.querySelector("#project-type");
const onlinePreview = document.querySelector("#view-online");

for (let i = 0; i < filterItems.length; i++) {
    filterItems[i].addEventListener('click', function () {
        let getSelectedImage = filterItems[i].querySelector("img").src;
        let getProjectCategory = filterItems[i].getAttribute("data-item");
        let getProjectId = filterItems[i].getAttribute("id");

        previewProjectImg.src = getSelectedImage;
        previewCategory.textContent = getProjectCategory;
        controllScrolling.style.overflow = "hidden";

        projectPreview.classList.add("show-portfolio-lightbox");
        previewShadow.classList.add("show-portfolio-shadow");
        containerActive.classList.add("container-active");

        closePreview.onclick = function () {
            projectPreview.classList.remove("show-portfolio-lightbox");
            previewShadow.classList.remove("show-portfolio-shadow");
            containerActive.classList.remove("container-active");
            controllScrolling.style.overflow = "initial";
        }

        if (getProjectId === "web1") {
            projectTitle.textContent = "Paperboat Orange";
            projectCategory.textContent = "Web design";
            dateCreated.textContent = "21 Apr, 2021";
            techonology.textContent = "Html, Css, Javascript";
            projectType.textContent = "Front End";
            onlinePreview.textContent = "www.paperboat.com";
        }

        if (getProjectId === "web2") {
            projectTitle.textContent = "Butterfly Blue";
            projectCategory.textContent = "Web design";
            dateCreated.textContent = "14 Mar, 2021";
            techonology.textContent = "Javascript";
            projectType.textContent = "Front End";
            onlinePreview.textContent = "www.butterfly.com";
        }

        if (getProjectId === "web3") {
            projectTitle.textContent = "Butterfly White";
            projectCategory.textContent = "Web design";
            dateCreated.textContent = "03 Jan, 2021";
            techonology.textContent = "Bootstrap";
            projectType.textContent = "Front End";
            onlinePreview.textContent = "www.butterfly.com";
        }

        if (getProjectId === "photo1") {
            projectTitle.textContent = "Flower Image";
            projectCategory.textContent = "Photography";
            dateCreated.textContent = "18 Jan, 2021";
            techonology.textContent = "DSLR";
            projectType.textContent = "Flower";
            onlinePreview.textContent = "www.onlinephoto.com";
        }

        if (getProjectId === "photo2") {
            projectTitle.textContent = "Sky Image";
            projectCategory.textContent = "Photography";
            dateCreated.textContent = "25 Fbr, 2021";
            techonology.textContent = "DSLR";
            projectType.textContent = "Sky";
            onlinePreview.textContent = "www.onlinephoto.com";
        }

        if (getProjectId === "ill3") {
            projectTitle.textContent = "Blackbord Sketch";
            projectCategory.textContent = "Illustration";
            dateCreated.textContent = "08 May, 2021";
            techonology.textContent = "Adobe Illustrator";
            projectType.textContent = "Clock Sketch";
            onlinePreview.textContent = "www.illustrate.com";
        }

        if (getProjectId === "ill1") {
            projectTitle.textContent = "Color template";
            projectCategory.textContent = "Illustration";
            dateCreated.textContent = "07 Mar, 2021";
            techonology.textContent = "Adobe Illustrator";
            projectType.textContent = "Gradient Color";
            onlinePreview.textContent = "www.illustrate.com";
        }

        if (getProjectId === "ill2") {
            projectTitle.textContent = "Pencil Sketch";
            projectCategory.textContent = "Illustration";
            dateCreated.textContent = "22 Apr, 2021";
            techonology.textContent = "Adobe Illustrator";
            projectType.textContent = "Color Pencil";
            onlinePreview.textContent = "www.illustrate.com";
        }
    });
}


// selecting elements for switching main colors
let switchMainColors = document.querySelectorAll('.color-main');
let selectMainColors = document.querySelectorAll('.main-color > span');

for (let i = 0; i < selectMainColors.length; i++) {
    selectMainColors[i].addEventListener('click', () => {
        let getAttrValue = selectMainColors[i].getAttribute('data-color');
        for (let j = 0; j < switchMainColors.length; j++) {
            console.log(switchMainColors[i].getAttribute('title'));
            if (switchMainColors[j].getAttribute('title') === getAttrValue) {
                switchMainColors[j].removeAttribute('disabled');
            } else {
                switchMainColors[j].setAttribute('disabled', 'true');
            }
        }
    });
}


// selection elements for switching style colors
let switchStyleColors = document.querySelectorAll('.color-style');
let selectStyleColors = document.querySelectorAll('.style-color > span');

for (let i = 0; i < selectStyleColors.length; i++) {
    selectStyleColors[i].addEventListener('click', () => {
        let getAttrValue = selectStyleColors[i].getAttribute('data-color');
        for (let j = 0; j < switchStyleColors.length; j++) {
            if (switchStyleColors[j].getAttribute('title') === getAttrValue) {
                switchStyleColors[j].removeAttribute('disabled');
            } else {
                switchStyleColors[j].setAttribute('disabled', 'true');
            }
        }
    });
}


// selecting elements for toggle style switcher 
let styleSwitcher = document.querySelector('.style-switcher');
let switchBtn = document.querySelector('.switch-toggler');

switchBtn.addEventListener('click', () => {
    styleSwitcher.classList.toggle('show-style-switcher');
});


// selecting elements for theme swithing
let themeSwitch = document.querySelectorAll('label > input');

for (let i = 0; i < themeSwitch.length; i++) {
    themeSwitch[i].addEventListener('click', () => {
        if (themeSwitch[i].value === "light") {
            document.body.classList.add('light');
        } else {
            document.body.classList.remove('light');
        }
    });
}


// selecting elements for toggle menu
let toggler = document.querySelector('.toggle-menu');
let toggleBar = document.querySelector('.toggle-bar');
let header = document.querySelector('.header');

toggler.addEventListener('click', function () {
    header.classList.toggle('header-active');
    toggleBar.classList.toggle('toggle-active');
    for (let i = 0; i < navbarItems.length; i++) {
        navbarItems[i].addEventListener('click', function () {
            header.classList.remove('header-active');
            toggleBar.classList.remove('toggle-active');
        });
    }
    document.querySelector("#my-name").addEventListener('click', function () {
        header.classList.remove('header-active');
        toggleBar.classList.remove('toggle-active');
    });
});