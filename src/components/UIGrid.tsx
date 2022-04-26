import '../styles/UIGrid.css';

interface Props {
    width: 1 | 2 | 3 | 4 | 5;
    height: 1 | 2 | 3 | 4 | 5;
    cells: number[];
};

export function UIGrid( {width, height, cells}: Props) {
    const cellComponents = cells.map( (x) => <div className="cell" key={x}>{x}</div>);
    
    return ( 
        <div className={`grid grid-cols-${width}`}>
            {cellComponents}
        </div>
    )
}