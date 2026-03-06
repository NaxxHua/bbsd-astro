import TextReveal from '../animations/TextReveal'
import ScrollReveal from '../animations/ScrollReveal'

export default function ISOCertifications() {
  return (
    <section className="bg-blue-light py-24">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <TextReveal
          text="Our ISO Certifications"
          tag="h2"
          className="mb-4 text-4xl font-bold text-dark md:text-5xl"
        />
        <ScrollReveal>
          <p className="mx-auto mb-12 max-w-2xl text-base text-gray">
            Ensuring Quality, Safety, and Environmental Responsibility
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-4 text-4xl text-blue-dark">📋</div>
              <h3 className="text-lg font-bold text-dark">ISO 9001</h3>
              <p className="mt-2 text-sm text-gray">
                Quality Management System
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-4 text-4xl text-blue-dark">🛡️</div>
              <h3 className="text-lg font-bold text-dark">ISO 14001</h3>
              <p className="mt-2 text-sm text-gray">
                Environmental Management System
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-4 text-4xl text-blue-dark">⚙️</div>
              <h3 className="text-lg font-bold text-dark">ISO 45001</h3>
              <p className="mt-2 text-sm text-gray">
                Occupational Health & Safety
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
