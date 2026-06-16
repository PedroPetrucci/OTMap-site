console.log('script.js carregado');

const btn = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");

console.log('btn:', btn);
console.log('nav:', nav);

if (!btn || !nav) {
    console.log("Botão ou nav não encontrados");
} else {
    btn.addEventListener("click", function() {
        console.log("Clique no hamburger");

        btn.classList.toggle("is-active");
        nav.classList.toggle("is-open");

        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!expanded));
    });

    nav.addEventListener("click", function(e) {
        if (e.target.tagName === "A") {
            btn.classList.remove("is-active");
            nav.classList.remove("is-open");
            btn.setAttribute("aria-expanded", "false");
        }
    });
}
