const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.navList');
const navLines = document.querySelectorAll('.hamburger_line');
const navBar = document.querySelector('.navBar');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('toggle');
    navLines[0].classList.toggle('line1');
    navLines[1].classList.toggle('line2');

});

document.body.addEventListener('click', (event) => {
    let clickedInNavList = navList.contains(event.target);
    let clickedInNavBar = navBar.contains(event.target);

    if (!clickedInNavList && !clickedInNavBar) {
        if (navList.classList.contains('toggle')) {
            navList.classList.remove('toggle');
            navLines[0].classList.remove('line1');
            navLines[1].classList.remove('line2');
        };
    };

});