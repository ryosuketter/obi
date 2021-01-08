import React, { useState, useCallback } from 'react'
import axios from 'axios'
import List from './components/List'
import SearchFrom from './components/SearchFrom'

const App: React.FC = () => {
  const [books, setBooks] = useState([])
  const [searchString, setSearchString] = useState('')

  const fetchData = useCallback(async () => {
    try {
      const baseUrl = 'https://www.googleapis.com/books/v1/volumes'
      const params = {
        q: `intitle:${searchString}`,
        Country: 'JP',
        maxResults: 10
      }
      const result = await axios.get(baseUrl, { params })
      setBooks(result.data.items)
    } catch (error) {
      return []
    }
  }, [searchString, setBooks])

  return (
    <>
      <SearchFrom setSearchString={setSearchString} fetchData={fetchData} />
      <List books={books} />
    </>
  )
}

export default App
