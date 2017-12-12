
module Services {
    export class DataService {

        public static $inject = ['AjaxService'];

        constructor(private ajax: Services.AjaxService) {

        }

        public getSampleQuote(): ng.IHttpPromise<any> {
            return this.ajax.getJsonP('http://quotr.azurewebsites.net/api/quotes/random');
        }

    }
}

app.registerService("DataService", Services.DataService);