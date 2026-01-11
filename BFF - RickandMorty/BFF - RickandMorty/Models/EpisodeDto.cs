namespace BFF___RickandMorty.Models
{
    public class EpisodeResponseDto
    {
        public InfoDto Info { get; set; }
        public List<EpisodeDto> Results { get; set; }
    }

    public class InfoDto
    {
        public int Count { get; set; }
        public int Pages { get; set; }
        public string Next { get; set; }
        public string Prev { get; set; }
    }

    public class EpisodeDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Air_date { get; set; }
        public string Episode { get; set; }

        public List<string> Characters { get; set; }
    }
}
