import React, { useEffect } from "react";

const RedirectComponent = () => {
  useEffect(() => {
    window.location.replace("http://localhost:3001");
  }, []);

  return (
    <div>
      <p>Redirecting to http://localhost:3001...</p>
    </div>
  );
};

export default RedirectComponent;
