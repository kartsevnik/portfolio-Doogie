const paths = document.querySelectorAll('svg path');
anime({
    targets: paths[0],
    duration: 2000,
    delay: 200,
    easing: 'easeInOutExpo',
    strokeDashoffset: [anime.setDashoffset, 0],
    fill: [
        anime.setFill,
        '#FFF',
    ],
});
anime({
    targets: paths[1],
    duration: 2000,
    delay: 200,
    easing: 'easeInOutExpo',
    strokeDashoffset: [anime.setDashoffset, 0],
    fill: [
        anime.setFill,
        '#F2726F',
    ],
});

console.log(paths);