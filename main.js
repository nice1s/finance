const btn = document.getElementById("btn");
const nav = document.getElementById("nav");

btn.onclick = function () {
    btn.classList.toggle("active");
    nav.classList.toggle("active");
}
document.getElementById("click1").onclick = function () {
    btn.classList.remove("active");
    nav.classList.remove("active");
}
document.getElementById("click2").onclick = function () {
    btn.classList.remove("active");
    nav.classList.remove("active");
}
document.getElementById("click3").onclick = function () {
    btn.classList.remove("active");
    nav.classList.remove("active");
}
document.getElementById("click4").onclick = function () {
    btn.classList.remove("active");
    nav.classList.remove("active");
}
document.getElementById("click5").onclick = function () {
    btn.classList.remove("active");
    nav.classList.remove("active");
}