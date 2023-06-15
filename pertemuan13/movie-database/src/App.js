/* eslint-disable react/jsx-no-comment-textnodes */
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import CreateMovie from "./pages/Create";
import Home from "./pages/Home";
import NowPlaying from "./pages/NowPlaying";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
//import theme provider
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import GlobalStyle from "./components/GlobalStyle";
import Detail from "./pages/Detail";
import { useState } from "react";
import data from "./utils/constants/data";

function App() {
  const [movies,setMovies] = useState(data)
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
      <Layout>
        {/**
        * Membuat routing
        * Bungkus Routing menggunakan Routes
        * Buat Routing menggunakan Route
        */}
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/movie/create" element={<CreateMovie movies={movies} setMovies={setMovies}/>}></Route>
          <Route path="/movie/popular" element={<Popular/>}></Route>
          <Route path="/movie/now" element={<NowPlaying/>}></Route>
          <Route path="/movie/top" element={<TopRated/>}></Route>
          <Route path="/movie/:id" element={<Detail/>}></Route>
        </Routes>
      </Layout>
      </ThemeProvider>
    
    </div>
  );
}

export default App;
