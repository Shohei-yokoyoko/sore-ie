import { getCollection } from 'astro:content';
import { categories } from '../site-config';

const indexableStaticPaths = ['/', '/categories', '/about', '/profile', '/site-map'];

export async function GET({ site }: { site?: URL }) {
  const origin = site?.origin ?? 'https://replace-with-domain.example';
  const publishedPosts = await getCollection('posts', ({ data }) => data.draft === false);
  const categoryPaths = categories.map((category) => `/categories/${category.slug}`);
  const articlePaths = publishedPosts.map((post) => `/articles/${post.id}`);
  const paths = [...indexableStaticPaths, ...categoryPaths, ...articlePaths];
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${origin}${path}</loc></url>`).join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}

