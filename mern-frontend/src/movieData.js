import Ban from './Video/banner.mp4'
import Pan from './Video/pan.mp4'

export const movies = [
  // existing:
  {
    id: 1,
    title: "Elio",
    year: 2025,
    rating: "U/A 7+",
    category: "hollywood",  
    length: "1h 37m",
    languages: "4 Languages",
    description:
      "Elio, a space fanatic, lands in a cosmic misadventure when he is beamed up to an interplanetary organization and mistaken for Earth’s leader.",
    keywords: ["Comedy", "Adventure", "Science Fiction", "Family"],
    img: "https://img10.hotstar.com/image/upload/f_auto,q_auto/sources/r1/cms/prod/7541/1756877597541-i",
    post:"https://i0.wp.com/pixarpost.com/wp-content/uploads/2024/11/ELIO_Teaser_2nd_Intro_1s_v4.0_A_Mech11_FS.jpg?resize=1080%2C1600&ssl=1",
    video: Ban,
    cast: ["Adrian Molina", "Yonas Kibreab", "America Ferrera"]
  },
  {
    post:"https://play-lh.googleusercontent.com/OOhMvKSgqIcIVyHdq7-nobi_EKn0IFN71RoNrKHPtyhcdbOhLJINP_OqLO_aAlr7GOw-",
    id: 2,
    title: "BIG BOSS",
    year: 2025,
    rating: "U/A 18+",
    category: "bollywood", 
    length: "1h 37m",
    languages: "4 Languages",
    description:
      "Elio, a space fanatic, lands in a cosmic misadventure when he is beamed up to an interplanetary organization and mistaken for Earth’s leader.",
    keywords: ["Comedy", "Adventure", "Science Fiction", "Family"],
    img: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_640/sources/r1/cms/prod/2607/1758437602607-i",
    video: Pan,
    cast: ["Adrian Molina", "Yonas Kibreab", "America Ferrera"]
  },

  // --- NEW ADDED DATA ---

  // Top Trending Hollywood Movies
  {
    id: 3,
    title: "Lilo & Stitch",
    year: 2025,
    rating: "PG-13",
    category: "hollywood",
    length: "1h 48m",
    languages: "English",
    description:
      "A live-action/CGI remake of Disney’s beloved classic where a spirited Hawaiian girl forms an unexpected bond with an alien experiment, Stitch.",
    keywords: ["Family", "Adventure", "Comedy", "Remake"],
    img: "https://example.com/lilo-stitch.jpg",
    video: Ban,
    post:"https://upload.wikimedia.org/wikipedia/en/5/56/Lilo_%26_Stitch_2025_Theatrical_Poster.jpg",
    cast: ["Maia Agudong", "Chris Sanders", "Sydney Elizbeth Agudong"]
  },
  {
   
    id: 4,
    title: "Mission: Impossible – The Final Reckoning",
    year: 2025,
    rating: "PG-13",
    category: "hollywood",
    length: "2h 25m",
    languages: "English",
    description:
      "Ethan Hunt faces his most dangerous mission yet, confronting shadows from his past as the final reckoning approaches.",
    keywords: ["Action", "Thriller", "Spy", "Adventure"],
    img: "https://example.com/mi-final-reckoning.jpg",
    video: Ban,
    cast: ["Tom Cruise", "Hayley Atwell", "Simon Pegg"] ,
    post:" https://i.scdn.co/image/ab67616d0000b273633c6c0934eccaed2a9359be ",
  },
  { 
    post:"https://www.planet9productions.in/wp-content/uploads/2025/07/images-2025-07-04t154417.475-Bd3Iho.jpg",
    id: 5,
    title: "Jurassic World: Rebirth",
    year: 2025,
    rating: "PG-13",
    category: "hollywood",
    length: "2h 13m",
    languages: "English",
    description:
      "After the events of Dominion, Isla Nublar’s survivors struggle to rebuild while new threats emerge in both nature and mankind.",
    keywords: ["Adventure", "Science Fiction", "Thriller", "Dinosaurs"],
    img: "https://example.com/jurassic-world-rebirth.jpg",
    video: Ban,
    cast: ["Scarlett Johansson", "Mahershala Ali", "Jonathan Bailey"]
  },
  {
    id: 6,
    post:"https://dims.apnews.com/dims4/default/e2af095/2147483647/strip/false/crop/3000x2000+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F52%2F3a%2F0f802ca773c49a97e4caa6f7d607%2F44cd5101a5c2431a98f8a3955d21618e",
    title: "F1: The Movie",
    year: 2025,
    rating: "PG-13",
    category: "hollywood",
    length: "2h 10m",
    languages: "English",
    description:
      "A high-octane documentary-style film capturing the thrills, risks, and human drama in the racing world of Formula 1.",
    keywords: ["Sports", "Drama", "Documentary", "Action"],
    img: "https://example.com/f1-movie.jpg",
    video: Ban,
    cast: ["Brad Pitt", "Various F1 Drivers"]
  },
  {
    id: 6,
    post:"https://i.scdn.co/image/ab67616d0000b2738ce46991d86e744ef06a7a95",
    title: "F1: The Movie",
    year: 2025,
    rating: "PG-13",
    category: "hollywood",
    length: "2h 10m",
    languages: "English",
    description:
      "A high-octane documentary-style film capturing the thrills, risks, and human drama in the racing world of Formula 1.",
    keywords: ["Sports", "Drama", "Documentary", "Action"],
    img: "https://example.com/f1-movie.jpg",
    video: Ban,
    cast: ["Brad Pitt", "Various F1 Drivers"]
  },
  // Top Trending Bollywood Movies
  {
    id: 7,
    title: "Chhaava",
    year: 2025,
    rating: "U/A",
    category: "bollywood",
    length: "2h 30m",
    languages: "Hindi",
    description:
      "A historical-epic drama that retraces a forgotten battle and the sacrifices of its heroes in pre-Independence India.",
    keywords: ["Historical", "Drama", "Epic", "Action"],
    img: "https://example.com/chhaava.jpg",
    video: Pan,
    cast: ["Vicky Kaushal", "Supporting Cast"],
    post:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWQdsThMg2bku1CzGtCoKwH9hECUQ3J4gOBw&s"
  },
  {
    post:"https://upload.wikimedia.org/wikipedia/en/e/ec/Housefull_5.jpg",
    id: 8,
    title: "Housefull 5",
    year: 2025,
    rating: "U/A",
    category: "bollywood",
    length: "2h 40m",
    languages: "Hindi",
    description:
      "The next comedic installment in the Housefull franchise, with multiple intertwining love stories, misunderstandings and over-the-top humour.",
    keywords: ["Comedy", "Romance", "Family"],
    img: "https://example.com/housefull5.jpg",
    video: Pan,
    cast: ["Akshay Kumar", "Critics Cast"]
  },
  {
    post:"https://m.media-amazon.com/images/M/MV5BMTk2ZmFhYjctYWZiYy00N2IxLWEzMWItZGRiMDY4ZDQwZWFlXkEyXkFqcGc@._V1_.jpg",
    id: 9,
    title: "Saiyaara",
    year: 2025,
    rating: "U/A",
    category: "bollywood",
    length: "2h 05m",
    languages: "Hindi",
    description:
      "A romantic musical drama that strikes emotion with soul-stirring music and heartwarming storytelling.",
    keywords: ["Romance", "Drama", "Music"],
    img: "https://example.com/saiyaara.jpg",
    video: Pan,
    cast: ["Ahaan Panday", "Aneet Padda"]
  },
  {
    post:"https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Deva_2025_film_poster.jpg/250px-Deva_2025_film_poster.jpg",
    id: 10,
    title: "Deva",
    year: 2025,
    rating: "U/A",
    category: "bollywood",
    length: "2h 36m",
    languages: "Hindi",
    description:
      "A complex action thriller about a police officer who loses his memory and must solve a murder in the midst of a changing identity.",
    keywords: ["Action", "Thriller", "Drama"],
    img: "https://example.com/deva.jpg",
    video: Pan,
    cast: ["Shahid Kapoor", "Pooja Hegde", "Pavail Gulati"]
  },
  {
    post:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWlv_4P3c0g0nlGaFRCeevbIDGSM0LE0iyBg&s",
    id: 10,
    title: "Deva",
    year: 2025,
    rating: "U/A",
    category: "bollywood",
    length: "2h 36m",
    languages: "Hindi",
    description:
      "A complex action thriller about a police officer who loses his memory and must solve a murder in the midst of a changing identity.",
    keywords: ["Action", "Thriller", "Drama"],
    img: "https://example.com/deva.jpg",
    video: Pan,
    cast: ["Shahid Kapoor", "Pooja Hegde", "Pavail Gulati"]
  },
  // Tollywood (Telugu) Movies
  {
    id: 11,
    title: "War 2",
    year: 2025,
    rating: "U/A",
    category: "tollywood",
    length: "2h 50m",
    languages: "Telugu",
    description:
      "A high-budget action-thriller with massive set-pieces and patriotic themes, featuring conflicts both personal and political.",
    keywords: ["Action", "Thriller", "Patriotism"],
    img: "https://example.com/war2.jpg",
    video: Ban,
    cast: ["Tollywood Stars"]
  },
  {
    id: 12,
    title: "Mahavatar Narsimha",
    year: 2025,
    rating: "U/A",
    category: "tollywood",
    length: "2h 20m",
    languages: "Telugu",
    description:
      "A mythological fantasy telling the tale of a warrior with divine origin battling dark forces to restore balance.",
    keywords: ["Fantasy", "Mythology", "Action"],
    img: "https://example.com/mahavatar-narsimha.jpg",
    video: Ban,
    cast: ["Telugu Ensemble"]
  },

  // Mollywood (Malayalam) Movies
  {
    id: 13,
    title: "Lokah: Chapter 1 - Chandra",
    year: 2025,
    rating: "U/A",
    category: "mollywood",
    length: "2h 30m",
    languages: "Malayalam",
    description:
      "A Malayalam-blockbuster superhero film where a young woman discovers her powers and faces a primordial threat to her world.",
    keywords: ["Superhero", "Fantasy", "Action"],
    img: "https://example.com/lokah-chandra.jpg",
    video: Pan,
    cast: ["Kalyani Priyadarshan", "Dulquer Salmaan"]
  },
  {
    id: 14,
    title: "Aadujeevitham",
    year: 2025,
    rating: "U/A",
    category: "mollywood",
    length: "2h 15m",
    languages: "Malayalam",
    description:
      "An epic survival drama following a man cast away in exile, battling nature, hunger, and his own mind to survive.",
    keywords: ["Survival", "Drama", "Adventure"],
    img: "https://example.com/aadujeevitham.jpg",
    video: Pan,
    cast: ["Prithviraj Sukumaran"]
  },

  // Web Series
  {
    id: 15,
    title: "The Family Man (Season 3)",
    year: 2025,
    rating: "18+",
    category: "webseries",
    length: "8 Episodes",
    languages: "Hindi",
    description:
      "Spy thriller season where the protagonist must tackle national and international threats while balancing family life.",
    keywords: ["Thriller", "Action", "Drama"],
    img: "https://example.com/family-man-s3.jpg",
    video: Ban,
    cast: ["Manoj Bajpayee", "Sharib Hashmi"]
  },
  {
    id: 16,
    title: "Sacred Games (New Season)",
    year: 2025,
    rating: "18+",
    category: "webseries",
    length: "8 Episodes",
    languages: "Hindi",
    description:
      "Power struggles, crime lords and politics continue in Mumbai’s underbelly as new protagonists rise and old ones show their teeth.",
    keywords: ["Crime", "Drama", "Thriller"],
    img: "https://example.com/sacred-games.jpg",
    video: Pan,
    cast: ["Saif Ali Khan", "Nawazuddin Siddiqui"]
  },
  {
    id: 17,
    title: "Delhi Crime (Season 4)",
    year: 2025,
    rating: "18+",
    category: "webseries",
    length: "6 Episodes",
    languages: "Hindi",
    description:
      "Investigative thriller series centered around challenging new crime cases in the capital city with strong social themes.",
    keywords: ["Crime", "Mystery", "Social"],
    img: "https://example.com/delhi-crime-s4.jpg",
    video: Ban,
    cast: ["Shefali Shah", "Rajesh Tailang"]
  },

  // (You can add more to fill 10 in each category similarly)
];
