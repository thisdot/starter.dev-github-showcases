import { Route, Routes } from '@solidjs/router';
import { Home } from './pages';

function App() {
  return (
    <div class="text-center">
      <Routes>
        <Route component={Home} path="/" />
      </Routes>
    </div>
  );
}

export default App;
