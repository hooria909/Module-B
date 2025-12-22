import { createRoot } from "react-dom/client";
import React from "react";

let div = document.getElementById("root");

let Heading = () => {
  return <h1>React JS:</h1>  
}

let Definition = () => {
  return <p>React is a JavaScript library for building user interfaces.</p>
}

let Image = () => {
  return <img src="\vite.svg" alt="React Logo" />
}

let List = () => {
  return (
    <ul>
      <li>Declarative</li>
      <li>Component-Based</li>
      <li>Hooks</li>
    </ul>
  
  )
}

let Table = () => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>JSX</td>
          <td>JavaScript XML syntax extension</td>
        </tr>
        <tr>
          <td>Virtual DOM</td>
          <td>Efficient UI updates</td>
        </tr>
      </tbody>
    </table>
  )
}

createRoot(div).render(
  <div>
    <Heading />
    <Definition />
    <Image />
    <List />
    <Table /> 
  </div>
);
