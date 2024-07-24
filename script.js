let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}






let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');






window.onscroll = () => {
section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        navlinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
        sec.classList.add('show-animate');
    }
    else {
        sec.classList.remove('show-animate');
    }
});
    let header = document.querySelectorAll('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    
    function removeClasses() {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }

    // Example usage, maybe after a certain event or condition
    removeClasses(); 


}