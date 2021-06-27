import React, { useState } from 'react'
import { List } from './components/List'
import { SearchFrom } from './components/SearchFrom'
import { BookTypes } from './Types'

const App: React.FC = () => {
  const [books, setBooks] = useState<BookTypes[]>([])

  return (
    <>
      <SearchFrom setBooks={setBooks} />
      <List books={books} />
    </>
  )
}

export default App

// comment
