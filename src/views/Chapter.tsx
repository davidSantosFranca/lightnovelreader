// function component
import { useEffect } from 'react';
import { useLoadChapter } from '../hooks/useLoadChapter';
import { useScrollPosition } from '../hooks/useScrollPostion';
export default function Chapter({name, series}:{name?:string, series:'tsukimichi'}) {
    const {chapter, loading} = useLoadChapter(name, series);
    const{updateScrollPosition, chapterPosition} = useScrollPosition({loading, series, name});

    useEffect(() => {
        if (loading) return;
        //go to position
        const target = document.getElementById("chapter");
        if(!target) return;
        target.scrollTop = target.scrollHeight * chapterPosition;
    },[chapterPosition, chapter, loading, series, name]);
    return (
    <div id="chapter" onScroll={(e)=>{
        const target = e.target;
        if(target instanceof HTMLElement)
          updateScrollPosition(target.scrollTop/target.scrollHeight);
    }}>
      {chapter}
    </div>
  );
}