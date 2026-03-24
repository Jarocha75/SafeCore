import { groq } from "next-sanity";

// Tento dopyt vytiahne všetky služby zoradené podľa názvu
export const SERVICES_QUERY = groq`*[_type == "service"] {
  _id,
  title,
  category,
  description,
  "slug": slug.current,
  "icon": icon.asset->url
}`;
