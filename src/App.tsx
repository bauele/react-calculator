import './App.css';
import Calculator from './components/Calculator';

let calcUI1 = new Array<{}>();
calcUI1.push(
  {
    label: 'accumulator', row: 1, column: 1, width: 4, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "black", "color": "white", "justifyContent": "right", "paddingRight": "10px" }
  },
  {
    label: '7', row: 2, column: 1, width: 1, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "grey" }
  },
  {
    label: '8', row: 2, column: 2, width: 1, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "grey" }
  },
  {
    label: '9', row: 2, column: 3, width: 1, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "grey" }
  },
  {
    label: '/', row: 2, column: 4, width: 1, height: 1, onClick: 'operationClicked', action: 'divide',
    style: { "backgroundColor": "orange" }
  },
  {
    label: '4', row: 3, column: 1, width: 1, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "grey" }
  },
  {
    label: '5', row: 3, column: 2, width: 1, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "grey" }
  },
  {
    label: '6', row: 3, column: 3, width: 1, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "grey" }
  },
  {
    label: '*', row: 3, column: 4, width: 1, height: 1, onClick: 'operationClicked', action: 'multiply',
    style: { "backgroundColor": "orange" }
  },
  {
    label: '1', row: 4, column: 1, width: 1, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "grey" }
  },
  {
    label: '2', row: 4, column: 2, width: 1, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "grey" }
  },
  {
    label: '3', row: 4, column: 3, width: 1, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "grey" }
  },
  {
    label: '-', row: 4, column: 4, width: 1, height: 1, onClick: 'operationClicked', action: 'subtract',
    style: { "backgroundColor": "orange" }
  },
  {
    label: '0', row: 5, column: 1, width: 2, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "grey" }
  },
  {
    label: '=', row: 5, column: 3, width: 1, height: 1, onClick: 'operationClicked',
    style: { "backgroundColor": "orange" }
  },
  {
    label: '+', row: 5, column: 4, width: 1, height: 1, onClick: 'operationClicked', action: 'add',
    style: { "backgroundColor": "orange" }
  },
);

let calcUI2 = new Array<{}>();
calcUI2.push(
  {
    label: 'accumulator', row: 5, column: 1, width: 4, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "orange" }
  },
  {
    label: '7', row: 4, column: 1, width: 1, height: 1, onClick: 'numberClicked',
    style: { "border-radius": "100%", "backgroundColor": "#00BFFF", "color": "white" }
  },
  {
    label: '8', row: 4, column: 2, width: 1, height: 1, onClick: 'numberClicked',
    style: { "border-radius": "100%", "backgroundColor": "#00BFFF", "color": "white" }
  },
  {
    label: '9', row: 4, column: 3, width: 1, height: 1, onClick: 'numberClicked',
    style: { "border-radius": "100%", "backgroundColor": "#00BFFF", "color": "white" }
  },
  {
    label: '/', row: 4, column: 4, width: 1, height: 1, onClick: 'operationClicked', action: 'divide',
    style: { "border-radius": "100%", "backgroundColor": "green", "color": "white" }
  },
  {
    label: '4', row: 3, column: 1, width: 1, height: 1, onClick: 'numberClicked',
    style: { "border-radius": "100%", "backgroundColor": "#00BFFF", "color": "white" }
  },
  {
    label: '5', row: 3, column: 2, width: 1, height: 1, onClick: 'numberClicked',
    style: { "border-radius": "100%", "backgroundColor": "#00BFFF", "color": "white" }
  },
  {
    label: '6', row: 3, column: 3, width: 1, height: 1, onClick: 'numberClicked',
    style: { "border-radius": "100%", "backgroundColor": "#00BFFF", "color": "white" }
  },
  {
    label: '*', row: 3, column: 4, width: 1, height: 1, onClick: 'operationClicked', action: 'multiply',
    style: { "border-radius": "100%", "backgroundColor": "green", "color": "white" }
  },
  {
    label: '1', row: 2, column: 1, width: 1, height: 1, onClick: 'numberClicked',
    style: { "border-radius": "100%", "backgroundColor": "#00BFFF", "color": "white" }
  },
  {
    label: '2', row: 2, column: 2, width: 1, height: 1, onClick: 'numberClicked',
    style: { "border-radius": "100%", "backgroundColor": "#00BFFF", "color": "white" }
  },
  {
    label: '3', row: 2, column: 3, width: 1, height: 1, onClick: 'numberClicked',
    style: { "border-radius": "100%", "backgroundColor": "#00BFFF", "color": "white" }
  },
  {
    label: '-', row: 2, column: 4, width: 1, height: 1, onClick: 'operationClicked', action: 'subtract',
    style: { "border-radius": "100%", "backgroundColor": "green", "color": "white" }
  },
  {
    label: '0', row: 1, column: 1, width: 2, height: 1, onClick: 'numberClicked',
    style: { "border-radius": "100%", "backgroundColor": "#00BFFF", "color": "white" }
  },
  {
    label: '=', row: 1, column: 3, width: 1, height: 1, onClick: 'operationClicked',
    style: { "border-radius": "100%", "backgroundColor": "purple", "color": "white" }
  },
  {
    label: '+', row: 1, column: 4, width: 1, height: 1, onClick: 'operationClicked', action: 'add',
    style: { "border-radius": "100%", "backgroundColor": "green", "color": "white" }
  },
);

