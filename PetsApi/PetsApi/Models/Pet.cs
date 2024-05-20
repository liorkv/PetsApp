using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;


namespace PetsApi.Models
{
    public class Pet
    {

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; } = String.Empty;

        [BsonElement("name")]
        public string Name { get; set; } = String.Empty;

        [BsonElement("createdAt")]
        public DateTime CreatedAt { get; set; } = DateTime.Now;

        [BsonElement("type")]
        public string Type { get; set; } = String.Empty;

        [BsonElement("color")]
        public string Color { get; set; } = String.Empty;

        [BsonElement("age")]
        public float Age { get; set; } = 0;

    }
}
