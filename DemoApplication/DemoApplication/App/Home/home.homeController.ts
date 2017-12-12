module Home {

    export class HomeController {

        public name: string = 'Are you Baggy Enough?';
        public quotation: any = null;

        public static $inject = ['DataService'];

        constructor(private ds: Services.DataService) {
            
            toastr.success(moment().toString());
            //ds.getSampleQuote().then((quote)=> {
            //    this.quotation = quote;
            //});
        }
    }
} 
app.registerController("Home.HomeController", Home.HomeController);
app.registerRoute('/', "Home.HomeController as vm", 'app/Home/home.html');
