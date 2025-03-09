import React from 'react'

export default function BatmanI(props) {
  return (
    <>
    <div className="card">
  <div className="for-center"> <img src={props.Image} className="card-img-top batman " alt="img"/></div>

  <div className="card-body text-center">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.desc}</p>
    <a href="" download="ultraBatman.jpg" className="btn btn-primary">download</a>
  </div>
</div>

   
    </>
  )
}
