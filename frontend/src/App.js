import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";
//bootstrap
import { Container } from "react-bootstrap";
//Screens
import HomeScreen from "./screen/HomeScreen";
import InboxScreen from "./screen/InboxScreen";
import MessageScreen from "./screen/MessageScreen";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3 d-flex justify-content-center align-items-center">
          <Container>
            <Routes>
              <Route path="/" exact element={<HomeScreen />} />
              <Route path="/inbox" element={<InboxScreen />} />
              <Route path="/messages/:id" element={<MessageScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};
export default App;
