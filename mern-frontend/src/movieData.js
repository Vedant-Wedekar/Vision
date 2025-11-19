import Ban from './Video/banner.mp4'
import L2 from './Video/L2.mp4'
import Pan from './Video/pan.mp4'
import Loo from './Video/LOO.mp4'
import MMM from './Video/MMM.mp4'
import Baa from './Video/bbb.mp4'
export const movies = [
  // existing:
 {
  id: 1,
  title: "Elio",
  year: 2025,
  rating: "U/A 7+",
  category: "english",
  length: "1h 37m",
  languages: "4 Languages",
  description:
    "Elio, a space fanatic, lands in a cosmic misadventure when he is beamed up to an interplanetary organization and mistaken for Earth’s leader.",
  keywords: ["Comedy", "Adventure", "Science Fiction", "Family"],
  img: "https://img10.hotstar.com/image/upload/f_auto,q_auto/sources/r1/cms/prod/7541/1756877597541-i",
  post:
    "https://i0.wp.com/pixarpost.com/wp-content/uploads/2024/11/ELIO_Teaser_2nd_Intro_1s_v4.0_A_Mech11_FS.jpg?resize=1080%2C1600&ssl=1",
  video: Ban,
  LV:L2,
  cast: [
    {
      name: "Adrian Molina",
      img: "data:image/jpeg;base64,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"
    },
    {
      name: "Yonas Kibreab",
      img: "data:image/jpeg;base64,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"
    },
    {
      name: "America Ferrera",
      img: "data:image/jpeg;base64,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"
    }
  ]
}

,
  {
    post:"https://m.media-amazon.com/images/M/MV5BNWJmNTU1NDgtYzc4MC00ODU2LWFjNzYtYjFhNjRkNTQwZmQyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    id: 2,caste:"shows",
    title: "BIG BOSS",
    year: 2025,
    rating: "U/A 18+",
    category: "bollywood", 
     length: "1h Episodes",
  languages: "Hindi, Tamil, Telugu, Kannada",
  description: "Bigg Boss brings together diverse contestants under one roof, where drama, tasks, and eliminations test their patience, strategy, and emotions. Hosted by Salman Khan, it’s India’s most thrilling and controversial reality show.",
  keywords: ["Reality", "Drama", "Competition", "Entertainment"],
    languages: "4 Languages",
    img: "https://img10.hotstar.com/image/upload/f_auto,q_auto/sources/r1/cms/prod/3084/1759042823084-i",
    video: Pan,
    cast: ["Salman Khan", "Contestants 2025", "Bigg Boss Voice"]
  },

  {
    id: 3,
    title: "Lilo & Stitch",
    year: 2025,
      category: "english",
    rating: "PG-13",
    category: "hollywood",
    length: "1h 48m",
    languages: "English",
    description:
      "A live-action/CGI remake of Disney’s beloved classic where a spirited Hawaiian girl forms an unexpected bond with an alien experiment, Stitch.",
    keywords: ["Family", "Adventure", "Comedy", "Remake"],
    img: "https://i.ytimg.com/vi/euYGJkMoPTM/maxresdefault.jpg",
    video: Loo,
    post:"https://upload.wikimedia.org/wikipedia/en/5/56/Lilo_%26_Stitch_2025_Theatrical_Poster.jpg",
    cast: ["Maia Agudong", "Chris Sanders", "Sydney Elizbeth Agudong"]
  },
    {
    
      id: 4,
      title: "Mission: Impossible – The Final Reckoning",
      year: 2025,
      rating: "PG-13",
    category: "hollywood",

      category: "hollywood",
        category: "english",
      caste:"popular",
      length: "2h 25m",
      languages: "English",
      description:
        "Ethan Hunt faces his most dangerous mission yet, confronting shadows from his past as the final reckoning approaches.",
      keywords: ["Action", "Thriller", "Spy", "Adventure"],
      img: "https://weliveentertainment.com/wp-content/uploads/2025/05/mission-impossible-final-reckoning-banner.jpg",
      video: MMM,
      cast: ["Tom Cruise", "Hayley Atwell", "Simon Pegg"] ,
      post:" https://i.scdn.co/image/ab67616d0000b273633c6c0934eccaed2a9359be ",
    },
  { 
    post:"https://dx35vtwkllhj9.cloudfront.net/universalstudios/jurassic-world-rebirth/images/regions/us/updates1/onesheet.jpg",
    id: 5,
    title: "Jurassic World: Rebirth",
    year: 2025,
    rating: "PG-13",
    category: "hollywood",
      category: "english",
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
    title: "F1: The Movie",    caste:"popular",
    year: 2025,
    rating: "PG-13",
    category: "hollywood",
     category: "english",

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
    title: "Chhaava",caste:"top-rated",
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
    post:"https://m.media-amazon.com/images/M/MV5BMDMyZjFmZTctNDAxYi00MWM3LWJiYmItM2VhNWZiM2IwNjNlXkEyXkFqcGc@._V1_.jpg"
  },
  {
    post:"https://upload.wikimedia.org/wikipedia/en/e/ec/Housefull_5.jpg",
    id: 8,
    title: "Housefull 5", caste:"popular",
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
    category: "bollywood", 
    post:"https://m.media-amazon.com/images/M/MV5BMTk2ZmFhYjctYWZiYy00N2IxLWEzMWItZGRiMDY4ZDQwZWFlXkEyXkFqcGc@._V1_.jpg",
    id: 9,
    title: "Saiyaara",  
      caste:"popular",
    year: 2025,
    rating: "U/A",
    length: "2h 05m",
    languages: "Hindi",
    description:
      "A romantic musical drama that strikes emotion with soul-stirring music and heartwarming storytelling.",
    keywords: ["Romance", "Drama", "Music"],
    img: "https://example.com/saiyaara.jpg",
    video: Pan,
    cast: ["Ahaan Panday", "Aneet Padda"]
  }, {
    post:"https://m.media-amazon.com/images/M/MV5BMTk2ZmFhYjctYWZiYy00N2IxLWEzMWItZGRiMDY4ZDQwZWFlXkEyXkFqcGc@._V1_.jpg",
    id: 9,
    title: "Saiyaara",  
      caste:"popular",
    year: 2025,
    category: "hindi",
    rating: "U/A",
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
    title: "Deva",caste:"popular",
    year: 2025,
    rating: "U/A",
    category: "bollywood",
     category: "hindi",
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
  id: 10021,
  title: "Devara: Part 1",
  year: 2024,
  rating: "U/A",
  category: "tollywood",
  length: "2h 45m",
  languages: "Telugu",
  description:
    "A coastal action saga where a feared ruler must protect his people against betrayal and bloodshed.",
  keywords: ["Action", "Revenge", "Drama"],
  img: "https://i.ytimg.com/vi/2vRxJm_z0OE/maxresdefault.jpg",
  post: "https://m.media-amazon.com/images/M/MV5BYmI5NTljYWItMDhjMC00NDQwLWFhMjQtNWNjNDYzYzkwNGQ0XkEyXkFqcGc@._V1_QL75_UY281_CR18,0,190,281_.jpg",
  // video: Devara1,
  cast: ["Jr NTR", "Janhvi Kapoor", "Saif Ali Khan"]
},
{
  id: 10022,
  title: "OG",
  year: 2025,
  rating: "U/A",
  category: "tollywood",
  length: "2h 30m",
  languages: "Telugu",
  description:
    "A dark gangster drama about the rise of a ruthless underworld legend known only as OG.",
  keywords: ["Gangster", "Action", "Crime"],
  img: "https://i.ytimg.com/vi/ZS41x1L6tVE/maxresdefault.jpg",
  post: "https://upload.wikimedia.org/wikipedia/en/0/0c/OG_Poster.jpg",
  // video: OGMovie,
  cast: ["Pawan Kalyan", "Emraan Hashmi", "Priyanka Mohan"]
},
{
  id: 10023,
  title: "Game Changer",
  year: 2025,
  rating: "U/A",
  category: "tollywood",
  length: "2h 40m",
  languages: "Telugu",
  description:
    "A political action drama where a visionary leader battles corruption to rebuild the system from within.",
  keywords: ["Political", "Action", "Drama"],
  img: "https://i.ytimg.com/vi/_dX9bQe1bwg/maxresdefault.jpg",
  post: "https://upload.wikimedia.org/wikipedia/en/6/6a/Game_Changer_Telugu.jpg",
  // video: GameChanger,
  cast: ["Ram Charan", "Kiara Advani", "SJ Suryah"]
},
{
  id: 10024,
  title: "Salaar: Part 2 - Shouryanga Parvam",
  year: 2025,
  rating: "U/A",
  category: "tollywood",
  length: "2h 55m",
  languages: "Telugu",
  description:
    "The war intensifies between Deva and Vardha as kingdoms collide in a brutal fight for supremacy.",
  keywords: ["Action", "Gangster", "Dark"],
  img: "https://i.ytimg.com/vi/JY7aKNrR5YY/maxresdefault.jpg",
  post: "https://m.media-amazon.com/images/M/MV5BOGE3YWQ3NzAtNmEwOS00OGY5LThkNzEtZDg5NDRjMzRmMzhiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  // video: Salaar2,
  cast: ["Prabhas", "Prithviraj Sukumaran", "Shruti Haasan"]
},
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
    img: "https://example.com/war2.jpg",post:"https://m.media-amazon.com/images/M/MV5BNjY5OTg4NTYtZjVkZS00YTZmLWIwNDEtM2Y0ODQyMzM2NTJiXkEyXkFqcGc@._V1_.jpg",
    video: Ban,
    cast: ["Tollywood Stars"]
  },
  
  {
    id: 12,
    title: "Mahavatar Narsimha",    caste:"popular",
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
    post:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/mahavatar-narsimha-et00429289-1753248294.jpg",
    cast: ["Telugu Ensemble"]
  },{
    "post": "https://dontcallitbollywood.com/wp-content/uploads/2017/04/dbd4a-bah.jpg",
    "id": 1,
    "caste": "shows",
    "title": "Baahubali 2: The Conclusion",
    "year": 2017,
    "rating": "U/A",
    "category": "tollywood",
    "length": "2h 45m",
    "languages": "Telugu, Tamil, Hindi, Malayalam (dubbed)",
    "description": "The epic conclusion to the Mahishmati saga — a battle for the throne, family secrets revealed and large-scale war sequences.",
    "keywords": ["Epic", "Action", "Drama", "Fantasy"],
    "img": "https://upload.wikimedia.org/wikipedia/en/7/76/Baahubali_the_Conclusion_poster.jpg",
    "video": Baa,
    "cast": ["Prabhas", "Rana Daggubati", "Anushka Shetty", "Tamannaah Bhatia"]
  },
  {
    "post": "https://stat5.bollywoodhungama.in/wp-content/uploads/2019/03/RRR-2022.jpeg",
    "id": 2,
    "caste": "shows",
    "title": "RRR",
    "year": 2022,
    "rating": "U/A",
    "category": "tollywood",
     category: "hindi",

    "length": "3h 18m",
    "languages": "Telugu, Hindi, Tamil, Malayalam, Kannada (dubbed)",
    "description": "A fictionalized epic about two Indian revolutionaries and their friendship, framed by spectacular action and musical set-pieces.",
    "keywords": ["Action", "Drama", "Historical", "Musical"],
    "img": "https://upload.wikimedia.org/wikipedia/en/4/4e/RRR_poster.jpg",
    "video": null,
    "cast": ["N. T. Rama Rao Jr.", "Ram Charan", "Alia Bhatt", "Ajay Devgn"]
  },
  {
    "post": "https://m.media-amazon.com/images/S/pv-target-images/2844b9fb2959bff43271a6ce5fb2519c16aef711885b08f71b6c1cbffb060ee7.jpg",
    "id": 3,
    "caste": "shows",
    "title": "Pushpa: The Rise",
    "year": 2021,
    "rating": "A / U/A (varies by language)",
    "category": "tollywood",
    "length": "2h 34m",
    "languages": "Telugu (also released in Hindi, Tamil, Malayalam, Kannada)",
    "description": "A rustic smuggling-drama about an ambitious labourer who rises in the red-sandalwood smuggling world, known for Allu Arjun's iconic performance.",
    "keywords": ["Action", "Drama", "Crime"],
    "img": "https://upload.wikimedia.org/wikipedia/en/e/e2/Pushpa_The_Rise_poster.jpg",
    "video": null,
    "cast": ["Allu Arjun", "Rashmika Mandanna", "Fahadh Faasil"]
  },
  {
    "post": "https://m.media-amazon.com/images/M/MV5BZjllNTdiM2QtYjQ0Ni00ZGM1LWFlYmUtNWY0YjMzYWIxOTYxXkEyXkFqcGc@._V1_.jpg",
    "id": 4,
    "caste": "shows",
    "title": "Pushpa 2: The Rule",
    "category": "tollywood",

    "year": 2024,
    "rating": "A",
    "category": "tollywood",
     category: "hindi",

    "length": "2h 55m",
    "languages": "Telugu (also dubbed in Hindi, Tamil, Malayalam, Kannada)",
    "description": "Sequel continuing the saga of Pushpa Raj — expands the smuggling world and heightens the protagonist's clash with powerful enemies.",
    "keywords": ["Action", "Crime", "Drama"],
    "img": "https://upload.wikimedia.org/wikipedia/en/9/9a/Pushpa_2_poster.jpg",
    "video": null,
    "cast": ["Allu Arjun", "Rashmika Mandanna"]
  },
