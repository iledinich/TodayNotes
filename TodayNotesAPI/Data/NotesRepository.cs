using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TodayNotesAPI.Models;

namespace TodayNotesAPI.Data
{
    public class NotesRepository : INotesRepository
    {
        private readonly DataContext _context;
        public NotesRepository(DataContext context)
        {
            _context = context;
        }
        public void AddNote(Note note)
        {
            _context.Add(note);
        }

        public void DeleteNote(Note note)
        {
            _context.Remove(note);
        }

        public async Task<Note> GetNote(int noteId)
        {
            return await _context.Notes.FirstOrDefaultAsync(n=>n.Id == noteId);
        }

        public async Task<IEnumerable<Note>> GetNotes(int userId)
        {
            return await _context.Notes.Where(u=>u.UserId == userId).ToListAsync();
        }

        public async Task<bool> SaveChanges()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public void UpdateNote(int id, Note note)
        {
            throw new System.NotImplementedException();
        }
    }
}