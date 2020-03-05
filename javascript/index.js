
let btn = document.getElementById("nav-btn");
let  nav =  document.getElementById("nav-item");

let hide = true;

btn.addEventListener('click', function () {
    if (hide){
        nav.style.display = "block";
        hide = false;
    } else {
        nav.style.display = "none";
        hide = true;
    }
});