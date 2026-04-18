import metricsData from './data/metrics.json';
import venturesData from './data/ventures.json';
import servicesData from './data/services.json';
import testimonialsData from './data/testimonials.json';
import filmsData from './data/films.json';
import thoughtsData from './data/thoughts.json';
import galleryData from './data/gallery.json';
import timelineData from './data/timeline.json';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

const byOrder = (a, b) => (a.order ?? 0) - (b.order ?? 0);

export const api = {
  metrics: () => [...metricsData].sort(byOrder),
  ventures: (category) => {
    const items = [...venturesData].sort(byOrder);
    return category ? items.filter((i) => i.category === category) : items;
  },
  services: () => [...servicesData].sort(byOrder),
  testimonials: () => [...testimonialsData].sort(byOrder),
  films: (kind) => {
    const items = [...filmsData].sort(byOrder);
    return kind ? items.filter((i) => i.kind === kind) : items;
  },
  thoughts: () =>
    [...thoughtsData].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)),
  thought: (slug) => thoughtsData.find((t) => t.slug === slug),
  gallery: () => [...galleryData].sort(byOrder),
  timeline: () => [...timelineData].sort(byOrder),

  async submitContact({ name, email, category, message }) {
    if (!WEB3FORMS_ACCESS_KEY) {
      throw new Error(
        'Contact form is not configured. Set VITE_WEB3FORMS_ACCESS_KEY in client/.env.local.'
      );
    }
    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name,
        email,
        subject: `Portfolio enquiry: ${category || 'General'}`,
        category,
        message,
        from_name: name,
        replyto: email
      })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.success === false) {
      throw new Error(data.message || 'Submission failed. Please try again.');
    }
    return data;
  }
};
