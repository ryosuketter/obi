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

const cloudinary: {
  BASEURL: string
  LEFT: string
  RIGHT: string
} = {
  BASEURL: 'https://res.cloudinary.com/ryosuketter/image/fetch/',
  LEFT: 'l_text:Sawarabi%20Gothic_20_:',
  RIGHT: ',co_rgb:333,h_100,w_500,y_110,c_fit/'
}

interface Props {
  book: any
}

const Item: React.FC<Props> = ({ book }) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [obiText, setObiText] = useState('')
  const [generatedImageURL, setGeneratedImageURL] = useState('')

  const handleChange = (text: string): void => setObiText(text)

  const openModal = (): void => setIsOpen(true)
  const closeModal = (): void => setIsOpen(false)

  const generateImageURL = (obiText: any, selectedImageURL: any): any => {
    const replacedURL = selectedImageURL.replace(/\?/g, '%3F')
    const imageURL = `${cloudinary.BASEURL}${cloudinary.LEFT}${obiText}${cloudinary.RIGHT}${replacedURL}`
    setGeneratedImageURL(imageURL)
  }

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
          <img src={imageLinks.smallThumbnail} alt={title} />
          <p>{obiText}</p>
          <input type='text' onChange={e => handleChange(e.target.value)} />
          <button onClick={() => generateImageURL(obiText, imageLinks.smallThumbnail)}>この文字で帯を作成</button>
          {!!generatedImageURL && <img src={generatedImageURL} alt={obiText} />}
        </Modal>
      )}
    </li>
  )
}

export default Item
