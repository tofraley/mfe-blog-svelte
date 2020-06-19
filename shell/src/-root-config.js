import { registerApplication, start } from "single-spa";

registerApplication({
  name: "nav-bar",
  app: () => System.import("nav-bar"),
  activeWhen: ["/"]
});

registerApplication({
  name: "home",
  app: () => System.import("blog-post-list"),
  activeWhen: ["/home"]
});

start({
  urlRerouteOnly: true,
});
