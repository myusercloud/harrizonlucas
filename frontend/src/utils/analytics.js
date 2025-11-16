// analytics.js
export const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // replace with your GA4 ID

export const pageview = (url) => {
  if (!window.gtag) return;
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  if (!window.gtag) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
