import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/home';
import UsingGenericPage from './pages/usingGenericPage';
import { ThemeProvider } from './theme';

const Main = () => {

  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/usingGenericPage" element={<UsingGenericPage />} />
      </Routes>
    </ThemeProvider>
  )
}

export default Main;