import './App.css';
import MainScene from './pages/MainScene';
import Router from './router';
import { Web3ModalProvider } from './Web3ModalProvider';

function App() {
  return (
    // <Web3ModalProvider>
    <MainScene />
    // </Web3ModalProvider>
  );
}

export default App;
