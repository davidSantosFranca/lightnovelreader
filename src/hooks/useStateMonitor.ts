import { useEffect } from "react";
import {
  useGetCurrentStateQuery,
  usePostStatusMutation,
} from "../api/blobStorage.api";
import { getCurrentState, saveCurrentState } from "../utils/localStorageUtils";

export const useStateMonitor = () => {
  const { data, isLoading, isFetching } = useGetCurrentStateQuery();
  const [mutate, { isLoading: isPosting }] = usePostStatusMutation();
  const isLoaded = !isLoading && !isFetching;
  useEffect(() => {
    if (!data || !isLoaded) return;
    saveCurrentState(data);
    console.log("saved");
  }, [data, isLoaded]);

  //post every 30s after getting data
  useEffect(() => {
    if (!isLoaded || isPosting) return;
    const interval = setInterval(() => {
      if (!data || !isLoaded) return;
      mutate(getCurrentState());
      console.log("posted");
    }, 10000);
    return () => clearInterval(interval);
  }, [data, isLoaded, isPosting, mutate]);
};
