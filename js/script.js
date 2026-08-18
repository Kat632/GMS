document.addEventListener('DOMContentLoaded', function () {

    // =========================
    // SCROLL DOWN ARROW
    // =========================

    const scrollArrow = document.querySelector('.scroll-down');

    if (scrollArrow) {

        document.body.addEventListener('scroll', function () {

            if (document.body.scrollTop > 50) {
                scrollArrow.classList.add('hidden');
            } else {
                scrollArrow.classList.remove('hidden');
            }

        });

    }


    // =========================
    // HIDE NAVIGATION ON SCROLL
    // =========================

    const header = document.getElementById('header');

    if (header) {

        document.body.addEventListener('scroll', function () {

            const scrollTop = document.body.scrollTop;

            if (scrollTop <= 0) {
                // Back at the top
                header.classList.remove('nav-hidden');
            } else {
                // Anywhere below the top
                header.classList.add('nav-hidden');
            }

        });
    }

    // =========================================================
    // MOBILE NAVIGATION
    // =========================================================

    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileServices = document.querySelector('.mobile-services');
    const mobileServicesToggle = document.querySelector('.mobile-services-toggle');


    // Open / close mobile menu

    if (mobileMenuToggle && mobileMenu) {

        mobileMenuToggle.addEventListener('click', function () {

            const isOpen = mobileMenu.classList.toggle('active');

            mobileMenuToggle.classList.toggle('active');

            mobileMenuToggle.setAttribute('aria-expanded', isOpen);

            mobileMenuToggle.setAttribute(
                'aria-label',
                isOpen ? 'Close navigation' : 'Open navigation'
            );

        });

    }


    // Open / close Services

    if (mobileServicesToggle && mobileServices) {

        mobileServicesToggle.addEventListener('click', function () {

            const isOpen = mobileServices.classList.toggle('active');

            mobileServicesToggle.setAttribute('aria-expanded', isOpen);

        });

    }


    // Close menu when a normal navigation link is clicked

    if (mobileMenu) {

        const mobileLinks = mobileMenu.querySelectorAll(
            '.mobile-menu-links a'
        );

        mobileLinks.forEach(function (link) {

            link.addEventListener('click', function () {

                mobileMenu.classList.remove('active');

                mobileMenuToggle.classList.remove('active');

                mobileMenuToggle.setAttribute(
                    'aria-expanded',
                    'false'
                );

                mobileMenuToggle.setAttribute(
                    'aria-label',
                    'Open navigation'
                );

            });

        });

    }

    // =========================================================
    // CTA EXTENDING ARROW
    // =========================================================

    // =========================================================
    // CTA EXTENDING ARROWS
    // =========================================================

    const ctaButtons = document.querySelectorAll(".cta-arrow-button");
    const footer = document.querySelector("#footer");

    if (ctaButtons.length && footer) {

        ctaButtons.forEach(function (ctaButton) {

            ctaButton.addEventListener("click", function (event) {

                event.preventDefault();

                // Stop arrow
                if (ctaButton.classList.contains("arrow-active")) {

                    ctaButton.classList.remove("arrow-active");

                    ctaButton.style.removeProperty(
                        "--arrow-height"
                    );

                    return;
                }

                // Start arrow

                const buttonRect =
                    ctaButton.getBoundingClientRect();

                const footerRect =
                    footer.getBoundingClientRect();

                const arrowHeight =
                    footerRect.top -
                    buttonRect.bottom -
                    10;

                ctaButton.style.setProperty(
                    "--arrow-height",
                    arrowHeight + "px"
                );

                // Show arrow
                ctaButton.classList.add("arrow-active");

            });

        });

    }

});



