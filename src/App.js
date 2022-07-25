import React from 'react';
import NavBar from './components/NavBar';
import ItenList from './components/ItenList'
import BuyContextProvider  from './contexts/BookContext';
import './index.css'
import NewItem from './components/ItensForm';


function App() {
  
  return (
      <div className='app'>
        <BuyContextProvider>
          <NavBar />
          <ItenList />
          <NewItem />
        </BuyContextProvider>
      </div>
  );
}

export default App;
