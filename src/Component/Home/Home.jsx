import React from 'react'
import useHook from '../Hooks/HookApi'
import {Link} from 'react-router-dom'
import GamesItem from '../GamesItem/GamesItem';
import Loading from '../Loading/Loading';
export default function Home() {
  
  let {allApi} = useHook("https://free-to-play-games-database.p.rapidapi.com/api/games");
  
  
  
  return <>
  

  <section className='home text-center py-5'>
      <div className='container mb-n2'>
          <h1 className='heading text-muted'>Find & track the best 
          <span className='ftp-blue'> free-to-play </span>
          games!
  </h1>

  <p className='lead text-muted'>Track what you've played and search for what to play next!
  Plus get free premium loot! 
  </p>

  <p>
      <Link className='btn btn-outline-secondary btn-md ml-0' to="/all"> Browse Games</Link>
  </p>
      </div>
  </section>
  

  <div className='row py-3'>
    <h3 className='text-muted dary py-3'><i className='text-muted fas fa-robot mr-2'></i>Personalized Recommendations</h3>
    
    {allApi.length>0? allApi.slice(10,14).map((games , index)=><GamesItem key={index} games={games}/>):<Loading/>}

  </div>


  </>
}