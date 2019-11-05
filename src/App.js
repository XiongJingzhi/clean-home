import React from 'react'
import HomeLayout from './layouts/Home'

function App() {
  return (
    <div className="App">
      <HomeLayout>
        {() => <p>我</p>}
      </HomeLayout>
    </div>
  )
}

export default App
