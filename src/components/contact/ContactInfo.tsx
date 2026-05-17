import { Phone, MapPin, Envelope } from '@phosphor-icons/react'
import TextReveal from '../animations/TextReveal'
import ScrollReveal from '../animations/ScrollReveal'
import T from '../../i18n/T'

const rows = [
  {
    Icon: Phone,
    en: '(86) 15927327738',
    zh: '(86) 15927327738',
    href: 'tel:+8615927327738',
  },
  {
    Icon: MapPin,
    en: 'No. 218 Yongxing Road, Yongxing Sub-district, Chongchuan District, Nantong, Jiangsu, China',
    zh: '中国江苏省南通市崇川区永兴街道永兴路 218 号',
    href: null,
  },
  {
    Icon: Envelope,
    en: 'jacklu@bbsd.cn.com',
    zh: 'jacklu@bbsd.cn.com',
    href: 'mailto:jacklu@bbsd.cn.com',
  },
]

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-5">
      <TextReveal
        text="Let's get in touch and work together!"
        zh="携手合作，与我们取得联系！"
        tag="h2"
        className="text-[32px] font-semibold leading-[1.15] tracking-[-0.04em] text-black md:text-[44px] lg:text-[55px] lg:leading-[63.25px] lg:tracking-[-2.2px]"
      />
      <ScrollReveal delay={0.15}>
        <p className="text-base font-normal text-gray lg:text-[18px] lg:leading-[30.6px] lg:tracking-[-0.36px]">
          <T
            en="Whether you're dealing with an emergency, need routine maintenance, or have a question about our services, our team at BBSD is ready to assist you."
            zh="无论您面临紧急情况、需要日常维护，还是对我们的服务有疑问，BBSD 团队都随时为您提供协助。"
          />
        </p>
      </ScrollReveal>

      <div className="mt-2 flex flex-col gap-[15px]">
        {rows.map((row) => {
          const inner = (
            <>
              <row.Icon weight="regular" size={28} className="mt-0.5 shrink-0 text-black" />
              <span className="text-[18px] font-semibold leading-[28px] tracking-[-0.4px] text-black lg:text-[20px] lg:leading-[32px]">
                <T en={row.en} zh={row.zh} />
              </span>
            </>
          )
          return row.href ? (
            <a key={row.en} href={row.href} className="flex items-start gap-[15px]">
              {inner}
            </a>
          ) : (
            <div key={row.en} className="flex items-start gap-[15px]">
              {inner}
            </div>
          )
        })}
      </div>
    </div>
  )
}
