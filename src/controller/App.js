import React, { useState } from 'react'
import data from '../components/data/data'
import List from '../components/list/List'
function App() {
  const [people, setPeople] = useState(data)
  const clearHandler = () => {
    setPeople([])
  }
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={clearHandler}>clear all</button>
      </section>
    </main>
  )
}

export default App
