/* eslint-disable react/jsx-no-comment-textnodes */
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import CreateMovie from "./pages/Create";
import Home from "./pages/Home";
import NowPlaying from "./pages/NowPlaying";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";

function App() {
  return (
    <div>
      <Layout>
        {/**
        * Membuat routing
        * Bungkus Routing menggunakan Routes
        * Buat Routing menggunakan Route
        */}
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/movie/create" element={<CreateMovie/>}></Route>
          <Route path="/movie/popular" element={<Popular/>}></Route>
          <Route path="/movie/now" element={<NowPlaying/>}></Route>
          <Route path="/movie/top" element={<TopRated/>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
