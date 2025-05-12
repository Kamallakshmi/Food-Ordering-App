import { useEffect, useState } from "react";

// To show whether user is online or offline
// To write the custom hooks just folow these steps
// 1. finalise the contract (means what is the input and output of that hook) eg - to show online offlone status what we need as input it is nothing needed and output is onlineStatus it is boolean
//

const useOnlineStatus = () => {
  const [OnlineStatus, setOnlineStatus] = useState(true);

  // check if online (To check online/offline e can use event listener(this super power gives us by browser) eg.)
  // why useEffect? - To execute just once. the event Listener should have to execute only once.
  useEffect(() => {
    // the event listner task is to check when the user is online/offline and return the status.
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  // boolean value and it is stte variable
  return OnlineStatus;
};

export default useOnlineStatus;
