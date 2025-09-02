# Voices of Equity Website

Next.js 15 website for Voices of Equity, a nationwide organization advancing health equity through education, advocacy, and community engagement.

## Development

```bash
npm run dev              # Start development server
npm run build           # Build for production
npm run lint            # Run ESLint
npm run typecheck       # TypeScript type checking
```

## Content Management

All website content is centralized in `src/content/` with TypeScript exports. This makes content easy to edit and maintain.

### Adding Content to Equity Archive

To add new items to the Equity Archive (`/resources/archive`):

1. Open `src/content/pages.ts`
2. Find the `resourcesPage.archive.items` array
3. Add a new `ArchiveItem` object with the following structure:

```typescript
{
  id: "unique-id",
  title: "Your Content Title",
  description: "Brief description of the content",
  type: "article" | "video" | "training" | "interview" | "module" | "op-ed" | "resource",
  date: "YYYY-MM-DD",
  author: "Author Name" (optional),
  tags: ["tag1", "tag2", "tag3"],
  url: "https://link-to-content.com" (optional),
  image: "/path-to-image.jpg" (optional),
  featured: true (optional, for highlighting content)
}
```

### Content Types Available
- **article**: Research papers, blog posts, written content
- **video**: YouTube videos, interviews, educational content
- **training**: Onboarding materials, leadership resources
- **interview**: Patient stories, community interviews
- **module**: Educational modules, interactive content
- **op-ed**: Opinion pieces, editorial content
- **resource**: General resources, tools, guides

## Architecture

- **Framework**: Next.js 15 with App Router and TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Content**: Centralized in `src/content/` with TypeScript types
- **Components**: Organized by feature, fully content-driven

See `CLAUDE.md` for detailed development guidance.
