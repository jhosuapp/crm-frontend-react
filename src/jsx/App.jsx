//Layout
import { Header } from "./components/layout/Header.jsx";
import { Transition } from './components/layout/Transition.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routing } from "./routes/Routes.jsx";
//Context
import { GlobalProvider } from "./context/GlobalContext.jsx";

function App() {

  return (
    <GlobalProvider>
        <Router>
          <>
            <Transition />
            <Header />
            <main>
              <Routing />
            </main>
          </>
        </Router>
    </GlobalProvider>
  )
}

export default App
