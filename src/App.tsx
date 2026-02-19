import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Footer from "./headers/Footer";
import SectionHeader from "./headers/SectionHeader";

function App() {
  return (
    <>
      <BrowserRouter>
        <SectionHeader />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
