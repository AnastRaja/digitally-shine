import {useEffect} from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  keywords?: string;
}

export const useSEO = ({
  title,
  description,
  canonical,
  ogImage = "/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  keywords,
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    updateMetaTag("title", title);

    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords || "");

    // Update Open Graph tags
    updateMetaTag("og:title", title, "property");
    updateMetaTag("og:description", description, "property");
    updateMetaTag("og:type", ogType, "property");
    updateMetaTag("og:image", ogImage, "property");
    updateMetaTag("og:url", canonical || window.location.href, "property");

    // Update Twitter Card tags
    updateMetaTag("twitter:card", twitterCard);
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);

    // Update canonical URL
    if (canonical) {
      updateCanonical(canonical);
    }
  }, [title, description, canonical, ogImage, ogType, twitterCard, keywords]);
};

const updateMetaTag = (
  name: string,
  content: string,
  attribute: string = "name"
) => {
  if (!content) return;

  let tag = document.querySelector(
    `meta[${attribute}="${name}"]`
  ) as HTMLMetaElement;

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

const updateCanonical = (url: string) => {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", url);
};

export const generateBlogTitle = (blogTitle: string) => {
  return `${blogTitle} | Adroits Digital`;
};

export const generatePageTitle = (pageTitle: string) => {
  return `${pageTitle} | Adroits Digital`;
};
