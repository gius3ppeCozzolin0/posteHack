const devMode = (process.env.NODE_ENV !== 'development');

export default {
  // App Details
  appName: 'PosteHack',
  home: "Home",
  groups: "Guppi",
  analytics: "Analytics",

  // Build Configuration - eg. Debug or Release?
  DEV: devMode,
};
