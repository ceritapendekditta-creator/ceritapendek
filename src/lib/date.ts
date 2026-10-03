const INDONESIAN_DATE_LOCALE = 'id-ID'

// Returns the date as YYYY-MM-DD when it is a real calendar date, otherwise null.
export function normalizePostDate(date: unknown): string | null {
  if (date instanceof Date) {
    return Number.isNaN(date.getTime()) ? null : date.toISOString().slice(0, 10)
  }
  if (typeof date !== 'string') return null

  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date.trim())
  if (!match) return null

  const [, year, month, day] = match.map(Number)
  const utc = new Date(Date.UTC(year, month - 1, day))
  const isRealDate =
    utc.getUTCFullYear() === year &&
    utc.getUTCMonth() === month - 1 &&
    utc.getUTCDate() === day

  return isRealDate ? date.trim() : null
}

export function getPostDateTimestamp(date: string | null) {
  if (!date) return null
  const [year, month, day] = date.split('-').map(Number)
  return Date.UTC(year, month - 1, day)
}

// Newest first; posts without a valid date go last.
export function comparePostDatesDesc(a: string | null, b: string | null) {
  const timeA = getPostDateTimestamp(a)
  const timeB = getPostDateTimestamp(b)
  if (timeA === null && timeB === null) return 0
  if (timeA === null) return 1
  if (timeB === null) return -1
  return timeB - timeA
}

export function formatPostDate(
  date: string | null,
  month: 'short' | 'long' = 'long',
) {
  if (!date) return 'belum tersedia'

  const [year, monthIndex, day] = date.split('-').map(Number)
  const localDate = new Date(year, monthIndex - 1, day)

  return new Intl.DateTimeFormat(INDONESIAN_DATE_LOCALE, {
    day: 'numeric',
    month,
    year: 'numeric',
  }).format(localDate)
}
