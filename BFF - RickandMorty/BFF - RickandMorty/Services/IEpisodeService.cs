using BFF___RickandMorty.Models;
using System.Threading.Tasks;

namespace BFF___RickandMorty.Services
{
    public interface IEpisodeService
    {
        Task<EpisodeResponseDto> GetEpisodesAsync(int page, string name);
    }
}