using System;
using System.Threading.Tasks;

namespace TodayNotesAPI
{
    public interface IUnitOfWork
    {
        Task<int> CompleteAsync();
    }
}