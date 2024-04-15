//Layout
import { Header } from "./components/layout/Header.jsx";
import { Transition } from './components/layout/Transition.jsx';
import { HashRouter, BrowserRouter as Router } from 'react-router-dom';
import { Routing } from "./routes/Routes.jsx";
//Context
import { GlobalProvider } from "./context/GlobalContext.jsx";

function App() {

  return (
    <GlobalProvider>
        <HashRouter>
          <>
            <Transition />
            <Header />
            <main>
              <Routing />
            </main>
          </>
        </HashRouter>
    </GlobalProvider>
  )
}

export default App
