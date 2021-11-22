import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type postsType = {
    id: number
    message: string
    amount: number
}
let posts: postsType[] = [
    {id: 1, message: "Hi, how are you?" , amount: 15 },
    {id: 2, message: "It's my first posts" , amount: 20 },
    {id: 3, message: "Hello!" , amount: 20 },
    {id: 4, message: "What's yours name?" , amount: 20 }
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
