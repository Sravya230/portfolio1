
// =====================================================
// PORTFOLIO JAVASCRIPT
// =====================================================


// Display message in console

console.log("Portfolio loaded successfully.");



// =====================================================
// AUTOMATIC COPYRIGHT YEAR
// =====================================================

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}



// =====================================================
// SMOOTH SCROLLING
// =====================================================

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

