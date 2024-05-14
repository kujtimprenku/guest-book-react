import { WalletSelectorContextProvider } from "./contexts/WalletSelectorContext";

import "./App.css";

function App() {
  return (
    <WalletSelectorContextProvider>
      <div>Loaded</div>
    </WalletSelectorContextProvider>
  );
}

export default App;
