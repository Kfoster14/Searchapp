import React from 'react';
import Navigation from './components/Navigation';
import LoginForm from './components/LoginForm';
import MessageForm from './components/MessageForm';
import Messages from './components/Messages';

function App() {  
  return (
    <div className="App">
      <h1>Hello!!!</h1>
      <Navigation />
      <LoginForm />
      <MessageForm />
      <Messages />
    </div>
  );
}

export default App;
