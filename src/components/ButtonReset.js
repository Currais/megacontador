function ButtonReset ({textReset, operationReset}) {
    
    

    function runClick() {   
        
        operationReset()
    }

    return (
        <button className="buttonResetColor" onClick={runClick}>{textReset}</button>
    )

}

export default ButtonReset