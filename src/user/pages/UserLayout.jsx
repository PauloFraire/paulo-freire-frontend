import React from 'react'
import Header from '../../components/Header'
import UserProfile from './UserProfile'

export default function UserLayout() {
  return (
    <div>
      <Header/>
      <h1>USER LAYOUT</h1>
      <UserProfile/>
    </div>
  )
}
