using System.Web;
using System.Web.Optimization;

namespace Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/Spa")
               .Include("~/app/app.js")
               .IncludeDirectory("~/app", "*.js", true));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                "~/Scripts/modernizr-*"));

            bundles.Add(new Bundle("~/bundles/library").Include(
                "~/Scripts/jquery-2.1.4.js",
                "~/Scripts/toastr.js",
                "~/Scripts/moment.js",
                "~/Scripts/bootstrap.js",
                 "~/Scripts/linq.js",
                "~/Scripts/angular.js",
                "~/Scripts/angular-ui/ui-bootstrap-tpls.js",
                "~/Scripts/angular-route.js",
                "~/Scripts/angular-animate.js",
                "~/Scripts/angular-sanitize.js",
                "~/Scripts/angular-moment.js",
                "~/Scripts/angular-scenario.js",
                "~/Scripts/angular-odometer.js",
                "~/Scripts/odometer.js"
                ));

            bundles.Add(new StyleBundle("~/bundles/css").Include(
                "~/Content/toastr.css",
                "~/Content/animate.css",
                "~/Content/bootstrap.css",
                "~/Content/site.css",
                "~/Content/font-awesome.css",
                "~/Content/it-mlaf.css",
                "~/Content/bootstrap-datetimepicker.css",
                "~/Content/odometer-theme-digital.css",
                "~/Content/odometer-theme-default.css",
                "~/Content/odometer-theme-minimal.css",
                "~/Content/odometer-theme-plaza.css",
                "~/Content/odometer-theme-slot-machine.css",
                "~/Content/odometer-theme-train-station.css"
                ));

        }
    }
}
