import TextReveal from '../animations/TextReveal'
import ScrollReveal from '../animations/ScrollReveal'
import { url } from '../../utils/url'

const teamMembers = [
  {
    name: 'Jack Lu',
    role: 'Structural Design Leader / Fabrication Supervisor',
    image: '/images/about/jack-lu.jpg',
  },
  {
    name: 'Yin Yuanxin',
    role: 'Senior E&I Engineer',
    image: '/images/about/yin-yuanxin.png',
  },
  {
    name: 'Zhu Lin',
    role: 'Procurement Engineer',
    image: '/images/about/zhu-lin.jpg',
  },
  {
    name: 'Carol Zhou',
    role: 'Senior Executive Secretary',
    image: '/images/about/carol-zhou.jpg',
  },
  {
    name: 'Cici Zhu',
    role: 'Mechanical Engineer',
    image: '/images/about/cici-zhu.jpg',
  },
  {
    name: 'Stella Zhang',
    role: 'Senior Piping Engineer',
    image: '/images/about/stella-zhang.jpg',
  },
  {
    name: 'Yang Junmin',
    role: 'Document Controller',
    image: '/images/about/yang-junmin.jpg',
  },
  {
    name: 'Katrina Pu',
    role: 'Structural Engineer',
    image: '/images/about/katrina-pu.jpg',
  },
  {
    name: 'Wang Ying',
    role: 'Team Member',
    image: '/images/about/collab-1.jpg',
  },
]

export default function TeamSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <TextReveal
          text="Meet the team"
          tag="h2"
          className="mb-4 text-center text-4xl font-bold text-dark md:text-5xl"
        />
        <ScrollReveal>
          <p className="mx-auto mb-12 max-w-3xl text-center text-sm leading-relaxed text-gray">
            Our strength lies in our people. BBSD's engineers, supervisors, and
            project managers bring extensive international experience and diverse
            expertise across mechanical, structural, and piping disciplines.
            United by a culture of professionalism and collaboration, our team is
            ready to support clients worldwide.
          </p>
        </ScrollReveal>

        {/* Featured: General Manager */}
        <ScrollReveal className="mb-12 flex justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full">
              <img
                src={url('/images/about/team-overview.jpg')}
                alt="BBSD General Manager"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-xs font-medium tracking-wider text-orange-primary uppercase">
              BBSD General Manager
            </p>
          </div>
        </ScrollReveal>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.08}>
              <div className="text-center">
                <div className="mx-auto mb-4 h-64 w-full max-w-[260px] overflow-hidden rounded-2xl">
                  <img
                    src={url(member.image)}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-base font-semibold text-dark">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-gray">{member.role}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
