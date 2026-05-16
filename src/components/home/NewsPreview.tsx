import TextReveal from '../animations/TextReveal'
import ScrollReveal from '../animations/ScrollReveal'
import T from '../../i18n/T'
import { url } from '../../utils/url'

const newsItems = [
  {
    image: '/images/news/anniversary.jpg',
    date: 'Nov 20, 2025',
    dateZh: '2025年11月20日',
    title: 'BBSD - First Year Anniversary',
    titleZh: 'BBSD 一周年纪念',
    href: '/news/bbsd-first-year-anniversary',
  },
  {
    image: '/images/news/signing.jpg',
    date: 'Apr 18, 2025',
    dateZh: '2025年4月18日',
    title: 'Our Company Signs Industry-University-Research Strategic Cooperation Agreement with Nantong University',
    titleZh: '我司与南通大学签署产学研战略合作协议',
    href: '/news/our-company-signs-industry-university-research-strategic-cooperation-agreement-with-nantong-university',
  },
  {
    image: '/images/news/ceremony.jpeg',
    date: 'Jun 4, 2025',
    dateZh: '2025年6月4日',
    title: 'BBSD (Jiangsu Nantong) Engineering Technology Co., Ltd. Officially Launches ISO 9000 Quality Management System Certification',
    titleZh: 'BBSD（江苏南通）工程技术有限公司正式启动 ISO 9000 质量管理体系认证',
    href: '/news/launches-iso-9000-quality-management-system-certification',
  },
]

export default function NewsPreview() {
  return (
    <section className="flex flex-col items-center justify-center overflow-hidden bg-white px-5 py-20 md:px-[30px] lg:py-[125px]">
      <div className="flex w-full max-w-[1200px] flex-col gap-[75px]">
        {/* Title area */}
        <div className="flex flex-col items-center gap-5">
          <TextReveal
            text="Latest News"
            zh="最新动态"
            tag="h2"
            className="text-center text-[36px] font-semibold leading-[1.15] tracking-[-0.04em] text-black md:text-[44px] lg:text-[55px] lg:leading-[63.25px] lg:tracking-[-2.2px]"
          />
          <ScrollReveal>
            <p className="max-w-[600px] text-center text-base font-normal tracking-[-0.02em] text-gray lg:text-[18px] lg:leading-[30.6px] lg:tracking-[-0.36px]">
              <T
                en="Stay updated with our latest company developments, industry insights, and project milestones."
                zh="及时了解我们最新的公司动态、行业洞察与项目里程碑。"
              />
            </p>
          </ScrollReveal>
        </div>

        {/* News cards */}
        <div className="grid grid-cols-1 items-start gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((news, i) => (
            <ScrollReveal key={news.href} delay={i * 0.15}>
              <a href={url(news.href)} className="group flex flex-col items-center gap-[30px]">
                <div className="w-full overflow-hidden rounded-[15px]">
                  <img
                    src={url(news.image)}
                    alt={news.title}
                    loading="lazy"
                    className="h-[312px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex w-full flex-col items-center gap-5 text-center">
                  <div className="flex flex-col items-center gap-[5px]">
                    <p className="text-[14px] font-normal leading-[22.4px] tracking-[-0.28px] text-[#8c8c8c]">
                      <T en={news.date} zh={news.dateZh} />
                    </p>
                    <h4 className="text-[20px] font-semibold leading-[32px] tracking-[-0.4px] text-black">
                      <T en={news.title} zh={news.titleZh} />
                    </h4>
                  </div>
                  <span className="text-[16px] font-medium leading-[19.2px] tracking-[-0.32px] text-blue-dark transition-colors group-hover:text-orange-primary">
                    <T en="Read more →" zh="阅读更多 →" />
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
