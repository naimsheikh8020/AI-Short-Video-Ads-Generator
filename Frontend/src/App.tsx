import { Routes, Route } from "react-router-dom";
import SoftBackdrop from "./components/SoftBackdrop";
import LenisScroll from "./components/lenis";


import Home from "./pages/Home";
import Genetator from "./pages/Genetator";
import Result from "./pages/Result";
import MyGeneration from "./pages/MyGeneration";
import Community from "./pages/Community";
import Plans from "./pages/Plans";
import Loading from "./pages/Loading";
import RootLayout from "./RootLayout";

function App() {
  return (
    <>
      <SoftBackdrop />
      <LenisScroll />

      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="generate" element={<Genetator />} />
          <Route path="result/:projectId" element={<Result />} />
          <Route path="my-generations" element={<MyGeneration />} />
          <Route path="community" element={<Community />} />
          <Route path="plan" element={<Plans />} />
          <Route path="loading" element={<Loading />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;