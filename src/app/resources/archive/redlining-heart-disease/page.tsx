import { redliningArticle } from '@/content/articles/redlining-heart-disease'
import Link from 'next/link'

export const metadata = {
  title: `${redliningArticle.title} | Voices of Equity`,
  description: redliningArticle.subtitle,
}

export default function RedliningArticlePage() {
  const { title, subtitle, author, date, sections } = redliningArticle

  return (
    <main className="min-h-screen bg-[#FBFFFE]">
      {/* Header */}
      <header className="pt-24 pb-12 bg-gradient-to-b from-gray-50 to-[#FBFFFE]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            href="/resources/archive"
            className="inline-flex items-center text-sm text-gray-500 hover:text-[#2A8D87] transition-colors mb-8 font-display"
          >
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Archive
          </Link>

          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-display uppercase tracking-wider bg-[#587FDA]/8 text-[#587FDA]">
              Featured Article
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-[#171219] mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 mb-6 leading-relaxed">
            {subtitle}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500 border-t border-gray-100 pt-6">
            <span className="font-medium">{author}</span>
            <span className="text-gray-300">|</span>
            <span>{date}</span>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <article className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            {sections.map((section, i) => {
              if (section.type === 'heading') {
                return (
                  <h2 key={i} className="text-2xl md:text-3xl font-bold font-display text-[#171219] mt-12 mb-2">
                    {section.text}
                  </h2>
                )
              }

              if (section.type === 'paragraph') {
                return (
                  <p key={i} className="text-gray-600 leading-relaxed text-base md:text-lg">
                    {section.text}
                  </p>
                )
              }

              if (section.type === 'citation' && section.items) {
                return (
                  <div key={i} className="mt-8 pt-8 border-t border-gray-200">
                    <ol className="space-y-3">
                      {section.items.map((cite, j) => (
                        <li key={j} className="text-sm text-gray-500 leading-relaxed pl-6 -indent-6">
                          {cite}
                        </li>
                      ))}
                    </ol>
                  </div>
                )
              }

              return null
            })}
          </div>

          {/* Tags */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {['Redlining', 'Cardiovascular Health', 'Structural Racism', 'Environmental Justice', 'Social Determinants'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Back link */}
          <div className="mt-12">
            <Link
              href="/resources/archive"
              className="inline-flex items-center text-[#2A8D87] hover:text-[#1F6B66] font-semibold font-display transition-colors"
            >
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Equity Archive
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
