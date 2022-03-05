import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { Busqueda } from './pages/Busqueda';
import { Resultados } from './pages/Resultados';
import { Detalle } from './pages/Detalle';
import { Layout } from './components/Layout';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element ={<Busqueda/>}/>
            <Route path="/items/" element ={<Resultados/>}/>
            <Route path="/items/:id" element ={<Detalle/>}/>
          </Routes>
        </BrowserRouter>
      </Layout>      
    </Provider>
  )
}

export default App;


