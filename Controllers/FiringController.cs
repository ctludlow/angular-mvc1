using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyAngularMVCApp1.Controllers
{
    public class FiringController : Controller
    {
        // GET: Firing
        public ActionResult Index()
        {
            return View();
        }

        // GET: Firing/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Firing/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Firing/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Firing/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Firing/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Firing/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Firing/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
