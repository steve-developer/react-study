import React from 'react';
import './Area.css';


export default function Button({size}){
    if(size === 'big'){
        return <div className="area big">큰 영역</div>
    }else{
        return <div className="area small">작은 영역</div>
    }

}