import { useMemo, useState } from "react";
import { getCurrent, saveCurrent } from "../utils/currentChapter";

export const useCurrentChapter = () => {
  const [chapter, setChapter] = useState(getCurrent() ?? "");
  useMemo(() => {
    saveCurrent(chapter);
  }, [chapter]);
  return {
    chapter: chapter,
    saveCurrent: setChapter,
  };
};
