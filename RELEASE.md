# Release Guide for Maintainers

This guide explains how to release packages in the React Native Foundation monorepo.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Release Types](#release-types)
- [Release Methods](#release-methods)
- [Release Pipeline](#release-pipeline)
- [Post-Release](#post-release)
- [Troubleshooting](#troubleshooting)

# Release Guide for Maintainers

This guide explains how to release packages in the React Native Foundation monorepo.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Release Types](#release-types)
- [Release Methods](#release-methods)
- [Release Pipeline](#release-pipeline)
- [Post-Release](#post-release)
- [Troubleshooting](#troubleshooting)

## 🔑 Prerequisites

### Required Access

- ✅ **GitHub** - Write access to repository
- ✅ **NPM** - Publish permissions for `@passionui` scope
- ✅ **Secrets** - NPM_TOKEN configured in GitHub repository

### Setup NPM Token

1. Login to [npmjs.com](https://www.npmjs.com)
2. Go to **Access Tokens** → **Generate New Token**
3. Select type: **Automation**
4. Copy the token
5. Add to GitHub: **Settings** → **Secrets** → **Actions** → **New secret**
   - Name: `NPM_TOKEN`
   - Value: `<your-token>`

### Verify Permissions

```bash
# Check if you can publish
npm whoami
npm access ls-packages @passionui
```

## 📦 Release Types

We follow [Semantic Versioning](https://semver.org/):

| Type | Format | When to Use | Example |
|------|--------|-------------|---------|
| **Patch** | `0.1.X` | Bug fixes, small changes | `0.1.1` → `0.1.2` |
| **Minor** | `0.X.0` | New features, backward compatible | `0.1.0` → `0.2.0` |
| **Major** | `X.0.0` | Breaking changes | `0.9.0` → `1.0.0` |
| **Beta** | `X.X.X-beta.X` | Pre-release testing | `0.2.0-beta.1` |
| **Alpha** | `X.X.X-alpha.X` | Early development | `0.2.0-alpha.1` |
| **RC** | `X.X.X-rc.X` | Release candidate | `1.0.0-rc.1` |

### NPM Tags

Each release type gets a specific npm tag:

- `latest` - Stable releases (patch, minor, major)
- `beta` - Beta pre-releases
- `alpha` - Alpha pre-releases
- `rc` - Release candidates

Users install with: `npm install @passionui/react-native-foundation@<tag>`

## 🚀 Release Methods

### Method 1: GitHub Actions (Recommended)

**Best for:** All releases, especially team environments

1. Go to **Actions** tab
2. Select **"Release Package"** workflow
3. Click **"Run workflow"**
4. Configure options:
   - **Package:** Select `@passionui/react-native-foundation`
   - **Release type:** Choose type (beta, patch, minor, major)
5. Click **"Run workflow"**
6. Monitor progress in Actions tab

**Advantages:**
- ✅ Safe and auditable
- ✅ No local environment issues
- ✅ Runs on clean environment
- ✅ Automated changelog and git operations

### Method 2: Command Line

**Best for:** Quick releases, local testing

**Beta Release:**
```bash
npm run release:foundation:beta
```

**Patch Release** (0.1.1 → 0.1.2):
```bash
npm run release:foundation:patch
```

**Minor Release** (0.1.1 → 0.2.0):
```bash
npm run release:foundation:minor
```

**Major Release** (0.1.1 → 1.0.0):
```bash
npm run release:foundation:major
```

**Custom Version:**
```bash
cd packages/foundation
npx release-it 1.0.0-rc.1
```

## ⚙️ Release Pipeline

Understanding what happens during a release:

### Automated Release Workflow Steps

```
1. Checkout & Setup
   ├─ Clone repository with full git history
   ├─ Setup Node.js environment
   └─ Install dependencies

2. Extract Package Directory
   ├─ Input: @passionui/react-native-foundation
   └─ Extract directory: foundation

3. Build & Type Check
   ├─ Clean previous build (npm run clean)
   ├─ Run TypeScript type checker
   └─ Build package (npm run build)

4. Release Execution (release-it)
   ├─ Bump version in package.json
   ├─ Generate CHANGELOG from commits
   ├─ Commit changes
   ├─ Create git tag (v1.0.0)
   ├─ Push to GitHub
   ├─ Publish to NPM with correct tag
   └─ Create GitHub Release

5. Post-Release Summary
   ├─ Display package name
   ├─ Display version released
   └─ Display git tag created
```

### What Gets Published

- ✅ `package.json` with new version
- ✅ `lib/` directory (build output)
- ✅ `src/` directory (source code)
- ✅ `README.md`, `LICENSE`, etc.
- ❌ Tests, examples, config files (excluded via `files` field)

### Automated Features

| Feature | Description |
|---------|-------------|
| **Changelog Generation** | Auto-generated from conventional commits |
| **Git Tagging** | Creates `v1.0.0` tag automatically |
| **GitHub Release** | Creates release with notes |
| **NPM Publishing** | Publishes with correct tag (latest/beta/etc.) |

## ✅ Post-Release

### 1. Verify Release

**Check NPM:**
```bash
# View package info
npm view @passionui/react-native-foundation

# Check latest version
npm view @passionui/react-native-foundation version

# Check all versions
npm view @passionui/react-native-foundation versions
```

**Check GitHub:**
- Visit [Releases page](https://github.com/passion-ui/react-native-foundation/releases)
- Verify release notes are correct
- Check git tag exists

### 2. Test Installation

```bash
# Create test directory
mkdir test-install && cd test-install
npm init -y

# Install latest
npm install @passionui/react-native-foundation@latest

# Or install beta
npm install @passionui/react-native-foundation@beta
```

### 3. Update Documentation

For **major or minor** releases:
- [ ] Update README if needed
- [ ] Update migration guides (for breaking changes)
- [ ] Update example app
- [ ] Announce in discussions

For **patch** releases:
- [ ] GitHub release notes are sufficient

### 4. Announce Release

**Major/Minor releases:**
- Post in GitHub Discussions
- Update project website (if applicable)
- Social media announcements

**Patch/Beta releases:**
- GitHub release notes only

## 🔧 Troubleshooting

### Common Issues

#### ❌ NPM_TOKEN not found

**Error:** `npm publish failed: authentication required`

**Solution:**
```bash
# Verify secret exists in GitHub
Settings → Secrets → Actions → NPM_TOKEN

# For local releases:
npm login
# Or create ~/.npmrc with token
```

#### ❌ Build Failed

**Error:** `Build step failed during release`

**Solution:**
```bash
# Test build locally
npm run clean:foundation
npm run build:foundation

# Fix any TypeScript errors
npm run typecheck:foundation

# Retry release
```

#### ❌ Version Already Exists

**Error:** `Cannot publish over existing version`

**Solution:**
```bash
# Never unpublish! Instead deprecate:
npm deprecate @passionui/react-native-foundation@1.0.0 "Deprecated: Use 1.0.1"

# Then release new patch version
npm run release:foundation:patch
```

#### ❌ Git Tag Already Exists

**Error:** `tag v1.0.0 already exists`

**Solution:**
```bash
# Delete tag locally
git tag -d v1.0.0

# Delete tag remotely
git push origin :refs/tags/v1.0.0

# Retry release
```

#### ❌ Git Tag Already Exists

**Error:** `tag v1.0.0 already exists`

**Solution:**
```bash
# Delete tag locally
git tag -d v1.0.0

# Delete tag remotely
git push origin :refs/tags/v1.0.0

# Retry release
```

### Emergency Rollback

If a release has critical bugs:

```bash
# 1. Deprecate the bad version
npm deprecate @passionui/react-native-foundation@1.0.0 \
  "Critical bug - use version 1.0.1"

# 2. Create hotfix branch
git checkout -b fix/critical-bug main

# 3. Fix the issue and commit
git commit -m "fix: critical bug description"

# 4. Release patch immediately
npm run release:foundation:patch
```

## 📝 Release Checklist

Before releasing, verify:

### Pre-Release
- [ ] All PRs merged
- [ ] CI/CD passing
- [ ] No uncommitted changes
- [ ] On `main` branch and up to date
- [ ] Version number follows SemVer
- [ ] CHANGELOG has meaningful entries

### For Breaking Changes
- [ ] Breaking changes documented
- [ ] Migration guide written
- [ ] Major version bump
- [ ] Community notified in advance

### Post-Release
- [ ] Package visible on npmjs.com
- [ ] GitHub release created
- [ ] Installation tested
- [ ] Documentation updated (if needed)
- [ ] Announced (if major/minor)

## 🎯 Best Practices

1. **Test with Beta First** - Release beta versions for testing before stable
2. **Release Often** - Small, frequent releases are better than large ones
3. **Follow SemVer Strictly** - Don't break user expectations
4. **Document Breaking Changes** - Always provide migration guides
5. **Use Dry Run** - Test the release process before publishing
6. **Monitor After Release** - Watch for issues and be ready to patch

## 📞 Need Help?

- **Questions:** Open a GitHub discussion
- **Issues:** Contact repository owner
- **Email:** huynh.developer@gmail.com

---

Thank you for maintaining React Native Foundation! 🚀

### For Maintainers

1. **Repository Access**
   - Write access to the GitHub repository
   - NPM publish permissions for `@passionui` scope

2. **Authentication Tokens**
   - GitHub Personal Access Token with `repo` scope
   - NPM Access Token with publish permissions

3. **GitHub Secrets Setup**

   Repository secrets that must be configured:
   - `NPM_TOKEN` - Your npm authentication token
   - `GITHUB_TOKEN` - Automatically provided by GitHub Actions

### Setting Up NPM Token

1. Login to npmjs.com
2. Go to Access Tokens → Generate New Token
3. Select "Automation" type
4. Copy the token
5. Add to GitHub repository secrets as `NPM_TOKEN`

### Local Development Setup

```bash
# Clone the repository
git clone https://github.com/passion-ui/react-native-foundation.git
cd react-native-foundation

# Install dependencies
npm install

# Build all packages
npm run build

# Or build specific package
npm run build:foundation
```

## Package Structure

Each package in the monorepo has:

```
packages/
  ├── foundation/
  │   ├── package.json          # Package metadata and version
  │   ├── .release-it.json       # Release-it configuration (optional)
  │   ├── src/                   # Source code
  │   ├── lib/                   # Build output
  │   └── README.md              # Package documentation
  └── [future-packages]/
```

## Release Types

### Semantic Versioning

We follow [Semantic Versioning (SemVer)](https://semver.org/):

- **Major (X.0.0)**: Breaking changes
- **Minor (0.X.0)**: New features, backward compatible
- **Patch (0.0.X)**: Bug fixes, backward compatible

### Pre-release Versions

- **Beta (0.1.0-beta.1)**: Feature testing before stable release
- **Alpha (0.1.0-alpha.1)**: Early development, unstable
- **RC (0.1.0-rc.1)**: Release candidate, final testing

## Release Workflows

### Automated Release (Recommended)

We use GitHub Actions for automated releases. This is the recommended approach.

#### Steps:

1. **Navigate to Actions**
   - Go to GitHub repository
   - Click "Actions" tab
   - Select "Release Package" workflow

2. **Run Workflow**
   - Click "Run workflow" button
   - Select options:
     - **Package**: Choose the package to release (e.g., `foundation`)
     - **Release Type**: Choose version bump type
       - `beta` - Pre-release for testing
       - `patch` - Bug fixes (0.0.X)
       - `minor` - New features (0.X.0)
       - `major` - Breaking changes (X.0.0)
     - **Custom Version** (optional): Override with specific version
     - **Dry Run**: Test without actually publishing

3. **Monitor Progress**
   - Watch the workflow execution
   - Review build logs
   - Check for any errors

4. **Verify Release**
   - Check GitHub Releases
   - Verify npm package page
   - Test installation

#### What the Workflow Does:

1. ✅ Validates environment and permissions
2. 🏗️ Builds the package
3. 🔍 Runs type checking
4. 📝 Updates version in package.json
5. 📋 Generates CHANGELOG from commits
6. 🏷️ Creates git tag
7. 📦 Publishes to npm
8. 🚀 Creates GitHub release
9. 💬 Comments on related issues

### Manual Release (Alternative)

For emergency releases or when GitHub Actions is unavailable.

#### Prerequisites:

```bash
# Ensure you're on main branch and up to date
git checkout main
git pull origin main

# Ensure working directory is clean
git status

# Install dependencies
npm install

# Run tests and builds
npm run build:foundation
npm run typecheck:foundation
```

#### Release Commands:

**Beta Release:**
```bash
npm run release:foundation:beta
```

**Patch Release (0.1.1 → 0.1.2):**
```bash
npm run release:foundation:patch
```

**Minor Release (0.1.0 → 0.2.0):**
```bash
npm run release:foundation:minor
```

**Major Release (0.1.0 → 1.0.0):**
```bash
npm run release:foundation:major
```

**Custom Version:**
```bash
cd packages/foundation
npx release-it 1.0.0-rc.1
```

#### What Happens:

1. Runs pre-release checks
2. Bumps version in package.json
3. Generates/updates CHANGELOG.md
4. Commits changes
5. Creates git tag
6. Pushes to GitHub
7. Publishes to npm
8. Creates GitHub release

## Post-Release Tasks

### 1. Verify the Release

**NPM Package:**
```bash
# Check if package is available
npm view @passionui/react-native-foundation

# Install and test
npm install @passionui/react-native-foundation@latest
```

**GitHub Release:**
- Visit: https://github.com/passion-ui/react-native-foundation/releases
- Verify release notes are correct
- Check that tag was created

### 2. Update Documentation

- [ ] Update README if needed
- [ ] Update documentation site
- [ ] Update migration guides (for breaking changes)

### 3. Announce the Release

**For Major/Minor Releases:**
- Create discussion in GitHub Discussions
- Post on social media (Twitter, Discord, etc.)
- Update showcase examples

**For Patch Releases:**
- GitHub release notes are sufficient

### 4. Monitor for Issues

- Watch for new issues
- Monitor npm download stats
- Check for installation problems

## Troubleshooting

### Common Issues

#### 1. Release Failed During NPM Publish

**Error:** `ENEEDAUTH` or authentication failed

**Solution:**
```bash
# Re-login to npm
npm logout
npm login

# Or set token directly
echo "//registry.npmjs.org/:_authToken=YOUR_TOKEN" > ~/.npmrc

# Retry release
npm run release:foundation -- --no-git.requireCleanWorkingDir
```

#### 2. Git Tag Already Exists

**Error:** `tag vX.X.X already exists`

**Solution:**
```bash
# Delete local tag
git tag -d vX.X.X

# Delete remote tag
git push origin :refs/tags/vX.X.X

# Retry release
```

#### 3. Build Failure

**Error:** Build fails during release

**Solution:**
```bash
# Clean build artifacts
npm run clean:foundation

# Rebuild
npm run build:foundation

# Check for type errors
npm run typecheck:foundation

# Fix errors and retry
```

#### 4. Version Already Published

**Error:** `Cannot publish over existing version`

**Solution:**

Don't unpublish! Instead:

```bash
# Deprecate the problematic version
npm deprecate @passionui/react-native-foundation@X.X.X "Deprecated: Use version X.X.Y instead"

# Publish a new patch version
npm run release:foundation:patch
```

#### 5. Dry Run Failed

**Error:** Dry run shows errors

**Solution:**
```bash
# Review the errors in the dry run output
# Fix any issues
# Run dry run again
cd packages/foundation
npx release-it --dry-run

# When satisfied, run actual release
npm run release:foundation
```

### GitHub Actions Issues

#### Workflow Doesn't Start

**Check:**
1. GitHub Actions are enabled in repository settings
2. You have necessary permissions
3. Branch protection rules aren't blocking

#### Workflow Fails on Build

**Check:**
1. All dependencies are properly listed
2. Build scripts are correct
3. TypeScript errors are fixed

#### NPM Publish Fails

**Check:**
1. `NPM_TOKEN` secret is set correctly
2. Token has publish permissions
3. Package name is available/you have access

### Emergency Rollback

If a release has critical bugs:

```bash
# 1. Deprecate the bad version
npm deprecate @passionui/react-native-foundation@X.X.X "Critical bug - use version X.X.Y"

# 2. Create hotfix branch
git checkout -b fix/critical-bug main

# 3. Fix the issue
# ... make changes ...

# 4. Release patch version
npm run release:foundation:patch
```

## Release Checklist

Use this checklist before each release:

### Pre-Release

- [ ] All PRs for this release are merged
- [ ] CHANGELOG.md is up to date
- [ ] Version number follows SemVer
- [ ] No uncommitted changes
- [ ] On `main` branch and up to date
- [ ] CI/CD pipeline is passing
- [ ] Dependencies are up to date
- [ ] Build succeeds locally
- [ ] Type checking passes

### For Breaking Changes

- [ ] Breaking changes are documented
- [ ] Migration guide is written
- [ ] Deprecated features are marked
- [ ] Major version bump planned
- [ ] Community notified in advance

### Post-Release

- [ ] Release verified on npm
- [ ] GitHub release created
- [ ] Installation tested
- [ ] Documentation updated
- [ ] Announcement published (if major/minor)
- [ ] Related issues closed/commented

## Best Practices

1. **Release Often**: Small, frequent releases are better than large ones
2. **Test Beta First**: Use beta releases to test with users before stable
3. **Document Changes**: Keep CHANGELOG.md updated with each PR
4. **Follow SemVer**: Be strict about version numbering
5. **Communicate**: Announce breaking changes well in advance
6. **Monitor**: Watch for issues after release
7. **Tag Properly**: Ensure git tags are pushed
8. **Dry Run**: Use dry-run mode to verify before publishing

## Adding New Packages

When adding a new package to the monorepo:

1. **Create package directory:**
   ```bash
   mkdir -p packages/new-package
   ```

2. **Add package.json:**
   ```json
   {
     "name": "@passionui/react-native-new-package",
     "version": "0.1.0",
     ...
   }
   ```

3. **Update workspace in root package.json** (already configured with `packages/*`)

4. **Add scripts to root package.json:**
   ```json
   {
     "scripts": {
       "build:new-package": "npm run build --workspace=@passionui/react-native-new-package",
       "typecheck:new-package": "npm run typecheck --workspace=@passionui/react-native-new-package",
       "clean:new-package": "npm run clean --workspace=@passionui/react-native-new-package",
       "release:new-package:beta": "npm run build:new-package && cd packages/new-package && release-it --preRelease=beta",
       "release:new-package:patch": "npm run build:new-package && cd packages/new-package && release-it patch",
       "release:new-package:minor": "npm run build:new-package && cd packages/new-package && release-it minor",
       "release:new-package:major": "npm run build:new-package && cd packages/new-package && release-it major"
     }
   }
   ```

5. **Update release workflow** (`.github/workflows/release.yml`):
   - Add `@passionui/react-native-new-package` to package dropdown options

6. **Update review workflow** (`.github/workflows/review.yml`):
   - Add package detection in "Get changed packages" step

7. **Create initial release:**
   ```bash
   npm run release:new-package:beta
   ```

## Questions?

Contact maintainers: huynh.developer@gmail.com