// Mollywood (Malayalam) Movies

  {
    "post": "https://m.media-amazon.com/images/M/MV5BZTQ1YWZjYTAtNGVjYi00YjkwLTk0N2UtYmMzM2NkZjlmODIwXkEyXkFqcGc@._V1_.jpg",
    "id": 1,
    "caste": "shows",
    "title": "L2: Empuraan",
    "year": 2025,
    "rating": "U/A 16+",
    "category": "mollywood",
    "length": "2h 59m",
    "languages": "Malayalam, Hindi, Tamil, Telugu, Kannada",
    "description": "Sequel to Lucifer; continues the political-action thriller saga centered around Stephen Nedumpally / Khureshi-Abr’aam amidst power struggles and clandestine influence.",
    "keywords": ["Action", "Political Thriller", "Sequel", "Grey Morality"],
    "img": "https://upload.wikimedia.org/wikipedia/en/e/e5/L2_Empuraan_poster.jpg",
    "video": null,
    "cast": ["Mohanlal", "Prithviraj Sukumaran", "Manju Warrier", "Tovino Thomas", "Indrajith Sukumaran"]
  },
  {
    "post": "https://upload.wikimedia.org/wikipedia/en/3/3a/Thalavara_Film.jpg",
    "id": 2,
    "caste": "shows",
    "title": "Thalavara",
    "year": 2025,
    "rating": "U/A",
    "category": "mollywood",
    "length": "2h 11m",
    "languages": "Malayalam",
    "description": "A coming-of-age drama starring Arjun Ashokan & Revathy Sarma, exploring friendship, identity, and generational differences.",
    "keywords": ["Drama", "Coming of Age"],
    "img": "https://upload.wikimedia.org/wikipedia/en/3/3a/Thalavara_Film.jpg",
    "video": null,
    "cast": ["Arjun Ashokan", "Revathy Sarma"]
  },
  {
    "post": "https://m.media-amazon.com/images/M/MV5BOTM3ZmYyZTItYTdkOS00NzIwLWJmOGYtMmUxMDVmZjVmNjdkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "id": 3,
    "caste": "shows",
    "title": "Sarkeet",
    "year": 2025,
    "rating": "U",
    "category": "mollywood",
    "length": "2h 03m",
    "languages": "Malayalam",
    "description": "Family drama film about a Malayali couple living in the UAE who struggle to raise their son diagnosed with ADHD.",
    "keywords": ["Family", "Drama"],
    "img": "https://m.media-amazon.com/images/M/MV5BOTM3ZmYyZTItYTdkOS00NzIwLWJmOGYtMmUxMDVmZjVmNjdkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "video": null,
    "cast": ["Asif Ali", "Divya Prabha", "Deepak Parambol", "Orhan Hyder"]
  },
  {
    "post": "https://m.media-amazon.com/images/M/MV5BYTEyMjljMDUtZDdmNy00NTIyLTgxMzEtMTA2YTBmMmJmMmViXkEyXkFqcGc@._V1_.jpg",
    "id": 4,
    "caste": "shows",
    "title": "Pulimurugan",
    "year": 2016,
    "rating": "U",
    "category": "mollywood",
    "length": "2h 39m",
    "languages": "Malayalam",
    "description": "A mass action-thriller with Mohanlal as Murugan, a man living on the fringes of the forest who must battle dangerous poachers and his own past.",
    "keywords": ["Action", "Thriller", "Mass", "Adventure"],
    "img": "https://upload.wikimedia.org/wikipedia/en/2/28/Pulimurugan_poster.jpg",
    "video": null,
    "cast": ["Mohanlal", "Jagapathi Babu", "Kamalinee Mukherjee"]
  },
  {
    "post": "https://upload.wikimedia.org/wikipedia/en/e/e6/Mayaanadhi_film_poster.jpg",
    "id": 5,
    "caste": "shows",
    "title": "Mayaanadhi",
    "year": 2017,
    "rating": "U/A",
    "category": "mollywood",
    "length": "2h 16m",
    "languages": "Malayalam",
    "description": "A romantic thriller about a man on the run and an aspiring actress; a poetic take on love and loss against the backdrop of crime and pursuit.",
    "keywords": ["Romance", "Thriller", "Drama", "Crime"],
    "img": "https://upload.wikimedia.org/wikipedia/en/7/70/Mayaanadhi_poster.jpg",
    "video": null,
    "cast": ["Tovino Thomas", "Aishwarya Lekshmi"]
  },
  {
    "id": 6,
    "title": "Lokah: Chapter 1 - Chandra",
    "year": 2025,
    "rating": "U/A",
    "category": "mollywood",
    "length": "2h 30m",
    "languages": "Malayalam",
    "description": "A Malayalam-blockbuster superhero film where a young woman discovers her powers and faces a primordial threat to her world.",
    "keywords": ["Superhero", "Fantasy", "Action"],
    "img": "https://example.com/lokah-chandra.jpg",
    "video": null,
    "cast": ["Kalyani Priyadarshan", "Dulquer Salmaan"],
    "post": "https://miro.medium.com/v2/resize:fit:910/1*sBgl0or1AI66RvzsBWnv8Q.jpeg"
  },
  {
    "id": 7,
    "title": "Aadujeevitham",
    "year": 2024,
    "rating": "U/A",
    "category": "mollywood",
    "length": "2h 15m",
    "languages": "Malayalam",
    "description": "An epic survival drama following a man cast away in exile, battling nature, hunger, and his own mind to survive.",
    "keywords": ["Survival", "Drama", "Adventure"],
    "img": "https://upload.wikimedia.org/wikipedia/en/d/d8/Aadujeevitham_poster.jpg",
    "video": null,
    "cast": ["Prithviraj Sukumaran"],
    "post": "https://static.toiimg.com/thumb/msid-108843554,width-1280,height-720,resizemode-4/108843554.jpg"
  },
  {
    "id": 8,
    "title": "Bramayugam",
    "year": 2024,
    "rating": "U/A",
    "category": "mollywood",
    "length": "2h 10m",
    "languages": "Malayalam",
    "description": "A horror thriller rooted in ancient legends, exploring greed, power, and the supernatural through an eerie black-and-white narrative.",
    "keywords": ["Horror", "Thriller", "Mythology"],
    "img": "https://upload.wikimedia.org/wikipedia/en/8/8a/Bramayugam_poster.jpg",
    "video": null,
    "cast": ["Mammootty", "Arjun Ashokan", "Sidharth Bharathan"],
    "post": "https://m.media-amazon.com/images/M/MV5BMzE5MjQ5M2UtY2FkYi00YmEwLTg5YTItYTFlOWM4YjcxODQxXkEyXkFqcGc@._V1_.jpg"
  },
  {
    "id": 9,
    "title": "King of Kotha",
    "year": 2023,
    "rating": "U/A 16+",
    "category": "mollywood",
    "length": "2h 36m",
    "languages": "Malayalam",
    "description": "A gangster drama set in the fictional town of Kotha, filled with betrayal, power struggles, and redemption.",
    "keywords": ["Action", "Drama", "Gangster"],
    "img": "https://upload.wikimedia.org/wikipedia/en/3/36/King_of_Kotha_poster.jpg",
    "video": null,
    "cast": ["Dulquer Salmaan", "Aishwarya Lekshmi"],
    "post": "https://m.media-amazon.com/images/M/MV5BZjU5ZGIyZmMtOWFjNi00OTM5LTgyZWItZjcyNTU4ZTgyNDEyXkEyXkFqcGc@._V1_.jpg"
  },
  {
    "id": 10,
    "title": "2018: Everyone is a Hero",
    "year": 2023,
    "rating": "U",
    "category": "mollywood",
    "length": "2h 31m",
    "languages": "Malayalam",
    "description": "Based on the 2018 Kerala floods, it follows ordinary people who become heroes during the disaster.",
    "keywords": ["Disaster", "Drama", "Real Event"],
    "img": "https://upload.wikimedia.org/wikipedia/en/0/0f/2018_Everyone_is_a_Hero_poster.jpg",
    "video": null,
    "cast": ["Tovino Thomas", "Kunchacko Boban", "Asif Ali"],
    "post": "https://m.media-amazon.com/images/M/MV5BMmNkYmY4M2QtYzI0My00NGE3LWJlNjctNjI0YzM2OTBkZTAxXkEyXkFqcGc@._V1_.jpg"
  },
  {
    "id": 11,
    "title": "Premalu",
    "year": 2024,
    "rating": "U",
    "category": "mollywood",
    "length": "2h 25m",
    "languages": "Malayalam, Telugu",
    "description": "A light-hearted romantic comedy set in Hyderabad, filled with laughter, confusion, and youthful romance.",
    "keywords": ["Romance", "Comedy", "Youth"],
    "img": "https://upload.wikimedia.org/wikipedia/en/7/7c/Premalu_2024_poster.jpg",
    "video": null,
    "cast": ["Naslen", "Mamitha Baiju"],
    "post": "https://m.media-amazon.com/images/M/MV5BZjE4OTJmNzEtODU2OC00OTVkLWExNDctODQ2MTNmOWZhMDhlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    "id": 12,
    "title": "Minnal Murali",
    "year": 2021,
    "rating": "U/A",
    "category": "mollywood",
    "length": "2h 38m",
    "languages": "Malayalam, Hindi, Tamil, Telugu, Kannada",
    "description": "A small-town tailor gains superpowers after being struck by lightning and must face a darker rival born from the same accident.",
    "keywords": ["Superhero", "Action", "Comedy"],
    "img": "https://upload.wikimedia.org/wikipedia/en/8/81/Minnal_Murali_film_poster.jpg",
    "video": null,
    "cast": ["Tovino Thomas", "Guru Somasundaram"],
    "post": "https://m.media-amazon.com/images/M/MV5BZWFlZTljNjEtMTFlYS00ZjY4LWJlZWItN2U5ZjY5Yzc4ZWM4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },


  // Web Series
  {
    id: 15,
    title: "The Family Man (Season 3)",    caste:"shows",
    year: 2025,
    rating: "18+",
    category: "webseries",
    length: "8 Episodes",
    languages: "Hindi",
    description:
      "Spy thriller season where the protagonist must tackle national and international threats while balancing family life.",
    keywords: ["Thriller", "Action", "Drama"],
    img: "https://example.com/family-man-s3.jpg",
    post:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBoHtbb6R3VEKIC85TwULZo9jmx7pdfU7OMA&s ",
    video: Ban,
    cast: ["Manoj Bajpayee", "Sharib Hashmi"]
  },
  {
    id: 16,
    title: "Sacred Games (New Season)", caste:"shows",
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
    post:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSSOqiE9Jge5mOx4iPQYETNX91u6pGR9M7mw&s",
    cast: ["Saif Ali Khan", "Nawazuddin Siddiqui"]
  },
  {
    id: 17,
    title: "Delhi Crime (Season 4)", caste:"shows",
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
    post:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRjzmTltKzIU3WeoTuommRlRt8PgW0Xdd5Q&s",
    cast: ["Shefali Shah", "Rajesh Tailang"]
  },
  {
  id: 10030,
  title: "Mirzapur (Season 3)", caste: "shows",
  year: 2024,
  rating: "18+",
  category: "webseries",
  length: "10 Episodes",
  languages: "Hindi",
  description:
    "The rivalry and power struggle in Purvanchal intensifies as Guddu, Golu and Kaleen Bhaiya return to claim Mirzapur.",
  keywords: ["Crime", "Gangster", "Action"],
  img: "https://i.ytimg.com/vi/3lxkGeO6p14/maxresdefault.jpg",
  post: "https://images.justwatch.com/poster/318579955/s718/season-3.jpg",
  // video: MirzapurS3,
  cast: ["Ali Fazal", "Pankaj Tripathi", "Shweta Tripathi"]
},
{
  id: 10031,
  title: "Asur (Season 3)", caste: "shows",
  year: 2025,
  rating: "18+",
  category: "webseries",
  length: "8 Episodes",
  languages: "Hindi",
  description:
    "A psychological thriller exploring mythology and technology, with a battle between righteousness and a mastermind villain.",
  keywords: ["Thriller", "Mythology", "Crime"],
  img: "https://i.ytimg.com/vi/sxwXXkFJTHM/maxresdefault.jpg",
  post: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk4B71eMt-ey7ft-0m6hz-DNWLswCL8FEMsQ&s",
  // video: AsurS3,
  cast: ["Arshad Warsi", "Barun Sobti"]
},
{
  id: 10032,
  title: "Panchayat (Season 3)", caste: "shows",
  year: 2024,
  rating: "U/A",
  category: "webseries",
  length: "8 Episodes",
  languages: "Hindi",
  description:
    "A heartwarming light comedy-drama capturing rural politics, relationships, and struggles of a village secretary.",
  keywords: ["Drama", "Comedy", "Slice of Life"],
  img: "https://i.ytimg.com/vi/2B0e4nnyz2g/maxresdefault.jpg",
  post: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReRbsbzxwNDOSHGB3ybiACfu99WxN7ETZDUg&s",
  // video: PanchayatS3,
  cast: ["Jitendra Kumar", "Raghubir Yadav", "Neena Gupta"]
},
{
  id: 10033,
  title: "Kota Factory (Season 3)", caste: "shows",
  year: 2024,
  rating: "U/A",
  category: "webseries",
  length: "5 Episodes",
  languages: "Hindi",
  description:
    "The journey of students preparing for IIT continues as they face pressure, competition, and personal growth.",
  keywords: ["Drama", "Education", "Youth"],
  img: "https://i.ytimg.com/vi/dKAc4YDnMEk/maxresdefault.jpg",
  post: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXD7sqfPsi7obllbMe6q3D4hjZ-Jl_mKiug&s",
  // video: KotaFactoryS3,
  cast: ["Jitendra Kumar", "Mayur More", "Ranjan Raj"]
},
{
  id: 10034,
  title: "Farzi (Season 2)", caste: "shows",
  year: 2025,
  rating: "18+",
  category: "webseries",
  length: "8 Episodes",
  languages: "Hindi",
  description:
    "A fast-paced crime thriller focusing on fake currency syndicates and a cat-and-mouse chase between police and a criminal mastermind.",
  keywords: ["Crime", "Thriller", "Action"],
  img: "https://i.ytimg.com/vi/RogVx8i2zL0/maxresdefault.jpg",
  post: "https://m.media-amazon.com/images/M/MV5BNDY2OWMxNzgtZGQ4Ny00ODI3LTk3MTAtYjM4N2U4ZGI3ZGY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  // video: FarziS2,
  cast: ["Shahid Kapoor", "Vijay Sethupathi"]
}
,
  {
    id: 6,
    title: "Kesari Chapter 2: The Untold Story of Jallianwala Bagh",
    year: 2025,
    caste:"popular",
    caste:"top-rated",
    rating: "8.0/10",
    category: "bollywood",
     category: "hindi",

    length: "",
    languages: "Hindi",
    description:
      "A courtroom/historical drama dealing with the aftermath of the Jallianwala Bagh massacre, starring Akshay Kumar and others. Recognised among the high popular films on IMDb in 2025. :contentReference[oaicite:12]{index=12}",
    keywords: ["History", "Drama", "Courtroom", "Justice"],
    img: "",
    post: "https://m.media-amazon.com/images/M/MV5BOTJiYTA4NDItMWNiYy00YmE3LTg4ZGItNjVlOGZlZGY4MjExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    video: null,
    cast: ["Akshay Kumar", "R. Madhavan", "Ananya Panday"]
  },{
    id: 5,
    title: "Raid 2",
    year: 2025,
    rating: "7.0/10",
    category: "bollywood",
    length: "",
    languages: "Hindi",
    description:
      "Sequel to Raid (2018), a crime drama where an IT officer (Amay Patnaik) takes on powerful businessmen involved in back-money and corruption. Among the top popular films in 2025. :contentReference[oaicite:10]{index=10}",
    keywords: ["Crime", "Drama", "Sequel", "Thriller"],
    img: "",
    post: "https://stat4.bollywoodhungama.in/wp-content/uploads/2021/12/Raid2-1.jpg",
    video: null,
    cast: ["Ajay Devgn", "Vaani Kapoor"] 
  },
{
  id: 11000,
  title: "Bhool Bhulaiyaa 3",
  year: 2024,
  caste: "popular",
  rating: "7.5/10",
  category: "hindi",
  length: "2h 28m",
  languages: "Hindi",
  description:
    "The horror-comedy returns as a new mysterious spirit challenges Rooh Baba, leading to unexpected twists and psychological tension.",
  keywords: ["Horror", "Comedy", "Mystery"],
  img: "https://i.ytimg.com/vi/L2D9BzTS1iA/maxresdefault.jpg",
  post: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyoQH1uZr2eY5XVOkJsrSKWFPiMyczYDsZcA&s",
  video: null,
  cast: ["Kartik Aaryan", "Triptii Dimri", "Madhuri Dixit"]
},
{
  id: 11001,
  title: "Pushpa 2: The Rule (Hindi Dub)",
  year: 2024,
  caste: "popular",
  rating: "8.4/10",
  category: "hindi",
  length: "2h 56m",
  languages: "Hindi",
  description:
    "Pushpa returns stronger, rising through the underworld ranks while facing new enemies and expanding his empire.",
  keywords: ["Action", "Crime", "Gangster"],
  img: "https://i.ytimg.com/vi/_9uB64ghKX8/maxresdefault.jpg",
  post: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS99rpPOmBXu-cmp8corglBryW-nKJKCBHTJQ&sg",
  video: null,
  cast: ["Allu Arjun", "Rashmika Mandanna", "Fahadh Faasil"]
},
{
  id: 11002,
  title: "Singham Again",
  year: 2025,
  caste: "top-rated",
  rating: "7.9/10",
  category: "hindi",
  length: "2h 38m",
  languages: "Hindi",
  description:
    "The cop universe expands as Singham, Simmba, and Sooryavanshi unite to bring down a massive terrorist network.",
  keywords: ["Action", "Police", "Thriller"],
  img: "https://i.ytimg.com/vi/2GEp5vU3Q0Q/maxresdefault.jpg",
  post: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb2OxHB9uh-29e93mlLosSSGBNG0uFK3aAMg&s",
  video: null,
  cast: ["Ajay Devgn", "Ranveer Singh", "Akshay Kumar", "Kareena Kapoor"]
},
{
  id: 11003,
  title: "Jawan",
  year: 2023,
  caste: "top-rated",
  rating: "8.0/10",
  category: "hindi",
  length: "2h 45m",
  languages: "Hindi",
  description:
    "An action-packed thriller starring a vigilante hero who takes on corruption and designs a high-stakes plan that changes everything.",
  keywords: ["Action", "Thriller", "Drama"],
  img: "https://i.ytimg.com/vi/2LqzF5WauAw/maxresdefault.jpg",
  post: "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYWQzODczNGYwLTRlNmQtMTFlZi1iMzFjLWM3ZTc5MGQ0OWM0MS5qcGc=",
  video: null,
  cast: ["Shah Rukh Khan", "Nayanthara", "Vijay Sethupathi"]
}
,
{
  id: 11004,
  title: "Stree 2",
  year: 2024,
  caste: "popular",
  rating: "7.3/10",
  category: "hindi",
  length: "2h 10m",
  languages: "Hindi",
  description:
    "The town of Chanderi faces a new supernatural threat as the legend of Stree returns with bigger mysteries.",
  keywords: ["Horror", "Comedy", "Mystery"],
  img: "https://i.ytimg.com/vi/B49dTbLfwhk/maxresdefault.jpg",
  post: "https://upload.wikimedia.org/wikipedia/en/a/a1/Stree_2.jpg",
  video: null,
  cast: ["Rajkummar Rao", "Shraddha Kapoor", "Pankaj Tripathi"]
}
,
  // (You can add more to fill 10 in each category similarly)

  {
    id: 101,caste:"top-rated" ,
    title: "Demon Slayer: Kimetsu no Yaiba – The Movie: Infinity Castle",
    year: 2025,
    rating: "8.7/10",  // approximate / IMDb etc  
    category: "anime / fantasy",
     category: "hindi",  category: "english",

    length: "2h 35m",  // 155 min = 2h35m :contentReference[oaicite:0]{index=0}  
    languages: "Japanese (with dubs/subs)", 
    description:
      "The Demon Slayer Corps plunge into the Infinity Castle to defeat Muzan, navigating through alternate dimensions and facing the most powerful demons. :contentReference[oaicite:1]{index=1}",
    keywords: ["Action", "Fantasy", "Anime", "Adventure"],
    img: "https://some-image-url-for-demon-slayer-poster.jpg",  // placeholder
    post: "https://m.media-amazon.com/images/M/MV5BOGQ3YWUzYjEtMTJiYy00ZjQ0LWI0YjktYjhiNGVhNGExYTM3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",  // placeholder
    video: "https://www.youtube.com/watch?v=x7uLutVRBfI",  // official trailer :contentReference[oaicite:2]{index=2}
    cast: ["Natsuki Hanae", "Akari Kitō", "Yoshitsugu Matsuoka", "Hiro Shimono"]  // main voice cast :contentReference[oaicite:3]{index=3}
  },
  {
    id: 102,
    title: "Game of Thrones",caste:"top-rated" ,
    year: 2011,
    rating: "9.3/10",  // from IMDb etc :contentReference[oaicite:4]{index=4}  
    category: "tv / fantasy",
    length: "8 Seasons (73 episodes)",  
    languages: "English",
     category: "english",

    description:
      "Nine noble families battle for control over the lands of Westeros, while the long-dormant threat of the White Walkers rises again. :contentReference[oaicite:5]{index=5}",
    keywords: ["Fantasy", "Drama", "Political", "Epic"],
    img: "https://some-image-url-gameofthrones.jpg",  // placeholder
    post: "https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",  // placeholder
    video: null,
    cast: ["Emilia Clarke", "Kit Harington", "Peter Dinklage", "Lena Headey"]  // key cast
  },
  {
    id: 103,
    title: "M.S. Dhoni: The Untold Story",caste:"top-rated" ,
    year: 2016,
    rating: "7.5/10",  // approximate / popular reviews  
    category: "bollywood / biography",
    length: "2h 48m",  // around 168 min  
    languages: "Hindi",
    description:
      "The biopic on Indian cricket legend Mahendra Singh Dhoni, tracing his journey from a small-town boy to captain of the Indian cricket team. :contentReference[oaicite:6]{index=6}",
    keywords: ["Biography", "Sports", "Drama"],
    img: "https://some-image-url-msdhoni.jpg",  // placeholder
    post: "https://m.media-amazon.com/images/M/MV5BM2UwZTNkMmItYmYzOS00MTk3LTg3NDgtNzg5ZjYxNTIzNzY4XkEyXkFqcGc@._V1_.jpg",  
    video: null,
    cast: ["Sushant Singh Rajput", "Disha Patani", "Kiara Advani", "Anupam Kher"]  // main cast :contentReference[oaicite:7]{index=7}
  },
  {
    id: 104,caste:"top-rated" ,
    title: "Lavesham",
    year: 2024,
    rating: "8.0/10",
    category: "tollywood / crime",
    length: "2h 15m",
    languages: "Telugu",
    description:
      "A crime drama where a police officer is entangled in conspiracies and family ties while trying to maintain justice in his jurisdiction.",
    keywords: ["Crime", "Drama", "Thriller"],
    img: "https://some-image-url-lavesham.jpg",
    post: "https://m.media-amazon.com/images/M/MV5BNzM3OTcyNDQtNjAwNi00YTg4LWIyNTEtNjMzY2E2MWY2MGU1XkEyXkFqcGc@._V1_.jpg  ",
    video: null,
    cast: ["Actor A", "Actor B", "Actor C"]  // placeholders
  },
  {
    id: 105,caste:"top-rated" ,
    title: "Vikram",
    year: 2022,
    rating: "8.4/10",  // approximate from reviews  
    category: "kollywood / action",
    length: "2h 55m",
    languages: "Tamil, dubbed in Hindi, Telugu",
    description:
      "An action thriller where an undercover agent is drawn into a conflict between a high-level crime syndicate and law enforcement, full of twists and moral dilemmas.",
    keywords: ["Action", "Thriller", "Crime"],
    img: "https://some-image-url-vikram.jpg",
    post: "https://m.media-amazon.com/images/M/MV5BMmViYjExY2UtMzZjOS00OGQ2LWEzNWYtNGYxY2NkY2RmMDE3XkEyXkFqcGc@._V1_.jpg",
    video: null,
    cast: ["Kamal Haasan", "Fahadh Faasil", "Vijay Sethupathi"]  // main cast
  },
   {
    id: 202,
    title: "Mirzapur",
    year: 2018,caste:"shows",
    rating: "8.5/10",
    category: "top-rated",caste:"shows",
    length: "3 Seasons",  
    languages: "Hindi",
    description:
      "A raw, violent crime saga set in the lawless town of Mirzapur, where mafia dons, politics and power intersect, and loyalties are tested at every turn.",
    keywords: ["Crime", "Action", "Thriller", "Drama"],
    img: "https://some-image-url-mirzapur.jpg",
    post: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16201106_b_v8_aa.jpg",
    video: null,
    cast: ["Pankaj Tripathi", "Ali Fazal", "Vikrant Massey", "Shweta Tripathi"]
  },
  {
    id: 203,
    title: "Scam 1992: The Harshad Mehta Story",
    year: 2020,caste:"shows",
    rating: "9.3/10",
    category: "top-rated",
    length: "1 Season",  
    languages: "Hindi",
    description:
      "Based on the real-life stock market scam in India during the 1990s. Follows Harshad Mehta’s rise and fall — how greed, ambition, and systemic loopholes shape his journey.",
    keywords: ["Drama", "Biography", "Finance", "Thriller"],
    img: "https://some-image-url-scam1992.jpg",
    post: "https://m.media-amazon.com/images/M/MV5BMTYyMzA3MTUtYmVjYi00OTIzLTgyODgtOGExZmI1YzljMzBhXkEyXkFqcGc@._V1_.jpg",
    video: null,
    cast: ["Pratik Gandhi", "Shreya Dhanwanthary", "Saurabh Shukla"]
  },
  {
    id: 204,
    title: "The Family Man",
    year: 2019,caste:"shows",
    rating: "8.7/10",
    category: "top-rated",
    length: "2 Seasons (ongoing)",  
    languages: "Hindi, some regional dubbing",
    description:
      "A middle-class man leads a double life — as a family man and a secret agent — balancing high-stakes national security threats with everyday domestic challenges.",
    keywords: ["Action", "Drama", "Spy", "Family"],
    img: "https://some-image-url-family-man.jpg",
    post: "https://media-cache.cinematerial.com/p/500x/qvbjm2sx/the-family-man-indian-movie-poster.jpg?v=1621341075",
    video: null,
    cast: ["Manoj Bajpayee", "Priyamani", "Sharib Hashmi"]
  },
  {
  id: 2001,
  title: "Ne Zha 2",
  year: 2025,
  rating: "9.4",
  category: "premium",
  caste: "premium",
  length: "1h 50m",
  languages: "Mandarin / Chinese",
  description: "A mythological hero returns in a spectacular animated adventure that became a global phenomenon.",
  keywords: ["Animation", "Fantasy", "Epic"],
  img: "",
  post: "https://m.media-amazon.com/images/M/MV5BOTdkYmE1OGEtODYyYy00N2YwLThiYjUtZGNkMWFmNjdlMzY3XkEyXkFqcGc@._V1_.jpg",
  video: null,
  cast: ["Chen Xiao", "Zhou Dongyu"]
},
{
  id: 2002,
  title: "The Batman: Part II",
  year: 2025,
  rating: "9.1",
  category: "premium",
  caste: "premium",
  length: "2h 45m",
  languages: "English",
  description: "The Dark Knight returns in Matt Reeves’ gritty, atmospheric sequel — blending noir mystery with psychological depth.",
  keywords: ["Action", "Crime", "Superhero"],
  img: "",
  post: "https://m.media-amazon.com/images/M/MV5BMTU2NzhiYWUtYThlZi00OWIyLTk3YWEtZjY3NmJjOTZiZDAyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  video: null,
  cast: ["Robert Pattinson", "Zoë Kravitz", "Barry Keoghan"]
}
,
{
  id: 2003,
  title: "A Minecraft Movie",
  year: 2025,
  rating: "9.0",
  category: "premium",
  caste: "premium",
  length: "2h 15m",
  languages: "English",
  description: "Based on the blockbuster video game, this film brought the pixel world to the big screen with massive global appeal.",
  keywords: ["Video-Game Adaptation", "Family", "Adventure"],
  img: "",
  post: "https://m.media-amazon.com/images/M/MV5BYzFjMzNjOTktNDBlNy00YWZhLWExYTctZDcxNDA4OWVhOTJjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  video: null,
  cast: ["Ryan Reynolds", "Zendaya"]
},
{
  id: 2004,
  title: "Avengers: Doomsday",
  year: 2025,
  rating: "9.1",
  category: "premium",
  caste: "premium",
  length: "2h 35m",
  languages: "English",
  description: "The next chapter of the Marvel saga unites heroes across time and dimensions to battle a cosmic threat.",
  keywords: ["Action", "Superhero", "Sci-Fi"],
  img: "",
  post: "https://m.media-amazon.com/images/M/MV5BMGNiN2RlZTMtMTkyZC00YjkwLTgyY2QtMDg1ZDNhODQwNWM4XkEyXkFqcGc@._V1_.jpg",
  video: null,
  cast: ["Robert Downey Jr.", "Benedict Cumberbatch", "Tom Holland"]
},
{
  id: 2005,
  title: "How to Train Your Dragon (2025)",
  year: 2025,
  rating: "8.8",
  category: "premium",
  caste: "premium",
  length: "2h 10m",
  languages: "English",
  description: "The beloved animated saga takes flight again, blending heart and breathtaking visuals.",
  keywords: ["Animation", "Family", "Adventure"],
  img: "",
  post: "https://upload.wikimedia.org/wikipedia/en/8/80/How_To_Train_Your_Dragon_2025_Poster.jpg",
  video: null,
  cast: ["Gerard Butler", "Mason Thames"]
},
{
  id: 2006,
  title: "Inside Out 2",
  year: 2025,
  rating: "8.9",
  category: "premium",
  caste: "premium",
  length: "1h 55m",
  languages: "English",
  description: "Pixar’s emotional sequel explores teenage feelings through stunning animation and heartfelt storytelling.",
  keywords: ["Animation", "Family", "Emotional"],
  img: "",
  post: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Inside_Out_2_poster.jpg/250px-Inside_Out_2_poster.jpg",
  video: null,
  cast: ["Amy Poehler", "Maya Hawke"]
},
{
  id: 2007,
  title: "Gladiator II",
  year: 2025,
  rating: "9.0",
  category: "premium",
  caste: "premium",
  length: "2h 30m",
  languages: "English",
  description: "Ridley Scott returns with a powerful sequel to the legendary Roman epic, redefining historical cinema for a new era.",
  keywords: ["Historical", "Action", "Drama"],
  img: "",
  post: "https://m.media-amazon.com/images/M/MV5BNmJlZGIzMjEtZWE0NS00NTAxLWIyNGItNjYzYzhjMmI3ZWVmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  video: null,
  cast: ["Paul Mescal", "Denzel Washington"]
}
,
  
  {
    id: 401,
    title: "Border 2",
    year: 2026,
    rating: "",  
    category: "upcoming", caste:"upcoming",
    length: "",  
    languages: "Hindi",
    description:
      "A sequel to the 1997 war drama *Border*, directed by Anurag Singh. Stars Sunny Deol, Varun Dhawan, Diljit Dosanjh, Ahan Shetty & others. Scheduled for Republic Day weekend. :contentReference[oaicite:0]{index=0}",
    keywords: ["War", "Drama", "Sequel", "Patriotic"],
    img: "",  
    post: "https://upload.wikimedia.org/wikipedia/en/2/26/Border_2_Poster.jpg",  
    video: null,
    cast: ["Sunny Deol", "Varun Dhawan", "Diljit Dosanjh", "Ahan Shetty", "Sonam Bajwa"] 
  },
  {
    id: 402,
    title: "Dhamaal 4",
    year: 2026,
    rating: "",
    category: "upcoming", caste:"upcoming",
    length: "",
    languages: "Hindi",
    description:
      "Fourth instalment in the *Dhamaal* comedy-adventure series. Ensemble cast returns with new additions. Scheduled to release on Eid 2026. :contentReference[oaicite:2]{index=2}",
    keywords: ["Comedy", "Adventure", "Ensemble", "Slapstick"],
    img: "",
    post: "https://m.media-amazon.com/images/M/MV5BNjhkY2ViNTYtYjc3MC00OWU3LWFhYWMtMjU5ZDhjZTNkYTc3XkEyXkFqcGc@._V1_.jpg",
    video: null,
    cast: ["Ajay Devgn", "Riteish Deshmukh", "Arshad Warsi", "Jaaved Jaaferi", "Esha Gupta", "Sanjeeda Shaikh", "Sanjay Mishra", "Ravi Kishan"] 
  },
  {
    id: 403,
    title: "Tu Meri Main Tera Main Tera Tu Meri",
    year: 2026,
    rating: "",
    category: "upcoming", caste:"upcoming",
    length: "",
    languages: "Hindi",
    description:
      "A romantic film starring Kartik Aaryan and Ananya Panday, directed by Sameer Vidwans. It is scheduled for release on Valentine’s Day, 13 February 2026. :contentReference[oaicite:4]{index=4}",
    keywords: ["Romance", "Drama", "Valentine’s", "Love Story"],
    img: "",
    post: "https://s.saregama.tech/image/c/fw_485/3/0b/34/1x1_1735198421.jpg",
    video: null,
    cast: ["Kartik Aaryan", "Ananya Panday"] 
  },
  {
    id: 404,
    title: "Bhooth Bangla",
    year: 2026,
    rating: "",
    category: "upcoming", caste:"upcoming",
    length: "",
    languages: "Hindi",
    description:
      "A comedy-horror film directed by Priyadarshan, starring Akshay Kumar, Tabu, Wamiqa Gabbi, Paresh Rawal, etc. Scheduled for theatrical release on 2 April 2026. :contentReference[oaicite:6]{index=6}",
    keywords: ["Comedy", "Horror", "Supernatural", "Folklore"],
    img: "",
    post: "https://stat4.bollywoodhungama.in/wp-content/uploads/2024/09/Bhoot-Bangla-306x393.jpg",
    video: null,
    cast: ["Akshay Kumar", "Tabu", "Wamiqa Gabbi", "Paresh Rawal", "Rajpal Yadav", "Asrani"] 
  },
 {
  id: 405,
  title: "Stree 3",
  year: 2026,
  rating: "",
  category: "upcoming",
  length: "",
  languages: "Hindi",
  description:
    "The third installment in the popular horror-comedy franchise directed by Amar Kaushik. Expected to continue the Maddock horror-comedy universe after *Stree* and *Stree 2*. Scheduled for 2026.",
  keywords: ["Horror", "Comedy", "Supernatural", "Franchise"],
  img: "",
  post: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh_r2mGhzsD85Ba1Iv1bvM4h-hC0fVbDo9vg&s",
  video: null,
  cast: ["Rajkummar Rao", "Shraddha Kapoor", "Pankaj Tripathi", "Aparshakti Khurana", "Abhishek Banerjee"]
},

  {
    id: 406,
    title: "Love & War",
    year: 2026,
    rating: "",
    category: "upcoming", caste:"upcoming",
    length: "",
    languages: "Hindi",
    description:
      "A romantic action epic from Sanjay Leela Bhansali, starring Ranbir Kapoor, Alia Bhatt and Vicky Kaushal. Scheduled for 20 March 2026. :contentReference[oaicite:10]{index=10}",
    keywords: ["Romance", "Epic", "Drama", "Action"],
    img: "",
    post: "https://m.media-amazon.com/images/M/MV5BY2IwZmI5OTEtNjlkMi00YWIxLWJkYWYtMTRiNTAzMDZjM2M0XkEyXkFqcGc@._V1_.jpg",
    video: null,
    cast: ["Ranbir Kapoor", "Alia Bhatt", "Vicky Kaushal"] 
  },
  {
    id: 407,
    title: "Jai Hanuman",
    year: 2026,
    rating: "",
    category: "upcoming",
    caste:"upcoming",
    length: "",
    languages: "Telugu (and dubbed)",
    description:
      "A mythological superhero sequel from Prasanth Varma, sequel to *Hanu-Man* (2024). Stars Rishab Shetty, Rana Daggubati, Teja Sajja, etc. Scheduled for release sometime in 2026. :contentReference[oaicite:12]{index=12}",
    keywords: ["Mythology", "Superhero", "Fantasy", "Sequel"],
    img: "",
    post: "https://m.media-amazon.com/images/M/MV5BNzliYjZhNDgtODc2Ni00NjExLWJkOTEtNjI2ZjM0NmFjMzM0XkEyXkFqcGc@._V1_.jpg",
    video: null,
    cast: ["Rishab Shetty", "Rana Daggubati", "Teja Sajja", "Amritha Aiyer", "Samuthirakani"] 
  }
,  {
    id: 501,
    title: "The Conjuring: Last Rites",
    year: 2025,
    rating: "8.3",
    category: "horror",
    caste: "Hollywood",
    length: "1h 55m",
    languages: "English",
    description:
      "The final chapter in the Conjuring Universe, where Ed and Lorraine Warren face their most dangerous demonic case yet.",
    keywords: ["Supernatural", "Possession", "Based on True Events"],
    img: "",
    post: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDC5mpBd18M-uuprtHnV8OtrYeC0jzSKhew&s",
    video: null,
    cast: ["Patrick Wilson", "Vera Farmiga", "Sterling Jerins"]
  },
  {
    id: 502,
    title: "Talk to Me",
    year: 2023,
    rating: "7.1",
    category: "horror",
    caste: "Hollywood",
    length: "1h 35m",
    languages: "English",
    description:
      "A group of friends discover how to conjure spirits using an embalmed hand, but things quickly go horrifyingly wrong.",
    keywords: ["Supernatural", "Thriller", "Psychological Horror"],
    img: "",
    post: "https://m.media-amazon.com/images/M/MV5BMzY4NDI3ZGQtOTg0NS00YzllLWI5MTctYWY4NDVlMzEyYmI5XkEyXkFqcGc@._V1_.jpg",
    video: null,
    cast: ["Sophie Wilde", "Joe Bird", "Alexandra Jensen"]
  },
  {
    id: 503,
    title: "Hereditary",
    year: 2018,
    rating: "8.1",
    category: "horror",
    caste: "Hollywood",
    length: "2h 7m",
    languages: "English",
    description:
      "After the death of the family matriarch, a grieving family is haunted by terrifying secrets and supernatural forces.",
    keywords: ["Psychological", "Family Tragedy", "Occult"],
    img: "",
    post: "https://images.plex.tv/photo?size=large-1280&url=https%3A%2F%2Fmetadata-static.plex.tv%2Fd%2Fgracenote%2Fd0d1e0f60a30c52503cf417cee32a9aa.jpg",
    video: null,
    cast: ["Toni Collette", "Alex Wolff", "Milly Shapiro"]
  },
  {
    id: 504,
    title: "It",
    year: 2017,
    rating: "7.3",
    category: "horror",
    caste: "Hollywood",
    length: "2h 15m",
    languages: "English",
    description:
      "A group of bullied kids band together to destroy a shape-shifting clown that preys on their town's children.",
    keywords: ["Supernatural", "Thriller", "Clown"],
    img: "",
    post: "https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg",
    video: null,
    cast: ["Bill Skarsgård", "Jaeden Martell", "Finn Wolfhard"]
  },
  {
    id: 505,
    title: "A Quiet Place",
    year: 2018,
    rating: "7.5",
    category: "horror",
    caste: "Hollywood",
    length: "1h 30m",
    languages: "English",
    description:
      "In a post-apocalyptic world, a family must live in silence while hiding from creatures that hunt by sound.",
    keywords: ["Thriller", "Monsters", "Survival"],
    img: "",
    post: "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_.jpg",
    video: null,
    cast: ["Emily Blunt", "John Krasinski", "Millicent Simmonds"]
  },
  {
    id: 506,
    title: "The Nun II",
    year: 2023,
    rating: "6.0",
    category: "horror",
    caste: "Hollywood",
    length: "1h 50m",
    languages: "English",
    description:
      "Sister Irene once again comes face to face with the demonic force Valak in a terrifying new chapter.",
    keywords: ["Supernatural", "Demon", "Religious Horror"],
    img: "",
    post: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/The_Nun_II_%282023%29.jpg/250px-The_Nun_II_%282023%29.jpg",
    video: null,
    cast: ["Taissa Farmiga", "Bonnie Aarons", "Jonas Bloquet"]
  },

  {
    id: 508,
    title: "Smile",
    year: 2022,
    rating: "6.6",
    category: "horror",
    caste: "Hollywood",
    length: "1h 55m",
    languages: "English",
    description:
      "After witnessing a traumatic incident, a psychiatrist begins to experience frightening occurrences she can’t explain.",
    keywords: ["Psychological", "Supernatural", "Trauma"],
    img: "",
    post: "https://play-lh.googleusercontent.com/NLd3erPoZmSi0oczSzNqq_MF0q-2sGR2PRLD9_RrgAGHjLjRWI5zbs4LrI8NGa-k0zcfQvV6B6hcii4zIRg=w240-h480-rw",
    video: null,
    cast: ["Sosie Bacon", "Kyle Gallner", "Caitlin Stasey"]
  }
, {
    id: 601,
    title: "The Notebook",
    year: 2004,
    rating: "8.0",
    category: "romance",
    caste: "Hollywood",
    length: "2h 3m",
    languages: "English",
    description:
      "A timeless love story between Noah and Allie, whose romance defies social class and the test of time.",
    keywords: ["Drama", "Love Story", "Classic Romance"],
    img: "",
    post: "https://images.moviesanywhere.com/3f8a2408122a35b5aa92727c1909db86/b0cf1ba3-0535-41e1-8713-fad6f87e245d.jpg",
    video: null,
    cast: ["Ryan Gosling", "Rachel McAdams", "James Garner"]
  },
  {
    id: 602,
    title: "La La Land",
    year: 2016,
    rating: "8.0",
    category: "romance",
    caste: "Hollywood",
    length: "2h 8m",
    languages: "English",
    description:
      "A jazz musician and an aspiring actress fall in love but struggle to balance their passion for each other with their artistic dreams.",
    keywords: ["Musical", "Drama", "Love vs Career"],
    img: "",
    post: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUMLQlHu_gPQYe_hrYq9DvpQV2Du0JTUtOEg&s",
    video: null,
    cast: ["Ryan Gosling", "Emma Stone", "John Legend"]
  },
  {
    id: 603,
    title: "Titanic",
    year: 1997,
    rating: "7.9",
    category: "romance",
    caste: "Hollywood",
    length: "3h 14m",
    languages: "English",
    description:
      "A young aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    keywords: ["Epic Romance", "Tragedy", "Historical Drama"],
    img: "",
    post: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_.jpg",
    video: null,
    cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"]
  },
  {
    id: 604,
    title: "Before Sunrise",
    year: 1995,
    rating: "8.1",
    category: "romance",
    caste: "Hollywood",
    length: "1h 41m",
    languages: "English",
    description:
      "Two strangers meet on a train and spend one magical night walking through Vienna, sharing their dreams and fears.",
    keywords: ["Drama", "Conversation", "Love Story"],
    img: "",
    post: "https://upload.wikimedia.org/wikipedia/en/d/da/Before_Sunrise_poster.jpg",
    video: null,
    cast: ["Ethan Hawke", "Julie Delpy"]
  },
  {
    id: 605,
    title: "Yeh Jawaani Hai Deewani",
    year: 2013,
    rating: "7.2",
    category: "romance",
    caste: "Bollywood",
    length: "2h 40m",
    languages: "Hindi",
    description:
      "A coming-of-age love story between Naina and Bunny, who discover love, life, and friendship during their adventures.",
    keywords: ["Travel", "Friendship", "Love"],
    img: "",
    post: "https://m.media-amazon.com/images/M/MV5BODA4MjM2ODk4OF5BMl5BanBnXkFtZTcwNDgzODk1OQ@@._V1_FMjpg_UX1000_.jpg",
    video: null,
    cast: ["Ranbir Kapoor", "Deepika Padukone", "Aditya Roy Kapur", "Kalki Koechlin"]
  },
  {
    id: 606,
    title: "Tamasha",
    year: 2015,
    rating: "7.3",
    category: "romance",
    caste: "Bollywood",
    length: "2h 19m",
    languages: "Hindi",
    description:
      "Ved and Tara’s love story unfolds as they discover their true selves while navigating love, passion, and identity.",
    keywords: ["Drama", "Self-Discovery", "Love Story"],
    img: "",
    post: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12217149_p_v8_ab.jpg",
    video: null,
    cast: ["Ranbir Kapoor", "Deepika Padukone"]
  },
  {
    id: 607,
    title: "The Fault in Our Stars",
    year: 2014,
    rating: "7.7",
    category: "romance",
    caste: "Hollywood",
    length: "2h 6m",
    languages: "English",
    description:
      "Two teenagers with cancer fall deeply in love while grappling with the fragility of life and the meaning of love.",
    keywords: ["Tragedy", "Drama", "Young Love"],
    img: "",
    post: "https://upload.wikimedia.org/wikipedia/en/4/41/The_Fault_in_Our_Stars_%28Official_Film_Poster%29.png",
    video: null,
    cast: ["Shailene Woodley", "Ansel Elgort", "Laura Dern"]
  },

,{
    id: 701,
    title: "John Wick: Chapter 4",
    year: 2023,
    rating: "8.0",
    category: "action",
    caste: "Hollywood",
    length: "2h 49m",
    languages: "English",
    description:
      "John Wick uncovers a path to defeating the High Table, but before he can earn his freedom, he must face a new enemy with powerful alliances.",
    keywords: ["Assassin", "Revenge", "Gunfights"],
    img: "",
    post: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfbYto0_QLCZWWrH8ogQ_1irvTITqfyKiDg&s",
    video: null,
    cast: ["Keanu Reeves", "Donnie Yen", "Laurence Fishburne"]
  },
  {
    id: 702,
    title: "Extraction 2",
    year: 2023,
    rating: "7.0",
    category: "action",
    caste: "Hollywood",
    length: "2h 3m",
    languages: "English",
    description:
      "After barely surviving his previous mission, Tyler Rake returns as a black-ops mercenary assigned to rescue a ruthless gangster's family.",
    keywords: ["Rescue", "Thriller", "Combat"],
    img: "",
    post: "https://upload.wikimedia.org/wikipedia/en/0/02/Extraction_2_poster.jpg",
    video: null,
    cast: ["Chris Hemsworth", "Golshifteh Farahani", "Adam Bessa"]
  },
  {
    id: 703,
    title: "Mission: Impossible – Dead Reckoning Part One",
    year: 2023,
    rating: "7.8",
    category: "action",
    caste: "Hollywood",
    length: "2h 43m",
    languages: "English",
    description:
      "Ethan Hunt and his IMF team must track down a deadly new weapon that threatens humanity before it falls into the wrong hands.",
    keywords: ["Spy", "Thriller", "Adventure"],
    img: "",
    post: "https://upload.wikimedia.org/wikipedia/en/e/ed/Mission-_Impossible_%E2%80%93_Dead_Reckoning_Part_One_poster.jpg",
    video: null,
    cast: ["Tom Cruise", "Hayley Atwell", "Ving Rhames"]
  },
  {
    id: 704,
    title: "Jawan",
    year: 2023,
    rating: "7.5",
    category: "action",
    caste: "Bollywood",
    length: "2h 49m",
    languages: "Hindi",
    description:
      "A man driven by personal revenge and social justice takes on corruption and evil forces in the system.",
    keywords: ["Thriller", "Revenge", "Patriotism"],
    img: "",
    post: "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYWQzODczNGYwLTRlNmQtMTFlZi1iMzFjLWM3ZTc5MGQ0OWM0MS5qcGc=",
    video: null,
    cast: ["Shah Rukh Khan", "Nayanthara", "Vijay Sethupathi"]
  },
  {
    id: 705,
    title: "Top Gun: Maverick",
    year: 2022,
    rating: "8.3",
    category: "action",
    caste: "Hollywood",
    length: "2h 10m",
    languages: "English",
    description:
      "After thirty years, Maverick is still pushing the limits as a top naval aviator while training a new generation of fighter pilots.",
    keywords: ["Jets", "Patriotism", "Legacy"],
    img: "",
    post: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6j5bFyToN8130-qtTHdD1vEyTN3QX_PRIUw&s",
    video: null,
    cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly"]
  },
  {
    id: 706,
    title: "Pathaan",
    year: 2023,
    rating: "6.9",
    category: "action",
    caste: "Bollywood",
    length: "2h 26m",
    languages: "Hindi",
    description:
      "An exiled RAW agent must stop a private terror group from attacking India with a deadly biological weapon.",
    keywords: ["Spy", "Thriller", "Patriotism"],
    img: "",
    post: "https://play-lh.googleusercontent.com/IOGFfbXRkbuunblFh2pdlBmXGq-h61SzeqNOf2qMWlDlN7YBEdAfQrYA18BpB6U8ciYu1S5XN5GBPBbE4y4",
    video: null,
    cast: ["Shah Rukh Khan", "Deepika Padukone", "John Abraham"]
  },








































  {
  id: 10000,
  title: "Deadpool & Wolverine",
  year: 2024,
  category: "hollywood",
  rating: "R",
  length: "2h 07m",
  languages: "English",
  description:
    "Deadpool teams up with Wolverine in a multiversal adventure filled with chaos, comedy, and fourth-wall-breaking madness.",
  keywords: ["Action", "Comedy", "Superhero", "Marvel"],
  img: "https://i.ytimg.com/vi/73_1biulkYk/maxresdefault.jpg",
  // video: DeadpoolWolverine,
  post: "https://upload.wikimedia.org/wikipedia/en/4/4c/Deadpool_%26_Wolverine_poster.jpg",
  cast: ["Ryan Reynolds", "Hugh Jackman", "Emma Corrin"]
},
{
  id: 10001,
  title: "Dune: Part Two",
  year: 2024,
  category: "hollywood",
  rating: "PG-13",
  length: "2h 46m",
  languages: "English",
  description:
    "Paul Atreides unites with Chani and the Fremen to seek vengeance against those who destroyed his family.",
  keywords: ["Sci-Fi", "Epic", "Adventure"],
  img: "https://i.ytimg.com/vi/_YUzQa_1RCE/maxresdefault.jpg",
  // video: Dune2,
  post: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq8P5uwVwfPAX9FnmiLtcFECf8l28lS9FN-g&s",
  cast: ["Timothée Chalamet", "Zendaya", "Austin Butler"]
},
{
  id: 10002,
  title: "Godzilla x Kong: The New Empire",
  year: 2024,
  category: "hollywood",
  rating: "PG-13",
  length: "1h 55m",
  languages: "English",
  description:
    "Godzilla and Kong must join forces to face a terrifying new threat that lurks within Earth.",
  keywords: ["Action", "Monster", "Fantasy"],
  img: "https://i.ytimg.com/vi/Qvdy5dJ6LkI/maxresdefault.jpg",
  // video: GodzillaKong,
  post: "https://m.media-amazon.com/images/M/MV5BMTY0N2MzODctY2ExYy00OWYxLTkyNDItMTVhZGIxZjliZjU5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  cast: ["Rebecca Hall", "Brian Tyree Henry", "Dan Stevens"]
},
{
  id: 10003,
  title: "Venom: The Last Dance",
  year: 2024,
  category: "hollywood",
  rating: "PG-13",
  length: "1h 49m",
  languages: "English",
  description:
    "Eddie Brock and Venom face their final and most personal battle yet.",
  keywords: ["Action", "Sci-Fi", "Superhero"],
  img: "https://i.ytimg.com/vi/DUWgqTnON0A/maxresdefault.jpg",
  // video: Venom3,
  post: "https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  cast: ["Tom Hardy", "Chiwetel Ejiofor", "Juno Temple"]
},
{
  id: 10004,
  title: "Inside Out 2",
  year: 2024,
  category: "hollywood",
  rating: "PG",
  length: "1h 36m",
  languages: "English",
  description:
    "Riley experiences new emotions as she enters her teenage years.",
  keywords: ["Animation", "Family", "Comedy"],
  img: "https://i.ytimg.com/vi/YwddLtVtn_c/maxresdefault.jpg",
  // video: InsideOut2,
  post: "https://lumiere-a.akamaihd.net/v1/images/p_insideout2_now_available_disneyplus_d24c051c.jpeg",
  cast: ["Amy Poehler", "Maya Hawke", "Phyllis Smith"]
},
{
  id: 10005,
  title: "Bad Boys: Ride or Die",
  year: 2024,
  category: "hollywood",
  rating: "R",
  length: "1h 55m",
  languages: "English",
  description:
    "Detectives Mike and Marcus return to uncover corruption that hits close to home.",
  keywords: ["Action", "Comedy", "Crime"],
  img: "https://i.ytimg.com/vi/Ojyz8_KMESg/maxresdefault.jpg",
  // video: BadBoys4,
  post: "https://m.media-amazon.com/images/M/MV5BZWNjZWUwNDgtYTM4ZC00Zjk0LTg3ZWItNGEyZmVkZTIxZDk0XkEyXkFqcGc@._V1_.jpg",
  cast: ["Will Smith", "Martin Lawrence"]
},
{
  id: 10006,
  title: "Kingdom of the Planet of the Apes",
  year: 2024,
  category: "hollywood",
  rating: "PG-13",
  length: "2h 25m",
  languages: "English",
  description:
    "Generations after Caesar’s reign, a new ape empire rises as humans struggle to survive.",
  keywords: ["Sci-Fi", "Action", "Drama"],
  img: "https://i.ytimg.com/vi/QGd5w2wAlpE/maxresdefault.jpg",
  // video: PlanetApes2024,
  post: "https://m.media-amazon.com/images/M/MV5BZDRlZTc3YTItOTk3Yi00NmU4LWFiOGUtNjgwMDZjNjIzNTU1XkEyXkFqcGc@._V1_.jpg",
  cast: ["Owen Teague", "Freya Allan", "Kevin Durand"]
},
{
  id: 10007,
  title: "Kung Fu Panda 4",
  year: 2024,
  category: "hollywood",
  rating: "PG",
  length: "1h 34m",
  languages: "English",
  description:
    "Po searches for his successor while facing a powerful new villain, The Chameleon.",
  keywords: ["Animation", "Comedy", "Adventure"],
  img: "https://i.ytimg.com/vi/YM3LHnhgGv8/maxresdefault.jpg",
  // video: KFP4,
  post: "https://m.media-amazon.com/images/M/MV5BMzJlNGYxYzQtOTg4MC00OTMyLTkwYzMtZDRlNTgwY2YwOWYxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  cast: ["Jack Black", "Awkwafina", "Bryan Cranston"]
},
{
  id: 10008,
  title: "The Marvels",
  year: 2023,
  category: "hollywood",
  rating: "PG-13",
  length: "1h 45m",
  languages: "English",
  description:
    "Captain Marvel, Monica Rambeau, and Ms. Marvel join forces to stop intergalactic danger.",
  keywords: ["Superhero", "Adventure", "Sci-Fi"],
  img: "https://i.ytimg.com/vi/iuk77TjvfmE/maxresdefault.jpg",
  // video: TheMarvels,
  post: "https://m.media-amazon.com/images/M/MV5BYzczOWM4MzItMWMyOS00ZDczLWIxMzctNzBmYTgzOTI1MzI3XkEyXkFqcGc@._V1_.jpg",
  cast: ["Brie Larson", "Iman Vellani", "Teyonah Parris"]
},
{
  id: 10009,
  title: "Aquaman and the Lost Kingdom",
  year: 2023,
  category: "hollywood",
  rating: "PG-13",
  length: "2h 04m",
  languages: "English",
  description:
    "Aquaman battles a deadly new threat that endangers both Atlantis and the surface world.",
  keywords: ["Superhero", "Adventure"],
  img: "https://i.ytimg.com/vi/UGc5Tzz19UY/maxresdefault.jpg",
  // video: Aquaman2,
  post: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7te5zGvg6I1flYJTaI0tPiDcfKlBq6DeTIA&s",
  cast: ["Jason Momoa", "Patrick Wilson", "Yahya Abdul-Mateen II"]
},
{
  id: 10010,
  title: "Wonka",
  year: 2023,
  category: "hollywood",
  rating: "PG",
  length: "1h 56m",
  languages: "English",
  description:
    "A young Willy Wonka dreams of opening the world’s greatest chocolate factory.",
  keywords: ["Fantasy", "Musical", "Family"],
  img: "https://i.ytimg.com/vi/otNh9bTjXWg/maxresdefault.jpg",
  // video: Wonka,
  post: "https://m.media-amazon.com/images/M/MV5BM2Y1N2ZhNjctYjVhZC00MDg2LWFhNTItMzI3ZjAwZDhjYmFiXkEyXkFqcGc@._V1_.jpg",
  cast: ["Timothée Chalamet", "Olivia Colman", "Keegan-Michael Key"]
},
{
  id: 10011,
  title: "Oppenheimer",
  year: 2023,
  category: "hollywood",
  rating: "R",
  length: "3h 00m",
  languages: "English",
  description:
    "The story of J. Robert Oppenheimer and the creation of the atomic bomb.",
  keywords: ["Drama", "History", "Biography"],
  img: "https://i.ytimg.com/vi/uYPbbksJxIg/maxresdefault.jpg",
  // video: Oppenheimer,
  post: "https://m.media-amazon.com/images/M/MV5BM2RmYmVmMzctMzc5Ny00MmNiLTgxMGUtYjk1ZDRhYjA2YTU0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  cast: ["Cillian Murphy", "Robert Downey Jr.", "Emily Blunt"]
}
];



