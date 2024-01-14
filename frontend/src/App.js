import React from "react";
import { Button } from "@chakra-ui/button";
import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/chat" element={<ChatPage />}></Route>
      {/* <Button colorScheme="blue">Click me</Button> */}
    </Routes>
  );
};

export default App;
