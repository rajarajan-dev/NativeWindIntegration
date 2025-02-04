Native Wind Setup

Step 1: Followed the step for expo 50+ SDK
https://www.nativewind.dev/getting-started/react-native

Step 2: Added Typescript types support
https://www.nativewind.dev/getting-started/typescript

Step 3: change the content property of the tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
