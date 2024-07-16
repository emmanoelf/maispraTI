import { useState, useEffect } from 'react';

function RealTimeClock(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const realTime = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(realTime);
        }
    }, []);

    return(
        <div>
            <h2>{time}</h2>
        </div>
    )

}

export default RealTimeClock;