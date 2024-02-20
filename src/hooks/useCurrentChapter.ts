import { useMemo } from "react";
import {
  useGetStatusQuery,
  usePostStatusMutation,
} from "../api/blobStorage.api";

export const useCurrentChapter = () => {
  const { data } = useGetStatusQuery();
  const [mutation, { isLoading: isSaving, isError: saveError }] =
    usePostStatusMutation();
  const chapter = data ?? {
    chapterPosition: 0,
    chapterTitle: "",
  };
  const setChapter = (chapterTitle: string) => {
    if (isSaving) return;
    if (chapter.chapterTitle === chapterTitle) return;
    mutation({ chapterPosition: "0", chapterTitle });
  };

  useMemo(() => {
    console.log(saveError);
  }, [saveError]);
  return {
    chapter: chapter ?? "",
    saveCurrent: setChapter,
  };
};
