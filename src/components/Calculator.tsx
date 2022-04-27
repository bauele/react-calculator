import { UIGrid } from './UIGrid';
import UIElement from './UIElement';
import '../styles/Calculator.css';
import { useState, useEffect } from 'react';

interface Props {
    uiArray: {}[];
}

function Calculator({uiArray}: Props) {
    const [accumulator, setAccumulator] = useState(0);
    const [operation, setOperation] = useState('');

    let uiElements = uiArray.map((x: any) => {
        return (
            <UIElement
                key = {x.label}
                label = {matchLabel(x.label)}
                row={x.row}
                column={x.column}
                width={x.width}
                height={x.height}
                onClick={ () => {
                    if (x.onClick === 'numberClicked') {
                        return numberClicked(x.label);
                    }
                    else if (x.onClick === 'operationClicked') {
                        return operationClicked(x.label, x.action);
                    }
                }}
                action={x.action? x.action: null} 
                style={x.style? x.style: {} }/>
        )
    })

    function matchLabel(value: string) {
        if (value === 'accumulator') {
            return accumulator.toString();
        }
        else {
            return value;
        }
    }

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