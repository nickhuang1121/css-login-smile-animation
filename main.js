let email = document.querySelector(".inputBoard_email");
let password = document.querySelector(".inputBoard_password");

let facial1 = document.querySelectorAll(".cartoon_eyeL,.cartoon_eyeR,.cartoon_mouth");
let facial2 = document.querySelectorAll(".cartoon_face,.cartoon_hair,.cartoon_head");


let hand = document.querySelectorAll(".cartoon_hand");

email.addEventListener("mouseenter", function () {
    facial1.forEach(e => {
        e.classList.add("facial1")
    })
    facial2.forEach(e => {
        e.classList.add("facial2")
    })
});
email.addEventListener("mouseleave", function () {
    facial1.forEach(e => {
        e.classList.remove("facial1")
    })
    facial2.forEach(e => {
        e.classList.remove("facial2")
    })
});


password.addEventListener("mouseenter", function () {
    hand.forEach(e => {
        e.classList.add("show")
    })
});

password.addEventListener("mouseleave", function () {
    hand.forEach(e => {
        e.classList.remove("show")
    })
});