/// <reference path="../app.ts" />

module Common {

    export class MenuController {
        public name: string;
        public wwid: string;
        public email: string;

        public static $inject = ['config'];

        constructor(config) {
            //this.name = config.user.name;
            //this.wwid = config.user.id;
            //this.email = config.user.email;

        }
    }
}

app.registerController('Common.MenuController', Common.MenuController);
 
 