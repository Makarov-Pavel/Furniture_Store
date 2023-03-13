import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setStatus } from '../../../Redux/Slices/ProfileSlice'
import { RootState } from '../../../Redux/store'
import './ProfileSideBar.css'

function ProfileSideBar() {
  const dispatch = useDispatch()
  const {status} = useSelector((state:RootState) => state.ProfileSlice)
  return (
    <ul className='sideBarList'>
      <li onClick={()=>dispatch(setStatus('history'))} className={`sideBarListItem ${status==='history' ? 'active' : ''}`}>Purchase history</li>
      <li onClick={()=>dispatch(setStatus('changeName'))} className={`sideBarListItem ${status==='changeName' ? 'active' : ''}`}>Change account name</li>
    </ul>
  )
}

export default ProfileSideBar