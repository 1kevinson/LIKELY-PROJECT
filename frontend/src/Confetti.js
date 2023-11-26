import confetti from 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.0/+esm';

export default class Confetti {

    static run() {
        confetti({
            particleCount: 13.5,
            spread: 200,
            scalar: 1.25,
            decay: .95,
            startVelocity: 17.5,
            angle: 90,
            gravity: 1.5,
            origin: { y: 0.485 }
        });
    }
}