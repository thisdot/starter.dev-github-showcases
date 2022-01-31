import React from 'react';
import './App.css';

function App() {
  return (
      <div className="page">
        <div className="sign-in">
          <div className="provider">
            <form className="form">
              <button type="submit" className="button">Sign in with GitHub</button>
            </form>
          </div>
        </div>
      </div>
  );
}

export default App;
