//Layout
import { Header } from "./components/layout/Header.jsx";
import { BrowserRouter as Router } from 'react-router-dom';
import { Routing } from "./routes/Routes.jsx";
//Context
import { ClientProvider } from './context/ClientContext.jsx';

function App() {

  return (
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
  )
}

export default App
