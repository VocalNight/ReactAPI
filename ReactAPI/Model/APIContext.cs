using Microsoft.EntityFrameworkCore;

namespace ReactAPI.Model
{
    public class APIContext: DbContext
    {
        public APIContext( DbContextOptions<APIContext> options ) : base(options) { }


        protected override void OnModelCreating( ModelBuilder modelBuilder )
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<GameModel>().HasData(
                    new GameModel { Id = 1, Name = "Tomb Raider", ReleaseDate = "1996", ImageUrl = "https://files.tecnoblog.net/wp-content/uploads/2021/09/tomb-raider-1.png" },
                    new GameModel { Id = 2, Name = "Tomb Raider", ReleaseDate = "1996", ImageUrl = "https://files.tecnoblog.net/wp-content/uploads/2021/09/tomb-raider-1.png" },
                    new GameModel { Id = 3, Name = "Tomb Raider", ReleaseDate = "1996", ImageUrl = "https://files.tecnoblog.net/wp-content/uploads/2021/09/tomb-raider-1.png" },
                    new GameModel { Id = 4, Name = "Tomb Raider", ReleaseDate = "1996", ImageUrl = "https://files.tecnoblog.net/wp-content/uploads/2021/09/tomb-raider-1.png" }

                );

            }

        public DbSet<GameModel> Games { get; set; }
    }
}
