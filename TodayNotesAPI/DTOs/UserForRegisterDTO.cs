using System.ComponentModel.DataAnnotations;

namespace TodayNotesAPI.Models
{
    public class UserForRegisterDTO
    {
        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "The username must be 4 to 8 characters")]
        public string UserName { get; set; }
        [Required]
        [StringLength(16, MinimumLength = 4, ErrorMessage = "The password must be 4 to 16 characters")]
        public string Password { get; set; }
    }
}