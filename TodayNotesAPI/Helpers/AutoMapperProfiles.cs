using AutoMapper;
using TodayNotesAPI.DTOs;
using TodayNotesAPI.Models;

namespace TodayNotesAPI.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles(){
            CreateMap<Note, NoteForReturn>(MemberList.None)
                .ForMember(dest => dest.DaysAgo, opt =>{
                    opt.MapFrom(source => source.Created.DaysAgoCalculator());
                });

            CreateMap<NoteForUpdateDTO,Note>();
        }
    }
}