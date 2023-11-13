import VendorMachine from "./Component/VendorMachine";

import { IncomeProvider } from "./Context/IncomeProvider";

function App() {
  return (
    <IncomeProvider>
      <h1>Vending Machine</h1>
      <VendorMachine />
    </IncomeProvider>
  );
}

export default App;
