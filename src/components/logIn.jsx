import React from 'react'

export const Login = () => {
  return (
    <>
    <div className="log-in-container">
    <form className=" log-in row g-3 m-3">
  <div className="col-auto">
       <label for="inputmail" className="m-2">Email</label>
    <input type="text" className="form-control" id="inputmail" placeholder="enter mail"/>
  </div>
  <div className="col-auto">
    <label for="inputPassword" className="m-2">password</label>
    <input type="password" className="form-control" id="inputPassword" placeholder="enter mail"/>
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3 text-center">Confirm</button>
  </div>
</form>

    </div>
    </>
  )
}
