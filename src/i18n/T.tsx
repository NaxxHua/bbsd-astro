/**
 * Bilingual text component (React).
 * Renders both English and Chinese; CSS in global.css shows the active one.
 *
 * Usage: <T en="Home" zh="首页" />
 */
interface Props {
  en: string
  zh: string
}

export default function T({ en, zh }: Props) {
  return (
    <>
      <span data-lang-en>{en}</span>
      <span data-lang-zh>{zh}</span>
    </>
  )
}
