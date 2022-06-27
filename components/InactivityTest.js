const events = [
    "load",
    "mousemove",
    "mousedown",
    "click",
    "scroll",
    "keypress",
];

const InactivityTest = ({ children }) => {
    let timer;
  
  const handleLogoutTimer = () => {
    timer = setTimeout(() => {
      resetTimer();
      
      Object.values(events).forEach((item) => {
        window.removeEventListener(item, resetTimer);
      });
      
      logoutAction();
    }, 15000); // 15000ms = 15secs. You can change the time.
  };
  

  const resetTimer = () => {
    if (timer) clearTimeout(timer);
  };

  useEffect(() => {
    Object.values(events).forEach((item) => {
      window.addEventListener(item, () => {
        resetTimer();
        handleLogoutTimer();
      });
    });
  }, []);
  
  
  const logoutAction = () => {
    localStorage.clear();
    window.location.pathname = "../pages/Auth";
  };
  
    return children;
  };
  
  export default InactivityTest;