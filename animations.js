var colorfulHeading = null;
var sprites = null;
var count = 0;
const steadyColor = "#E38880";

// https://www.w3schools.com/js/js_random.asp
// Math.random() always returns a number lower than 1.
// Math.random() & Math.floor() can be used to return random integers.
// Math.floor(Math.random() * 256) will return a random integer from 0 to 255.
function getColor() {
  return Math.floor(Math.random() * count);
}

function getColorString() {
  return "rgba(" + getColor() + ", " + getColor() + ", " + getColor() + ", 1)";
}

function updateHeading() {
  if (count % 64 == 0) {
    colorfulHeading.style.color = getColorString();
  } else if (count % 32 == 0) {
    colorfulHeading.style.color = steadyColor;
  }
}

function getNewSpriteSrc(currSrc) {
  let path = currSrc.substring(0, currSrc.length - 4);
  let extension = currSrc.substring(currSrc.length - 4, currSrc.length);
  let frameIndex = path.length - 1;
  if (currSrc.charAt(frameIndex) == '1') {
    return (path.substring(0, frameIndex) + "2" + extension);
  }

  return (path.substring(0, frameIndex) + "1" + extension);
}

// https://www.w3schools.com/jsref/prop_img_src.asp
function switchSprite(currSprite) {
  currSprite.src = getNewSpriteSrc(currSprite.src);
}

function updateSprites() {
  if (count % 32 == 0) {
    sprites.forEach((currSprite) => switchSprite(currSprite));
  }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
function update(timestamp){
  count += 1;
  if (count >= 256) count = 0;
  updateHeading();
  updateSprites();
  requestAnimationFrame(update);
}

// https://stackoverflow.com/questions/8739605/getelementbyid-returns-null
// https://www.reddit.com/r/AskProgramming/comments/z7xheo/how_do_i_run_something_every_frame_in_javascript/
// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
// https://codedamn.com/news/javascript/how-to-fix-typeerror-foreach-is-not-a-function-in-javascript
window.addEventListener("load", (event) => {
  colorfulHeading = document.getElementById('colorful-heading');
  sprites = Array.from(document.getElementsByClassName('animatedSprite'));
  requestAnimationFrame(update);
});
