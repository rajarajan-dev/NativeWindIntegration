Native Wind Setup

Step 1: Followed the step for expo 50+ SDK
https://www.nativewind.dev/getting-started/react-native

Step 2: Added Typescript types support
https://www.nativewind.dev/getting-started/typescript

Step 3: change the content property of the tailwind.config.js
<code>
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

</code>

<b>Output:</b>

<img width="343" alt="Screenshot 2025-02-04 at 8 54 09 PM" src="https://github.com/user-attachments/assets/0ca65215-f747-4eaa-a072-6b7111506c45" />
