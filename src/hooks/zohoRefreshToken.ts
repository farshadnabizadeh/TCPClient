import { DataFetcher } from "../requests/requests"
import { host, pathname } from "../env"
export const ZohoRefreshTokengetter = async () => {
    let response = await DataFetcher(`${host}${pathname}zoho/token`, {})
    return response
}