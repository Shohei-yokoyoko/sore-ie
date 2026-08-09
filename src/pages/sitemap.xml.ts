import { getCollection } from 'astro:content';
import { categories } from '../site-config';
export async function GET({ site }: { site?: URL }) {
  const origin = site?.origin ?? 'https://replace-with-domain.example';
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const paths = ['/', '/categories', '/about', '/profile', '/privacy', '/disclaimer', '/contact', '/site-map', ...categories.map((c) => `/categories/${c.slug}`), ...posts.map((p) => `/articles/${p.id}`)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${origin}${path}</loc></url>`).join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
