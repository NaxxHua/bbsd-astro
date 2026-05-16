import TextReveal from '../animations/TextReveal'
import ScrollReveal from '../animations/ScrollReveal'
import T from '../../i18n/T'
import { url } from '../../utils/url'

const teamMembers = [
  {
    name: 'Jack Lu',
    role: 'BBSD General Manager',
    roleZh: 'BBSD 总经理',
    image: '/images/about/jack-lu.jpg',
  },
  {
    name: 'Yin Yuanxin',
    role: 'Structural Design Leader/Fabrication Supervisor',
    roleZh: '结构设计负责人 / 制造监理',
    image: '/images/about/yin-yuanxin.png',
  },
  {
    name: 'Zhu Lin',
    role: 'Senior E&I Engineer',
    roleZh: '高级电气仪表工程师',
    image: '/images/about/zhu-lin.jpg',
  },
  {
    name: 'Carol Zhou',
    role: 'Procurement Engineer',
    roleZh: '采购工程师',
    image: '/images/about/carol-zhou.jpg',
  },
  {
    name: 'Cici Zhu',
    role: 'Senior Executive Secretary',
    roleZh: '高级执行秘书',
    image: '/images/about/cici-zhu.jpg',
  },
  {
    name: 'Stella Zhang',
    role: 'Mechanical Engineer',
    roleZh: '机械工程师',
    image: '/images/about/stella-zhang.jpg',
  },
  {
    name: 'Yang Junmin',
    role: 'Senior Piping Engineer',
    roleZh: '高级管道工程师',
    image: '/images/about/yang-junmin.jpg',
  },
  {
    name: 'Katrina Pu',
    role: 'Document Controller',
    roleZh: '文档管理员',
    image: '/images/about/katrina-pu.jpg',
  },
  {
    name: 'Wang Ying',
    role: 'Structural Engineer',
    roleZh: '结构工程师',
    image: '/images/about/wang-ying.jpg',
  },
]

export default function TeamSection() {
  return (
    <section className="flex flex-col items-center justify-center overflow-hidden px-5 pt-20 pb-5 md:px-[30px] lg:pt-[125px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-10">
        {/* Title area */}
        <div className="flex flex-col items-center gap-5">
          <TextReveal
            text="Meet the team"
            zh="认识我们的团队"
            tag="h2"
            className="text-center text-[36px] font-semibold leading-[1.15] tracking-[-0.04em] text-black md:text-[44px] lg:text-[55px] lg:leading-[63.25px] lg:tracking-[-2.2px]"
          />
          <ScrollReveal>
            <p className="max-w-[800px] text-center text-base font-normal text-gray lg:text-[18px] lg:leading-[30.6px] lg:tracking-[-0.36px]">
              <T
                en="Our strength lies in our people. BBSD's engineers, supervisors, and project managers bring extensive international experience and diverse expertise across mechanical, structural, and piping disciplines. United by a culture of professionalism and collaboration, our team is ready to support clients worldwide."
                zh="我们的力量源于团队。BBSD 的工程师、监理与项目经理拥有丰富的国际经验，在机械、结构与管道等专业领域具备多元化专长。在专业与协作的文化凝聚下，我们的团队随时为全球客户提供支持。"
              />
            </p>
          </ScrollReveal>
        </div>

        {/* Team grid — 4 columns */}
        <div className="grid w-full grid-cols-2 gap-[30px] md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.06}>
              <div className="flex flex-col gap-5 pb-10">
                <img
                  src={url(member.image)}
                  alt={member.name}
                  loading="lazy"
                  className="h-[300px] w-full rounded-[10px] object-cover"
                />
                <div className="flex flex-col">
                  <p className="text-[14px] font-normal leading-[22.4px] tracking-[-0.28px] text-[#8c8c8c]">
                    <T en={member.role} zh={member.roleZh} />
                  </p>
                  <h3 className="text-[22px] font-semibold leading-[33px] tracking-[-0.44px] text-black">
                    {member.name}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
