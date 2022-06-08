import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const ScrollIntoView = ({ children }) => {
  let location = useLocation();
  const prevLocation = useRef();

  useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      window.scrollTo(0, 0);
      prevLocation.current = location.pathname;
    }
  }, [location]);

  return children;
};

ScrollIntoView.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
};

export default ScrollIntoView;
