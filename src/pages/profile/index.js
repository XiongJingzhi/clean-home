import React from 'react'
import { useHistory } from 'react-router-dom'

 const Profile = React.memo((props) => {
  const history = useHistory()
    return (
      <>
      <button onClick={() => history.push('/')}>to home</button>
      <div>Profile</div>
      </>
    )
})

export default Profile