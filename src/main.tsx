import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/home';
import UsingGenericPage from './pages/usingGenericPage';

const Main = () => {

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/usingGenericPage" element={<UsingGenericPage />} />
    </Routes>
  )
}

export default Main;