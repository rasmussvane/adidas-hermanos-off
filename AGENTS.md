# Agent Guidelines for adidas-hermanos-off

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build production app
- `npm run lint` - Run ESLint
- `npm run tsc` - Type check with TypeScript
- No test framework configured

## Code Style

- **Components**: PascalCase files/names (e.g., `SunTimer.tsx`)
- **Variables/Functions**: camelCase (e.g., `getSunString`)
- **Types**: Use `type` keyword, define Props as `type Props = {}`
- **Imports**: External libraries first, then relative imports
- **Error Handling**: Use `console.error()` for logging errors
- **Async/Await**: Preferred over Promises for external API calls

## TypeScript

- Strict mode enabled - all types must be properly defined
- Use explicit return types for functions
- Define Location and other domain types as union types
- Export types that are used across modules

## React Patterns

- Functional components with async support
- Proper typing of component props
- Use Next.js Image component for images
- Tailwind CSS for styling with responsive classes

