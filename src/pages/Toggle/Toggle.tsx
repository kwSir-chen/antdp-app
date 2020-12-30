import React, { useState } from 'react';
import { connect, Dispatch } from 'umi';


const Toggle: React.FC<any> = (props) => {
    const {li} = props
    const { dispatch } = props;
    const add = (values: number = 999) => {
        dispatch({
          type: 'toggle/addLi',
          payload: { values },
        })
    };
    const deleteLi = (index: number = 0) => {
        const { dispatch } = props;
        dispatch({
          type: 'toggle/delete',
          payload: { index },
        })
    };
    return (
        <div>
            <button onClick={()=>add()}>add</button>
            {li.map((li:any,index:number)=>{
                return <li key={index}><span>{li}</span> <button onClick={()=>deleteLi(index)}>delete</button></li>
            })}
        </div>
    )
}

export default connect(({toggle}:any)=>({
    li: toggle.li,
}))(Toggle)