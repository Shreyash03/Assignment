
import { SignupPage } from './pages/signup';
import { SigninPage } from './pages/signin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WelcomePage } from './pages/welcome';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          < Route path='/' element={<SigninPage />}/>
          <Route path="/signup"  element={<SignupPage />}/>
          <Route path="/signin"  element={<SigninPage />}/>
          <Route path="welcome" element={<WelcomePage />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
