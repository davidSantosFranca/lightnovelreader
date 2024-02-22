import { CurrentState } from "../types/State";

const initialState: CurrentState = {
  current: ["", 0],
  chapters: {},
};

export const setCurrentChapter = (chapter: string) => {
  const state = getCurrentState();
  state.current = [chapter, getChapterPosition(chapter)];
  saveCurrentState(state);
};

export const getCurrentChapter = (): [string, number] => {
  return getCurrentState().current;
};
export const getChapterPosition = (chapter: string): number => {
  return getCurrentState().chapters[chapter] ?? 0;
};

export const setChapterPosition = (chapter: string, position: number) => {
  const state = getCurrentState();
  state.chapters[chapter] = position;
  saveCurrentState(state);
};

export const getCurrentState = (): CurrentState => {
  const state = window.localStorage.getItem("state");
  if (state) {
    return JSON.parse(state);
  }
  return initialState;
};

export const saveCurrentState = (state: CurrentState) => {
  window.localStorage.setItem("state", JSON.stringify(state));
};
