import { useState } from 'react';

function LimitedCounter(){
    const [counter, setCounter] = useState(0);

    const max_limit = 10;

    const increment = () => {
        if(counter < max_limit){
            setCounter(prevCount => prevCount + 1);
        }
    }

    const decrement = () => {
        setCounter(prevCount => prevCount - 1);
    }

    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increment} disabled={counter === 10}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
            {counter === max_limit && <p>Limite atingido!</p>}
        </div>
    )
}

export default LimitedCounter;