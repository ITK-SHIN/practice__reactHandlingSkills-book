import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Layout from "./pages/Header";
import Header from "./pages/Header";
import Bottom from "./pages/Bottom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route element={<Bottom />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/articles" element={<Articles />}>
            <Route path=":id" element={<Article />} />
          </Route>
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="mypage" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
