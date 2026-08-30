const INDONESIAN_DATE_LOCALE = 'id-ID'

export function getPostDateTimestamp(date: string) {
  const [year, month, day] = date.split('-').map(Number)
  return Date.UTC(year, month - 1, day)
}

export function formatPostDate(
  date: string,
  month: 'short' | 'long' = 'long',
) {
  const [year, monthIndex, day] = date.split('-').map(Number)
  const localDate = new Date(year, monthIndex - 1, day)

  return new Intl.DateTimeFormat(INDONESIAN_DATE_LOCALE, {
    day: 'numeric',
    month,
    year: 'numeric',
  }).format(localDate)
}
