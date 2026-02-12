import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RemoveTrailingSlash = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname, search } = location;

    let newPath = pathname;
    let shouldRedirect = false;

    if (pathname.length > 1 && pathname.endsWith("/")) {
      newPath = pathname.replace(/\/+$/, "");
      shouldRedirect = true;
    }

    const params = new URLSearchParams(search);
    if (params.has("trk")) {
      params.delete("trk");
      shouldRedirect = true;
    }

    const newSearch = params.toString();
    const finalUrl = newSearch ? `${newPath}?${newSearch}` : newPath;

    if (shouldRedirect) {
      navigate(finalUrl, { replace: true });
    }

  }, [location, navigate]);

  return null;
};

export default RemoveTrailingSlash;

