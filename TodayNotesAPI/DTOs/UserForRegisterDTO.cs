using System.ComponentModel.DataAnnotations;

namespace TodayNotesAPI.Models
{
    public class UserForRegisterDTO
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        [StringLength(16, MinimumLength = 4, ErrorMessage = "The password must be 4 to 16 characters")]
        public string Password { get; set; }
    }
}