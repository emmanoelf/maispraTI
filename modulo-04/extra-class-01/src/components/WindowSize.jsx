import { useState, useEffect } from 'react'

function WindowSize(){
    const size = window.innerWidth;
    const [width, setWidth] = useState(size);

    const resizeWidth = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', resizeWidth)
    })

    return(
        <h1>Width: {width}</h1>
    )

}

export default WindowSize;