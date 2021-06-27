import React from 'react'
import { BookTypes } from '../../Types'
import { useSearchFrom } from './dependencies'

interface Props {
  setBooks: React.Dispatch<React.SetStateAction<BookTypes[]>>
}

export const SearchFrom: React.FC<Props> = ({ setBooks }) => {
  const { handleClick, keyPress, fetchData } = useSearchFrom(setBooks)
  return (
    <>
      <label>
        <input placeholder='本のタイトルを検索' onChange={handleClick} onKeyPress={keyPress} />
        <button onClick={fetchData}>検索</button>
      </label>
    </>
  )
}
