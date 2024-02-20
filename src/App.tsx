import './App.css'
import Chapter from './views/Chapter'
import { ChaptersDropdown } from './components/ChaptersDropdown';
import { useCurrentChapter } from './hooks/useCurrentChapter';
import SaveButton from './components/SaveButton';

const series = "tsukimichi";

function App() {
  const {chapter, saveCurrent}=useCurrentChapter();
  return (
    <div id="app">
      <div>
        <ChaptersDropdown setCurrentChapter={(name)=>saveCurrent(name??"")} current={chapter} series={series}/>
        <SaveButton/>
      </div>
      <Chapter name={chapter} series={series}/>
    </div>
  )
}

export default App
