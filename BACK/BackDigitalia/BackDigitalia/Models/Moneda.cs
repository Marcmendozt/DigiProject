using System.ComponentModel.DataAnnotations;

namespace BackDigitalia.Models
{
    public class Moneda
    {
        [Key]
        public int IdMoneda { get; set; }

        [Required]
        public string Descripcion { get; set; }

        [Required]
        public bool Estado { get; set; }
    }
}
