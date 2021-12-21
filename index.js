window.addEventListener('DOMContentLoaded', (event) => {

    //on page load, fade in the title, subtitle, and scrolling tooltip
    //one after the other.
    setTimeout(() => {
        document.getElementById("name").classList.add("fadeIn");
        setTimeout(() => {
            document.getElementById("subtitle").classList.add("fadeIn");
            setTimeout(() => {
                document.getElementById("scrollTip").classList.add("fadeIn");
            }, 250);
        }, 750);
    }, 200);
});


document.querySelector("span[name='Home']").classList.add('active');





document.getElementById("scrollTip").onclick = () => {

    window.scroll({
        top: 1000,
        behavior: "smooth"
    });



}
document.body.onclick = (e) => {
    e = window.event ? event.srcElement.parentElement : e.target.parentElement;


    if (e.className && e.className.indexOf('port-card') != -1) {
        window.open(e.getAttribute("data-url"), "_blank");
    }

    if (e.className && e.className.indexOf('nav-link')!=-1) {
        document.location.href = e.querySelector("span").getAttribute("name") + ".html";
    }

    console.log(e);
}