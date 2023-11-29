import confetti from 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.0/+esm';

export default class Confetti {

    static run() {
        confetti({
            particleCount: 12.5,
            spread: 200,
            scalar: 1.35,
            decay: .94,
            startVelocity: 17.5,
            angle: 90,
            gravity: 1.75,
            origin: { y: .5, x: .425 } // get the position of the heart on the screen
        });
    }
}