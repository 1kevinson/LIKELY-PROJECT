export default class Sounds {
    static playInterfaceSound() {
        const arcadeClick = document.getElementsByTagName("audio")[1];
        arcadeClick.volume = .25;
        arcadeClick.play();
    }

    static playCartoonJump() {
        const cartoonJump = document.getElementsByTagName("audio")[0];
        cartoonJump.volume = .75;
        cartoonJump.play();
    }
}