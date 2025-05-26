import React from "react";
import { useRouteError } from "react-router-dom"; // This hook gives more info about the error on the page
// when funciton starting with a name 'use' called HOOK
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something went wrong!!</h2>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
