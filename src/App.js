import React from 'react'
import MovieList from'./component/MovieList.js'

import GenreFilter from './component/GenreFilter.js'

const App = () => {
  return (
    <div class="main">
      <h1 class="h1">Top 15 Movies of All Time</h1>
      
      <GenreFilter></GenreFilter>
      <MovieList></MovieList>
      
      
    </div>
  )
}

export default App
