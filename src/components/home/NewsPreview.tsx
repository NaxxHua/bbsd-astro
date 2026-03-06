import TextReveal from '../animations/TextReveal'
import ScrollReveal from '../animations/ScrollReveal'

const newsItems = [
  {
    image: '/images/news/anniversary.jpg',
    date: 'December 2024',
    title: 'BBSD First Year Anniversary',
    href: '/news/bbsd-first-year-anniversary',
  },
  {
    image: '/images/news/signing.jpg',
    date: 'November 2024',
    title: 'Our Company Signs Industry-University-Research Strategic Cooperation Agreement with Nantong University',
    href: '/news/our-company-signs-industry-university-research-strategic-cooperation-agreement-with-nantong-university',
  },
  {
    image: '/images/news/ceremony.jpeg',
    date: 'October 2024',
    title: 'Launches ISO 9000 Quality Management System Certification',
    href: '/news/launches-iso-9000-quality-management-system-certification',
  },
]

export default function NewsPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <TextReveal
          text="Latest News"
          tag="h2"
          className="mb-4 text-center text-4xl font-bold text-dark md:text-5xl"
        />
        <ScrollReveal>
          <p className="mx-auto mb-12 max-w-2xl text-center text-sm leading-relaxed text-gray">
            Stay updated with the latest developments, achievements, and milestones from BBSD.
          </p>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {newsItems.map((news, i) => (
            <ScrollReveal key={news.href} delay={i * 0.15}>
              <a href={news.href} className="group block">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <p className="mb-2 text-xs font-medium text-gray-light uppercase">
                    {news.date}
                  </p>
                  <h3 className="mb-3 line-clamp-2 text-base font-semibold text-dark transition-colors group-hover:text-orange-primary">
                    {news.title}
                  </h3>
                  <span className="text-sm font-medium text-blue-dark group-hover:text-orange-primary">
                    Read more →
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
