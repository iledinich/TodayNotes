using AutoMapper;
using TodayNotesAPI.Controllers.Resources;
using TodayNotesAPI.Core.Models;

namespace TodayNotesAPI.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Note, NoteResource>(MemberList.None);

            CreateMap<SaveNoteResource, Note>();
        }
    }
}