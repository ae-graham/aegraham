function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
    
function closeNav() {
    if (window.innerWidth < 769) {
        document.getElementById("myNav").style.width = "0%";
    } else {
        document.getElementById("myNav").style.width = "auto";
    }
    
} 

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        document.getElementById("myNav").style.width = "auto";
    } else {
        document.getElementById("myNav").style.width = "0%"
    }
});
