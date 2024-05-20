import { BrowserRouter, Route, Routes } from "react-router-dom";
import PetCreate from "./pages/PetCreate";
import AppLayout from "./ui/AppLayout";
import PetDisplay from "./pages/PetDisplay";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<PetCreate />} />
            <Route path="/display" element={<PetDisplay />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
