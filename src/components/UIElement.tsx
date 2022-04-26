interface Props {
    label: string;
    row: number;
    column: number;
    width: number;
    height: number;
    onClick: any;
    action: any;
}

function UIElement({label, row, column, width, height, onClick, action}: Props) {
    let styleObject = {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "border": "1px solid black",
        "margin": "2px",
        "gridRowStart": row,
        "gridRowEnd": row + height,            
        "gridColumnStart": column,
        "gridColumnEnd": column + width,
    }

    return (
        <div id={label} style={styleObject} onClick={() => onClick(label, action)} key={label}>{label}</div>
    )
}

export default UIElement;