import React from 'react'

type Props = {
  handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  fetchData: () => Promise<never[] | undefined>
}

const SearchFrom: React.FC<Props> = ({ handleClick, fetchData }) => {
  return (
    <>
      <label>
        <input placeholder='本のタイトルを検索' onChange={e => handleClick(e)} />
        <button onClick={fetchData}>検索</button>
      </label>
    </>
  )
}

export default SearchFrom
