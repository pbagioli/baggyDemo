using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Web.Controllers
{
    public class AureliaController : Controller
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