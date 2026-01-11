using BFF___RickandMorty.Services;
using Microsoft.AspNetCore.Mvc;

namespace BFF___RickandMorty.Controllers
{
    [ApiController]
    [Route("api/[controller]")] 
    public class EpisodesController : ControllerBase
    {
        private readonly IEpisodeService _episodeService;

        public EpisodesController(IEpisodeService episodeService)
        {
            _episodeService = episodeService;
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] int page = 1, [FromQuery] string? name = null)
        {
            var result = await _episodeService.GetEpisodesAsync(page, name);

            if (result == null)
            {
                return NotFound(new { message = "No se encontraron episodios." });
            }

            return Ok(result);
        }
    }
}