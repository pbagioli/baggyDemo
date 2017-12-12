using System.Configuration;
using System.Web.Mvc;

namespace Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Environment = GetEnvironmentName();
            return View();
        }

        public static string GetEnvironmentName()
        {
            var env = ConfigurationManager.AppSettings["Environment"];

            switch (env)
            {
                case "Production":
                    return "";
                case "Development":
                    return "Test";
                default:
                    return env;
            }
        }
    }
}