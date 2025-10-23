# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Island Voices (森乃嶼 / Senan Yu) is a bilingual (Chinese/English) React application that showcases Taiwan's 16 indigenous peoples, their cultures, sustainable practices, and marketplace. The project focuses on cultural preservation, sustainable agriculture, and biodiversity protection.

## Development Commands

- `pnpm dev` - Start development server (client on port 3000)
- `pnpm build` - Build both client and server for production
- `pnpm start` - Start production server
- `pnpm check` - Run TypeScript type checking (use this for linting/validation)
- `pnpm format` - Format code with Prettier

## Architecture

### Monorepo Structure
- `client/` - React frontend application
- `server/` - Express.js backend (simple static file server)
- `shared/` - Shared constants and utilities

### Key Technologies
- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS v4, Wouter (routing)
- **UI Components**: Radix UI primitives with custom styled components in `client/src/components/ui/`
- **State Management**: React Context (ThemeContext, LanguageContext)
- **Package Manager**: pnpm (required - see packageManager in package.json)

### Path Aliases
- `@/` → `client/src/`
- `@shared/` → `shared/`
- `@assets/` → `attached_assets/`

## Multilingual Support

The application uses a custom translation system via `LanguageContext`:
- Languages: Chinese (`zh`) and English (`en`)
- Translation keys stored in `client/src/contexts/LanguageContext.tsx`
- Use `useLanguage()` hook and `t()` function for translations
- Default language is Chinese (`zh`)

## Routing Structure

The app uses Wouter for client-side routing:
- `/` - Home page
- `/cultures` - 16 indigenous peoples overview
- `/cultures/:id` - Individual culture detail pages
- `/sustainability` - Sustainability practices
- `/stories` - In-depth stories
- `/marketplace` - Tribal marketplace
- `/marketplace/:id` - Individual tribe marketplace pages

## Component Architecture

### UI Components
- Located in `client/src/components/ui/` - Radix UI-based design system
- Custom components in `client/src/components/`
- Uses class-variance-authority (cva) for component variants
- Tailwind CSS for styling with custom design tokens

### Context Providers
- `ThemeProvider` - Theme management (light theme default, switchable capability available)
- `LanguageProvider` - Bilingual translation system
- Both providers wrap the entire app in `App.tsx`

### Error Handling
- `ErrorBoundary` component wraps the entire application
- 404 handling via NotFound component

## Build Process

The build process creates:
1. Client build → `dist/public/` (Vite)
2. Server bundle → `dist/index.js` (esbuild)

Production server serves static files from `dist/public/` with SPA fallback routing.

## Development Notes

- Uses ESM modules throughout (type: "module" in package.json)
- TypeScript strict mode enabled
- Code formatting with Prettier
- No test framework currently configured
- Uses Manus runtime plugin for development