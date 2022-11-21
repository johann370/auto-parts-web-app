import React, { useEffect, useState } from 'react'

const CountEdit = ({ count, setCount }) => {
    return (
        <div className='count-edit-div'>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default CountEdit