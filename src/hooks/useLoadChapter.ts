import { useMemo, useState } from "react";
import { restoreScrollPosition } from "../utils/scrollUtils";

//declare custom hook
export const useLoadChapter = (chapterName?: string, series?: string) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  useMemo(() => {
    //fetch chapter from server in folder lightnovels
    if (!chapterName || !series) return;

    setLoading(true);
    setData("");
    fetch(`lightnovels/${series}/${chapterName}.txt`)
      .then(async (res) => {
        if (res.ok) {
          setData(await res.text());
          restoreScrollPosition(chapterName);
        } else {
          throw new Error("Chapter not found");
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [chapterName, series]);

  return {
    chapter: data,
    loading: loading,
  };
};
