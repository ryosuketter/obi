import React from 'react'
import { Item } from './Item'
import { BookTypes } from '../Types'

interface Props {
  books?: BookTypes[]
}

export const List: React.FC<Props> = ({ books }) => {
  return (
    <div>
      <ul>
        {books && books.length > 0 ? books.map(book => <Item key={book.id} book={book} />) : <p>本は1件もありません</p>}
      </ul>
    </div>
  )
}
