//Layout
import { Header } from "./components/layout/Header.jsx";
import { BrowserRouter as Router } from 'react-router-dom';
import { Routing } from "./routes/Routes.jsx";

function App() {

  return (
    <Router>
      <>
        <Header />
        <main>
          <p>jola</p>
          <Routing />
        </main>
      </>
    </Router>
  )
}

export default App
