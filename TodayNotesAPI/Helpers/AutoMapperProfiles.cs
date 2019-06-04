using AutoMapper;
using TodayNotesAPI.DTOs;
using TodayNotesAPI.Models;

namespace TodayNotesAPI.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles(){
            CreateMap<Note, NoteForReturn>(MemberList.None);

            CreateMap<NoteForUpdateDTO,Note>();
        }
    }
}