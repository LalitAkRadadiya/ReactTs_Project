import React, { useEffect, useState } from 'react'
import C1 from './c1'
import C2 from './c2'

const Condition = ({setParentCount,countValue,children}) => {
    const [count,setCount] = useState(countValue)
    

    return (
        <div>
            {/* {
              props.shouldShowC1 ? <C1 demo={props.shouldShowC1}  /> :<C2/>
            } */}
            count: {count}
            <button onClick={()=>setCount(count+1)} >add</button>
            <button onClick={()=>setCount(count-1)} >substract</button>
            <button onClick={()=>setParentCount(countValue+1)} >parent add</button>
            <button onClick={()=>setParentCount(countValue-1)} >parent substract</button>
        {children}
        </div>
    )
}

export default Condition
