module Services {

    export class AjaxService {

        public static $inject = ['$http', '$q', '$cacheFactory'];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, $cacheFactory: ng.ICacheFactoryService) { }

        public get<T>(url: string, parse: (results) => T = (response) => { return response; }, useCache: boolean = false): ng.IHttpPromise<T> {
            return this.doCall(() => { return this.$http.get(url, { cache: useCache }); }, parse);
        }

        public getJsonP<T>(url: string, parse: (results) => T = (response) => { return response; }): ng.IHttpPromise<T> {
            var callback = "callback=JSON_CALLBACK";

            if (url.indexOf(callback) == -1) {
                url = url + (url.indexOf("?") == -1 ? "?" : "&") + callback;
            }
            return this.doCall(() => { return this.$http.jsonp(url); }, parse);
        }

        public post(url: string, data: Object = null, config: ng.IRequestConfig = null): ng.IHttpPromise<any> {
            return this.doCall(() => { return this.$http.post(url, data, config); });
        }

        public put(url: string, data: Object = null): ng.IHttpPromise<any> {
            return this.doCall(() => { return this.$http.put(url, data); });
        }

        public del(url: string): ng.IHttpPromise<any> {
            return this.$http.delete(url);
        }

        private doCall<T>(promise: () => ng.IHttpPromise<any>, parse: (results) => T = (response) => { return response; }): ng.IHttpPromise<T> {
            var deferred = this.$q.defer();

            promise()
                .error((response) => {
                    deferred.reject(new Error(response == null ? "Unknown error" : response.message));
                })
                .success((response: any) => {
                    deferred.resolve(parse(response));
                });

            return <ng.IHttpPromise<T>>deferred.promise;
        }

    }
}
app.registerService("AjaxService", Services.AjaxService);