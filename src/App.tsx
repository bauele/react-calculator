import './App.css';
import { UIGrid } from './components/UIGrid';
import UIElement from './components/UIElement';

let uiElements = new Array<UIElement>();
uiElements.push({label: '1', row: 1, column: 1, width: 1, height: 1}, 
                {label: '2', row: 1, column: 2, width: 1, height: 1},
                {label: '3', row: 1, column: 3, width: 2, height: 1},
                {label: '', row: 2, column: 1, width: 4, height: 2},
                {label: '4', row: 4, column: 1, width: 4, height: 1},
                );
console.log(uiElements);

function App() {
  return (
    <div className="App">
      <UIGrid width={4} height={5} cells={[1, 2, 3, 4, 5, 6, 7, 8, 9]} uiElements={uiElements}/>
    </div>
  );
}

export default App;