import React from 'react'
import { Link } from 'react-router-dom';
import moderBottle from "/images/moderBottle.png" ;
import oldmonk from "/images/oldmonk.png" ;
export const Home = () => {
    return (
        <>
    
    <div className="container">
            <aside className="position-relative text-black rounded-lg p-5 text-center">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2 className="display-4 fw-bold">
                            TRY IT !!
                            <br />
                            <span className="d-block fs-3">BEER</span>
                        </h2>

                        <Link className="btn beer-have btn-success d-inline-flex align-items-center mt-3" to="/home">
                            &nbsp;Have Now
                        </Link>
                    </div>

                    <div className="col-md-6 text-center">
                        <img className="img-fluid w-50 download-down" src={moderBottle} />
                    </div>
                </div>
            </aside>

            {/* <div className="d-flex justify-content-center mt-5">
                <img className="img-fluid w-50" src="src\components\images\oldmonk..png" alt="image2" />
            </div> */}
            
            <div id="carouselExampleIndicators" className="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
  <div className='is-pro'>
  <i class="fa-solid fa-user"></i>
  <h2 className='m-5'>ARE YOU A PRO ? </h2>


  </div>
    <div class="carousel-item active ">
      <img src={oldmonk} class="  blent alco-bottle d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item ">
      <img src="images\magicMoment.png" class="alco-bottle  blent d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images\jackDaniels.png" class="alco-bottle blent d-block w-100" alt="..."/>
    </div>
  </div>
  
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
        </>
    );
}