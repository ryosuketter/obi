import React from 'react'

type Props = {
  setSearchString: React.Dispatch<React.SetStateAction<string>>
  fetchData: () => Promise<never[] | undefined>
}

const SearchFrom: React.FC<Props> = ({ setSearchString, fetchData }) => {
  return (
    <>
      <label>
        <input placeholder='本のタイトルを検索' onChange={e => setSearchString(e.target.value)} />
        <button onClick={fetchData}>検索</button>
      </label>
    </>
  )
}

export default SearchFrom
