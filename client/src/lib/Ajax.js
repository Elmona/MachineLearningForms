
const SendData = data =>
  fetch('/send', {
    method: 'POST',
    body: JSON.stringify(data)
  }).then(res => res.json())
    .then(res => console.log(res))

const ping = () =>
  fetch('/ping')
    .then(res => res.json())
    .then(res => console.log(res))

export {
  SendData,
  ping
}
