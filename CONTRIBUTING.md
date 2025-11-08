# Contributing Guide

Thank you for contributing to React Native Foundation! This guide will help you understand our development workflow and requirements.

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Branch Naming](#branch-naming)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Code Review Pipeline](#code-review-pipeline)
- [Coding Standards](#coding-standards)

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm/yarn
- **Git** for version control
- **Code editor** (VS Code recommended)

### Setup

1. **Fork and clone the repository**

```bash
git clone https://github.com/<your-username>/react-native-foundation.git
cd react-native-foundation
```

2. **Install dependencies**

```bash
npm install
```

3. **Build the package**

```bash
npm run build:foundation
```

4. **Run the example app**

```bash
npm run example
```

## 🔧 Development Workflow

### 1. Create a Branch

Always create a new branch from `main`:

```bash
git checkout main
git pull origin main
git checkout -b <type>/<description>
```

### 2. Make Changes

- Edit files in `packages/foundation/src/`
- Add/update examples in `example/src/`
- Update documentation if needed

### 3. Build and Test

```bash
# Build the package
npm run build:foundation

# Type check
npm run typecheck:foundation

# Test in example app
npm run example
```

### 4. Commit Your Changes

```bash
git add .
git commit -m "<type>: <description>"
```

### 5. Push and Create PR

```bash
git push origin <your-branch-name>
```

Then create a Pull Request on GitHub.

## 🌿 Branch Naming

Use these prefixes for branch names:

| Prefix | Purpose | Example |
|--------|---------|---------|
| `feature/` | New features | `feature/add-button-variant` |
| `fix/` | Bug fixes | `fix/input-focus-issue` |
| `docs/` | Documentation | `docs/update-readme` |
| `refactor/` | Code refactoring | `refactor/simplify-theme` |
| `perf/` | Performance improvements | `perf/optimize-rendering` |
| `test/` | Tests | `test/add-button-tests` |
| `chore/` | Maintenance | `chore/update-dependencies` |

**Format:** `<type>/<short-description-with-hyphens>`

## 💬 Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

- **feat** - New feature
- **fix** - Bug fix
- **docs** - Documentation changes
- **style** - Code formatting (no logic change)
- **refactor** - Code restructuring
- **perf** - Performance improvements
- **test** - Adding/updating tests
- **chore** - Maintenance tasks

### Examples

```bash
# Feature
git commit -m "feat(Button): add loading state"

# Bug fix
git commit -m "fix(Input): resolve keyboard dismiss on iOS"

# Documentation
git commit -m "docs: update installation instructions"

# Breaking change
git commit -m "feat(Theme)!: restructure theme tokens

BREAKING CHANGE: Theme structure has changed. See migration guide."
```

### Scope (Optional)

Use component/module name: `Button`, `Input`, `Theme`, etc.

## 🔄 Pull Request Process

### 1. Fill Out PR Template

When creating a PR, complete the template with:

- **Description** - What changes you made
- **Type of Change** - Select applicable checkboxes
- **Related Issues** - Link to issues (e.g., `Fixes #123`)
- **Screenshots** - For UI changes
- **Testing** - How you tested

### 2. PR Title Format

Use the same format as commit messages:

```
feat: add Button loading variant
fix: resolve Input autofocus issue
docs: update contributing guide
```

### 3. Wait for Review

- Our automated review pipeline will run
- Maintainers will review your code
- Address any feedback

### 4. Merge

Once approved, a maintainer will merge your PR.

## ✅ Code Review Pipeline

When you create or update a Pull Request, our **automated review workflow** runs these checks:

### 1. **PR Validation** ✓

- **PR Title Check** - Must follow Conventional Commits format
- **Branch Name Check** - Must use correct prefix (feature/*, fix/*, etc.)
- **PR Size Analysis** - Warns if PR is too large (>500 lines)

**Status:** `validate-pr` job

### 2. **Code Quality** ✓

- **Detect Changed Packages** - Identifies which packages were modified
- **Type Checking** - Runs TypeScript type checker on changed packages
- **Build Verification** - Ensures package builds successfully
- **Build Artifacts Check** - Verifies output files exist

**Status:** `code-quality` job

### 3. **Breaking Changes Detection** ✓

- **Scan Commits** - Looks for `BREAKING CHANGE` in commit messages
- **Check PR Title** - Detects `!` in conventional commit format
- **Auto Comment** - Adds warning comment if breaking changes detected

**Status:** `breaking-changes` job

### 4. **Automatic Labeling** 🏷️

Based on your changes, labels are automatically added:

- **Type Labels** - `feature`, `bug`, `documentation`, etc.
- **Package Labels** - `package:foundation`, etc.
- **Component Labels** - `component:button`, `component:input`, etc.

**Status:** `auto-label` job

### 5. **Dependency Review** 🔒

- **Security Scan** - Checks for vulnerabilities in dependencies
- **License Check** - Ensures compatible licenses (blocks GPL-3.0, AGPL-3.0)
- **Severity Check** - Fails on moderate+ severity issues

**Status:** `dependency-review` job

### 6. **Tests** (if configured) 🧪

- Runs unit tests if available
- Reports test results

**Status:** `test` job

### Success Criteria ✅

Your PR is **ready for human review** when:

- ✅ All automated checks pass
- ✅ No merge conflicts
- ✅ PR template is filled out
- ✅ Code follows our standards

### If Checks Fail ❌

1. **Click on failed check** to see details
2. **Fix the issue** locally
3. **Commit and push** - checks will re-run automatically

Common issues:

- **PR title format** - Use `feat:`, `fix:`, etc.
- **Branch name** - Must start with `feature/`, `fix/`, etc.
- **Type errors** - Run `npm run typecheck:foundation` locally
- **Build errors** - Run `npm run build:foundation` locally

## 📝 Coding Standards

### TypeScript

- Use **TypeScript** for all code
- Define **proper types** for all exports
- Avoid `any` - use `unknown` or proper types
- Export types that users need

### Components

```typescript
// ✅ Good
export interface ButtonProps {
  /** Button label text */
  label: string;
  /** Called when button is pressed */
  onPress?: () => void;
  /** Button style variant */
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  variant = 'primary'
}) => {
  // Implementation
};
```

### File Organization

- One component per file
- Use index.ts for exports
- Group related files in folders

### Naming Conventions

- **Components:** PascalCase (`Button`, `Input`)
- **Files:** PascalCase for components (`Button.tsx`)
- **Hooks:** camelCase with `use` prefix (`useTheme`)
- **Types:** PascalCase (`ButtonProps`)
- **Constants:** UPPER_SNAKE_CASE (`DEFAULT_THEME`)

### Code Style

- Format with Prettier (runs automatically)
- Follow existing code patterns
- Add comments for complex logic

## 🎯 Contribution Types

### Bug Fixes 🐛

1. Create issue describing the bug
2. Branch: `fix/issue-description`
3. Fix the bug
4. Add test if possible
5. Submit PR referencing issue

### New Features ✨

1. Open discussion/issue first
2. Get feedback from maintainers
3. Branch: `feature/feature-name`
4. Implement feature
5. Add examples to example app
6. Update documentation
7. Submit PR

### Documentation 📚

1. Branch: `docs/what-you-update`
2. Update relevant .md files
3. Submit PR

### Performance ⚡

1. Benchmark before changes
2. Branch: `perf/what-you-optimize`
3. Make improvements
4. Benchmark after changes
5. Include results in PR

## ❓ Questions?

- **Bug reports:** [Open an issue](https://github.com/passion-ui/react-native-foundation/issues)
- **Feature requests:** [Open a discussion](https://github.com/passion-ui/react-native-foundation/discussions)
- **Questions:** [Start a discussion](https://github.com/passion-ui/react-native-foundation/discussions)
- **Email:** huynh.developer@gmail.com

## 📜 Code of Conduct

Please be respectful and constructive. We're all here to build something great together!

---

Thank you for contributing! 🎉

## Code of Conduct

This project and everyone participating in it is governed by a Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to huynh.developer@gmail.com.

## Getting Started

### Prerequisites

- Node.js (>= 18.x)
- npm or Yarn
- Git

### Setting up the development environment

1. **Fork the repository** on GitHub
2. **Clone your fork** to your local machine:
   ```bash
   git clone https://github.com/<your-username>/react-native-foundation.git
   cd react-native-foundation
   ```

3. **Add the upstream repository**:
   ```bash
   git remote add upstream https://github.com/passion-ui/react-native-foundation.git
   ```

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Build the library**:
   ```bash
   npm run build
   ```

6. **Run the example app**:
   ```bash
   npm run example
   ```

## Development Workflow

This is a monorepo managed with npm workspaces. The structure is:

- `packages/foundation/` - The main library package
- `example/` - Example app for testing components

### Making Changes

1. **Create a new branch** from `main`:
   ```bash
   git checkout -b feature/my-new-feature
   # or
   git checkout -b fix/my-bug-fix
   ```

2. **Make your changes** in the `packages/foundation/src` directory

3. **Test your changes** in the example app:
   ```bash
   npm run build
   npm run example
   ```

4. **Ensure code quality**:
   ```bash
   # Run linting (if available)
   npm run lint

   # Run type checking
   npm run typecheck --workspace=@passionui/react-native-foundation
   ```

### Working with the Example App

The example app is located in the `example/` directory. It's set up to use the local version of the library, so any changes you make to the library will be reflected in the example app after rebuilding.

## Submitting a Pull Request

### Before Submitting

- [ ] Make sure your code follows the project's coding guidelines
- [ ] Ensure all tests pass (if applicable)
- [ ] Update documentation if needed
- [ ] Add/update examples if you're adding new features
- [ ] Follow the commit message guidelines

### Creating a Pull Request

1. **Push your changes** to your fork:
   ```bash
   git push origin feature/my-new-feature
   ```

2. **Create a Pull Request** on GitHub from your fork to the main repository

3. **Fill out the PR template** with all relevant information:
   - Description of changes
   - Motivation and context
   - Screenshots/GIFs (if applicable)
   - Testing steps
   - Related issues

4. **Wait for review** - maintainers will review your PR and may request changes

5. **Address feedback** - make any requested changes and push updates to your branch

6. **Celebrate** 🎉 - once approved, your PR will be merged!

### PR Title Format

Use conventional commit format for PR titles:

- `feat: add new Button variant`
- `fix: resolve TouchableOpacity press issue`
- `docs: update README with new examples`
- `chore: update dependencies`
- `refactor: simplify theme context logic`
- `perf: optimize rendering performance`

## Coding Guidelines

### TypeScript

- Use TypeScript for all new code
- Provide proper type definitions for all exports
- Avoid using `any` - use `unknown` or proper types instead
- Export types that consumers might need

### Component Guidelines

```typescript
// Good: Proper typing and documentation
export interface ButtonProps {
  /** The text to display on the button */
  label: string;
  /** Callback fired when button is pressed */
  onPress?: () => void;
  /** Button variant style */
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  variant = 'primary'
}) => {
  // Implementation
};
```

### File Organization

- One component per file
- Export from index.ts files
- Group related files in folders
- Use meaningful file and folder names

### Naming Conventions

- **Components**: PascalCase (e.g., `Button`, `TextField`)
- **Files**: PascalCase for components (e.g., `Button.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useTheme`)
- **Types/Interfaces**: PascalCase (e.g., `ButtonProps`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `DEFAULT_THEME`)

### Code Style

This project uses Prettier for code formatting. The configuration is in `package.json`. Format your code before committing:

```bash
npx prettier --write "packages/foundation/src/**/*.{ts,tsx}"
```

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. This leads to more readable messages and allows us to generate changelogs automatically.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type

Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that don't affect code meaning (formatting, etc.)
- **refactor**: Code change that neither fixes a bug nor adds a feature
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Changes to build process or auxiliary tools
- **ci**: Changes to CI configuration files and scripts

### Scope (Optional)

The scope should be the name of the component affected (e.g., `Button`, `Input`, `Theme`).

### Subject

- Use imperative, present tense: "change" not "changed" nor "changes"
- Don't capitalize first letter
- No period (.) at the end

### Examples

```
feat(Button): add loading state support

