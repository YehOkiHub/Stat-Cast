import React from "react";
import Home from "./../src/components/Home";
import Stats from "./../src/components/Stats";
import Shop from "./../src/components/Shop";
import Teams from "./../src/components/Teams";
import Login from "./../src/components/Login";
import Registration from "./../src/components/Registration";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
 
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path= "/" element = {<Home/>}></Route >
          <Route path= "/stats" element = {<Stats/>}></Route >
          <Route path= "/shop" element = {<Shop/>}></Route >
          <Route path= "/teams" element = {<Teams/>}></Route >
          <Route path= "/login" element = {<Login/>}></Route >
          <Route path= "/registration" element = {<Registration/>}></Route >
        </Routes>
      </Router>
    </ApolloProvider>

    // <RouterProvider router={routes} />
  );
};

export default App;
