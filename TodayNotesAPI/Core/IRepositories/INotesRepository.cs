using System.Collections.Generic;
using System.Threading.Tasks;
using TodayNotesAPI.Core.Models;

namespace TodayNotesAPI.Core.IRepositories
{
    public interface INotesRepository
    {
        Task<IEnumerable<Note>> GetNotes(int userId);
        Task<Note> GetNote(int noteId);
        void Add(Note note);
        void Delete(Note note);
        Task<bool> SaveAll();
    }
}