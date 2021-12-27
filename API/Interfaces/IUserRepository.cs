using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.DTOs;

namespace API.Interfaces
{
    public interface IUserRepository
    {
        void Update(AppUser user);
        Task<bool>SaveAllAsync();
        Task<IEnumerable<AppUser>> GetUsersAsync();
        Task<AppUser> GetByIdUserAsync(int id); 
        Task<AppUser> GetUserByUsernameAsync(string username);
        Task<IEnumerable<MembersDto>> GetMembersAsync();
        Task<MembersDto> GetMemberAsync(string username);
        }
}