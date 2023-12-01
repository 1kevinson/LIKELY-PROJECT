import gsap from 'https://cdn.jsdelivr.net/npm/gsap@3.12.2/+esm';
import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.2/+esm';
import Sounds from './Sounds.js';
import Confetti from './Confetti.js';

window.onload = async unit => {
    const POST_SLUG = 'interactive-guide-to-jquery';

    let isHeartFull = false;
    const heartLevels = [10, 30, 50, 100];
    const fillLevels = [5, 15, 25, 40];
    const likeText = document.getElementById('like-text');
    let heart = document.getElementsByClassName('heart')[0];

    heart.addEventListener('click', () => pumpHeart());

    const initLikes = await initLikeCount(POST_SLUG)
        .then((response) => response)
        .catch(error => console.log(error));

    likeText.textContent = initLikes.data.likes;

    let existingVisitor = localStorage.getItem(window.btoa(POST_SLUG));
    let visitorAsJSON = JSON.parse(existingVisitor);
    let visitorStep;

    if (existingVisitor) {
        visitorStep = visitorAsJSON.step;
        if (visitorStep > 3) heart.style.cursor = 'default';
        heartState(visitorStep - 1);
    } else {
        visitorStep = 0;
        updateVisitorStep(visitorStep, POST_SLUG);
    }

    function heartState(stepCount) {
        gsap.to('.curve', {
            bottom: heartLevels[stepCount],
            transformOrigin: 'bottom',
            scaleY: .25,
            duration: .25
        });

        gsap.to('.tank', {
            height: heartLevels[stepCount],
            duration: .15
        });
    }

    async function pumpHeart() {
        if (visitorStep > 3) return;

        await updateLikeCount(POST_SLUG).then((response) => {
            likeText.textContent = response.data.likes;
        }).catch(error => console.log(error));

        gsap.to('.heart', {
            translateZ: visitorStep === 3 ? fillLevels[visitorStep] : 0,
            duration: 0.25
        });

        gsap.to('.curve', {
            bottom: heartLevels[visitorStep],
            transformOrigin: 'bottom',
            scaleY: .25,
            duration: 0.15,
            onComplete: visitorStep < 3 ? Sounds.playInterfaceSound : Sounds.playCartoonJump
        });

        gsap.to('.tank', {
            height: heartLevels[visitorStep],
            duration: 0.15
        });

        gsap.to('.heart', {
            translateZ: visitorStep === 3 ? 0 : fillLevels[visitorStep],
            duration: 0.35
        });

        visitorStep++;

        if (visitorStep > 3) {
            isHeartFull = true;
            Confetti.run();
            heart.style.cursor = 'default';
        }

        updateVisitorStep(visitorStep, POST_SLUG);
    }

    function updateVisitorStep(stepCount, postSlug) {
        let visitorData = {
            step: stepCount,
            state: stepCount > 3 ? 'COMPLETE' : 'LOADING'
        };

        localStorage.setItem(window.btoa(postSlug), JSON.stringify(visitorData));
    }

    async function initLikeCount(slug) {
        return axios.get('http://localhost:3000/likes/find/'.concat(slug));
    }

    async function updateLikeCount(slug) {
        return axios.patch('http://localhost:3000/likes/update/'.concat(slug));
    }
};