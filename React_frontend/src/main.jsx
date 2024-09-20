import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ApolloClient,ApolloProvider,InMemoryCache} from '@apollo/client'

const client=new ApolloClient({
  uri: "https://laravel_backend.test/graphql",
  cache: new InMemoryCache
})
createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
