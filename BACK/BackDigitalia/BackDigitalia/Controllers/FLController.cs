using BackDigitalia.Models;
using BackDigitalia.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Win32;
using System.Xml.Linq;

namespace BackDigitalia.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FLController : Controller
    {
        private readonly BDigiDbContext _dbContext;

        public FLController(BDigiDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("tipo-documento")]
        public async Task<ActionResult<IEnumerable<TipoDocumento>>> GetTipoDocumento()
        {
            var elementos = await _dbContext.T_TipoDocumento.ToListAsync();
            return Ok(elementos);
        }

        [HttpGet("moneda")]
        public async Task<ActionResult<IEnumerable<Moneda>>> GetMoneda()
        {
            var elementos = await _dbContext.T_Moneda.ToListAsync();
            return Ok(elementos);
        }



        [HttpPost("agregar-recibo")]
        public IActionResult AgregarRecibo([FromBody] RecibosViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var nuevoRegistro = new Recibos
                    {

                        Nombres = model.Nombres,
                        IdTipoDocumento = model.IdTipoDocumento,
                        IdMoneda = model.IdMoneda,
                        Titulo = model.Titulo,
                        Descripcion = model.Descripcion,
                        Monto = model.Monto,
                        Logo = model.Logo,
                        RutaLogo = model.RutaLogo,
                        PDFGenerado = model.PDFGenerado,
                    };

                    _dbContext.T_Recibo.Add(nuevoRegistro);
                    _dbContext.SaveChanges();

                    return Ok();
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {

                return BadRequest("Error al agregar el recibo: " + ex.Message);
            }
         
        }


    }
}
