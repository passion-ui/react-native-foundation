const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '..');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(projectRoot);

const ALIASES = {
  '@components': `${__dirname}/components`,
  '@assets': `${__dirname}/assets`,
  '@screens': `${__dirname}/screens`,
};

config.resolver.resolveRequest = (context, moduleName, platform) => {
  return context.resolveRequest(
    context,
    ALIASES[moduleName] ?? moduleName,
    platform
  );
};

// #1: Watch all files in the monorepo
config.watchFolders = [workspaceRoot];

// #2: Let Metro know where to resolve packages and node_modules
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

// #3: Force resolving to workspace hoisted modules
config.resolver.disableHierarchicalLookup = false;

module.exports = config;
