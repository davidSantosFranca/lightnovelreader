import './App.css'
import Chapter from './views/Chapter'
import { ChaptersDropdown } from './views/ChaptersDropdown';
import { useCurrentChapter } from './hooks/useCurrentChapter';

const series = "tsukimichi";

function App() {
  const {chapter, saveCurrent}=useCurrentChapter();
  return (
    <div id="app">
      <ChaptersDropdown setCurrentChapter={(name)=>saveCurrent(name??"")} current={chapter.chapterTitle} series={series}/>
      <Chapter name={chapter.chapterTitle} series={series}/>
    </div>
  )
}

export default App
