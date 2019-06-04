using System;

namespace TodayNotesAPI.DTOs
{
    public class NoteForReturn
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public string Color { get; set; }
        public DateTime Created { get; set; }
    }
}