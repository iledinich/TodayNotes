using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Moq;
using TodayNotesAPI.Controllers;
using TodayNotesAPI.Controllers.Resources;
using TodayNotesAPI.Core.IRepositories;
using TodayNotesAPI.Core.Models;
using TodayNotesAPI.Helpers;
using Xunit;

namespace TodayNotesAPI.Test
{
    public class UnitTests
    {
        [Fact]
        public async void GetNote_WithValidId_ReturnsOkNote()
        {
            // Arrange
            var taskNote = Task.FromResult(new Note() { Id = 42 });
            var mockRepository = new Mock<INotesRepository>();
            mockRepository.Setup(x => x.GetNote(42))
                .Returns(taskNote);

            var mockMapper = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new AutoMapperProfiles());
            });
            var mapper = mockMapper.CreateMapper();
            var controller = new NotesController(mockRepository.Object, mapper);

            // Act
            var actionResult = await controller.GetNote(42) as OkObjectResult;

            // Assert
            Assert.NotNull(actionResult);
            Assert.Equal(42, ((NoteResource)actionResult.Value).Id);

        }

        [Fact]
        public async void GetNote_invalidId_ReturnsOkNoteEmpty()
        {
            // Arrange
            var taskNote = Task.FromResult<Note>(null);
            var mockRepository = new Mock<INotesRepository>();
            mockRepository.Setup(x => x.GetNote(42))
                .Returns(taskNote);

            var mockMapper = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new AutoMapperProfiles());
            });
            var mapper = mockMapper.CreateMapper();
            var controller = new NotesController(mockRepository.Object, mapper);

            // Act
            var actionResult = await controller.GetNote(42) as OkObjectResult;

            // Assert
            Assert.NotNull(actionResult);
            Assert.Null((NoteResource)actionResult.Value);
        }

    }

}


