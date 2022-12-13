import React from 'react'
import useHook from '../Hooks/HookApi'
import GamesItem from '../GamesItem/GamesItem';
import Loading from '../Loading/Loading';

export default function Home() {
  
  let {allApi} = useHook( "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical");
  
  
  
  return <>
  
  <div className='row py-3'>


 
  {allApi.length>0? allApi.map((games , index)=><GamesItem key={index} games={games}/>):<Loading/>}



  </div>
  </>
}