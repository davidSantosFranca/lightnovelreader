import './App.css'
import Chapter from './views/Chapter'
import { ChaptersDropdown } from './components/ChaptersDropdown';
import { useCurrentChapter } from './hooks/useCurrentChapter';
import { useStateMonitor } from './hooks/useStateMonitor';

const series = "tsukimichi";

function App() {
  const {chapter, saveCurrent}=useCurrentChapter();
  useStateMonitor();

  const [name] = chapter;
  return (
    <div id="app">
      <div>
        <ChaptersDropdown setCurrentChapter={(name)=>saveCurrent(name??"")} current={name} series={series}/>
      </div>
      <Chapter name={name} series={series}/>
    </div>
  )
}

export default App
