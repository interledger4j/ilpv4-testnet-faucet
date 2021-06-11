import React, { useState } from 'react'

import Spinner from '../components/UI/Spinner'
import InterledgerResponse from '../models/interledgerResponse'
import Button from '../components/UI/Button'
import DataToDisplay from '../models/dataToDisplay'
import { createFieldsToDisplay } from '../helpers/fieldsToDisplay'
import Table from '../components/UI/Table'

const Main = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [dataToDisplay, setDataToDisplay] = useState<DataToDisplay[]>([])

  const loadDataHandler = async () => {
    setIsLoading(true)
    const body = {
      accountId: null,
      assetCode: 'XRP',
      assetScale: 9,
      receiveRoutes: false,
      sendRoutes: false
    }
    try {
      const rawResponse = await fetch(
        'https://hermes-rest.ilpv4.dev/accounts',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        }
      )

      const content: InterledgerResponse = await rawResponse.json()
      // Creates the object with the fields we want to display
      const data = createFieldsToDisplay(content)

      setDataToDisplay(data)
      setIsLoading(false)
    } catch (error) {
      // TODO: to improve the error handling
      console.error(error)
      setIsLoading(false)
    }
  }

  let content: any
  if (isLoading) {
    content = <Spinner />
  } else if (dataToDisplay.length > 0) {
    content = <Table rows={dataToDisplay} />
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <div className="text-3xl mt-10">ILPv4 Testnet Faucet</div>
        <div className="text-xl mt-5">
          Generate a new account on the ilpv4.dev Interledger Testnet
        </div>
        <Button onClick={loadDataHandler} className="mt-10 mb-16">
          Generate ILP TestNet Credentials
        </Button>
        {content}
      </div>
    </div>
  )
}
export default Main
