
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import All from './Component/All/All';
import Pc from './Component/Platforms/Pc';
import Browser from './Component/Platforms/Browser';
import Release from './Component/Sort/Release';
import Alphabetical from './Component/Sort/Alphabetical';
import Relevance from './Component/Sort/Relevance';
import Popluarity from './Component/Sort/Popularity';
import Register from './Component/Register/Register';
import Action from './Component/Categories/Action'
import Actionrbg from './Component/Categories/Actionrbg'
import Battle from './Component/Categories/Battle'
import Open from './Component/Categories/Open'
import Racing from './Component/Categories/Racing'
import Shooter from './Component/Categories/Shooter'
import Social from './Component/Categories/Social'
import Zombie from './Component/Categories/Zombie'
import Sports from './Component/Categories/Sports'
import Gamesdetails from './Component/Gamesdetails/Gamesdetails';
import Login from './Component/Login/Login';
import Profile from './Component/Profile/Profile';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode'
import Fantazy from './Component/Categories/Fantazy';
import Flight from './Component/Categories/Flight';
import {Offline} from 'react-detect-offline'
import ErrorPage from './Component/ErrorPage/ErrorPage';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';





function App() {
 
  useEffect(()=>{

    if(localStorage.getItem('userToken') !==null){
      saveUserData();
    }

  } , []) 
  
  const [userData, setuserData] = useState(null);

  function saveUserData() {
    let encodedToken = localStorage.getItem('userToken'); 
  let decodedToken =  jwtDecode(encodedToken);
  setuserData(decodedToken); 
  }

  let routers = createBrowserRouter([

    {path:'/' , element:<Layout setuserData={setuserData} userData={userData}/> ,children:[
  
      {index:true , element:<ProtectedRoute userData={userData}><Home/></ProtectedRoute>},
      {path:'all' , element: <ProtectedRoute userData={userData}><All/></ProtectedRoute>},
      {path:'pc' , element: <ProtectedRoute userData={userData}><Pc/></ProtectedRoute>},
      {path:'browser' , element: <ProtectedRoute userData={userData}><Browser/></ProtectedRoute>},
      {path:'release-date' , element: <ProtectedRoute userData={userData}><Release/></ProtectedRoute>},
      {path:'popularity' , element: <ProtectedRoute userData={userData}><Popluarity/></ProtectedRoute>},
      {path:'alphabetical' , element: <ProtectedRoute userData={userData}><Alphabetical/></ProtectedRoute>},
      {path:'action' , element: <ProtectedRoute userData={userData}><Action/></ProtectedRoute>},
      {path:'actionrbg' , element: <ProtectedRoute userData={userData}><Actionrbg/></ProtectedRoute>},
      {path:'battle' , element: <ProtectedRoute userData={userData}><Battle/></ProtectedRoute>},
      {path:'fantasy' , element: <ProtectedRoute userData={userData}><Fantazy/></ProtectedRoute>},
      {path:'flight' , element: <ProtectedRoute userData={userData}><Flight/></ProtectedRoute>},
      {path:'open' , element: <ProtectedRoute userData={userData}><Open/></ProtectedRoute>},
      {path:'racing' , element: <ProtectedRoute userData={userData}><Racing/></ProtectedRoute>},
      {path:'shooter' , element: <ProtectedRoute userData={userData}><Shooter/></ProtectedRoute>},
      {path:'social' , element: <ProtectedRoute userData={userData}><Social/></ProtectedRoute>},
      {path:'sports' , element: <ProtectedRoute userData={userData}><Sports/></ProtectedRoute>},
      {path:'zombie' , element: <ProtectedRoute userData={userData}><Zombie/></ProtectedRoute>},
      {path:'relevance' , element: <ProtectedRoute userData={userData}><Relevance/></ProtectedRoute>},
      {path:'gamesdetails/:id' , element: <ProtectedRoute userData={userData}><Gamesdetails/></ProtectedRoute>},
      {path:'profile' , element: <ProtectedRoute userData={userData}><Profile userData={userData}/></ProtectedRoute>},
      {path:'register' , element:<Register/> },
      {path:'login' , element:<Login saveUserData={saveUserData}/> },
      {path:'*' , element:<ErrorPage/>}
     
  
    ]}
  
  ])

  return <>

<Offline> <div className='offline'>You Are Offline </div> </Offline>
<RouterProvider router={routers}/>

</>
}

export default App;


