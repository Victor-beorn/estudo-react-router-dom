import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router";
import { Menu } from "./components/Menu";
import { Posts } from "./components/Posts";
import { Redirect } from "./components/Redirect";

import "./styles/global.css";
import { Post } from "./components/Post";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/" element={<Posts />}>
          <Route path=":id" element={<Post />} />
        </Route>
        <Route path="/posts/" element={<Posts />} />
        {/* <Route path="/posts/:id" element={<Posts />} /> */}

        <Route path="/redirect" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
