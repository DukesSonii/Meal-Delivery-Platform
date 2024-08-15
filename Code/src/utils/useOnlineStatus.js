// import { useEffect, useState } from 'react';

// const useOnlineStatus = () => {
//   const [onlineStatus, setOnlineStatus] = useState(true);

//   useEffect(() => {
//     window.addEventListener('offline', () => {
//       setOnlineStatus(false);
//     });

//     window.addEventListener('online', () => {
//       setOnlineStatus(true);
//     });
//   }, []);

//   // * boolean value
//   return onlineStatus;
// };

// export default useOnlineStatus;

import React, { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlinestatus, setoninestatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setoninestatus(true);
    });
    window.addEventListener("offline", () => {
      setoninestatus(false);
    });
  }, []);
  return onlinestatus;
};

export default useOnlineStatus;
