namespace TodayNotesAPI.DTOs
{
    public class NoteForReturn
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public int DaysAgo { get; set; }
    }
}