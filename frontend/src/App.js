import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import "./App.css";
import Login from "./components/authentication/Login";
import SignUp from "./components/authentication/SignUp";
const App = () => {
  return (
    <div className="App">
      <Container maxW="x1" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg="white"
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text fontSize="4xl" fontFamily="Work sans">
            Talk-A-Tive
          </Text>
        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
          <Tabs isFitted variant="soft-rounded">
            <TabList mb="1em">
              <Tab>Login</Tab>
              <Tab>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel><Login /></TabPanel>
              <TabPanel><SignUp /></TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </div>
  );
};

export default App;
