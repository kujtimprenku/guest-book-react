import { WalletSelectorContextProvider } from "./contexts/WalletSelectorContext";
import "@near-wallet-selector/modal-ui/styles.css";

import "./App.css";
import Content from "./components/Content";

function App() {
  return (
    <WalletSelectorContextProvider>
      <Content />
    </WalletSelectorContextProvider>
  );
}

export default App;
