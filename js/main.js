// Kalman Filter defaults to on
window.applyKalmanFilter = true;

predGaze = null;



$(document).mousemove((event) => {
    $('#debugMouseCoords').text(
        "Coordinates: (" + event.pageX + ", " + event.pageY + ")");
});

webgazer.setGazeListener((data, elapsedTime) => {
    if (data == null) {
        return;
    }

    predGaze = data;
    // console.log(elapsedTime);
}).begin();

// $('#webgazerVideoFeed').on('load', () => {
//     console.log("loaded");
// });

// let waitForSomeElement = () => {
//     const container = document.getElementById('webgazerVideoFeed');
//     if (!container) {
//         setTimeout(waitForSomeElement, 50); // give everything some time to render
//     }
//     else {
//         console.log("webcam loaded");

//     }
// };
// waitForSomeElement();

let waitForWebgazerUILoad = () => {
    ele1 = $('#webgazerVideoFeed');
    ele2 = $('#webgazerVideoCanvas');
    ele3 = $('#webgazerFaceOverlay');
    ele4 = $('#webgazerFaceFeedbackBox');
    ele5 = $('#webgazerGazeDot');
    if (ele1.length && ele2.length && ele3.length && ele4.length && ele5.length) {
        console.log("Webcam loaded");
        $('#webgazerVideoFeed').hide();
        $('#webgazerVideoCanvas').hide();
        // $('#webgazerFaceOverlay').hide();
        $('#webgazerFaceFeedbackBox').hide();
        $('#webgazerGazeDot').hide();
    }
    else {
        setTimeout(waitForWebgazerUILoad, 50);
    }
};
waitForWebgazerUILoad();