import { ToastContainer } from 'react-toastify';
import AppRoutes from './appRoutes';

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <ToastContainer theme='colored'/>
    </div>
  );
}

export default App;
