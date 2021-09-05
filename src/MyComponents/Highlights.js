import React from 'react'
import { HighlighItem } from './HighlighItem'

export const Highlights = (props) => {
    let Style1 = {
        display:"flex",
        "flex-wrap":"wrap"
        
    }
    return (
        <div className = "flex-container" style= {Style1}>
            {props.high.length ===0? "No Highlights to display":
            props.high.map((h)=>{
                return <HighlighItem high = {h} key={h.sno} onDelete={props.onDelete} onEdit = {props.onEdit}/>
            })}
        </div>
    )
}
