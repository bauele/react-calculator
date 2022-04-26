import { UIGrid } from './UIGrid';
import UIElement from './UIElement';
import '../styles/Calculator.css';
import { useState, useEffect } from 'react';

function Calculator() {
    const [accumulator, setAccumulator] = useState(0);
    const [operation, setOperation] = useState('');

    let uiArray = new Array<{}>();
    uiArray.push(
        { label: accumulator, row: 1, column: 1, width: 4, height: 1, onClick: numberClicked },
        { label: '7', row: 2, column: 1, width: 1, height: 1, onClick: numberClicked},
        { label: '8', row: 2, column: 2, width: 1, height: 1, onClick: numberClicked },
        { label: '9', row: 2, column: 3, width: 1, height: 1, onClick: numberClicked },
        { label: '/', row: 2, column: 4, width: 1, height: 1, onClick: operationClicked, action: 'divide' },
        { label: '4', row: 3, column: 1, width: 1, height: 1, onClick: numberClicked},
        { label: '5', row: 3, column: 2, width: 1, height: 1, onClick: numberClicked },
        { label: '6', row: 3, column: 3, width: 1, height: 1, onClick: numberClicked },
        { label: '*', row: 3, column: 4, width: 1, height: 1, onClick: operationClicked, action: 'multiply' },
        { label: '1', row: 4, column: 1, width: 1, height: 1, onClick: numberClicked},
        { label: '2', row: 4, column: 2, width: 1, height: 1, onClick: numberClicked },
        { label: '3', row: 4, column: 3, width: 1, height: 1, onClick: numberClicked },
        { label: '-', row: 4, column: 4, width: 1, height: 1, onClick: operationClicked, action: 'subtract' },
        { label: '0', row: 5, column: 1, width: 2, height: 1, onClick: numberClicked },
        { label: '=', row: 5, column: 3, width: 1, height: 1, onClick: operationClicked },
        { label: '+', row: 5, column: 4, width: 1, height: 1, onClick: operationClicked, action: 'add' },
    );

    let uiElements = uiArray.map((x: any) => {
        return (
            <UIElement
                label={x.label}
                row={x.row}
                column={x.column}
                width={x.width}
                height={x.height}
                onClick={x.onClick}
                action={x.action? x.action: null} />
        )
    })

    function numberClicked(value: string) {
        let number = Number.parseInt(value);

        if (accumulator === 0) {
            setAccumulator(number); 
        }
        else {
            if (operation === '') {
                setAccumulator(number);
            }
            else if (operation === 'add') {
                setAccumulator(accumulator + number);
                setOperation('');
            }
            else if (operation === 'subtract') {
                setAccumulator(accumulator - number);
                setOperation('');
            }
            else if (operation === 'multiply') {
                setAccumulator(accumulator * number);
                setOperation('');
            }
            else if (operation === 'divide') {
                setAccumulator(accumulator / number);
                setOperation('');
            }
        }        
    }

    function operationClicked(value: string, action: string) {
        setOperation(action);
    }

    useEffect(() => {
    }, [accumulator])

    return (
        <div id="parent">
            <UIGrid width={4} height={5} uiElements={uiElements} />
        </div>
    )
}

export default Calculator;