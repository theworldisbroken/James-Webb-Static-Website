(function init() {
    "use strict";

    function scrollToElement(className) {
        let element = document.getElementsByClassName(className)[0];
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    document.getElementsByClassName('nav__item')[0].addEventListener('click', function () {
        scrollToElement("size");
    });
    document.getElementsByClassName('nav__item')[1].addEventListener('click', function () {
        scrollToElement("infrared");
    });
    document.getElementsByClassName('nav__item')[2].addEventListener('click', function () {
        scrollToElement("collaboration");
    });
    document.getElementsByClassName('nav__item')[3].addEventListener('click', function () {
        scrollToElement("launch");
    });
    document.getElementsByClassName('nav__item')[4].addEventListener('click', function () {
        scrollToElement("discoveries");
    });
    document.getElementsByClassName('nav__item')[5].addEventListener('click', function () {
        scrollToElement("components");
    });
    document.getElementsByClassName('nav__item')[6].addEventListener('click', function () {
        scrollToElement("form");
    });

    // Hamburger icon and navbar
    const hamContainer = document.getElementsByClassName('nav__hamnav-container')[0];
    const hamIcon_white = document.getElementsByClassName('nav__ham-icon')[0];
    const hamIcon_black = document.getElementsByClassName('nav__ham-icon')[1];
    const hamIconX = document.getElementsByClassName('nav__ham-icon-x')[0];
    const navList = document.getElementsByClassName('nav__list')[0];

    function handleResize() {
        if (window.innerWidth < 1018) {
            hamIcon_black.classList.add('hide');
            hamContainer.classList.remove('hide');
            hamContainer.classList.add('show');
            navList.classList.remove('show__ham-nav');
            navList.classList.add('hide');
            if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                hamIcon_white.classList.add('hide');
                hamIcon_black.classList.remove('hide');
                hamIcon_black.classList.add('show');
            }
        } else {
            hamContainer.classList.remove('show');
            hamContainer.classList.add('hide');
            navList.classList.remove('hide');
            navList.classList.add('show__ham-nav');
        }
    }

    hamContainer.addEventListener('click', function () {
        if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            hamIcon_black.classList.toggle('hide');
            hamIconX.classList.toggle('show');
            navList.classList.toggle('show__ham-nav');
        } else {
            navList.classList.toggle('show__ham-nav');
            hamIcon_white.classList.toggle('hide');
            hamIconX.classList.toggle('show');
        }
    });

    window.addEventListener('resize', handleResize);

    handleResize()
    
    // Clicks on Images
    document.getElementById('nasa-logo').addEventListener('click', function () {
        window.open('https://www.nasa.gov/', '_blank');
    });
    document.getElementById('esa-logo').addEventListener('click', function () {
        window.open('https://www.esa.int/', '_blank');
    });
    document.getElementById('asc-logo').addEventListener('click', function () {
        window.open('https://www.asc-csa.gc.ca/eng/', '_blank');
    });
    document.getElementById('size_image_1').addEventListener('click', function () {
        window.open('https://www.vox.com/science-and-health/22664709/james-webb-space-telescope-launch-date-december-science-hubble', '_blank');
    });
    document.getElementById('size_image_2').addEventListener('click', function () {
        window.open('https://www.nasa.gov/wp-content/uploads/2019/08/right.jpeg', '_blank');
    });
    document.getElementById('infrared_image').addEventListener('click', function () {
        window.open('https://www.asc-csa.gc.ca/eng/blog/2021/07/23/how-webb-stays-cool.asp', '_blank');
    });
    document.getElementById('discoveries_image_1').addEventListener('click', function () {
        window.open('https://esawebb.org/images/weic2205a/', '_blank');
    });
    document.getElementById('discoveries_image_2').addEventListener('click', function () {
        window.open('https://esawebb.org/images/EIGER1/', '_blank');
    });
    document.getElementById('discoveries_image_3').addEventListener('click', function () {
        window.open('https://esawebb.org/images/potm2305a/', '_blank');
    });
    document.getElementById('discoveries_image_4').addEventListener('click', function () {
        window.open('https://esawebb.org/images/weic2212a/', '_blank');
    });

    // Scroll To Top Button
    const button = document.getElementById("scrollToTopBthn");
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 600) {
            button.classList.add("show");
            // Collaboration Icons Animations
            if(document.documentElement.scrollTop > 2100){
                document.getElementById('nasa-logo').classList.add("show-fade");
                document.getElementById('esa-logo').classList.add("show-fade");
                document.getElementById('asc-logo').classList.add("show-fade");
            }
        } else {
            button.classList.remove("show"); 
        }
    };
    button.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Header Images
    let images = [
        "https://cdn.esawebb.org/archives/images/screen/weic2205a.jpg",
        "https://cdn.esawebb.org/archives/images/screen/EIGER1.jpg",
        "https://cdn.esawebb.org/archives/images/screen/potm2305a.jpg",
        "https://cdn.esawebb.org/archives/images/screen/weic2212a.jpg"
    ];
    let currentImageIndex = 0;
    let image = document.getElementById("header__image");

    function updateImage() {
        image.src = images[currentImageIndex];
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImage();
    }

    updateImage();

    setInterval(nextImage, 3000);
})();