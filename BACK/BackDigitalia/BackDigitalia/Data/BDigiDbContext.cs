using BackDigitalia.Models;
using Microsoft.EntityFrameworkCore;
using System.Xml.Linq;

public class BDigiDbContext : DbContext
{
    private readonly IConfiguration _configuration;

    public DbSet<TipoDocumento> T_TipoDocumento { get; set; }

    public DbSet<Moneda> T_Moneda { get; set; }

    public DbSet<Recibos> T_Recibo { get; set; }
    public BDigiDbContext(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(_configuration.GetConnectionString("BDigi"));
    }



}