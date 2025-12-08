# Responsive Filter Cards

A responsive Vue 3 application displaying employee cards with search filtering functionality.

## Features

- 🔍 Real-time search filtering by employee name
- 📱 Responsive grid layout (adapts to mobile and desktop)
- 🎨 Clean card design with employee photos, names, and age
- ⚡ Fast development with Vite HMR
- 🔒 Modern, secure dependencies

## Tech Stack

- **Vue 3** - Modern Vue with Composition API
- **Pinia** - State management for Vue 3
- **Vite** - Next-generation frontend tooling
- **Sass** - CSS preprocessor
- **Axios** - HTTP client

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+ (recommended for zero vulnerabilities)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── assets/
│   └── style.css         # Global styles
├── components/
│   ├── Card.vue          # Employee card component
│   ├── EmployeeCards.vue # Cards container with search
│   ├── Pagination.vue    # Pagination component
│   └── SearchInput.vue   # Search input with label
├── services/
│   └── getEmploye.js     # API service for fetching employees
├── store/
│   └── index.js          # Pinia store for state management
├── App.vue               # Root component
└── main.js               # Application entry point
```

## Security

This project has been migrated from Vue 2 + Vue CLI to Vue 3 + Vite to address security vulnerabilities:

- **Before**: 14 vulnerabilities (4 high, 8 moderate, 2 low)
- **After**: 2 moderate (dev-only, related to esbuild/vite dev server)

The remaining moderate vulnerabilities only affect the development server and do not impact production builds.

## API

The application fetches random user data from [Random User API](https://randomuser.me/).

## License

MIT
