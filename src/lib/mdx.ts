import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';

export async function serializeContent(content: string) {
  return serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
    },
    parseFrontmatter: true
  });
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

export function estimateReadTime(content: string) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
} 