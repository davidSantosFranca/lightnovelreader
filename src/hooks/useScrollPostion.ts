import { useMemo } from "react";
import {
  getChapterPosition,
  setChapterPosition,
} from "../utils/localStorageUtils";

export const useScrollPosition = ({
  loading,
  name,
}: {
  loading: boolean;
  name?: string;
}) => {
  const chapterPosition = useMemo(() => {
    return getChapterPosition(name ?? "scrollPosition");
  }, [name]);

  const updateScrollPosition = (postion: number) => {
    setChapterPosition(name ?? "scrollPosition", postion);
  };
  useMemo(() => {
    if (loading) return;
    //get position from local storage
    if (chapterPosition > 0) {
      const target = document.getElementById("chapter");
      if (!target) return;
      target.scrollTop = target.scrollHeight * chapterPosition;
    }
  }, [loading, chapterPosition]);

  return { updateScrollPosition, chapterPosition };
};
