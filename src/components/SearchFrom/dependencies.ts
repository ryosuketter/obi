import React, { useState, useCallback } from 'react'
import axios, { AxiosResponse } from 'axios'
import { BookTypes } from '../../Types'

export const useSearchFrom = (setBooks: React.Dispatch<React.SetStateAction<BookTypes[]>>) => {
  const [searchString, setSearchString] = useState('')

  const setSearchResult: (state: []) => void = useCallback(state => setBooks(state), [setSearchString])

  const handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchString(event.target.value)
    },
    [setSearchString]
  )

  const fetchData: () => Promise<never[] | undefined> = useCallback(async () => {
    try {
      const baseUrl = 'https://www.googleapis.com/books/v1/volumes'
      const params = {
        q: `intitle:${searchString}`,
        Country: 'JP',
        maxResults: 10
      }
      const result: AxiosResponse = await axios.get(baseUrl, { params })
      setSearchResult(result.data.items)
    } catch (error) {
      return []
    }
  }, [searchString, setSearchResult])

  const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') fetchData()
  }

  return { handleClick, keyPress, fetchData }
}
