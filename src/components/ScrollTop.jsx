import { useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
};

//whenever we open a new page we want to render the new componenet at the top of the page
//and not somewhere in the middle

export default ScrollTop;
