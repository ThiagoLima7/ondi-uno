import { ChakraProvider } from '@chakra-ui/react'
import { StrictMode } from 'react'
import { render } from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root')

render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>,
  container
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
