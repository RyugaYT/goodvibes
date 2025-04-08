# GoodVibes

Modern Three.js Starter Kit with Cloudflare Integration

## Features

- 🚀 Cloudflare Pages Deployment
- ⚡ Vite + TypeScript
- 🔌 Cloudflare Workers + Durable Objects
- 🎮 Three.js Scene Ready
- 📚 RAG Rules Documentation

## Getting Started

### Development

```bash
# Install dependencies
bun i

# Start client development server
bun run --cwd client dev

# Start server development
bun run --cwd server dev
```

### Deployment

```bash
# Build the project
bun run build

# Deploy to Cloudflare
bun run deploy
```

## Project Structure

```
goodvibes/
├── client/         # Frontend application
├── server/         # Cloudflare Workers + Durable Objects
└── shared/         # Shared types and utilities
```

## Tech Stack

- **Frontend**: Three.js, TypeScript, Vite
- **Backend**: Cloudflare Workers, Durable Objects
- **Package Manager**: Bun
- **Deployment**: Cloudflare Pages

## Documentation

The project includes comprehensive RAG (Retrieval-Augmented Generation) rules for maintaining and extending the codebase. These rules provide guidance for implementing features and following best practices.
