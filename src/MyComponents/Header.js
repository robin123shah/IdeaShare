import React from 'react'
import { HeaderItem } from './HeaderItem'
import { Button } from "react-bootstrap";


export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">All Highlights</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {props.bucket.length === 0 ?

              <li className="nav-item">
                <div className="nav-link active" aria-current="page" href="#">No Buckets</div>
              </li>

              : props.bucket.map((b) => {
                return <HeaderItem bucket={b} key={b.Bsno} />
              })}
          </ul>
          <form className="d-flex">
            <Button variant="primary" onClick={() => { props.BhandleShow() }}>Add Buckets</Button>
          </form>
          <form className="d-flex">
            <Button variant="primary" onClick={() => { props.handleShow() }}>Add Notes</Button>
          </form>
        </div>
      </div>
    </nav>
  )
}
