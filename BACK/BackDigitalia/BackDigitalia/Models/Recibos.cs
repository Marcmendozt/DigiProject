using System.ComponentModel.DataAnnotations;

namespace BackDigitalia.Models
{
    public class Recibos
    {
        [Key]
        public long IdRecibo { get; set; }

        [Required]
        public string Nombres { get; set; }
        [Required]
        public int IdTipoDocumento { get; set; }
        [Required]
        public int IdMoneda { get; set; }
        [Required]
        public string Titulo { get; set; }
        [Required]
        public string Descripcion { get; set; }
        [Required]
        public decimal Monto { get; set; }
        [Required]
        public string Logo { get; set; }
        [Required]
        public string RutaLogo { get; set; }
        [Required]
        public bool PDFGenerado { get; set; }
    }
}
