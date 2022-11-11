import { Routes, Route } from '@solidjs/router';
import { Header} from './components/';
import { Home, Counter, ApiExample } from './pages';

function App() {
  return (
    <>
      <Header user={{login: 'SDaian'}}/>
      <div class="text-center">
        <Routes>
          <Route component={Home} path="/" />
          <Route component={Counter} path="/counter" />
          <Route component={ApiExample} path="/api-example" />
        </Routes>
      </div>
    </>
  );
}

export default App;
