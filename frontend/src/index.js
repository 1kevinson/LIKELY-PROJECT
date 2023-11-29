import gsap from 'https://cdn.jsdelivr.net/npm/gsap@3.12.2/+esm';
import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.2/+esm'
import Sounds from "./Sounds.js";
import Confetti from "./Confetti.js";

window.onload = unit => {
    const likeText = document.getElementById('like-text');
    const heartLevels = [10, 30, 50, 100];
    const fillLevels = [5, 15, 25, 40];
    let counter = 0;
    let isHeartFull = false;

    async function pumpHeart() {
        if (isHeartFull) return;

        const postSlug = 'interactive-guide-to-grid';
        const updatedLike = await updateLikeCount(postSlug).then((response) => {
            likeText.textContent = response.data.likes;
        }).catch(error => console.log(error))

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

        if (++counter > 3) {
            isHeartFull = true;
            Confetti.run();
            heart.style.cursor = 'default';
        }
    }

    async function updateLikeCount(slug) {
        return axios.patch('http://localhost:3000/likes/update/'.concat(slug));
    }

    let heart = document.getElementsByClassName('heart')[0];
    heart.addEventListener("click", () => {
        pumpHeart();
    });
}