import { enableProdMode, ViewEncapsulation } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

import { hmrBootstrap } from "./hmr";

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => {
  return platformBrowserDynamic().bootstrapModule(AppModule, {
    defaultEncapsulation: ViewEncapsulation.Emulated
  });
};
if (environment.hmr) {
  if (module["hot"]) {
    hmrBootstrap(module, bootstrap);
  } else {
    console.log("Are you using the --hmr flag for ng serve?");
  }
} else {
  bootstrap().then(() => {
    if ((window as any).appBootstrap) {
      (window as any).appBootstrap();
    }
  });
}
