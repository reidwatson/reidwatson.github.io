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



document.getElementById("scrollTip").onclick = () => {

    window.scroll({
        top: 1000,
        behavior: "smooth"
    });

}