document.querySelector('#ResetButtonId').style.display = "none";
var result = document.querySelector('#resultId');
function onPlayclicked() {
    // hide play button
    document.querySelector('#PlayButtonId').style.display = "none";
    // show reset button
    document.querySelector('#ResetButtonId').style.display = "block";
    result.innerHTML = "Played";
}
function onResetClicked() {
    // hide play button
    document.querySelector('#PlayButtonId').style.display = "block";
    // show reset button
    document.querySelector('#ResetButtonId').style.display = "none";
    result.innerHTML = "Clear";
}
const buttonPlay = document.querySelector('#PlayButtonId');
buttonPlay.addEventListener('click', onPlayclicked);


const buttonReset = document.querySelector('#ResetButtonId');
buttonReset.addEventListener('click', onResetClicked);