using System;
using TodayNotesAPI.Helpers;

namespace TodayNotesAPI.Core.Models
{
    public class Note
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public DateTime Created { get; set; }
        public int UserId { get; set; }
        public string Color { get; set; } = "#d4d3d3";
    }
}