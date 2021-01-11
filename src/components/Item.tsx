import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const customStyles: Modal.Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

type Props = {
  book: any
}

const Item: React.FC<Props> = ({ book }) => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = (): void => setIsOpen(true)
  const closeModal = (): void => setIsOpen(false)

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
          <button onClick={openModal}>モーダル表示</button>
        </div>
      )}
      {imageLinks && (
        <Modal id='root' isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
          <button onClick={closeModal}>close</button>
          <img src={imageLinks.smallThumbnail} alt={title}></img>
        </Modal>
      )}
    </li>
  )
}

export default Item
