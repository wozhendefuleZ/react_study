import { useRoutes } from 'react-router-dom';
import routes from './router';

function App() {
  const ElementRouter = useRoutes(routes);
  return <div className="h-100vh overflow-hidden">{ElementRouter}</div>;
}

export default App;
