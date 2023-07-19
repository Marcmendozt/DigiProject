using Microsoft.EntityFrameworkCore;
using System.Net;

var builder = WebApplication.CreateBuilder(args);
//ServicePointManager.ServerCertificateValidationCallback = delegate { return true; };
// Add services to the container.
builder.Services.AddDbContext<BDigiDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("BDigi")));
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
    });
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors(builder =>
{
    builder.WithOrigins("http://localhost:3000") // Ajusta la URL de origen permitida
           .AllowAnyMethod()
           .AllowAnyHeader();
});
app.UseRouting();

app.Run();
