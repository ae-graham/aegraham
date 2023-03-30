document.querySelector('.main-header').style.display='none';
document.getElementById('index').style.display='none';
document.querySelector('.main-footer').style.display='none';
window.addEventListener("load", (event) => {
    const elem = document.getElementById("myBar");
    let width = 0;
    
    let id = setInterval(frame, 200);

    function frame() {
        if (width >= 10) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = 10*width + "%";
        }
    }
})

const loading = document.querySelector('.container-bar')
setTimeout(() => {
    loading.style.display='none';
    document.querySelector('.main-header').style.display='flex';
    document.querySelector('.main-header').style.animation='fade-in 1s';
    document.getElementById('index').style.display='block';
    
    const keyStyle = document.createElement('style');
    document.getElementById('index').appendChild(keyStyle);
    const styleSheet = keyStyle.sheet;
    keyStyle.textContent=`#index {
        animation: fade-in 1s;
    }
    @keyframes fade-in {
        from { opacity: 0; }
        to   { opacity: 1; }
    }`;

    document.querySelector('.main-footer').style.display='block';
    document.querySelector('.main-footer').style.animation='fade-in 1s';
}, 3100);

setTimeout(() => {
    const keyStyle = document.createElement('style');
    document.getElementById('index').appendChild(keyStyle);
    const styleSheet = keyStyle.sheet;
    keyStyle.textContent=`
    #index {
        animation-play-state: paused;
    }
    
    @keyframes fade-in {
        0%   { opacity: 1; }
    }`;
}, 5000);







