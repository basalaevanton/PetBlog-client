import React from "react";
import { Route, Routes } from "react-router-dom";

// import routes from './routes';
// import { useRoutes } from 'react-router-dom';

import SecondPage from "./pages/SecondPage";
import Start from "./pages/Start";

const App = function (): JSX.Element {
  // const { isLoggedIn } = useSelector((state) => state.auth);
  // const routing = useRoutes(routes(isLoggedIn));

  return (
    <>
      {/* {routing} */}
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="second" element={<SecondPage />} />
      </Routes>
    </>
  );
};

export default App;
