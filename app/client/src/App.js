import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import  Services  from './components/pages/services';
import  Hof  from './components/pages/hof';
import  Home  from './components/pages/home';
import  LoginSignup  from './components/pages/loginsignup';
import  Rotations  from './components/pages/rotations';
import  Register  from './components/pages/register';
import Chatroom from './components/pages/chatroom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/index.css';


const httpLink = createHttpLink({
  uri: '/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
    <Router>
    <Routes>
    <Route exact path="/" element={<Home />}/>
    <Route exact path="/loginsign" element={<LoginSignup />}/>
    <Route exact path="/services" element={<Services />}/>
    <Route exact path="/rotations" element={<Rotations />}/>
    <Route exact path="/hof" element={<Hof />}/>
    <Route exact path="/register" element={<Register />}/>
    </Routes>
    
    </Router>

    </div>
    </ApolloProvider>
  );
}

export default App;
