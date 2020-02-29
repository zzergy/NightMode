const moonPath = "M31.5 50.5C31.5 78.1142 50.5 100.5 50.5 100.5C22.8858 100.5 0.5 78.1142 0.5 50.5C0.5 22.8858 22.8858 0.5 50.5 0.5C50.5 0.5 31.5 22.8858 31.5 50.5Z";
const sunPath = "M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z";

const darkMode = document.querySelector('#darkMode');
let toggle = false;

darkMode.addEventListener('click', function () {
//Using anime.js
//Morphing the shape, rotating it and changing the background color
//Timeline setup
    const timeline = anime.timeline({
        //duration of the animation
        duration: 750,
        easing: "easeOutExpo"
    });
    //Adding animations to the timeline (transition from sun shape to the moon shape)
    timeline
        .add({
        targets: ".sun",
        d: [{value: toggle ? sunPath : moonPath}]
    })
        .add({
            targets: "#darkMode",
            rotate: toggle ? 0 : 320
        }, "-=350")

        .add({
            targets: "section",
            backgroundColor: toggle ? '#e9e9e9' : '#191919', //if the toggle is true then it's white, if it's false then it's black
            color: toggle ? "#191919" : "#e9e9e9"
        }, "-=800");


    //When the sun icon is clicked the toggle is being switched.
    if (!toggle) {
        toggle = true;
    } else {
        toggle = false;
    }
});
