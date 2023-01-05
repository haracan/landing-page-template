var myFullpage = new fullpage("#fullpage", {
    licenseKey: "gplv3-license",
    scrollOverflow: false,
    autoScrolling: true,
    navigation: true,
    scrollBar: true,
    normalScrollElements: ".dialog-inner",
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelector(".title");
        const tl = new gsap.timeline({
            delay: 0.5
        });

        tl.fromTo(title, 0.5, {
            y: "50",
            opacity: 0
        }, {
            y: "0",
            opacity: 1
        });

        if (destination.index === 0) {
            const name = section.querySelector(".site-name h1");
            const tl = gsap.timeline({
                ease: "power4",
                delay: 0.5
            });

            tl.fromTo(name, 0.5, {
                x: "50",
                opacity: 0
            }, {
                x: "0",
                opacity: 1
            })

        }

        if (destination.index === 2) {
            const stopShoes = document.querySelectorAll(".stop-1");
            const movShoes = document.querySelectorAll(".mov-1");
            const tl = gsap.timeline({
                defaults: {
                    duration: 1,
                    delay: 0.7,
                    ease: "power2.in"
                }
            });

            tl.fromTo(stopShoes, 0.7, {
                x: "100%",
                opacity: 0.5
            }, {
                x: "-90%",
                opacity: 1,
                ease: "power.in"

            })

            .fromTo(movShoes[0], 2, {
                opacity: 1
            }, {
                opacity: 1
            })

            .fromTo(movShoes[1], 2, {
                opacity: 0
            }, {
                opacity: 1
            })

            .fromTo(movShoes[2], 2, {
                opacity: 0
            }, {
                opacity: 1
            })

            .fromTo(movShoes[3], 2, {
                opacity: 0
            }, {
                opacity: 1
            })

            .fromTo(movShoes[4], 2, {
                opacity: 0
            }, {
                opacity: 1
            })

        }
        if (destination.index === 3) {
            const stopSharp = document.querySelectorAll(".stop-2");
            const movSharp = document.querySelectorAll(".mov-2");
            const tl = gsap.timeline({
                defaults: {
                    duration: 1,
                    delay: 0.7,
                    ease: "power2.in"
                }
            });

            tl.fromTo(stopSharp, 0.7, {
                x: "-100%",
                opacity: 0.5
            }, {
                x: "0",
                opacity: 1,
                ease: "power.in"
            })

            .fromTo(movSharp[0], 2, {
                opacity: 1
            }, {
                opacity: 1
            })

            .fromTo(movSharp[1], 2, {
                opacity: 0
            }, {
                opacity: 1
            })

            .fromTo(movSharp[2], 2, {
                opacity: 0
            }, {
                opacity: 1
            })

            .fromTo(movSharp[3], 2, {
                opacity: 0
            }, {
                opacity: 1
            })

            .fromTo(movSharp[4], 2, {
                opacity: 0
            }, {
                opacity: 1
            })

        }

        if (destination.index === 4) {
            const stopKeys = document.querySelectorAll(".stop-3");
            const movKeys = document.querySelectorAll(".mov-3");
            const tl = gsap.timeline({
                defaults: {
                    duration: 1,
                    delay: 0.7,
                    ease: "power2.in"
                }
            });

            tl.fromTo(stopKeys, 0.7, {
                x: "100%",
                opacity: 0.5
            }, {
                x: "-90%",
                opacity: 1,
                ease: "power.in"
            })

            .fromTo(movKeys[0], 1, {
                opacity: 1
            }, {
                opacity: 1
            })

            .fromTo(movKeys[1], 2, {
                opacity: 0
            }, {
                opacity: 1
            })

            .fromTo(movKeys[2], 2, {
                opacity: 0
            }, {
                opacity: 1
            })

            .fromTo(movKeys[3], 2, {
                opacity: 0
            }, {
                opacity: 1
            })

            .fromTo(movKeys[4], 2, {
                opacity: 0
            }, {
                opacity: 1
            })

        }

    }
});


const myCarousel = new Carousel(document.querySelector(".carousel"), {
    slides: ".carousel__slide",
    Autoplay: {
        timeout: 1000,
    },
    Dots: false,
    Navigation: false,

});