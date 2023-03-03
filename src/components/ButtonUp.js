

function ButtonUp ({textUp, operationUp}) {
    
    

    function runClick() {   
        
        operationUp()
    }

    return (
        <button className="buttonUpColor" onClick={runClick}>{textUp}</button>
    )

}

export default ButtonUp