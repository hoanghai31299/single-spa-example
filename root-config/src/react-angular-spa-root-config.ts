import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    console.log("load app", name);
    return System.import(name);
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });

console.log(applications);
console.log(routes);
applications.forEach(registerApplication);
layoutEngine.activate();
start();