let calcUI3 = new Array<{}>();
calcUI3.push(
  {
    label: 'accumulator', row: 1, column: 2, width: 2, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "grey", }
  },
  {
    label: '=', row: 1, column: 1, width: 1, height: 1, onClick: 'operationClicked',
    style: { "backgroundColor": "#FDB232" }
  },
  {
    label: '=', row: 1, column: 4, width: 1, height: 1, onClick: 'operationClicked',
    style: { "backgroundColor": "#FDB232" }
  },
  {
    label: '1', row: 2, column: 1, width: 1, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "#3B55CE" }
  },
  {
    label: '2', row: 2, column: 2, width: 1, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "#3B55CE" }
  },
  {
    label: '3', row: 2, column: 3, width: 1, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "#3B55CE" }
  },
  {
    label: '4', row: 2, column: 4, width: 1, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "#3B55CE" }
  },
  {
    label: '5', row: 3, column: 1, width: 1, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "#3B55CE" }
  },
  {
    label: '6', row: 3, column: 2, width: 1, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "#3B55CE" }
  },
  {
    label: '7', row: 3, column: 3, width: 1, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "#3B55CE" }
  },
  {
    label: '8', row: 3, column: 4, width: 1, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "#3B55CE" }
  },
  {
    label: '9', row: 4, column: 1, width: 4, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "#3B55CE" }
  },
  {
    label: '+', row: 5, column: 1, width: 1, height: 1, onClick: 'operationClicked', action: 'add',
    style: { "backgroundColor": "#FF61BE" }
  },
  {
    label: '-', row: 5, column: 2, width: 1, height: 1, onClick: 'operationClicked', action: 'subtract',
    style: { "backgroundColor": "#FF61BE" }
  },
  {
    label: '*', row: 5, column: 3, width: 1, height: 1, onClick: 'operationClicked', action: 'multiply',
    style: { "backgroundColor": "#FF61BE" }
  },
  {
    label: '/', row: 5, column: 4, width: 1, height: 1, onClick: 'operationClicked', action: 'divide',
    style: { "backgroundColor": "#FF61BE" }
  },
);

let calcUI4 = new Array<{}>();
calcUI4.push(
  {
    label: 'accumulator', row: 1, column: 1, width: 4, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "white" }
  },
  {
    label: '7', row: 2, column: 1, width: 2, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "yellow" }
  },
  {
    label: '9', row: 2, column: 3, width: 1, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "yellow" }
  },
  {
    label: '/', row: 2, column: 4, width: 1, height: 1, onClick: 'operationClicked', action: 'divide',
    style: { "backgroundColor": "purple" }
  },
  {
    label: '5', row: 3, column: 1, width: 3, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "yellow" }
  },
  {
    label: '*', row: 3, column: 4, width: 1, height: 1, onClick: 'operationClicked', action: 'multiply',
    style: { "backgroundColor": "purple" }
  },
  {
    label: '1', row: 4, column: 1, width: 1, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "yellow" }
  },
  {
    label: '3', row: 4, column: 2, width: 2, height: 1, onClick: 'numberClicked',
    style: { "backgroundColor": "yellow" }
  },
  {
    label: '-', row: 4, column: 4, width: 1, height: 1, onClick: 'operationClicked', action: 'subtract',
    style: { "backgroundColor": "purple" }
  },
  {
    label: '=', row: 5, column: 1, width: 3, height: 1, onClick: 'operationClicked',
    style: { "backgroundColor": "green" }
  },
  {
    label: '+', row: 5, column: 4, width: 1, height: 1, onClick: 'operationClicked', action: 'add',
    style: { "backgroundColor": "purple" }
  },
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

      <div style={{ "backgroundColor": "#121212", "color": "white", "border": "1px solid black", "gridRowStart": "2", "gridRowEnd": "3", "gridColumnStart": "1", "gridColumnEnd": "2", "margin": "5px" }}>
        Unintuitive Calculator
        <Calculator uiArray={calcUI3} />
      </div>

      <div style={{ "color": "black", "backgroundImage": "linear-gradient(white, blue)", "border": "1px solid black", "gridRowStart": "2", "gridRowEnd": "3", "gridColumnStart": "2", "gridColumnEnd": "3", "margin": "5px" }}>
        Oops! Only Odds!
        <Calculator uiArray={calcUI4} />
      </div>

    </div>
  );
}

export default App;