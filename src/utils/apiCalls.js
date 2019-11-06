export const fetchData = async(newRes)  => {
  const options = {
    method: 'POST',
    body: JSON.stringify(newRes),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch('http://localhost:3001/api/v1/reservations', options)
  if(response.ok) {
    const data  = await response.json()
    return data;
  } else {
    throw Error(response.statusText)
  }
}
