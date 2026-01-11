using BFF___RickandMorty.Services;
using BFF___RickandMorty.Middleware; 

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var rickAndMortyUrl = builder.Configuration["RickAndMortyApi:BaseUrl"];

builder.Services.AddHttpClient<IEpisodeService, EpisodeService>(client =>
{
    client.BaseAddress = new Uri(rickAndMortyUrl ?? "https://rickandmortyapi.com/api/");
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularApp", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

app.UseMiddleware<ErrorHandlingMiddleware>();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowAngularApp");

app.UseAuthorization();
app.MapControllers();

app.Run();