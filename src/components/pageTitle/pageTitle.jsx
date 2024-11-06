import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    // Update the document title when the location changes
    document.title = `${title} - My Website`; // Customize this prefix/suffix based on your need
  }, [location, title]);

  return null; // No UI, just the side effect of updating the title
};

export default pageTitle;
