import React, { useState, useCallback } from 'react'
import List from './components/List'
import SearchFrom from './components/SearchFrom'

interface BookTypes {
  accessInfo: {
    accessViewStatus: string
    country: string
    viewability: string
    embeddable: boolean
    publicDomain: boolean
    textToSpeechPermission: string
    epub: {
      isAvailable: boolean
      downloadLink: string
      acsTokenLink: string
    }
    pdf: {
      isAvailable: boolean
      downloadLink: string
      acsTokenLink: string
    }
    webReaderLink: string
    downloadAccess?: {
      kind: 'books#downloadAccessRestriction'
      volumeId: string
      restricted: boolean
      deviceAllowed: boolean
      justAcquired: boolean
      maxDownloadDevices: number
      downloadsAcquired: number
      nonce: string
      source: string
      reasonCode: string
      message: string
      signature: string
    }
  }
  etag: string
  id: string
  kind: 'books#volume'
  saleInfo: {
    country: string
    saleability: string
    onSaleDate?: string
    isEbook: boolean
    listPrice?: {
      amount: number
      currencyCode: string
    }
    retailPrice?: {
      amount: number
      currencyCode: string
    }
    buyLink?: string
  }
  searchInfo: {
    textSnippet: string
  }
  selfLink: string
  volumeInfo: {
    title: string
    categories?: string[]
    publisher?: string
    authors: string[]
    description: string
    infoLink: string
    imageLinks?: {
      thumbnail: string
    }
    publishedDate: string
  }
}

const App: React.FC = () => {
  const [books, setBooks] = useState<BookTypes[]>([])
  const [searchString, setSearchString] = useState('')

  const handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchString(event.target.value)
    },
    [setSearchString]
  )

  const setSearchResult: (state: []) => void = useCallback(
    state => {
      setBooks(state)
    },
    [setSearchString]
  )

  return (
    <>
      <SearchFrom handleClick={handleClick} setSearchResult={setSearchResult} searchString={searchString} />
      <List books={books} />
    </>
  )
}

export default App
