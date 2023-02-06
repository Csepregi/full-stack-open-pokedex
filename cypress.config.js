import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents: (on, config) => {
      const isDev = config.watchForFileChanges;
      const port = process.env.PORT ?? (isDev ? "3000" : "8811");
      const configOverrides = {
        baseUrl: `http://localhost:${port}`,
      };
      on("task", {
        log: (message) => {
          console.log(message);
          return null;
        },
      });

      return { ...config, ...configOverrides };
    },
  },
});
