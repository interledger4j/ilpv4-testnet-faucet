// File automatically generated from JSON object

interface LinkType {}

interface BalanceSettings {
  minBalance?: any
  settleThreshold?: any
  settleTo: number
}

interface RateLimitSettings {
  maxPacketsPerSecond?: any
}

export interface CustomSettings {
  'ilpOverHttp.outgoing.url': string
  'ilpOverHttp.incoming.auth_type': string
  'ilpOverHttp.incoming.simple.auth_token': string
  'ilpOverHttp.outgoing.simple.auth_token': string
  'ilpOverHttp.outgoing.auth_type': string
}

export interface InterledgerResponse {
  accountId: string
  accountRelationship: string
  assetCode: string
  assetScale: number
  maximumPacketAmount?: any
  linkType: LinkType
  connectionInitiator: boolean
  isInternal: boolean
  sendRoutes: boolean
  receiveRoutes: boolean
  balanceSettings: BalanceSettings
  rateLimitSettings: RateLimitSettings
  settlementEngineDetails?: any
  customSettings: CustomSettings
  parentAccount: boolean
  childAccount: boolean
  peerAccount: boolean
  peerOrParentAccount: boolean
  paymentPointer: string
}

export default InterledgerResponse
