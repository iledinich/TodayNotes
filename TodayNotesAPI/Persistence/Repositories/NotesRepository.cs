using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TodayNotesAPI.Core.IRepositories;
using TodayNotesAPI.Core.Models;

namespace TodayNotesAPI.Persistence.Repositories
{
    public class NotesRepository : INotesRepository
    {
        private readonly DataContext _context;
        private readonly IUnitOfWork uow;

        public NotesRepository(DataContext context, IUnitOfWork uow)
        {
            this.uow = uow;
            _context = context;
        }
        public void Add(Note note)
        {
            _context.Add(note);
        }

        public void Delete(Note note)
        {
            _context.Remove(note);
        }

        public async Task<Note> GetNote(int id)
        {
            return await _context.Notes.FirstOrDefaultAsync(n => n.Id == id);
        }

        public async Task<IEnumerable<Note>> GetNotes(int userId)
        {
            return await _context.Notes.Where(u => u.UserId == userId).ToListAsync();
        }

        public async Task<bool> SaveAll()
        {
            return await uow.CompleteAsync() > 0;
        }
    }
}