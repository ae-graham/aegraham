function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
    
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
} 

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        document.getElementById("myNav").style.width = "auto";
    } else {
        document.getElementById("myNav").style.width = "0%"
    }
});
