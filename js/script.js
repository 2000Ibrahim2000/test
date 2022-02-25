// document.addEventListener('DOMContentLoaded', function () {
//     var dropdownItem = document.querySelector('.dropdown-item');
//     var dropdown = document.querySelector('.dropdown');

//     dropdownItem.addEventListener('mouseenter', function (e) {
//         dropdown.classList.add('dropdown-show');
//     });
//     dropdownItem.addEventListener('mouseleave', function () {
//         dropdown.classList.remove('dropdown-show');
//     })

// })

let menutoggle = document.querySelector(".toggle-menu");
menutoggle.onclick = function() {
    menutoggle.classList.toggle('active')
};

let totop = document.querySelector(".lg");
totop.onclick = function() {
    window.scrollTo({
        top:0,
        behavior: "smooth",
    })
};