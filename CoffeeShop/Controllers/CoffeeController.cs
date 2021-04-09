using Microsoft.AspNetCore.Mvc;
using CoffeeShop.Repositories;
using CoffeeShop.Models;

namespace CoffeeShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoffeeController : ControllerBase
    {
        private readonly ICoffeeRepository _coffeeRepository;
        public CoffeeController(ICoffeeRepository coffeeRepository)
        {
            _coffeeRepository = coffeeRepository;
        }




        // https://localhost:5001/api/coffee/
        // GET: api/<CoffeeController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_coffeeRepository.GetAll());
        }




        // https://localhost:5001/api/coffee/5
        // GET api/<CoffeeController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var coffeeObj = _coffeeRepository.Get(id);
            if (coffeeObj == null)
            {
                return NotFound();
            }
            return Ok(coffeeObj);
        }




        // https://localhost:5001/api/coffee/
        // POST api/<CoffeeController>
        [HttpPost]
        public IActionResult Post(Coffee coffee)
        {
            _coffeeRepository.Add(coffee);
            return CreatedAtAction("Get", new { id = coffee.Id }, coffee);
        }




        // https://localhost:5001/api/coffee/5
        // PUT api/<CoffeeController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, Coffee coffee)
        {
            if (id != coffee.Id)
            {
                return BadRequest();
            }

            _coffeeRepository.Update(coffee);
            return NoContent();
        }




        // https://localhost:5001/api/coffee/5
        // DELETE api/<CoffeeController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _coffeeRepository.Delete(id);
            return NoContent();
        }
    }
}
