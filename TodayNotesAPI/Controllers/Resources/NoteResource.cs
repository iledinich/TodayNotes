using System;

namespace TodayNotesAPI.Controllers.Resources
{
    public class NoteResource
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public string Color { get; set; }
        public DateTime Created { get; set; }
    }
}