import '../styles/UIGrid.css';
import UIElement from './UIElement';

interface Props {
    width: 1 | 2 | 3 | 4 | 5;
    height: 1 | 2 | 3 | 4 | 5;
    uiElements: UIElement[];
};

export function UIGrid( {width, height, uiElements}: Props) {
    const cellComponents = uiElements.map( (x: UIElement) => {
        let styleObject = {
            "color": "red",
            "gridRowStart": x.row,
            "gridRowEnd": x.row + x.height,            
            "gridColumnStart": x.column,
            "gridColumnEnd": x.column + x.width
        }

        return <div id={x.label} style={styleObject} className="cell" key={x.label}>{x.label}</div>
    });
    
    return ( 
        <div id="grid" className={`grid-cols-${width} grid-rows-${height}`}>
            {cellComponents}
        </div>
    )
}