import confetti from 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.0/+esm';

export default class Confetti {

    static run() {
        confetti({
            particleCount: 25,
            spread: 85,
            scalar: .85,
            startVelocity: 30,
            angle: 90,
            gravity: 1.25,
            origin: {y: 0.5}
        });
    }
}