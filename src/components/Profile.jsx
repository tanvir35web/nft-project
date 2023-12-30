import React from 'react'
import './ProfileStyle.css'
import profilePhoto from '../assets/Profile/profile-photo.png'

export default function Profile() {
  return (
    <div className='profileContainer'>
      <div className='profileImg'>
        <img className='userProfileImage' src={profilePhoto} alt="User Profile Photo" />
      </div>
      <div className="UserName">MD. JAHIDUL ISLAM</div>
      <div className="designation">UI UX Designer at DocTime Limited</div>
      {/* <hr className="custom-hr"/> */}
    </div>
  )
}
