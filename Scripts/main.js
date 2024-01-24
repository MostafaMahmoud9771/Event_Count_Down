"use strict";

$(`document`).ready(function () {
  // ======== //
  // Sidebar //
  // ======== //
  let sideBarWidth = $(`#side-bar`).outerWidth(true);
  let openBtnWidth = $(`#side-bar-open-icon`).outerWidth(true);

  function start() {
    $(`#side-bar`).animate({ left: `-${sideBarWidth - openBtnWidth}` }, 1000);
    $(`.singerDesc`).slideUp(1000);
  }

  start();

  $(`#side-bar-open-icon`).on(`click`, function () {
    $(`#side-bar`).animate({ left: 0 }, 1000);
    $(`#side-bar-open-icon`).fadeOut(500);
  });

  $(`#side-bar-close-icon`).on(`click`, function () {
    $(`#side-bar`).animate({ left: `-${sideBarWidth - openBtnWidth}` }, 1000);
    $(`#side-bar-open-icon`).fadeIn(500);
  });

  // ======== //
  // Details //
  // ======== //

  $(`.singerNum`).on(`click`, function (e) {
    $(e.target).next().slideToggle().siblings(`p`).slideUp();
  });

  // ======== //
  // Duration //
  // ======== //
  function countDown() {
    const todayDate = new Date();
    const eventDate = new Date("07/01/2024");
    let remainingTime = eventDate - todayDate;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    const days = Math.floor(remainingTime / day);
    const hours = Math.floor((remainingTime % day) / hour);
    const minutes = Math.floor((remainingTime % hour) / minute);
    const seconds = Math.floor((remainingTime % minute) / second);

    if (remainingTime < 0) {
      window.alert("Unfortunately we have past the event day");
      clearInterval(intervalID);
    } else {
      $(`#days`).html(days);
      $(`#hours`).html(hours);
      $(`#mins`).html(minutes);
      $(`#seconds`).html(seconds);
    }
  }

  let intervalID = setInterval(countDown, 1000);

  // ======== //
  // Contact //
  // ======== //
  $(`textarea`).on(`input`, function (e) {
    let textContent = e.target.value;
    $(`#textarea-chars-num`).html(`${100 - textContent.length}`);
  });
});
