import './App.css';
import { UIGrid } from './components/UIGrid';

function App() {
  return (
    <div className="App">
      <UIGrid width={4} height={4} cells={[1, 2, 3, 4, 5, 6, 7, 8, 9]}/>
    </div>
  );
}

export default App;