# Contributing to Personality Profiler

Thank you for your interest in contributing to the Personality Profiler project! This document provides guidelines for contributing to the project.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/your-username/personality-profiler.git
   cd personality-profiler
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up your development environment:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

## Development Setup

### Prerequisites
- Node.js 18 or higher
- PostgreSQL (for full functionality)
- Git

### Running the Project
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run database migrations
npm run db:push
```

## Code Style

### TypeScript
- Use TypeScript for all new code
- Follow existing code patterns and conventions
- Use proper type annotations
- Prefer interfaces over types for object definitions

### React
- Use functional components with hooks
- Follow React best practices
- Use proper prop types
- Implement proper error boundaries

### CSS/Styling
- Use Tailwind CSS for styling
- Follow the existing design system
- Use semantic class names
- Ensure mobile responsiveness

## Project Structure

```
personality-profiler/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   └── data/           # Static data and types
├── server/                 # Backend Express application
├── shared/                 # Shared types and schemas
└── docs/                   # Documentation
```

## Making Changes

### Branch Naming
- `feature/description` - For new features
- `bugfix/description` - For bug fixes
- `docs/description` - For documentation changes
- `refactor/description` - For code refactoring

### Commit Messages
Use conventional commit format:
- `feat: add new personality type analysis`
- `fix: resolve quiz progress calculation`
- `docs: update deployment instructions`
- `style: improve mobile responsiveness`
- `refactor: simplify scoring algorithm`

### Pull Request Process

1. Create a new branch for your changes
2. Make your changes with appropriate tests
3. Update documentation as needed
4. Submit a pull request with:
   - Clear description of changes
   - Reference to related issues
   - Screenshots for UI changes
   - Testing instructions

## Testing

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests
- Write unit tests for new functions
- Write integration tests for API endpoints
- Write component tests for React components
- Ensure good test coverage

## Documentation

### Code Documentation
- Add JSDoc comments for functions and classes
- Document complex algorithms and business logic
- Update README for significant changes
- Keep API documentation up to date

### Personality Type Data
When adding or modifying personality types:
- Follow the existing data structure
- Include all required fields
- Ensure accuracy of psychological information
- Cite sources for personality descriptions

## Performance Guidelines

### Frontend
- Use React.memo for expensive components
- Implement proper code splitting
- Optimize images and assets
- Use lazy loading where appropriate

### Backend
- Use database indexes effectively
- Implement proper caching strategies
- Monitor API response times
- Use connection pooling

## Security Guidelines

- Never commit sensitive data
- Use environment variables for secrets
- Implement proper input validation
- Follow OWASP security guidelines
- Use secure authentication patterns

## Database Changes

### Schema Modifications
- Use Drizzle ORM for schema changes
- Test migrations thoroughly
- Document schema changes
- Consider backward compatibility

### Data Migrations
- Create migration scripts for data changes
- Test with production-like data
- Plan rollback strategies
- Document migration procedures

## Deployment

### Testing Deployment
- Test in staging environment
- Verify all features work correctly
- Check performance metrics
- Test with different browsers and devices

### Production Deployment
- Follow deployment checklist
- Monitor application after deployment
- Be prepared to rollback if needed
- Update documentation

## Issue Reporting

When reporting issues:
- Use the issue template
- Provide detailed reproduction steps
- Include environment information
- Add screenshots or logs if helpful

## Feature Requests

When requesting features:
- Use the feature request template
- Explain the use case clearly
- Provide mockups if applicable
- Consider implementation complexity

## Code Review

### For Contributors
- Self-review your code before submitting
- Write clear commit messages
- Keep pull requests focused
- Respond to review feedback promptly

### For Reviewers
- Be constructive and helpful
- Check code style and patterns
- Verify functionality works
- Test edge cases

## Resources

### Documentation
- [React Documentation](https://reactjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team)

### Tools
- [VS Code](https://code.visualstudio.com/) - Recommended editor
- [GitHub Desktop](https://desktop.github.com/) - Git GUI
- [Postman](https://www.postman.com/) - API testing

## Support

If you need help:
- Check existing documentation
- Search existing issues
- Ask in discussions
- Contact maintainers

## License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

Thank you for contributing to make this project better!