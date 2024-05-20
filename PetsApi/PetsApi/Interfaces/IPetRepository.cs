using PetsApi.Dtos.Pet;
using PetsApi.Models;

namespace PetsApi.Interfaces
{
    public interface IPetRepository
    {
        Task<Pet> CreateAsync(Pet petModel);
    }
}
