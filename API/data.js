export default {
        id: "show1",
        title: "Example Show",
        year: 2020,
        numberOfSeasons: 2,
        plot: "An example plot for an example show.",
        cast: "Actor One, Actor Two, Actor Three",
        creator: "Example Creator",
        seasons: {
          items: [
            {
              id: "season1",
              name: "Season 1",
              episodes: {
                items: [
                  {
                    id: "episode1",
                    title: "1. Pilot",
                    poster: "https://example.com/poster1.jpg",
                    duration: "45m",
                    plot: "Introduction to the main characters and storyline.",
                    video: "https://www.w3schools.com/html/mov_bbb.mp4"
                  },
                  {
                    id: "episode2",
                    title: "2. The Journey Begins",
                    poster: "https://example.com/poster2.jpg",
                    duration: "50m",
                    plot: "The main characters embark on their journey.",
                    video: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "episode3",
                    title: "3. Challenges Ahead",
                    poster: "https://example.com/poster3.jpg",
                    duration: "48m",
                    plot: "The characters face their first major challenges.",
                    video: "https://www.w3schools.com/html/mov_bbb.mp4"
                  }
                ]
              }
            },
            {
              id: "season2",
              name: "Season 2",
              episodes: {
                items: [
                  {
                    id: "episode1",
                    title: "1. New Beginnings",
                    poster: "https://example.com/poster4.jpg",
                    duration: "50m",
                    plot: "A new chapter begins for the main characters.",
                    video: "https://www.w3schools.com/html/movie.mp4"
                  },
                  {
                    id: "episode2",
                    title: "2. The Plot Thickens",
                    poster: "https://example.com/poster5.jpg",
                    duration: "52m",
                    plot: "Unexpected twists and turns in the storyline.",
                    video: "https://www.w3schools.com/html/mov_bbb.mp4"
                  }
                ]
              }
            }
          ]
        }
      };
      