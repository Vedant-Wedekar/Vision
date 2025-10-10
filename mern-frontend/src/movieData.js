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
     category: "english",
    description:"Elio, a space fanatic, lands in a cosmic misadventure when he is beamed up to an interplanetary organization and mistaken for Earth’s leader.",
    keywords: ["Comedy", "Adventure", "Science Fiction", "Family"],
    img: "https://img10.hotstar.com/image/upload/f_auto,q_auto/sources/r1/cms/prod/7541/1756877597541-i",
    post:"https://i0.wp.com/pixarpost.com/wp-content/uploads/2024/11/ELIO_Teaser_2nd_Intro_1s_v4.0_A_Mech11_FS.jpg?resize=1080%2C1600&ssl=1",
    video: Ban,
    cast: ["Adrian Molina", "Yonas Kibreab", "America Ferrera"]
  }
,
  {
    post:"https://m.media-amazon.com/images/M/MV5BNWJmNTU1NDgtYzc4MC00ODU2LWFjNzYtYjFhNjRkNTQwZmQyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    id: 2,caste:"shows",
    title: "BIG BOSS",
    year: 2025,
    rating: "U/A 18+",
    category: "bollywood", 
    
    length: "1h 37m",
    languages: "4 Languages",
    description:
      "Elio, a space fanatic, lands in a cosmic misadventure when he is beamed up to an interplanetary organization and mistaken for Earth’s leader.",
    keywords: ["Comedy", "Adventure", "Science Fiction", "Family"],
    img: "https://img10.hotstar.com/image/upload/f_auto,q_auto/sources/r1/cms/prod/3084/1759042823084-i",
    video: Pan,
    cast: ["Adrian Molina", "Yonas Kibreab", "America Ferrera"]
  },

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
    img: "https://i.ytimg.com/vi/euYGJkMoPTM/maxresdefault.jpg",
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
      caste:"popular",
      length: "2h 25m",
      languages: "English",
      description:
        "Ethan Hunt faces his most dangerous mission yet, confronting shadows from his past as the final reckoning approaches.",
      keywords: ["Action", "Thriller", "Spy", "Adventure"],
      img: "https://weliveentertainment.com/wp-content/uploads/2025/05/mission-impossible-final-reckoning-banner.jpg",
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
    post:"https://m.media-amazon.com/images/M/MV5BMTk2ZmFhYjctYWZiYy00N2IxLWEzMWItZGRiMDY4ZDQwZWFlXkEyXkFqcGc@._V1_.jpg",
    id: 9,
    title: "Saiyaara",    caste:"popular",
    year: 2025,category: "hindi",
    rating: "U/A",
    category: "bollywood",
     category: "hindi",

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
    "video": null,
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
  },  {
    "post": "https://upload.wikimedia.org/wikipedia/en/3/3a/Thalavara_Film.jpg",
    "id": 1,
    "caste": "shows",
    "title": "Thalavara",
    "year": 2025,
    "rating": null,
    "category": "mollywood",
    "length": null,
    "languages": "Malayalam",
    "description": "A coming-of-age drama film starring Arjun Ashokan & Revathy Sarma, directed by Akhil Anilkumar. Released in India on 22 August 2025.", 
    "keywords": ["Drama", "Coming of Age"], 
    "img": null,
    "video": null,
    "cast": ["Arjun Ashokan", "Revathy Sarma"]
  },
  {
    "post": "https://m.media-amazon.com/images/M/MV5BOTM3ZmYyZTItYTdkOS00NzIwLWJmOGYtMmUxMDVmZjVmNjdkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "id": 2,
    "caste": "shows",
    "title": "Sarkeet",
    "year": 2025,
    "rating": null,
    "category": "mollywood",
    "length": "123 minutes",
    "languages": "Malayalam",
    "description": "Family drama film about a Malayali couple living in the UAE who struggle to raise their son diagnosed with ADHD.", 
    "keywords": ["Family", "Drama"], 
    "img": null,
    "video": null,
    "cast": ["Asif Ali", "Divya Prabha", "Deepak Parambol", "Orhan Hyder"]
  },
  {
    "post": "https://m.media-amazon.com/images/M/MV5BYTEyMjljMDUtZDdmNy00NTIyLTgxMzEtMTA2YTBmMmJmMmViXkEyXkFqcGc@._V1_.jpg  ",
    "id": 2,
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
    "id": 4,
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
    cast: ["Kalyani Priyadarshan", "Dulquer Salmaan"],
    post:"https://miro.medium.com/v2/resize:fit:910/1*sBgl0or1AI66RvzsBWnv8Q.jpeg"
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
    video: Ban,post:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRjzmTltKzIU3WeoTuommRlRt8PgW0Xdd5Q&s",
    cast: ["Shefali Shah", "Rajesh Tailang"]
  },
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

  // (You can add more to fill 10 in each category similarly)

  {
    id: 101,caste:"top-rated" ,
    title: "Demon Slayer: Kimetsu no Yaiba – The Movie: Infinity Castle",
    year: 2025,
    rating: "8.7/10",  // approximate / IMDb etc  
    category: "anime / fantasy",
     category: "hindi",

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


];
