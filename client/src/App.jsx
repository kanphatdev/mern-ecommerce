import AppRoutes from "./routes/AppRoutes"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <AppRoutes/>
    </div>
  )
}

export default App