import VendorMachine from "./Component/VendorMachine";

import { IncomeProvider } from "./Context/IncomeProvider";

function App() {
  return (
    <IncomeProvider>
      <VendorMachine />
    </IncomeProvider>
  );
}

export default App;
