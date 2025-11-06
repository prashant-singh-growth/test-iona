import React from "react";
import { Helmet } from "react-helmet-async";

function SeoHeader({ title, description, canonical }) {
  // Auto-generate canonical URL if not passed
  const defaultCanonical =
    typeof window !== "undefined"
      ? window.location.origin + window.location.pathname
      : "/";

  return (
    <Helmet>
      <title>
        {title
          ? title
          : "iona.ai: AI-Powered End-to-End Hiring & Onboarding Solution"}
      </title>

      <meta
        name="description"
        content={
          description ? description : "ionai - Elevating Experiences with AI"
        }
      />

      <link
        rel="canonical"
        href={canonical ? canonical : defaultCanonical}
      />
    </Helmet>
  );
}

export default SeoHeader;
