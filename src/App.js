import React from "react";
import { Routes, Route } from "react-router-dom";
// components
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <h1>Star wars info</h1>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/planets" element={<Planets />} />
              <Route path="/people" element={<People />} />
            </Routes>
          </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
