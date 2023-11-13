import { CssBaseline } from "@mui/material";

import Footer from "./Component/Footer";
import Header from "./Component/Header";
import VendorMachine from "./Component/VendorMachine";

import { IncomeProvider } from "./Context/IncomeProvider";

function App() {
  return (
    <IncomeProvider>
      <CssBaseline />
      <Header />
      <VendorMachine />
      <Footer />
    </IncomeProvider>
  );
}

export default App;
