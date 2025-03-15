import React from 'react';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}


export default App;

//App.js loads the components that are going to render. Since in this case there is only one page, 
//then route is not necessary. It will be if we need to add other components.
