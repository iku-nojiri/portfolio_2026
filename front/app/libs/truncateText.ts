export function truncateText(
  str: string,
  maxLength: number,
  endStr: string = "..."
): string {

  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + endStr;
}