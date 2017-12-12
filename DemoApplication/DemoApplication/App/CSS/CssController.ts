module CssDemo {

    export class CssController {

        public quotation: any = null;

        public static $inject = ['DataService'];

        constructor(private ds: Services.DataService) {

            toastr.success(moment().toString());
          
        }
    }
}
app.registerController("CSS.CssController", CssDemo.CssController);
app.registerRoute('/css', "CSS.CssController as vm", 'app/CSS/css.html');
