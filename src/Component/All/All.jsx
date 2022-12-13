import React from 'react'
import GamesItem from '../GamesItem/GamesItem';
import useHook from '../Hooks/HookApi'
import Loading from '../Loading/Loading';

export default function Home() {
  
  let {allApi} = useHook( "https://free-to-play-games-database.p.rapidapi.com/api/games");
  
  
  
  return <>
  
  <div className='row py-3'>


{allApi.length>0? allApi.map((games , index)=><GamesItem key={index} games={games}/>):<Loading/>}



  </div>

  </>
}



























/*
import React from 'react'
import { useContext } from 'react'
import { GamesContext } from '../GamesApi/GamesApi'



export default function All() {


  let {gamesAll} = useContext(GamesContext);

 
  return <>

<div className='row py-3'>



{gamesAll.map((game , index)=><div key={index} className='col-md-3'>
    <div className='game'>
        <div className='game card mb-4 grow shadow'>
            <div className='imgALl'>
        <img src={game.thumbnail} className='w-100' alt=''/>
        </div>

        
        <div className='game-body p-3'>
            <div className='d-flex justify-content-between align-items-center'>
                <h4 className='card-title text-truncate'>{game.title}</h4>
                <span className='badge badge-ftg py-2 px-2 float-right'>Free</span>
                </div>
                <p className='text-muted'>{game.short_description.split(" ").splice(0,3).join(" ")}</p>
                <div className='d-flex justify-content-between'>
                    <i className='fas fa-plus-square'></i>
                    <div className='d-flex mb-n2 justify-content-between align-items-center'>
                        <span className='badge badge-secondary text-dark badge-genre me-2'>{game.genre}</span>
                        <i className='fab fa-windows text-muted stretched-link'></i>
                    </div>
                </div>

        
        </div>
    </div>
  </div>
  </div>
   )}

</div>
</>

}



*/