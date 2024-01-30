import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import {
  finalValueSelector,
  jobsAtom,
  messageAtom,
  myNetworkAtom,
  notificationAtom,
} from "./store/atoms/atoms";

function App() {
  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  );
}
function MainApp() {
  const network = useRecoilValue(myNetworkAtom);
  const jobs = useRecoilValue(jobsAtom);
  const messages = useRecoilValue(messageAtom);
  const notifications = useRecoilValue(notificationAtom);
  // const finalVal = useMemo(() => {
  //   let ans = 0;
  //   ans = network + jobs + messages + notifications;
  //   return ans;
  // }, [network, jobs, messages, notifications]);

  const finalVal = useRecoilValue(finalValueSelector);
  return (
    <>
      <button>Home</button>
      <button>My Network({network >= 100 ? "99+" : network}) </button>
      <button>Jobs({jobs >= 100 ? "99+" : jobs}) </button>
      <button>Messages ({messages >= 100 ? "99+" : messages}) </button>
      <button>
        Notifications({notifications >= 100 ? "99+" : notifications}){" "}
      </button>

      <button>Profile({finalVal})</button>
    </>
  );
}
export default App;
