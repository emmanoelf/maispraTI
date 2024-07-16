import { useState, useEffect } from 'react';

function TitleUpdater(){
    const [number, setNumber] = useState(0);

    const increment = () => {
        setNumber(prevNumber => prevNumber + 1);
    }

    const decrement = () => {
        setNumber(prevNumber => prevNumber - 1);
    }

    useEffect(() => {
        document.title = `Title: ${number}`
    },[number]);

    return(
        <div>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
        </div>
    );

}

export default TitleUpdater;