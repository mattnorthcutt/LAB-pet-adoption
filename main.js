const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "Cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "Dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgCBGDf54CQni-AGs0DYLbat2eS5HxLc0xxA&s",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "Dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "Dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "Cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "Dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "Cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "Dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnJB117sGV3eQ7t1h5B_c2NfHL3dig211RyQ&s"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "Cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "Cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "Dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwicTwkiZnh3eeIflQY3pHgNWICDa792IZdw&s"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "Dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "Dog",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOpLlIuQZDQmhNmqirJ2J1Ugl_O3FSjo_2VQ&s"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "Cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "Cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwiU9DObCb9n4v5ODjIxsBLw69kBW40Et4AA&s"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "Dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp7HgLEHlirpK0q2OOppuqp37owQ0-aGcOyA&s"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "Cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBbVyjuJ8dhQAn2LmcaR-gc1Akks2PKRZmYQ&s"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "Dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPj7V5i8tI6PAAjIfMHYJrfgKHb8bP1UQoXA&s"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "Dog",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyKy81JlC40w204v4xwaHHAyGW8xGA32fdUw&s"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "Cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8H4U-lzBJQ6-1W0FFDTFoNm_WcOHCca4amw&s"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "Dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSahfyCxtJBI813RHrzgfrMlyPlvyQKiZiG2Q&s"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "Cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmySjT-PvAr596jBYwJ6IUkShp-CDif8sTrg&s"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "Dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "Dog",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-pIY5QoP24E7rFo0rClw_zvU2i1yHqcHwag&s"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "Cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyYdrM01qTqIRI3MEvVVausUdc_PUsceKt9A&s"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "Dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "Dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "Cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "Cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "Dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXk33yTuWvMk59IQIm6SRrnQk3fzEZbpvPcQ&s"
    }
  ]

  const toDom = (divId, toRender) => {
    const selDiv = document.querySelector(divId)
    selDiv.innerHTML = toRender
  }
  
const petsDom = (pets) => {
  let domString = ""
  for (const pet of pets) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body m-0 p-0">
      <h5 class="card-title m-0 p-1">${pet.name}</h5>
      <img src=${pet.imageUrl} class="card-img-top p-4" alt=${pet.name}>
      <div class="text-container">
      <p class="card-text1 m-0 p-1">${pet.color}</p>
      <p class="card-text m-0 p-1">${pet.specialSkill}</p>
      <p class="card-text2 m-0 p-1">${pet.type}</p>
      <button class="btn btn-danger mt-auto text-center" id="delete--${pet.id}">Delete</button>
      </div>
    </div>
  </div>
`}
  toDom("#app", domString)
  }

const filter = (pets, typeString) => {
  const typeArray = []

  for (const pet of pets) {
    if (pet.type === typeString) {
      typeArray.push(pet)
    }
  }

  return typeArray
}
//CREATE
const form = document.querySelector("form")

  const createPet = (e) => {
    e.preventDefault();

    const newPet ={
      id: pets.length + 1,
      name: document.querySelector("#name").value,
      color: document.querySelector("#color").value,
      specialSkill: document.querySelector("#specialSkill").value,
      type: document.querySelector("#type").value,
      imageUrl: document.querySelector("#imageUrl").value
    }

    pets.push(newPet);
    petsDom(pets);
    form.reset();
  }

  form.addEventListener("submit", createPet);

//DELETE
  const app = document.querySelector("#app");

  app.addEventListener("click", (e) => {

    if (e.target.id.includes("delete")) {
      const[, id] = e.target.id.split("--");

      const index = pets.findIndex((e) => e.id === Number(id));

      pets.splice(index, 1);

      petsDom(pets)
    }
  });







const allCatButton = document.querySelector("#cat-btn")
const allDogButton = document.querySelector("#dog-btn")
const allDinoButton = document.querySelector("#dino-btn")
const allTypesButton = document.querySelector("#all-pets-btn")

allCatButton.addEventListener("click", () => {
  const catTypes = filter(pets, "Cat")
  petsDom(catTypes)
})

allDogButton.addEventListener("click", () => {
  const dogTypes = filter(pets, "Dog")
  petsDom(dogTypes)
})

allDinoButton.addEventListener("click" , () => {
  const dinoTypes = filter(pets, "Dino")
  petsDom(dinoTypes)
})

allTypesButton.addEventListener("click", () => {
  petsDom(pets)
})

const startApp = () => {
  petsDom(pets);
}

startApp();
