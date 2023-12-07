import { useRoutes } from 'react-router-dom';
import routes from './router';

function App() {
  const ElementRouter = useRoutes(routes);
  return <>{ElementRouter}</>;
}

export default App;
