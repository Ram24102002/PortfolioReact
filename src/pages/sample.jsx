import React, { useState, useEffect } from "react";
import Loader from "../components/common/Loader";
import Inbox from "./Inbox";

function sample() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (like fetching data or API call)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loader /> : <Inbox />}
    </>
  );
}

export default sample;
