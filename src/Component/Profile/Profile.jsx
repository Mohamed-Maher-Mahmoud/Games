import React from 'react'

export default function Profile({userData}) {

    let{first_name , last_name , email , age } = userData;
  return <>
  
  <h4 className='profile'>Name: {first_name} {last_name}</h4>
  <h4 className='profile'>Email: {email}</h4>
  <h4 className='profile'>Age: {age}</h4>
  </>
}
