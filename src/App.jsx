import React, { lazy, Suspense } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import { wait } from "./assets/utils/functions";
import './index.css'
import useAOSLazyLoad from "./assets/customHooks/useAosLazyLoad";
import Preloader from "./components/Preloader";

const Home = lazy(async () => {
  await wait(1000);
  return import("./pages/Home");
});
const Register = lazy(async () => {
  await wait(1000);
  return import("./pages/Register");
});
const Login = lazy(async () => {
  await wait(1000);
  return import("./pages/Login");
});




const App = ()=> {

 const { refreshAOS } = useAOSLazyLoad()

 refreshAOS()

  return (
    <section className="relative">
      <Suspense fallback={<Preloader />} >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='*' element={<h1 className="text-4xl text-red-700">Not found</h1>} />
        </Routes>
      </Suspense>
    </section>
  );
}

export default App;