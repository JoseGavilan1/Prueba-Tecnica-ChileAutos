using BFF___RickandMorty.Models;
using System.Net.Http.Json; 
using System.Threading.Tasks; 

namespace BFF___RickandMorty.Services
{
    public class EpisodeService : IEpisodeService
    {
        private readonly HttpClient _httpClient;

        public EpisodeService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<EpisodeResponseDto> GetEpisodesAsync(int page, string? name = null)
        {
            var url = $"episode?page={page}";

            if (!string.IsNullOrEmpty(name))
            {
                url += $"&name={name}";
            }

            var response = await _httpClient.GetFromJsonAsync<EpisodeResponseDto>(url);
            return response ?? new EpisodeResponseDto { Results = new List<EpisodeDto>() };
        }
    }
}