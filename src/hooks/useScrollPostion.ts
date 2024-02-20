import { useMemo } from "react";

export const useScrollPosition = ({
  loading,
  name,
}: {
  loading: boolean;
  name?: string;
}) => {
  const chapterPosition = useMemo(() => {
    return loading || !name
      ? 0
      : parseFloat(localStorage.getItem(`${name}`) ?? "0");
  }, [loading, name]);

  const updateScrollPosition = (postion: number) => {
    localStorage.setItem(`${name}`, postion.toString());
  };
  useMemo(() => {
    if (loading) return;
    //get position from local storage
    const position = localStorage.getItem(`${name}`);
    if (position) {
      const target = document.getElementById("chapter");
      if (!target) return;
      target.scrollTop = target.scrollHeight * parseFloat(position);
    }
  }, [loading, name]);

  return { updateScrollPosition, chapterPosition };
};
