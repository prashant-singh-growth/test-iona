import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RemoveTrailingSlash = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      location.pathname.length > 1 &&
      location.pathname.endsWith("/")
    ) {
      navigate(
        location.pathname.replace(/\/+$/, ""),
        { replace: true }
      );
    }
  }, [location, navigate]);

  return null;
};

export default RemoveTrailingSlash;
