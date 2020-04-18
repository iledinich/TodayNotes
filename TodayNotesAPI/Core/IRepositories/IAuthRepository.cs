using System.Threading.Tasks;
using TodayNotesAPI.Core.Models;

namespace TodayNotesAPI.Core.IRepositories
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string password);
        Task<User> Login(string username, string password);
        Task<bool> UserExists(string username);
    }
}