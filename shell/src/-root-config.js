import { registerApplication, start } from "single-spa";

registerApplication({
  name: "nav-bar",
  app: () => System.import("http://localhost:55453/-nav-bar.js"),
  activeWhen: ["/"]
});

registerApplication({
  name: "blog-post-list",
  app: () => System.import("http://localhost:5000/-blog-post-list.js"),
  activeWhen: ["/home"]
});

start({
  urlRerouteOnly: true,
});