Add a new `loading` prop to Button component that displays
a loading indicator and disables interactions.

Closes #123
```

```
fix(Input): resolve keyboard dismiss issue on iOS

The keyboard would not dismiss properly when using the
returnKeyType prop on iOS devices.

Fixes #456
```

```
docs: update installation instructions

Add information about peer dependencies and required
native modules for React Native 0.70+
```

## Release Process (Maintainers Only)

This section is for maintainers who have permission to publish releases.

> **📖 Detailed Release Guide**: For comprehensive release instructions, troubleshooting, and best practices, see [RELEASE.md](./RELEASE.md)

### Quick Release Guide

We support two release methods:

#### 1. Automated Release (Recommended) 🤖

Use GitHub Actions for safe, automated releases:

1. Go to **Actions** → **Release Package** workflow
2. Click **Run workflow**
3. Select:
   - **Package**: `foundation` (or other packages)
   - **Release Type**: `beta`, `patch`, `minor`, or `major`
   - **Dry Run**: Enable to test without publishing
4. Click **Run workflow**

The automation will:
- ✅ Build and type-check the package
- ✅ Bump version and update CHANGELOG
- ✅ Create git tag and GitHub release
- ✅ Publish to npm with correct tags
- ✅ Comment on related issues

#### 2. Manual Release (Alternative) 💻

For emergency releases or local testing:

```bash
# Beta release
npm run release:foundation:beta

