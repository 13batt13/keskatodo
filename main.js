import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello!</h1>
    <div>
      <input id="auth" />
      <button type="submit">submit</button>
      <!-- <button id="counter" type="button"></button> -->
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
