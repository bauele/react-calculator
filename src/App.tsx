import './App.css';
import Calculator from './components/Calculator';

let calcUI1 = new Array<{}>();
calcUI1.push(
  { label: 'accumulator', row: 1, column: 1, width: 4, height: 1, onClick: 'numberClicked' },
  { label: '7', row: 2, column: 1, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '8', row: 2, column: 2, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '9', row: 2, column: 3, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '/', row: 2, column: 4, width: 1, height: 1, onClick: 'operationClicked', action: 'divide' },
  { label: '4', row: 3, column: 1, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '5', row: 3, column: 2, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '6', row: 3, column: 3, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '*', row: 3, column: 4, width: 1, height: 1, onClick: 'operationClicked', action: 'multiply' },
  { label: '1', row: 4, column: 1, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '2', row: 4, column: 2, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '3', row: 4, column: 3, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '-', row: 4, column: 4, width: 1, height: 1, onClick: 'operationClicked', action: 'subtract' },
  { label: '0', row: 5, column: 1, width: 2, height: 1, onClick: 'numberClicked' },
  { label: '=', row: 5, column: 3, width: 1, height: 1, onClick: 'operationClicked' },
  { label: '+', row: 5, column: 4, width: 1, height: 1, onClick: 'operationClicked', action: 'add' },
);

let calcUI2 = new Array<{}>();
calcUI2.push(
  { label: 'accumulator', row: 5, column: 1, width: 4, height: 1, onClick: 'numberClicked' },
  { label: '7', row: 4, column: 1, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '8', row: 4, column: 2, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '9', row: 4, column: 3, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '/', row: 4, column: 4, width: 1, height: 1, onClick: 'operationClicked', action: 'divide' },
  { label: '4', row: 3, column: 1, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '5', row: 3, column: 2, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '6', row: 3, column: 3, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '*', row: 3, column: 4, width: 1, height: 1, onClick: 'operationClicked', action: 'multiply' },
  { label: '1', row: 2, column: 1, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '2', row: 2, column: 2, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '3', row: 2, column: 3, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '-', row: 2, column: 4, width: 1, height: 1, onClick: 'operationClicked', action: 'subtract' },
  { label: '0', row: 1, column: 1, width: 2, height: 1, onClick: 'numberClicked' },
  { label: '=', row: 1, column: 3, width: 1, height: 1, onClick: 'operationClicked' },
  { label: '+', row: 1, column: 4, width: 1, height: 1, onClick: 'operationClicked', action: 'add' },
);

let calcUI3 = new Array<{}>();
calcUI3.push(
  { label: 'accumulator', row: 1, column: 2, width: 2, height: 1, onClick: 'numberClicked' },
  { label: '=', row: 1, column: 1, width: 1, height: 1, onClick: 'operationClicked' },
  { label: '=', row: 1, column: 4, width: 1, height: 1, onClick: 'operationClicked' },
  { label: '1', row: 2, column: 1, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '2', row: 2, column: 2, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '3', row: 2, column: 3, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '4', row: 2, column: 4, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '5', row: 3, column: 1, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '6', row: 3, column: 2, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '7', row: 3, column: 3, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '8', row: 3, column: 4, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '9', row: 4, column: 1, width: 4, height: 1, onClick: 'numberClicked' },
  { label: '+', row: 5, column: 1, width: 1, height: 1, onClick: 'operationClicked', action: 'add' },
  { label: '-', row: 5, column: 2, width: 1, height: 1, onClick: 'operationClicked', action: 'subtract' },
  { label: '*', row: 5, column: 3, width: 1, height: 1, onClick: 'operationClicked', action: 'multiply' },
  { label: '/', row: 5, column: 4, width: 1, height: 1, onClick: 'operationClicked', action: 'divide' },
);

let calcUI4 = new Array<{}>();
calcUI4.push(
  { label: 'accumulator', row: 1, column: 1, width: 4, height: 1, onClick: 'numberClicked' },
  { label: '7', row: 2, column: 1, width: 2, height: 1, onClick: 'numberClicked' },
  { label: '9', row: 2, column: 3, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '/', row: 2, column: 4, width: 1, height: 1, onClick: 'operationClicked', action: 'divide' },
  { label: '5', row: 3, column: 1, width: 3, height: 1, onClick: 'numberClicked' },
  { label: '*', row: 3, column: 4, width: 1, height: 1, onClick: 'operationClicked', action: 'multiply' },
  { label: '1', row: 4, column: 1, width: 1, height: 1, onClick: 'numberClicked' },
  { label: '3', row: 4, column: 2, width: 2, height: 1, onClick: 'numberClicked' },
  { label: '-', row: 4, column: 4, width: 1, height: 1, onClick: 'operationClicked', action: 'subtract' },
  { label: '=', row: 5, column: 1, width: 3, height: 1, onClick: 'operationClicked' },
  { label: '+', row: 5, column: 4, width: 1, height: 1, onClick: 'operationClicked', action: 'add' },
);

function App() {
  return (
    <div className="App" style={{
      "display": "grid",
      "gridTemplateColumns": "repeat(2, 1fr)",
      "gridTemplateRows": "repeat(2, 1fr)",
      "height": "100vh",
    }} >

      <div style={{ "border": "1px solid black", "gridRowStart": "1", "gridRowEnd": "2", "gridColumnStart": "1", "gridColumnEnd": "2", "margin": "5px" }}>
        Normal Calculator
        <Calculator uiArray={calcUI1} />
      </div>

      <div style={{ "border": "1px solid black", "gridRowStart": "1", "gridRowEnd": "2", "gridColumnStart": "2", "gridColumnEnd": "3", "margin": "5px" }}>
        Inverted Calculator
        <Calculator uiArray={calcUI2} />
      </div>

      <div style={{ "border": "1px solid black", "gridRowStart": "2", "gridRowEnd": "3", "gridColumnStart": "1", "gridColumnEnd": "2", "margin": "5px" }}>
        Unintuitive Calculator
        <Calculator uiArray= {calcUI3} />
      </div>

      <div style={{ "border": "1px solid black", "gridRowStart": "2", "gridRowEnd": "3", "gridColumnStart": "2", "gridColumnEnd": "3", "margin": "5px" }}>
        Oops! Only Odds!
        <Calculator uiArray = {calcUI4} />
      </div>

    </div>
  );
}

export default App;