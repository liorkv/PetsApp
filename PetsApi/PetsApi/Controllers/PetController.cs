using Microsoft.AspNetCore.Mvc;
using PetsApi.Dtos.Pet;
using PetsApi.Interfaces;
using PetsApi.Mappers;
using PetsApi.Models;


namespace PetsApi.Controllers
{
    [Route("api/pet")]
    [ApiController]
    public class PetController : ControllerBase
    {
        public readonly IPetRepository _petRepository;
        public PetController(IPetRepository petRepository)
        {
            _petRepository = petRepository;
        }

        // POST api/pet
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] CreatePetDto pet)
        {
            Pet newPet = pet.ToPetFromCreate();
            
            Pet Result = await _petRepository.CreateAsync(newPet);

            return Ok(Result);
        }

    }
}
