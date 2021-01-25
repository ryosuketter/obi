import React, { useCallback } from 'react'
import axios, { AxiosResponse } from 'axios'

interface Props {
  handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  setSearchResult: (result: any) => void
  searchString: string
}

const SearchFrom: React.FC<Props> = ({ handleClick, setSearchResult, searchString }) => {
  const fetchData: () => Promise<never[] | undefined> = useCallback(async () => {
    try {
      const baseUrl = 'https://www.googleapis.com/books/v1/volumes'
      const params = {
        q: `intitle:${searchString}`,
        Country: 'JP',
        maxResults: 10
      }
      const result: AxiosResponse<any> = await axios.get(baseUrl, { params })
      setSearchResult(result.data.items)
    } catch (error) {
      return []
    }
  }, [searchString, setSearchResult])

  const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') fetchData()
  }

  return (
    <>
      <label>
        <input placeholder='本のタイトルを検索' onChange={e => handleClick(e)} onKeyPress={e => keyPress(e)} />
        <button onClick={fetchData}>検索</button>
      </label>
    </>
  )
}

export default SearchFrom