# Patch release (0.1.1 -> 0.1.2)
npm run release:foundation:patch

# Minor release (0.1.1 -> 0.2.0)
npm run release:foundation:minor

# Major release (0.1.1 -> 1.0.0)
npm run release:foundation:major
```

### Release Types

- **Beta** (`0.1.0-beta.1`) - Pre-release for testing
- **Patch** (`0.1.2`) - Bug fixes
- **Minor** (`0.2.0`) - New features, backward compatible
- **Major** (`1.0.0`) - Breaking changes

### Prerequisites

- GitHub write access
- NPM publish permissions for `@passionui` scope
- GitHub secret `NPM_TOKEN` configured (for automated releases)

### Post-Release Checklist

- [ ] Verify on [npm](https://www.npmjs.com/package/@passionui/react-native-foundation)
- [ ] Check GitHub releases
- [ ] Test installation
- [ ] Update documentation if needed
- [ ] Announce (for major/minor releases)

### Adding New Packages

When adding a new package to the monorepo:

1. Create package in `packages/` directory
2. Add scripts to root `package.json`
3. Update release workflow (`.github/workflows/release.yml`) to include package in dropdown and mapping
4. Update review workflow (`.github/workflows/review.yml`) to detect package changes

## Questions?

Feel free to:
- Open an issue for bugs or feature requests
- Start a discussion for questions
- Reach out to maintainers: huynh.developer@gmail.com

Thank you for contributing! 🎉

