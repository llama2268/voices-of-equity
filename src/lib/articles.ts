import { whatWeDo } from '@/content/content';

export function getMemoBySlug(slug: string) {
  return whatWeDo.voices.memos.find(memo => memo.slug === slug);
}

export function getNewsItemBySlug(slug: string) {
  return whatWeDo.impact.news.find(news => news.slug === slug);
}

export function getAllMemoSlugs() {
  return whatWeDo.voices.memos.map(memo => ({
    params: { slug: memo.slug }
  }));
}

export function getAllNewsSlugs() {
  return whatWeDo.impact.news.map(news => ({
    params: { slug: news.slug }
  }));
}

export function getRelatedMemos(currentSlug: string, limit = 3) {
  return whatWeDo.voices.memos
    .filter(memo => memo.slug !== currentSlug)
    .slice(0, limit);
}

export function getRelatedNews(currentSlug: string, limit = 3) {
  return whatWeDo.impact.news
    .filter(news => news.slug !== currentSlug)
    .slice(0, limit);
} 