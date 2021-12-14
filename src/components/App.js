import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App(user) {
  console.log(user)
  return (
    <div>
      <NavBar />
      <Home username='Daniel' city='San Diego' color='firebrick'/>
      <About bio='My Bio' />
    </div>
  );
}

export default App;
