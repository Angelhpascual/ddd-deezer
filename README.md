# 🎵 DDD Deezer Music App

A professional music discovery application built with **React**, **TypeScript**, and **Domain-Driven Design (DDD)** principles.

## 🚀 Features

- **Trending Music**: Real-time access to Deezer's top charts filtering by categories:
  - 🌍 **Top Global**: The most played tracks worldwide.
  - 🚀 **Fresh Releases**: New popular hits.
  - 🕺 **Mood Booster**: Energetic tracks to lift your spirit.
- **Search Engine**: Instant search for tracks and artists.
- **Audio Previews**: Play 30-second snippets of any track directly from the UI.
- **Modern UI**: Polished interface with Tailwind CSS, Skeleton loading states, and responsive design.

## 🏗️ Architecture

This project strictly follows **Domain-Driven Design** to ensure scalability and maintainability.

### Layers

1.  **Domain (`src/app/domain`)**:
    - The heart of the application. Contains business logic, Entities (Track, Artist), Value Objects (TrackId, Duration, etc.), and Repository Interfaces.
    - _Dependency Rule_: This layer depends on NOTHING.

2.  **Application (`src/hooks`)**:
    - Orchestrates data flow. Uses React Query hooks (`useTrendingTracks`, `useSearchTracks`) to connect the UI with the Domain/Infrastructure.

3.  **Infrastructure (`src/app/infrastructure`)**:
    - Implements the contracts defined in the Domain.
    - Connects to the external Deezer API (via proxy) and maps raw JSON to Domain Entities.

4.  **UI (`src/components`, `App.tsx`)**:
    - Pure React components. "Dumb" components (like `HeroSection`) receive data via props and emit events, delegating logic to the container (`App`).

## 🛠️ Tech Stack

- **Core**: React 18, TypeScript, Vite.
- **State/Async**: TanStack Query (React Query).
- **Styling**: Tailwind CSS.
- **Testing**: Vitest, React Testing Library.

## 📂 Project Structure

```
src/
├── app/
│   ├── domain/           # Business logic & Types
│   └── infrastructure/   # API implementations
├── components/           # UI Components (Hero, etc.)
├── hooks/                # Application logic (React Query)
├── App.tsx               # Main Composition Root
└── main.tsx              # Entry Point
```

## 🚦 Getting Started

1.  **Install dependencies**:

    ```bash
    npm install
    ```

2.  **Run development server**:

    ```bash
    npm run dev
    ```

    _Note: The project uses a Vite proxy to handle CORS with the Deezer API._

3.  **Run Tests**:
    ```bash
    npm run test
    ```

## 🧪 Testing

The project follows a comprehensive testing strategy:

- **Unit Tests**: Verify Infrastructure logic (Repositories).
- **Component Tests**: Verify UI interactions and accessibility.
- **Integration Tests**: Verify the full user flow in `App.tsx`.

---

Built strictly following Clean Architecture principles.
