# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 website for Voices of Equity, a nationwide organization advancing health equity through education, advocacy, and community engagement. The site showcases their mission, team, chapters, resources, and provides ways for users to get involved.

## Key Technologies & Architecture

- **Framework**: Next.js 15 with App Router and TypeScript
- **Styling**: Tailwind CSS with custom theme system
- **Fonts**: Google Fonts (Instrument Sans, Playfair Display)
- **Animations**: Framer Motion and custom CSS animations
- **Package Manager**: npm

### Architecture Overview

- **App Router Structure**: Uses Next.js 13+ app directory structure with nested routes
- **Content Management**: Fully centralized content system in `src/content/` with TypeScript exports
- **Component Architecture**: Organized by feature in `src/components/` with UI primitives in `src/components/ui/`
- **Theming**: Custom design system in `src/styles/theme.ts` with consistent colors, spacing, and brand guidelines
- **Layout**: Consistent layout with NavBar and Footer in root layout

## Development Commands

```bash
# Development
npm run dev              # Start development server with Turbo
npm run build           # Build for production
npm run start           # Start production server
npm run preview         # Build and start production server

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Run ESLint with auto-fix
npm run typecheck       # TypeScript type checking
npm run check           # Run both lint and typecheck
npm run format:write    # Format code with Prettier
npm run format:check    # Check code formatting
```

## Content System Architecture

**CRITICAL**: All content is now centralized and fully typed. Never hard-code content in components.

### Content Files Structure
- `src/content/index.ts` - Main export hub for all content
- `src/content/site.ts` - Site configuration, navigation, footer
- `src/content/pages.ts` - All page-specific content (home, who-we-are, what-we-do, etc.)
- `src/content/types.ts` - TypeScript interfaces for all content structures

### Content Import Pattern
Always import from the centralized content system:
```typescript
// ✅ Correct
import { homePage, whoWeArePage, navigation, siteConfig } from '@/content'

// ❌ Never do this
import { content } from '@/content/content' // This file no longer exists
```

### Adding New Content
1. **Page Content**: Add to appropriate section in `src/content/pages.ts`
2. **Navigation**: Modify `navigation` object in `src/content/site.ts`
3. **Site Config**: Update `siteConfig` in `src/content/site.ts`
4. **New Types**: Add interfaces to `src/content/types.ts`

## Component Architecture

### Component Patterns
- All components are purely presentational and receive content via props
- Use TypeScript interfaces for props from `src/content/types.ts`
- Components should never contain hard-coded content
- Follow existing component structure for consistency

### Page Structure
Each page follows this pattern:
```typescript
import { pageContent } from '@/content'

export default function Page() {
  const { title, subtitle, sections } = pageContent.specificPage
  
  return (
    <PageLayout title={title} subtitle={subtitle}>
      {/* Content driven by pageContent */}
    </PageLayout>
  )
}
```

## Styling System

### Theme Colors
- Primary: `#607AD4` (blue)
- Secondary: `#498B86` (green) 
- Accent: `#E4826D` (coral)

### Design Patterns
- Consistent spacing using Tailwind's scale
- Responsive design with mobile-first approach
- Animation keyframes for fade-in, slide-up, and slide-in effects
- Card-based layouts with hover states

## Page Organization

### Current Pages
- `/` - Homepage with hero, mission, team preview, stats, and call-to-action
- `/who-we-are/` - Mission, history, team pages with dynamic member profiles
- `/what-we-do/` - Impact page with full content, local initiatives with Cornell event, national/summary are placeholders
- `/get-involved/` - Chapters, requirements, start, support with forms and chapter information
- `/resources/` - Educational content and archive
- `/contact/` - Contact information and form
- `/cornell/` - Featured chapter page with comprehensive content

### Dynamic Routes
- `/who-we-are/team/[memberId]/` - Individual team member profile pages generated from content

### Placeholder Pages
Several pages show "Coming Soon" - this is intentional. Content should only be added when real content is available, not fake placeholder content. Examples include `/what-we-do/national/` and `/what-we-do/summary/`.

## Making Changes

### To Edit Site Content
1. Find the appropriate content in `src/content/pages.ts`
2. Modify the content object
3. The change will automatically reflect across all pages using that content

### To Add New Pages
1. Create the page component in appropriate `src/app/` directory
2. Add content to `src/content/pages.ts`
3. Update navigation in `src/content/site.ts` if needed
4. Import and use content from `@/content`

### To Add Team Members
Add to the `members` or `engineers` array in `whoWeArePage.team` in `src/content/pages.ts`

## Testing

No test framework is currently configured. All testing should be done manually through the development server.

## Common Issues

- Always use `@/content` for imports, never import individual content files
- Escape quotes in JSX using `&apos;` and `&quot;`
- Use Next.js `Image` component instead of `<img>` for better performance
- All pages should be content-driven, never hard-coded

## Deployment

The project builds to static files and can be deployed to any static hosting platform.