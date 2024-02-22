import { useMemo, useState } from "react";
import {
  getChapterPosition,
  getCurrentChapter,
  setCurrentChapter,
} from "../utils/localStorageUtils";

export const useCurrentChapter = () => {
  const [chapter, setChapter] = useState(getCurrentChapter() ?? ["", 0]);
  useMemo(() => {
    setCurrentChapter(chapter[0]);
    document.title = `${chapter[0]}`;
  }, [chapter]);
  return {
    chapter: chapter,
    saveCurrent: (name: string) => {
      setChapter([name, getChapterPosition(name)]);
    },
  };
};
