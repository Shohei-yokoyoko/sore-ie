export function GET({ site }: { site?: URL }) {
  const origin = site?.origin ?? 'https://replace-with-domain.example';
  return new Response(`User-agent: *\nAllow: /\nDisallow: /preview/\nSitemap: ${origin}/sitemap.xml\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
