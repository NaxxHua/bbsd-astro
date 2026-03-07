import TextReveal from '../animations/TextReveal'
import ScrollReveal from '../animations/ScrollReveal'
import { url } from '../../utils/url'

const newsItems = [
  {
    image: '/images/news/anniversary.jpg',
    date: 'Nov 20, 2025',
    title: 'BBSD - First Year Anniversary',
    href: '/news/bbsd-first-year-anniversary',
  },
  {
    image: '/images/news/signing.jpg',
    date: 'Apr 18, 2025',
    title: 'Our Company Signs Industry-University-Research Strategic Cooperation Agreement with Nantong University',
    href: '/news/our-company-signs-industry-university-research-strategic-cooperation-agreement-with-nantong-university',
  },
  {
    image: '/images/news/ceremony.jpeg',
    date: 'Jun 4, 2025',
    title: 'BBSD (Jiangsu Nantong) Engineering Technology Co., Ltd. Officially Launches ISO 9000 Quality Management System Certification',
    href: '/news/launches-iso-9000-quality-management-system-certification',
  },
]

export default function NewsPreview() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6">
        <TextReveal
          text="Latest News"
          tag="h2"
          className="mb-3 text-3xl font-bold text-dark md:mb-4 md:text-4xl lg:text-center lg:text-5xl"
        />
        <ScrollReveal>
          <p className="mb-10 max-w-2xl text-xs leading-relaxed text-gray md:mb-14 md:text-sm lg:mx-auto lg:text-center">
            Stay updated with our latest company developments, industry insights, and project milestones.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {newsItems.map((news, i) => (
            <ScrollReveal key={news.href} delay={i * 0.15}>
              <a href={url(news.href)} className="group block">
                <div className="overflow-hidden rounded-lg md:rounded-xl">
                  <img
                    src={url(news.image)}
                    alt={news.title}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-56"
                  />
                </div>
                <div className="mt-4 md:mt-5">
                  <p className="mb-1.5 text-xs font-medium text-gray-light md:mb-2">
                    {news.date}
                  </p>
                  <h3 className="mb-2 line-clamp-3 text-sm font-bold text-dark transition-colors group-hover:text-blue-dark md:mb-3 md:text-base">
                    {news.title}
                  </h3>
                  <span className="text-xs font-medium text-blue-dark transition-colors group-hover:text-orange-primary md:text-sm">
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
