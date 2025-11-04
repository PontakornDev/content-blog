# Copilot Instructions - Content Blog

## Project Architecture

This is a **Nuxt 3 + Nuxt Content** blog application with Thai language support. Key architectural decisions:

- **Content-driven**: Markdown files in `content/1.blog/` drive the entire blog structure
- **File-based routing**: Blog posts follow pattern `content/1.blog/{category}/{post}.md`
- **SSR-first**: Uses server-side rendering for SEO optimization with Thai content

## Content Structure & Critical Patterns

```
content/1.blog/
├── 1.seo/          # SEO tutorials
├── 2.git/          # Git tutorials
├── 3.go/           # Go programming
└── 4.copilot/      # AI development
```

**Frontmatter Format** (CRITICAL - must be proper YAML nesting):

```yaml
---
head:
  title: "Article Title"
  description: "Meta description"
  createAt: "DD/MM/YYYY"
  writer: "Author Name"
  imgshr: "image.png"
---
```

## Key Development Patterns

### Content Rendering (`pages/blog/[...slug].vue`)

- Use `ContentRenderer` component **without** ClientOnly wrapper
- Access content via `useAsyncData` + `queryContent(slug).findOne()`
- Table of Contents from `blog.value.body.children` using recursive `findHeadings()` function
- Always add null safety: `blog.value?.head?.title`
- Error handling with `createError({ statusCode: 404 })`

### Navigation Generation (`pages/index.vue`)

- Homepage uses `fetchContentNavigation(queryContent("blog"))` to auto-generate categories
- Displays `blogNav[0].children` as category cards with nested article links
- Navigation structure mirrors content directory numbering (1.seo, 2.git, etc.)

### SEO & Meta Patterns

- Reactive `useHead()` functions with constants from `~/utils/constant.ts`
- Thai locale (`th_TH`) as default with bilingual content support
- Images in `public/upload/img_blog/` referenced via `imgshr` frontmatter
- Facebook sharing with structured URL building: `${constants.DOMAIN}/blog${blog._path}`

### Styling Conventions

- Tailwind with consistent responsive padding: `lg:px-[15%] px-[5%]`
- Custom classes: `rainbow-text` for headings, `blog-link` for prose styling
- Prose configuration: `prose lg:prose-base prose-md prose-p:font-medium`
- Sticky TOC sidebar: `sticky top-20` hidden on mobile (`hidden lg:block`)

## Tech Stack Specifics

- **Syntax highlighting**: Shiki with custom langs in `nuxt.config.ts` (`go`, `javascript`, etc.)
- **Icons**: @iconify/vue for consistent iconography (`mdi:calendar-range`, `carbon:blog`)
- **Sitemap**: Auto-generated via `server/routes/sitemap.xml.ts` using `serverQueryContent`

## Common Issues & Solutions

- **YAML errors**: Use proper nesting, never dot notation (`head.title` ❌ → `head: { title }` ✅)
- **Content not rendering**: Check `blog.value` exists, remove ClientOnly wrapper
- **TOC extraction**: Use `blog.value.body.children`, not `excerpt.children`
- **Node.js warnings**: Add `compatibilityDate: "2025-09-01"` to nuxt.config.ts

## Development Workflow

- `yarn dev` - Development server (ports 3001+ due to conflicts)
- Content changes auto-reload via Nuxt Content's file watcher
- Component auto-import from `components/` directory
- Constants centralized in `utils/constant.ts` for domain/branding
