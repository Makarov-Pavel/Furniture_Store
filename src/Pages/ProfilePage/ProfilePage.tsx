import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProfileHead from '../../components/Profile/ProfileHead'
import ProfileHistory from '../../components/Profile/ProfileHistory'
import ProfileNameChange from '../../components/Profile/ProfileNameChange'
import ProfileSideBar from '../../components/Profile/ProfileSideBar'
import { RootState } from '../../Redux/store'
import './ProfilePage.css'

const Profile: React.FC = React.memo(() => {
  const {status} = useSelector((state:RootState) => state.ProfileSlice)
  return (
    <div>
    <ProfileHead />
    <div className='profileContainer'>
      <ProfileSideBar />
      {status === 'history' && <ProfileHistory/>}
      {status === 'changeName' && <ProfileNameChange/>}
    </div>
    </div>
  )
})

export default Profile