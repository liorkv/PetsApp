

using System.ComponentModel.DataAnnotations;

namespace PetsApi.Dtos.Pet
{
    public class CreatePetDto
    {
        [Required]
        public string Name { get; set; } = String.Empty;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        [Required]
        public string Type { get; set; } = String.Empty;
        [Required]
        public string Color { get; set; } = String.Empty;
        [Required]
        public float Age { get; set; } = 0;
    }
}
