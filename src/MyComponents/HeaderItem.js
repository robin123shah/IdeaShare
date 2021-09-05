import React from 'react'

export const HeaderItem = ({ bucket }) => {
    return (
        
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">{bucket.Bname}</a>
        </li>
        
    )
}
