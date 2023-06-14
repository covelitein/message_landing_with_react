import React, { lazy, Suspense } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import { wait } from "./assets/utils/functions";
import Scroll from "./pages/Scroll";
import './index.css'
import useAOSLazyLoad from "./assets/customHooks/useAosLazyLoad";

const Home = lazy(async () => {
  await wait(1000);
  return import("./pages/Home");
});


const App = ()=> {

 const { refreshAOS } = useAOSLazyLoad()

 refreshAOS()

  return (
    <section className="relative">
      <Suspense fallback={<div className="flex justify-center items-center h-screen w-screen">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scroll" element={<Scroll />} />
        </Routes>
      </Suspense>
    </section>
  );
}

export default App;