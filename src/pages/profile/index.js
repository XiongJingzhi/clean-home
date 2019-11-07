import React from 'react'
import { useHistory } from 'react-router-dom'
import HomeLayoyt from '@/layouts/HomeLayout'

export default function Profile(props) {
 const history = useHistory()

  return (
    <HomeLayoyt>
      <button onClick={() => history.push('d')}>to home</button>
      <div>Profile</div>
    </HomeLayoyt>
  )
}
