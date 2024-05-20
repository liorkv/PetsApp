using PetsApi.Dtos.Pet;
using PetsApi.Models;

namespace PetsApi.Mappers
{
    public static class PetMappers
    {
        public static Pet ToPetFromCreate(this CreatePetDto pet) {
            return new Pet
            {
                Name = pet.Name,
                CreatedAt = pet.CreatedAt,
                Type = pet.Type,
                Color = pet.Color,
                Age = pet.Age,
            };
        }

    }
}
