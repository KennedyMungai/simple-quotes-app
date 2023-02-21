import { Route, Routes } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
Quote
function App()
{
  return (
    <div>
      <Routes>
        <Route to='/quotes' element={<AllQuotes />} />
        <Route to='/quotes/:quoteId' element={<QuoteDetail />} />
        <Route to='/new-quote' element={<NewQuote />} />
      </Routes>
    </div>
  );
}

export default App;
