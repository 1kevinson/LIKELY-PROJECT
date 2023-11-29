import atropos from 'https://cdn.jsdelivr.net/npm/atropos@2.0.2/+esm';

const heartAtropos = atropos({
    el: '.my-atropos',
    activeOffset: 1,
    shadowScale: 1,
    alwaysActive: true,
    shadow: true,
    shadowOffset: 12.5,
    rotateXMax: 5,
    rotateYMax: 5,
    hightlight: true,
    onEnter() {},
    onLeave() {},
    onRotate(x, y) {}
})