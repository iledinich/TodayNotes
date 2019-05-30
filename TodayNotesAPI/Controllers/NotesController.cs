using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TodayNotesAPI.Data;
using TodayNotesAPI.DTOs;
using TodayNotesAPI.Models;

namespace TodayNotesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly INotesRepository _repo;
        private readonly IMapper _mapper;

        public NotesController(INotesRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }
        [HttpGet("note/{idNote}")]
        public async Task<IActionResult> GetNote(int idNote)
        {
            var note = await _repo.GetNote(idNote);
            var noteForReturn = _mapper.Map<NoteForReturn>(note);
            return Ok(noteForReturn);
        }

        [HttpGet("notes/{idUser}")]
        public async Task<IActionResult> GetNotes(int idUser)
        {
            var notes = await _repo.GetNotes(idUser);
            var notesForReturn = _mapper.Map<IEnumerable<NoteForReturn>>(notes);
            return Ok(notesForReturn);
        }

    }
}