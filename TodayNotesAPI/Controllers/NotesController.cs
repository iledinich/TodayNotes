using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TodayNotesAPI.Data;
using TodayNotesAPI.Models;

namespace TodayNotesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly INotesRepository _repo;
        public NotesController(INotesRepository repo)
        {
            _repo = repo;
        }
        [HttpGet("note/{idNote}")]
        public async Task<IActionResult> GetNote(int idNote)
        {
            var notes = await _repo.GetNote(idNote);
            return Ok(notes);
        }

        [HttpGet("notes/{idUser}")]
        public async Task<IActionResult> GetNotes(int idUser)
        {
            var notes = await _repo.GetNotes(idUser);
            return Ok(notes);
        }

    }
}