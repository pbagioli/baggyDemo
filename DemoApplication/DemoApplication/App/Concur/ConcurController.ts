module Concur {

    export class ConcurController {

        public static $inject = ['DataService'];

        constructor(private ds: Services.DataService) {

        }

    }

}
app.registerController("Concur.ConcurController", Concur.ConcurController);
app.registerRoute('/concur', "Concur.ConcurController as vm", 'app/Concur/concur.html');
 