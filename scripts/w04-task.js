/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Ty Saltzgiver",

    photo: "images/myPicture.jpeg",

    favoriteFoods: [
        'Pizza',
        'Chicken',
        'Rice',
        'Chocolate',
        'CupBop'
    ],

    hobbies: [
        'Reading',
        'Sports',
        'Parkour',
        'Girls'
    ],

    placesLived: []
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
      place: 'Kenai, AK',
      length: '4 years'
    },
    {
        place: 'Utah Vally',
        length: '11 years'
    },
    {
        place: 'Rexburg, ID',
        length: '2.5 years'
    },
    {
        place: 'Kent, WA',
        length: '2 years'
    },
    {
        place: 'Virgina Beach, VA',
        length: '2 years'
    },
    {
        place: 'Stevensville, MT',
        length: '1.5 years'
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

/* Favorite Foods List*/
const favoriteFoods = [
    'Pizza',
    'Chicken',
    'Rice',
    'Chocolate',
    'CupBop'
];
const fFood = document.getElementById("favorite-foods");

for (let i = 0; i < favoriteFoods.length; i++) {
  const li = document.createElement("li");
  li.textContent = favoriteFoods[i];
  fFood.appendChild(li);
}

/* Hobbies List */
const hobbies = [
    'Reading',
    'Sports',
    'Parkour',
    'Girls'
];
const ul = document.getElementById("hobbies");

for (let i = 0; i < hobbies.length; i++) {
  const li = document.createElement("li");
  li.textContent = hobbies[i];
  ul.appendChild(li);
}

/* Places Lived DataList */
const placesLived = [
    {
        place: 'Kenai, AK',
        length: '6 years'
      },
      {
          place: 'Utah Vally',
          length: '13 years'
      },
      {
          place: 'Rexburg, ID',
          length: '3 years'
      },
  ];
  const dl = document.getElementById("places-lived");
  
  for (let i = 0; i < placesLived.length; i++) {
    const dt = document.createElement("dt");
    dt.textContent = placesLived[i].place;
    const dd = document.createElement("dd");
    dd.textContent = placesLived[i].length;
    dl.appendChild(dt);
    dl.appendChild(dd);
  }

