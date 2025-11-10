import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const redirects = {
   "/find": "/solutions/novacount",
  "/novaassist": "/solutions/novaassist",
  "/speedboard": "/solutions/speedboard",
  "/novastart": "/solutions/novastart",
  "/novadoc": "/solutions/novadoc",
  "/novaengage": "/solutions/novaengage",
  "/trainplus": "/solutions/trainplus",
  "/novaverify": "/solutions/novaverify",
  "/casestudies": "/case-studies",
  "/scheduledemo": "/schedule-demo",
 
};

export default function RedirectHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const target = redirects[location.pathname];
    if (target) {
      if (target.startsWith("http")) {
        window.location.href = target; 
      } else {
        navigate(target, { replace: true }); 
      }
    }
  }, [location, navigate]);

  return null; 
}
