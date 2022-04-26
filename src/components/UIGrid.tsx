import '../styles/UIGrid.css';

interface Props {
    width: 1 | 2 | 3 | 4 | 5;
    height: 1 | 2 | 3 | 4 | 5;
    uiElements: JSX.Element[];
};

export function UIGrid({width, height, uiElements}: Props) {   
    return ( 
        <div id="grid" className={`grid-cols-${width} grid-rows-${height}`}>
            {uiElements}
        </div>
    )
}