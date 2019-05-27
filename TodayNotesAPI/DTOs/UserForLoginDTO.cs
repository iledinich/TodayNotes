using System.ComponentModel.DataAnnotations;

namespace TodayNotesAPI.DTOs
{
    public class UserForLoginDTO
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}