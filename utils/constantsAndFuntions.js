export function truncateText(text, length) {
  if (typeof text !== "string") {
    throw new Error("The first argument must be a string.");
  }

  if (text.length <= length) {
    return text; // No need to truncate if the text is shorter than the length
  }

  return text.slice(0, length) + "..."; // Truncate and append ellipsis
}