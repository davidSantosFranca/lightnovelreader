import { useChaptersList } from "../hooks/useFiles";

export const ChaptersDropdown = ({current, series, setCurrentChapter}:{current?:string, series:"tsukimichi", setCurrentChapter:(name:string)=>void}) => {
    const data = useChaptersList(series);
    
    return (
        <select id="dropdown" value={current} onChange={(e)=>{
            setCurrentChapter(e.currentTarget.value);
            document.title = e.currentTarget.value;
        }}>
            {data.map((chapter) => {
                return <option key={chapter} value={chapter}>{chapter}</option>
            })}
        </select>
    );
}