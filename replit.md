# Kara Designs - African Fashion Website

## Overview

This is a full-stack web application for Kara Designs, a company specializing in authentic African fashion, particularly Bitengye designs. The application features a modern, responsive frontend built with React and a REST API backend powered by Express.js. The system showcases collections, products, and provides contact functionality for customers interested in African heritage fashion.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js REST API with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **Component-based structure**: Modular React components for different sections (Hero, Collections, Gallery, Contact, etc.)
- **Design system**: Built on shadcn/ui components with custom African-inspired theming
- **Responsive design**: Mobile-first approach with Tailwind CSS
- **Type safety**: Full TypeScript implementation with shared types
- **Modern UI patterns**: Toast notifications, form validation, loading states

### Backend Architecture
- **RESTful API**: Express.js server with structured route handling
- **Type-safe database**: Drizzle ORM with PostgreSQL for data persistence
- **Modular storage layer**: Abstract storage interface supporting both in-memory and database implementations
- **Error handling**: Centralized error handling middleware
- **Development tooling**: Hot reload with Vite integration

### Database Schema
The application uses four main entities:
- **Products**: Core fashion items with categories (bitengye, contemporary, accessories)
- **Collections**: Curated groups of products with featured status
- **Contacts**: Customer inquiries and messages
- **Newsletters**: Email subscription management

## Data Flow

1. **Product Display**: Frontend fetches product and collection data via React Query
2. **Contact Forms**: Form submissions are validated and sent to backend via API
3. **Newsletter Signup**: Email validation and duplicate prevention on backend
4. **Image Management**: Static assets served through Vite's asset handling
5. **State Management**: TanStack Query handles caching, loading states, and error handling

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity optimized for serverless
- **drizzle-orm**: Type-safe SQL query builder and ORM
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight client-side routing

### UI and Styling
- **@radix-ui/***: Accessible, unstyled UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe component variants
- **lucide-react**: Modern icon library

### Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **@replit/***: Replit-specific development plugins

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

### Build Process
- **Development**: `npm run dev` - Starts both Vite dev server and Express backend
- **Production Build**: `npm run build` - Compiles frontend and bundles backend
- **Database Migration**: `npm run db:push` - Applies schema changes to database

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **REPL_ID**: Replit-specific identifier for development features

### Production Deployment
The build process creates:
- Static frontend assets in `dist/public`
- Bundled server code in `dist/index.js`
- Database migrations in `migrations/`

The server serves both the API endpoints and static frontend files, making it suitable for single-instance deployment.

## Changelog

```
Changelog:
- July 05, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```