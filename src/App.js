import { Route, Routes } from "react-router-dom";
Quote
function App()
{
  return (
    <div>
      <Routes>
        <Route to='/quotes' element={ } />
        <Route to='/quotes/:quoteId' element={ } />
        <Route to='/new-quote' element={ } />
      </Routes>
    </div>
  );
}

export default App;
