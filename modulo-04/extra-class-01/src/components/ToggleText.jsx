import { useState } from 'react';

function ToggleText(){
    const [isVisible, setIsVisible] = useState(true);

    const changeVisibility = () => {
        setIsVisible(visibility => !visibility);
    }

    return (
        <div>
            <button onClick={changeVisibility}>Trocar visibilidade</button>
            {isVisible ? <p>Se você estiver lendo isso está visível</p> : <p></p>}
        </div>
    )

}

export default ToggleText;