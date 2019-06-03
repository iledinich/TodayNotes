using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TodayNotesAPI.Data;
using TodayNotesAPI.DTOs;
using TodayNotesAPI.Models;

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
            var noteForReturn = _mapper.Map<NoteForReturn>(note);
            return Ok(noteForReturn);
        }

        [HttpGet("notes/{idUser}")]
        public async Task<IActionResult> GetNotes(int idUser)
        {
            if (idUser != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
            {
                return Unauthorized();
            }

            var notes = await _repo.GetNotes(idUser);
            var notesForReturn = _mapper.Map<IEnumerable<NoteForReturn>>(notes);
            return Ok(notesForReturn);
        }

        [HttpPut("{idNote}")]
        public async Task<IActionResult> UpdateNote(int idNote, NoteForUpdateDTO noteToUpdate)
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

    }
}