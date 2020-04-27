import React from 'react';
import './Avatar.css';

export function Avatar (props){
    let shape = 'square';
    if(props.shape === 'circle'){
        shape = 'circle';
    }
    return (
        <div>
            <img className={shape} src={props.url} style={{width: props.width + 'px'}} />
        </div>
    )
}