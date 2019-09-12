/* eslint-disable no-undef */

// js-task-3

window.onload = function() {
  const allInputs = document.querySelectorAll('.article__input');
  const button = document.getElementById('article__button');
  const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const fullNameValidate = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,16}$/;

  allInputs.forEach((el) => {
    el.onchange = function() {
      const fullName = document.getElementById('article__full-name').value;
      const email = document.getElementById('article__email').value;
      const password = document.getElementById('article__password').value;

      validateField(fullName, email, password);
    };
  });

  function validateField(fullName, email, password) {
    if (fullNameValidate.test(fullName) &&
      emailValidate.test(email) &&
      passwordValidate.test(password)) {
      button.classList.remove('disabled');
    } else {
      button.classList.add('disabled');
    }
  }

  // js-task-4

  // Get the video
  const video = document.getElementsByClassName('banner__video')[0];

  // Get the button
  const btn = document.getElementsByClassName('banner__info__round-button')[0];

  btn.addEventListener('click', myFunction);

  // Pause and play the video, and change the button image
  function myFunction(e) {
    if (video.paused) {
      video.play();
      e.target.src = './img/round-pause-button.svg';
    } else {
      video.pause();
      e.target.src = './img/play-button.svg';
    }
  }
};
