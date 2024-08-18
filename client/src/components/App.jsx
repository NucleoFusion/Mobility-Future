import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Navbar/Layout";
import PostPage from "./PostPage/PostPage";
import ClientPro from "./Profile/clientpro";
import SearchPage from "./SearchPage/SearchPage";
import OurProfileRenderer from "./OurProfile/OurProfileRenderer";
import ContactUs from "./ContactUs/ContactUs";
import AboutUs from "./AboutUs/AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/home"
            element={
              <div className="Test">
                <h1>xHome</h1>
              </div>
            }
          />
          <Route path="/postJob" element={<PostPage />} />
          <Route path="/account" element={<ClientPro />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/ourProfile/:id" element={<OurProfileRenderer />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
