import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home() {
  const history = useHistory()

  return (
    <>
      <button onClick={() => history.push('profile')}> to profile</button>
      <button onClick={() => history.push('consult')}> to consult</button>
      <button onClick={() => history.push('news')}> to news</button>
      <button onClick={() => history.push('/news/123')}> to new detail</button>
      <button onClick={() => history.push('service')}> to service</button>
      <button onClick={() => history.push('service/121')}> to service detail</button>
      <div>Index</div>
    </>
  )
}
