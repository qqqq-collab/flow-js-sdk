import "./default-config"
export {config} from "./config"
export {send} from "./send"
export {serialize} from "./serialize"
export {decode} from "./decode"
export {transaction as tx} from "./transaction"
export {resolve} from "./resolve"

import {currentUser} from "./current-user"
export {currentUser}

export const authenticate = () => currentUser().authenticate()
export const unauthenticate = () => currentUser().unauthenticate()

// proxy sdk
export {isOk, isBad, why, cadence, cdc} from "@onflow/sdk"
export {
  build,
  pipe,
  transaction,
  script,
  ping,
  getAccount,
  getEvents,
  getLatestBlock,
  getTransactionStatus,
} from "@onflow/sdk"
export {
  authorizations,
  authorization,
  params,
  param,
  proposer,
  payer,
  limit,
  ref,
} from "@onflow/sdk"
