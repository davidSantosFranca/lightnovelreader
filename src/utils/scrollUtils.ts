const localStorage = window.localStorage;

function getScrollPosition() {
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  return { scrollX, scrollY };
}

// save the current scroll position to local storage considering the % to the full height of the scroll
function saveScrollPosition() {
  const { scrollY } = getScrollPosition();
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollPosition = scrollY / scrollHeight;
  localStorage.setItem("scrollPosition", scrollPosition.toString());
}

function getRelativeScrollPosition() {
  const scrollY = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight;
  return (scrollY / scrollHeight).toFixed(2).toString();
}

// restore the scroll position from local storage
function restoreScrollPosition() {
  const scrollPosition = Number(localStorage.getItem("scrollPosition"));
  const scrollHeight = document.documentElement.scrollHeight;
  window.scrollTo(0, scrollPosition * scrollHeight);
}

// reset the scroll position to the top of the page on local storage
function resetScrollPosition() {
  localStorage.setItem("scrollPosition", "0");
}

// add a listener to the window to save the scroll position on every scroll event
function addScrollListener() {
  window.addEventListener("scroll", saveScrollPosition);
}

// go to scroll position on page load
function goToScrollPosition() {
  restoreScrollPosition();
}

export {
  getRelativeScrollPosition,
  saveScrollPosition,
  restoreScrollPosition,
  resetScrollPosition,
  addScrollListener,
  goToScrollPosition,
};
