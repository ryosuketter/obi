import React from 'react'

type Props = {
	book: any
}

const Item: React.FC<Props> = ({ book }) => {
	const {
		volumeInfo: { title, imageLinks }
	} = book
	return (
		<li>
			{title && (
				<div>
					<p>{title}</p>
				</div>
			)}
			{imageLinks && (
				<div>
					<img src={imageLinks.smallThumbnail} alt={title}></img>
				</div>
			)}
		</li>
	)
}

export default Item
