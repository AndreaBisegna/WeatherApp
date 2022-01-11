
//import Home from './Pages/Home';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './App.css';
import React from 'react';
import Home from './Pages/Home';


class ErrorBoundary extends React.Component{
  constructor(props){
    super(props);
    this.state = {hasError:false};
  }
  static getDerivedStateFromError(error){
    return {hasError: true};
  }
  componentDidCatch(error, info){
    console.log(error,info);
  }
  render(){
    if(this.state.hasError){
      return <h1>Something went wrong</h1>
    }
    return this.props.children
  }
}
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://graphql-weather-api.herokuapp.com/"
})

function App() {

return(
  <ErrorBoundary>
      <ApolloProvider client={client}>
        <Home/>

      </ApolloProvider>
      
  </ErrorBoundary>
 

);

}

export default App;
