# Clock App

A beautiful, modern clock application that displays the current time based on your location, with dynamic day/night themes and inspirational quotes.

## Features

- 🕐 **Real-time Clock**: Updates every second with accurate timezone detection
- 🌅 **Dynamic Themes**: Automatically switches between day and night backgrounds based on your local time
- 💬 **Inspirational Quotes**: Random quotes from the Quotable API with refresh functionality
- 📊 **Timezone Details**: Expandable section showing timezone, day of year, week number, and more
- 📱 **Responsive Design**: Works beautifully on mobile, tablet, and desktop devices
- ⚡ **Fast & Smooth**: Built with React and Vite for optimal performance

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **World Time API** - Timezone detection
- **Quotable API** - Random quotes

## Project Structure

```
clock-app/
├── src/
│   ├── components/      # React components
│   │   ├── Hero.jsx     # Main hero section
│   │   ├── Quote.jsx    # Quote display component
│   │   ├── Section.jsx  # Expandable details section
│   │   └── Button.jsx   # Toggle button
│   ├── utils/           # Utility functions
│   │   └── timeUtils.js # Time-related helpers
│   └── assets/          # Images and icons
└── public/              # Static assets
```

## License

MIT
