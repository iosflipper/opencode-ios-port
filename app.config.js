// Fork override for dzianisv/opencode-mobile. Drop into the repo root.
// Keeps the upstream iOS config (permissions, iPad, bundle id fallback) but
// lets you set your own bundle identifier and drops the keyless Sentry plugin.
const BUNDLE_ID = process.env.OPENCODE_IOS_BUNDLE_ID || "dev.opencode.mobile";

module.exports = ({ config }) => {
  const next = {
    ...config,
    ios: {
      ...(config.ios || {}),
      bundleIdentifier: BUNDLE_ID,
    },
    plugins: (config.plugins || []).filter((plugin) => {
      const id = Array.isArray(plugin) ? plugin[0] : plugin;
      return !String(id).includes("sentry");
    }),
  };

  return next;
};
