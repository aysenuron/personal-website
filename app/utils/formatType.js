export function formatType(type) {
  return type
    .split("-") // split on dashes
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1) // capitalize first letter
    )
    .join(" "); // join with spaces
}
