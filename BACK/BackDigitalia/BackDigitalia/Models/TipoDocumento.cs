using System.ComponentModel.DataAnnotations;

namespace BackDigitalia.Models
{
    public class TipoDocumento
    {
        [Key]
        public int IdTipoDocumento { get; set; }

        [Required]
        public string Descripcion { get; set; }

        [Required]
        public bool Estado { get; set; }
    }
}
