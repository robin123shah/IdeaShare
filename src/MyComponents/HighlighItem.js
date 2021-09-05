import React from 'react'


export const HighlighItem = ({ high, onDelete, onEdit }) => {
    let Style = {
        
        padding:"5%",
        margin:"2em",
        width: "40%",
        color:"red"
       
        
    }
    return (
        <div class="card" style={Style}>
            

                <h4>{high.name}</h4>
                <p>{high.highlight}</p>
                
          <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-danger" aria-label="Close" onClick={() => { onDelete(high) }}>Remove</button>
                <button type="button" className="btn btn btn-warning" aria-label="Edit" onClick={() => { onEdit(high) }}>Edit</button>
                </div>    
        </div>
    )
}
