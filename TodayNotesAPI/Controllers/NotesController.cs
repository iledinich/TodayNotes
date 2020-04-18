using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TodayNotesAPI.Controllers.Resources;
using TodayNotesAPI.Core.IRepositories;
using TodayNotesAPI.Core.Models;

namespace TodayNotesAPI.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
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
            var noteResource = _mapper.Map<NoteResource>(note);
            return Ok(noteResource);
        }

        [HttpGet]
        public async Task<IActionResult> GetNotes()
        {
            var notes = await _repo.GetNotes(int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value));
            var notesForReturn = _mapper.Map<IEnumerable<NoteResource>>(notes);
            return Ok(notesForReturn);
        }

        [HttpPut("{idNote}")]
        public async Task<IActionResult> UpdateNote(int idNote, SaveNoteResource noteToUpdate)
        {

            //I need to check if the user have permisions to modify that note.
            var noteFromRepo = await _repo.GetNote(idNote);

            if (noteFromRepo.UserId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();



            _mapper.Map(noteToUpdate, noteFromRepo);
            noteFromRepo.Created = DateTime.Now;

            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Updating note {idNote} failed on save");
        }

        [HttpPost]
        public async Task<IActionResult> AddNote(SaveNoteResource noteCreated)
        {
            Note noteToRepo = new Note();
            _mapper.Map(noteCreated, noteToRepo);

            noteToRepo.UserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            noteToRepo.Created = DateTime.Now;

            _repo.Add(noteToRepo);

            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception("An error ocurred creating the new note");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNote(int id)
        {
            //I need to check if the user have permisions to modify that note.
            var noteFromRepo = await _repo.GetNote(id);

            if (noteFromRepo.UserId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            _repo.Delete(noteFromRepo);

            if (await _repo.SaveAll())
                return Ok();

            return BadRequest("Failed to delete the note");

        }

    }
}