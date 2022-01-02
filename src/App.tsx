import React from "react";
import { Route, Routes } from "react-router-dom";

// import routes from './routes';
// import { useRoutes } from 'react-router-dom';

import AddPost from "./pages/AddPost";
import Posts from "./pages/Posts";

const App = function (): JSX.Element {
  // const { isLoggedIn } = useSelector((state) => state.auth);
  // const routing = useRoutes(routes(isLoggedIn));

  return (
    <>
      {/* {routing} */}
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="addPost" element={<AddPost />} />
      </Routes>
    </>
  );
};

export default App;
