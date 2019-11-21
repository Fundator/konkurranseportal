using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    public class KampController : Controller
    {

        private readonly Context _context;

        public KampController(Context context)
        {
            _context = context;
            Console.WriteLine("contructor");
            /*
            if (_context.Kamper.Count() == 0)
            {
                Console.WriteLine("test");
                _context.Kamper.Add(new Kamp { });
                _context.SaveChanges();
            }*/
        }

        #region snippet_GetAll
        [HttpGet]
        //public IEnumerable<Kamp> Get()
        //{
        //    Console.WriteLine("HALLO");
        //    return _context.Kamper.ToList();
        //}
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }
        #endregion
        #region snippet_GetByID
        [HttpGet("{id}", Name = "GetTodo")]
        public IActionResult GetById(long id)
        {
            var item = _context.Kamper.FirstOrDefault(t => t.Id == id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }
       
        #endregion
        #region snippet_Create
        [HttpPost]
        public IActionResult Create([FromBody] Kamp item)
        {
            if (item == null)
            {
                return BadRequest();
            }

            _context.Kamper.Add(item);
            _context.SaveChanges();

            return CreatedAtRoute("GetTodo", new { id = item.Id }, item);
        }
        #endregion

        #region snippet_Update
        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] Kamp item)
        {
            if (item == null || item.Id != id)
            {
                return BadRequest();
            }

            var todo = _context.Kamper.FirstOrDefault(t => t.Id == id);
            if (todo == null)
            {
                return NotFound();
            }
            _context.Kamper.Update(todo);
            _context.SaveChanges();
            return new NoContentResult();
        }
        #endregion

        #region snippet_Delete
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var todo = _context.Kamper.FirstOrDefault(t => t.Id == id);
            if (todo == null)
            {
                return NotFound();
            }

            _context.Kamper.Remove(todo);
            _context.SaveChanges();
            return new NoContentResult();
        }
        #endregion
    }
}

