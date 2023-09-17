export function setNewTheme(theme: "dark" | "light") {
    const primaryColor = theme === "dark" ? "#1f2937" : "#f3f4f6";
    const accentColor = theme === "dark" ? "#60a5fa" : "#3b82f6";
    const backgroundColor = theme === "dark" ? "#111827" : "#f3f4f6";

    document.documentElement.style.setProperty("--color-primary", primaryColor);
    document.documentElement.style.setProperty("--color-accent", accentColor);
    document.documentElement.style.setProperty("--color-background", backgroundColor);

    const colorText = getTextColorBasedOnBackground(theme);

    document.documentElement.style.setProperty("--color-text", colorText);
}

// Get relative luminance of a color
function getRelativeLuminance(color: string): number {
    const rgb = color.match(/\w\w/g)?.map(channel => parseInt(channel, 16) / 255);

    if (!rgb) {
        throw new Error(`Invalid color provided: ${color}`);
    }

    for (let i = 0; i < rgb.length; i++) {
        if (rgb[i] <= 0.03928) {
            rgb[i] = rgb[i] / 12.92;
        } else {
            rgb[i] = Math.pow((rgb[i] + 0.055) / 1.055, 2.4);
        }
    }

    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}

// Determine if the text color should be light or dark
function getTextColorBasedOnBackground(backgroundColor: string): string {
    const bgLuminance = getRelativeLuminance(backgroundColor);
    const threshold = 0.179; // Adjust this threshold as needed

    return bgLuminance > threshold ? "#111827" : "#f3f4f6";
}
