import { UIGrid } from './UIGrid';
import UIElement from './UIElement';
import '../styles/Calculator.css';
import { useState } from 'react';

let uiElements = new Array<UIElement>();
uiElements.push({label: '1', row: 1, column: 1, width: 1, height: 1}, 
                {label: '2', row: 1, column: 2, width: 1, height: 1},
                {label: '3', row: 1, column: 3, width: 2, height: 1},
                {label: '', row: 2, column: 1, width: 4, height: 2},
                {label: '4', row: 4, column: 1, width: 4, height: 1},
                );

function Calculator() {
    const [accumulator, setAccumulator] = useState(0);
    const [operation, setOperation] = useState();
    
    return (
        <div id="parent">
            <UIGrid width={4} height={5} uiElements={uiElements}/>
        </div>
    )
}

export default Calculator;