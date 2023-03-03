function ButtonDown ({textDown, operationDown}) {
    
    

    function runClick() {   
        
        operationDown()
    }

    return (
        <button className="buttonDownColor" onClick={runClick}>{textDown}</button>
    )

}

export default ButtonDown