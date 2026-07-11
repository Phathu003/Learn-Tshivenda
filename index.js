const words = [
  {
    word: "Good Morning",
    meaning: "Ndi matsheloni",
  },
  {
    word: "Have a nice day",
    meaning: "	Vha vhe na duvha lavhudi",
  },
  {
    word: "Have a nice Journey",
    meaning: "Vha vhe na lwendo lwavhuḓi",
  },
  {
    word: "I dont know",
    meaning: "A thi divhi.",
  },
  {
    word: "I understand",
    meaning: "Ndi a pfesesa.",
  },
  {
    word: "Sorry",
    meaning: "Ndi khou humbela pfarelo.",
  },
  {
    word: "I love you❤️",
    meaning: "Ndi a ni funa.",
  },
  {
    word: "Hi",
    meaning: "Ndaa (m) /Aa (f).",
  },
  {
    word: "My name is..",
    meaning: "Dzina langa ndi ...",
  },
  {
    word: "Pleased to meet you",
    meaning: "Ndo takala ro divhana.",
  },
  {
    word: "Good Afternoon☀️",
    meaning: "Ndi masiari.",
  },
  {
    word: "Have a nice day",
    meaning: "	Vha vhe na duvha lavhudi.",
  },
  {
    word: "Thank you",
    meaning: "	Ndo livhuwa.",
  },
  {
    word: "I miss you",
    meaning: "Ndo mu tuvha.",
  },
  {
    word: "Happy birthday",
    meaning: "Ḓuvha ḽa mabebo ḽavhuḓi.",
  },
  {
    word: "I'm coming",
    meaning: "Ndi khou da.",
  },
  {
    word: "Money💸",
    meaning: "Tshelede.",
  },
  {
    word: "When will I see you",
    meaning: "Ndi do ni vhona lini.",
  },
  {
    word: "I'm at home",
    meaning: "Ndi hayani.",
  },
  {
    word: "I'll be back",
    meaning: "ndi do vhuya.",
  },
  {
    word: "I'm eating",
    meaning: "ndi khou ḽa.",
  },
  {
    word: "Thank you",
    meaning: "ndo livhuwa.",
  },
  {
    word: "Come to me ",
    meaning: "idani kha nne.",
  },
  {
    word: "Help!",
    meaning: "Thuso!",
  },
  {
    word: "Next time",
    meaning: "tshifhinga tshi daho.",
  },
  {
    word: "I want to",
    meaning: "Ndi khou toda...",
  },
  {
    word: "Music 🎧",
    meaning: "muzika.",
  },
  {
    word: "See you soon",
    meaning: "Ndi ḓo ni vhona zwenezwino.",
  },
  {
    word: "I'm tired",
    meaning: "ndo neta.",
  },
  {
    word: "God bless you",
    meaning: "Mudzimu a ni fhaṱutshedze.",
  },
  {
    word: "See you tomorrow",
    meaning: "Ndi ḓo ni vhona matshelo.",
  },
  {
    word: "Call me back",
    meaning: "Ni nfounele murahu.",
  },
  {
    word: "Respect",
    meaning: "Ṱhonifho.",
  },
  {
    word: "Shoes 👟",
    meaning: "Zwienda.",
  },
  {
    word: "Clothes 👕",
    meaning: "Zwiambaro.",
  },
  {
    word: "I will call you",
    meaning: "Ndi do ni founela.",
  },
  {
    word: "Call me back",
    meaning: "ni foune murahu.",
  },
  {
    word: "parents",
    meaning: "vhabebi.",
  },
  {
    word: "Children",
    meaning: "Vhana.",
  },
  {
    word: "Friends",
    meaning: "Dzikhonani.",
  },
  {
    word: "I'm going to school",
    meaning: "Ndi khou ya tshikoloni.",
  },
  {
    word: "I'm going to work",
    meaning: "Ndi khou ya mushumoni.",
  },
  {
    word: "Where is my phone?",
    meaning: "Founu yanga i gai ?",
  },
  {
    word: "I love cats 🐈",
    meaning: "Ndi funa zwimange.",
  },
  {
    word: "Can you cook?",
    meaning: "Ni a kona u bika?",
  },
  {
    word: "I'm stil busy",
    meaning: "Ndi kha di vha busy.",
  },
  {
    word: "I will be late.",
    meaning: "Ndi do lenga ..",
  },
  {
    word: "I just woke up",
    meaning: "Ndi khou fhedza u vuwa.",
  },
  {
    word: "I'm hungry",
    meaning: "Ndi na ndala.",
  },
  {
    word: "Picnic",
    meaning: "Pikiniki.",
  },
  {
    word: "Grandparents",
    meaning: "Makhulu.",
  },
  {
    word: "Grandchild",
    meaning: "Muduhulu.",
  },
  {
    word: "I'm sick",
    meaning: "Ndi khou lwala.",
  },
  {
    word: "I'm not availabe",
    meaning: "A thi khou wanala.",
  },
  {
    word: "Funeral",
    meaning: "mbulungo.",
  },
  {
    word: "Food 🍕",
    meaning: "Zwiḽiwa.",
  },
];

const btnGen = document.getElementById("btn-generate");
const btnReset = document.getElementById("btn-reset");
const wordGen = document.getElementById("word");
const meaningGen = document.getElementById("meaning");

let lastIndex = -1;
function getRandomWord() {
  let randomIndex = Math.floor(Math.random() * words.length);
  while (randomIndex === lastIndex) {
    randomIndex = Math.floor(Math.random() * words.length);
  }
  const randomWord = words[randomIndex];
  lastIndex = randomIndex;
  return randomWord;
}

function displayWord() {
  const result = getRandomWord();
  wordGen.textContent = result.word;
  meaningGen.textContent = result.meaning;
}
function resetText() {
  wordGen.textContent = "Hi, there!";
  meaningGen.textContent =
    "Press the 'Generate' button to learn new TshiVenda word/sentence";
}

btnReset.addEventListener("click", resetText);
btnGen.addEventListener("click", displayWord);
