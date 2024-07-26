import './App.css';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { jobsAtom, messagingAtom, networkAtom, notifications, notificationsAtom } from './atoms';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {

  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobAtom = useRecoilValue(jobsAtom);
  const notificationAtom = useRecoilValue(notificationsAtom);
  const messagingsAtom = useRecoilValue(messagingAtom);

  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/notifications")
    .then(res =>{
      setNetworkCount(res.data)
    })
  },[])

  return (
    <div>
      <button>Home</button>
      
      <button>My Network ({networkCount.network >= 100 ? '99+' : networkNotificationCount})</button>
      <button>Jobs ({jobAtom})</button>
      <button>Messaging ({messagingsAtom})</button>
      <button>Notifications ({notificationAtom})</button>

      <button>Me</button>
    </div>
  );
}

export default App;

