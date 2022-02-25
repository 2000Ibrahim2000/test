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
