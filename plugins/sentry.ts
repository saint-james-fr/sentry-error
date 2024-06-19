import * as Sentry from "@sentry/vue";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  Sentry.init({
    app: nuxtApp.vueApp,
    dsn: "https://65ec18e7643622bd0e1a1bf7999dd86f@o4507021684441088.ingest.us.sentry.io/4507458377220096",
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration(),
    ],
    environment: "test",
    enabled: true,
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 1.0,
    replaysOnErrorSampleRate: 0.25,
  });
});
