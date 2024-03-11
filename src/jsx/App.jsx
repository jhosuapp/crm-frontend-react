//Layout
import { Header } from "./components/layout/Header.jsx";
import { BrowserRouter as Router } from 'react-router-dom';
import { Routing } from "./routes/Routes.jsx";
//Context
import { ClientProvider } from './context/ClientContext.jsx';
import { GlobalProvider } from "./context/GlobalContext.jsx";

function App() {

  return (
    <GlobalProvider>
      <ClientProvider>
        <Router>
          <>
            <Header />
            <main>
              <Routing />
            </main>
          </>
        </Router>
      </ClientProvider>
    </GlobalProvider>
  )
}

export default App
