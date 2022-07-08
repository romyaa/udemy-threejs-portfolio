import gsap from "gsap";

const bar = document.querySelector(".loading__bar--inner");
const counter_num = document.querySelector(".loading__counter--number");
let c = 0;

let barInterval = setInterval(() => {
    bar.style.width = c + "%";
    counter_num.innerText = c + "%";
    c++;
    if (c === 101) {
        // start the transition
        clearInterval(barInterval);
        // drop the loading bar
        gsap.to(".loading__bar", {
            duration: 5,
            rotate: "-100deg",
            top: "1000%",
        });
        // remove text, counter
        gsap.to(".loading__text, .loading__counter", {
            duration: 0.5,
            opacity: 0,
        });
        // expand border
        gsap.to(".loading__box", {
            duration: 1, 
            height: "500px",
            borderRadius: "50%",
        });
        // change border color
        gsap.to(".loading__box", {
            duration: 3, 
            border: "3px rgb(50,50,50) solid",
        });
        // shrinking, disappearing border
        gsap.to(".loading__box", {
            duration: 3, 
            delay: 1,
            height: "400px",
            width: "400px",
            opacity: 0.1,
        });
        // reveal svg
        gsap.to(".loading__svg", {
            duration: 10,
            opacity: 1,
            rotate: "360deg",
        });
    }
}, 20);