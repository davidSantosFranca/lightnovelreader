import { getChapterPosition, setChapterPosition } from "./localStorageUtils";

function getScrollPosition() {
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  return { scrollX, scrollY };
}

// save the current scroll position to local storage considering the % to the full height of the scroll
function saveScrollPosition(name?: string) {
  const { scrollY } = getScrollPosition();
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollPosition = scrollY / scrollHeight;
  setChapterPosition(name ?? "scrollPosition", scrollPosition);
}

function getRelativeScrollPosition() {
  const scrollY = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight;
  return (scrollY / scrollHeight).toFixed(2).toString();
}

// restore the scroll position from local storage
function restoreScrollPosition(chapter?: string) {
  const scrollPosition = getChapterPosition(chapter ?? "scrollPosition");
  const scrollHeight = document.documentElement.scrollHeight;
  window.scrollTo(0, scrollPosition * scrollHeight);
}

export { getRelativeScrollPosition, saveScrollPosition, restoreScrollPosition };
