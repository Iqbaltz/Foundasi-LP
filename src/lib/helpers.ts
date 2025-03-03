export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()

  const optionsThisYear: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' }
  const optionsPreviousYears: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }

  return date.getFullYear() === now.getFullYear()
    ? date.toLocaleDateString('en-US', optionsThisYear)
    : date.toLocaleDateString('en-US', optionsPreviousYears)
}
