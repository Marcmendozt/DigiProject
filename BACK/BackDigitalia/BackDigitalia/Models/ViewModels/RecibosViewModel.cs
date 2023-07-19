
using System.ComponentModel.DataAnnotations;

namespace BackDigitalia.Models.ViewModels
{
    public class RecibosViewModel
    {
        public long IdRecibo { get; set; }

        public string Nombres { get; set; }
    
        public int IdTipoDocumento { get; set; }
     
        public int IdMoneda { get; set; }
     
        public string Titulo { get; set; }
      
        public string Descripcion { get; set; }
     
        public decimal Monto { get; set; }
       
        public string Logo { get; set; }
     
        public string RutaLogo { get; set; }
        
        public bool PDFGenerado { get; set; }
    }
}
