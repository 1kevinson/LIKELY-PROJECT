import gsap from 'https://cdn.jsdelivr.net/npm/gsap@3.12.2/+esm';
import Sounds from "./Sounds.js";
import Confetti from "./Confetti.js";

window.onload = unit => {
    const heartLevels = [10, 30, 50, 100];
    const fillLevels = [5, 15, 25, 40];
    let counter = 0;
    let isHeartFull = false;

    function pumpHeart() {
        if (isHeartFull) return;

        gsap.to('.heart', {
            translateZ: counter === 3 ? fillLevels[counter] : 0,
            duration: 0.25
        });

        gsap.to(".curve", {
            bottom: heartLevels[counter],
            transformOrigin: "bottom",
            scaleY: .25,
            duration: 0.15,
            onComplete: counter < 3 ? Sounds.playInterfaceSound : Sounds.playCartoonJump
        });

        gsap.to(".tank", {
            height: heartLevels[counter],
            duration: 0.15,
        });

        gsap.to('.heart', {
            translateZ: counter === 3 ? 0 : fillLevels[counter],
            duration: 0.35
        });

        if (++counter > 3){
            isHeartFull = true;
            Confetti.run();
            heart.style.cursor = 'default';
        }
    }

    let heart = document.getElementsByClassName('heart')[0];
    heart.addEventListener("click", () => {
        pumpHeart();
    });
}