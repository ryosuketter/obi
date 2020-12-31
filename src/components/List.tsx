import React from 'react'
import Item from './Item'
import { Book } from '../Types'

type Props = {
	books: Book[]
}

const List: React.FC<Props> = ({ books }) => {
	return (
		<div>
			<ul>{books && books.length > 0 && books.map(book => <Item key={book.id} book={book} />)}</ul>
		</div>
	)
}

export default List
