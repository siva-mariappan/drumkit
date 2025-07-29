// Get all drum buttons
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Add click event listeners to all drum buttons
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.classList[0]; // Get first class name (w, a, s, d, j, k, l)
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Add keypress event listener
document.addEventListener("keypress", function(event) {
  makeSound(event.key.toLowerCase());
  buttonAnimation(event.key.toLowerCase());
});

// Add keydown event listener for better responsiveness
document.addEventListener("keydown", function(event) {
  var key = event.key.toLowerCase();
  if (['w', 'a', 's', 'd', 'j', 'k', 'l'].includes(key)) {
    makeSound(key);
    buttonAnimation(key);
  }
});

// Function to play sounds
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
      console.log("Key not assigned: " + key);
  }
}

// Function to animate button press
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  
  if (activeButton) {
    activeButton.classList.add("pressed");
    
    // Remove the pressed class after animation
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 150);
  }
}

// Add some visual feedback on page load
window.addEventListener('load', function() {
  console.log('🥁 Drum Kit loaded! Ready to rock!');
  
  // Add a subtle entrance animation
  const drums = document.querySelectorAll('.drum');
  drums.forEach((drum, index) => {
    drum.style.opacity = '0';
    drum.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      drum.style.transition = 'all 0.5s ease';
      drum.style.opacity = '1';
      drum.style.transform = 'translateY(0)';
    }, index * 100);
  });
});

// Add error handling for audio files
function playAudioSafely(audioPath) {
  try {
    var audio = new Audio(audioPath);
    audio.play().catch(function(error) {
      console.log("Could not play audio: " + audioPath);
      console.error(error);
    });
  } catch (error) {
    console.log("Error creating audio: " + audioPath);
    console.error(error);
  }
}