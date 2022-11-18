import React, { useEffect, useState } from 'react'

const CountEdit = ({ count, setCount }) => {
    const [inputValue, setInputValue] = useState(1);

    const handleSubmit = (e) => {
        if (e.key === 'Enter') {
            setCount(inputValue);
        }
    }

    useEffect(() => {
        setInputValue(count);
    }, [count]);

    return (
        <div className='count-edit-div'>
            <button onClick={() => setCount(count - 1)}>-</button>
            <input type='number' value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleSubmit}  ></input>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default CountEdit