import React from 'react';
import {Link, useParams} from 'react-router-dom'
import useHook from '../Hooks/HookApi'


export default function Gamesdetails() {

let allGamesDetails = useParams();

let {allApi} = useHook(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${allGamesDetails.id}`);

return <>

<div className='container my-5'>
    <div className='row mt-5'>
        <div className='col-md-4'>
            <div>
                <img className='w-100' src={allApi.thumbnail} alt=''/>
                <div className='row mt-2 w-100 justify-content-between me-0 pe-0'>
                    <div className='col-3 col-lg-2 me-2'>
                        <span className='btn btn-dark2 mb-3 py-2 text-light cursor'>FREE</span>
                    </div>
                    <div className='col me-0 pe-0'>
                        <Link className='btn btn-ftg-blue btn-block  w-100 py-2 me-0'  type="button" name="playnow" target="_blank" >
                            <strong>PLAY NOW</strong>
                            <i className='fas fa-sign-out-alt'></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='col-md-8'>
            <h1 className='text-muted desc'>{allApi.title}</h1>
            <h5 className='mt-3 desc'>About {allApi.title}</h5>
            <p className='desc'>{allApi.description}</p>
            <h5 className='desc' >Minimum System Requirements</h5>

            
            <ul className='list-unstyled ms-2 desc'>
                <li>garaphics: </li>
                <li>memory: </li>
                <li>os:  </li>
                <li>processor: </li>
                <li>storage:</li>
            </ul>
            
            <h4 className='text-muted'>{allApi.title} Screenshots</h4>


   





      
      <h2 className='desc'>Additional Information</h2>
      <hr className='mt-2 mb-3'></hr>
        <div className='row mb-3'>
            <div className='col-6 col-md-4'>
                <span className='text-muted'>Title <br/></span>
                <p className='desc'>{allApi.title}</p>
            </div>
            <div className='col-6 col-md-4'>
                <span className='text-muted'>Developer <br/></span>
                <p className='desc'>{allApi.developer}</p>
            </div>
            <div className='col-6 col-md-4'>
                <span className='text-muted'>Publisher <br/></span>
                <p className='desc'>{allApi.publisher}</p>
            </div>
            <div className='col-6 col-md-4 desc'>
                <span className='text-muted'>Release Date<br/></span>
                <p className='desc'>{allApi.release_date}</p>
            </div>
            <div className='col-6 col-md-4'>
                <span className='text-muted'>Genre<br/></span>
                <p className='desc'>{allApi.genre}</p>
            </div>
            <div className='col-6 col-md-4'>
                <span className='text-muted'>Platform<br/></span>
                <i  className='fab fa-windows me-1 text-muted'></i>
                <span className='desc'>{allApi.platform}</span>
       </div>
      
       
            </div>
        </div>
    </div>
</div>


  </>
}

/*

   <ul className='list-unstyled ms-2'>
                <li>garaphics:{allApi.minimum_system_requirements.graphics} </li>
                <li>memory: {allApi.minimum_system_requirements.memory}</li>
                <li>os: {allApi.minimum_system_requirements.os} </li>
                <li>processor:{allApi.minimum_system_requirements.processor} </li>
                <li>storage: {allApi.minimum_system_requirements.storage}</li>
            </ul>

          <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src={allApi.screenshots[0].image} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" >
    <img src={allApi.screenshots[1].image} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src={allApi.screenshots[2].image} class="d-block w-100" alt="..."/>
   
    </div>
     </div>
      </div>
       </div>*/ 
