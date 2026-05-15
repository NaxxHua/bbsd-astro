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
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <TextReveal
          text="Meet the team"
          zh="认识我们的团队"
          tag="h2"
          className="mb-4 text-center text-4xl font-bold text-dark md:text-5xl"
        />
        <ScrollReveal>
          <p className="mx-auto mb-16 max-w-3xl text-center text-sm leading-relaxed text-gray">
            <T
              en="Our strength lies in our people. BBSD's engineers, supervisors, and project managers bring extensive international experience and diverse expertise across mechanical, structural, and piping disciplines. United by a culture of professionalism and collaboration, our team is ready to support clients worldwide."
              zh="我们的力量源于团队。BBSD 的工程师、监理与项目经理拥有丰富的国际经验，在机械、结构与管道等专业领域具备多元化专长。在专业与协作的文化凝聚下，我们的团队随时为全球客户提供支持。"
            />
          </p>
        </ScrollReveal>

        {/* Team Grid - 4 columns */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.06}>
              <div className="text-left">
                <div className="mb-4 aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    src={url(member.image)}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-xs text-gray">
                  <T en={member.role} zh={member.roleZh} />
                </p>
                <h3 className="mt-1 text-base font-semibold text-dark">
                  {member.name}
                </h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
