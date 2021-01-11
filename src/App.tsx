import React, { useState, useCallback } from 'react'
import List from './components/List'
import SearchFrom from './components/SearchFrom'

const App: React.FC = () => {
  const [books, setBooks] = useState([])
  const [searchString, setSearchString] = useState('')

  const handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchString(event.target.value)
    },
    [setSearchString]
  )

  const setSearchResult: (state: any) => void = useCallback(
    state => {
      setBooks(state)
    },
    [setSearchString]
  )

  return (
    <>
      <SearchFrom handleClick={handleClick} setSearchResult={setSearchResult} searchString={searchString} />
      <List books={books} />
    </>
  )
}

export default App
