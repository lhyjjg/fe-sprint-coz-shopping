import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import ProductList from './pages/ProductList';
import BookmarkList from './pages/BookmarkList';
import Footer from './components/Footer';

import { createGlobalStyle } from 'styled-components';

const Globalstyle = createGlobalStyle`
  margin : 0;
  padding: 0;
  border: 0;
`

function App() {
  return (
    <Router>
      <Globalstyle />
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/productList' element={ <ProductList />}/>
        <Route path='/bookmarkList' element={ <BookmarkList />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;