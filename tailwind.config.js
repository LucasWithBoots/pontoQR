/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                blue_ribbon: "#1A5DF4",
                ebony: "#121631",
                mirage: "#181C23"
            }
        }
    },
    plugins: [],
}