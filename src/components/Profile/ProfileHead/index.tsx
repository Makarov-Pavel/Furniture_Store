import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../Redux/store'
import './ProfileHead.css'

function ProfileHead() {
  const {name} = useSelector((state:RootState) => state.ProfileSlice)
  return (
    <div className='headContainer'>
        <img src='images/avatar.jpg' alt='avatar' className='avatar'/>
        <p className='userName'>{name}</p>
    </div>
  )
}

export default ProfileHead