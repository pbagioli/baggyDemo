module Validation {

    export class ValidationController {

        public static $inject = ['DataService'];

        constructor(private ds: Services.DataService) {

        }

    }
  
}
app.registerController("Validation.ValidationController", CssDemo.PositioningController);
app.registerRoute('/validation', "Validation.ValidationController as vm", 'app/Validation/validation.html');
 