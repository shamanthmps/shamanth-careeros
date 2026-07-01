export function formatTodayLabel(date: Date = new Date()) {
  return new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    month: "short",
    day: "numeric"
  }).format(date);
}
