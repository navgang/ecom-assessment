// formatDuration.js
// Convert minutes to "Hh Mm", e.g. 65 -> "1h 5m", 120 -> "2h 0m"
export function formatDuration(totalMinutes)
{
    if (totalMinutes < 0 || typeof totalMinutes !== "number") return "0h 0m";
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes}m`;
}
