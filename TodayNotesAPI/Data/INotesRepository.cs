using System.Collections.Generic;
using System.Threading.Tasks;
using TodayNotesAPI.Models;

namespace TodayNotesAPI.Data
{
    public interface INotesRepository
    {
        Task<IEnumerable<Note>> GetNotes(int userId);
        Task<Note> GetNote(int noteId);
        void AddNote(Note note);
        void DeleteNote(Note note);
        void UpdateNote(int id, Note note);
        Task<bool> SaveChanges();
    }
}