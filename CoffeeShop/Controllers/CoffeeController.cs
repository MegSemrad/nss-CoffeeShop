using Microsoft.AspNetCore.Mvc;
using CoffeeShop.Repositories;


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





        // GET: api/<CoffeeController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_coffeeRepository.GetAll());
        }





        // GET api/<CoffeeController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }





        // POST api/<CoffeeController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }





        // PUT api/<CoffeeController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }





        // DELETE api/<CoffeeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
