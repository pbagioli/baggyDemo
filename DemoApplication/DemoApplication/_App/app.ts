import { inject, autoinject } from 'aurelia-framework';
import { RouterConfiguration, RouteConfig, Router, NavigationInstruction, Next } from 'aurelia-router';

@autoinject()
export class App {

    public router: Router;
    constructor() {
    }

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = "Froggy";
        config.map([
            { route: ["", "Home"], name: "home", moduleId: "home/home", nav: true, title: "Home" }
        ]);

        this.router = router;
    }
}