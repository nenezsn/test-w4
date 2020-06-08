import querystring from 'querystring'
import { message } from 'antd'
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(response.statusText);
    throw error;
  }

async function request(url, params) {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: querystring.stringify(params)
    })
    try {
        checkStatus(res)
    } catch (error) {
        message.error('err',error.message)
        return {}
    }
    const data = await res.json()
    return data 
}
export default request