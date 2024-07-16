import { useState, useEffect } from 'react';

function PersistentCounter(){
    const [counter, setCounter] = useState(() => {
        const storaged_counter = localStorage.getItem("counter");
        if(storaged_counter !== null ){
            return parseInt(storaged_counter, 10)
        }
        return 0;
    });

    const increment = () => {
        setCounter(prevCounter => prevCounter + 1);
    }

    const decrement = () => {
        setCounter(prevCounter => prevCounter - 1);
    }

    useEffect(() => {
        localStorage.setItem("counter", counter);
    }, [counter]);

    return(
        <div>
            <button onClick={increment}>Incrementar LocalStorage</button>
            <button onClick={decrement}>Decrementar LocalStorage</button>
            <p>Valor atual do localStorage: {counter}</p>
        </div>
    )
}

export default PersistentCounter;