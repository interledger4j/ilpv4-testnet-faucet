import DataToDisplay from '../models/dataToDisplay'
import InterledgerResponse from '../models/interledgerResponse'

export const FIELDS_TO_KEEP: string[] = [
  'username',
  'customSettings',
  'accountId',
  'assetCode',
  'assetScale'
]

const isKeyNeeded = (key: string) => {
  return FIELDS_TO_KEEP.includes(key)
}

export const createFieldsToDisplay = (response: InterledgerResponse) => {
  let id = 1
  const data: DataToDisplay[] = [
    {
      id: id++,
      field: 'username',
      value: response.accountId
    },
    {
      id: id++,
      field: 'ilpOverHttpUrl',
      value: `https://jc.ilpv4.dev/accounts/${response.accountId}/ilp`
    },
    {
      id: id++,
      field: 'authToken',
      value: response.customSettings['ilpOverHttp.incoming.simple.auth_token']
    },
    {
      id: id++,
      field: 'paymentPointer',
      value: `$jc.ilpv4.dev/${response.accountId}`
    },
    {
      id: id++,
      field: 'assetCode',
      value: response.assetCode
    },
    {
      id: id++,
      field: 'assetScale',
      value: response.assetScale.toString()
    }
  ]

  return data
}

export default isKeyNeeded
