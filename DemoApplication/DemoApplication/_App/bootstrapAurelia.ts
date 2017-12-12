import { Aurelia } from "aurelia-framework";

export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        //.feature('./_app/resources')
        //.plugin("aurelia-animator-css")
        //.plugin('aurelia-table')
        //.plugin('aurelia-validation')
        .plugin('aurelia-bootstrap')
        //.globalResources('./jsonValueConverter')
        // .plugin('aurelia-kendoui-bridge')
        .developmentLogging();
    aurelia.start().then(() => aurelia.setRoot('app'));
}
