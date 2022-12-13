import React from 'react'
import { Link } from 'react-router-dom'

export default function GamesItem({games}) {
  return <>

  <div  className='col-md-3'>
    <Link to={`/gamesdetails/${games.id}`}>
    <div className='game'>
        <div className='game card  game-body mouse-pointer mb-4 grow shadow un'>
            <div className='imgALl'>
        <img src={games.thumbnail} className='w-100' alt=''/>
        </div>

        
        <div className='game-body p-3'>
            <div className='d-flex justify-content-between align-items-center'>
                <h4 className='card-title text-truncate text-gray'>{games.title}</h4>
                <span className='badge badge-ftg py-2 px-2 float-right'>Free</span>
                </div>
                <p className='text-muted'>{games.short_description.split(" ").splice(0,3).join(" ")}</p>
                <div className='d-flex justify-content-between'>
                    <i className=' text-muted fas fa-plus-square'></i>
                    <div className='d-flex mb-n2 justify-content-between align-items-center'>
                        <span className='badge badge-secondary bg-secondary text-dark badge-genre me-2'>{games.genre}</span>
                        <i className='fab fa-windows text-muted stretched-link'></i>
                    </div>
                </div>

        
        </div>
    </div>
  </div>
 </Link>
  </div>
  
  </>
}
