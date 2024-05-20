using Microsoft.Extensions.Options;
using MongoDB.Driver;
using PetsApi.Data;
using PetsApi.Dtos.Pet;
using PetsApi.Interfaces;
using PetsApi.Models;

namespace PetsApi.Repositories
{
    public class PetRepository : IPetRepository
    {

        public readonly IMongoCollection<Pet> _petsCollection;

        public PetRepository(IOptions<DatabaseSettings> settings)
        {
            var mongoClient = new MongoClient(settings.Value.Connection);
            var mongoDb = mongoClient.GetDatabase(settings.Value.DatabaseName);
            _petsCollection = mongoDb.GetCollection<Pet>(settings.Value.CollectionName);
        }

        public async Task<Pet> CreateAsync(Pet petModel)
        {
            await _petsCollection.InsertOneAsync(petModel);
            return petModel;
        }
    }
}
