import { useEffect } from "react";
import { useChaptersList } from "../hooks/useFiles";

export const ChaptersDropdown = ({current, series, setCurrentChapter}:{current?:string, series:"tsukimichi", setCurrentChapter:(name:string)=>void}) => {
    const data = useChaptersList(series);
    useEffect(() => {
        if (!current && data.length > 0) {
            setCurrentChapter(data[0]);
        }
    }, [current, data, setCurrentChapter]);
    //dropdown for chapters
    return (
        <select id="dropdown" value={current} onChange={(e)=>{
            setCurrentChapter(e.currentTarget.value)
        }}>
            {data.map((chapter) => {
                return <option key={chapter} value={chapter}>{chapter}</option>
            })}
        </select>
    );
}