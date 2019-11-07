import React from 'react'
import { useHistory } from 'react-router-dom'
import HomeLayoyt from '@/layouts/HomeLayout'

export default function Home() {
  const history = useHistory()

  return (
    <>
      <HomeLayoyt>
        <button onClick={() => history.push('profile')}> to profile</button>
        <div>Index</div>
      </HomeLayoyt>
    </>
  )
}
