using System.ComponentModel.DataAnnotations;

namespace TodayNotesAPI.Controllers.Resources
{
    public class SaveUserResource
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        [StringLength(16, MinimumLength = 4, ErrorMessage = "The password must be 4 to 16 characters.")]
        public string Password { get; set; }
    }
}