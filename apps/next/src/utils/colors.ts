/**
 * Returns either a light or dark text color based on background brightness.
 * Works with hex strings (#fff, #ffffff).
 */
export function getContrastingTextColor(
  bgColor: string,
  lightColor: string,
  darkColor: string
): string {
  // Normalize hex (remove # and expand shorthand)
  let hex = bgColor.replace("#", "");
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  }

  // Parse to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Threshold can be tweaked (0.6 works well for most UIs)
  return luminance > 0.6 ? darkColor : lightColor;
}
