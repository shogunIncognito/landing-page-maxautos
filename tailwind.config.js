/** @type {import('tailwindcss').Config} */
import keepPreset from 'keep-react/preset'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/keep-react/**/*.{js,jsx,ts,tsx}'
  ],
  presets: [keepPreset],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: []
}
