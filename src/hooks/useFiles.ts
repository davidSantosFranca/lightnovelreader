import { useMemo, useState } from "react";

//declare custom hook
export const useChaptersList = (series:string) => {
    const [data, setData] = useState([] as string[]);
    useMemo(() => {
    //fetch chapter from server in folder lightnovels
    fetch(`lightnovels/${series}/files.json`).then(async (res) => {
        if (res.ok) {
            setData((await res.json()).chapters);
            return;
        }
    }).catch((error) => {
        console.log(error);
    })}, [series]);

  return data;
};