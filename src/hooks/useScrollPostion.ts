import { useMemo } from "react";
import {
  useGetStatusQuery,
  usePostStatusMutation,
} from "../api/blobStorage.api";

export const useScrollPosition = ({
  loading,
  series,
  name,
}: {
  loading: boolean;
  series: string;
  name?: string;
}) => {
  const { data, isSuccess, isLoading, isFetching } = useGetStatusQuery();
  const chapterLoaded = !loading && !isLoading && !isFetching;
  const chapterPosition = isSuccess ? Number(data?.chapterPosition) ?? 0 : 0;
  const [mutation, { isLoading: isSaving, isError: saveError }] =
    usePostStatusMutation();
  const updateScrollPosition = (postion: number) => {
    if (isSaving || (name ?? "").length <= 0) return;
    localStorage.setItem(`${series}-${name}`, postion.toString());
    mutation({ chapterPosition: postion.toString(), chapterTitle: name ?? "" });
  };
  useMemo(() => {
    if (!chapterLoaded) return;
    //get position from local storage
    const position = localStorage.getItem(`${series}-${name}`);
    if (position) {
      const target = document.getElementById("chapter");
      if (!target) return;
      target.scrollTop = target.scrollHeight * parseFloat(position);
    }
  }, [chapterLoaded, series, name]);

  useMemo(() => {
    console.log(saveError);
  }, [saveError]);

  return { updateScrollPosition, chapterPosition };
};
