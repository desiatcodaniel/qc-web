import * as fata from "./images/FATA.png";
import * as mss from "./images/MSS.png";
import * as quinn from "./images/NEW_QUINN.png";
import * as yawar from "./images/NEW_YAWAR.png";
import * as leslao from "./images/LESLAO.png";
import * as kbbq from "./images/KBBQ.png";

const cardHolder = document.querySelector("#cardHolder");

const players = [
  {
    inGameName: "FATA",
    realName: "Adrian Trinks",
    playerRole: "Support/Pos 5/Captain",
    memberPic: fata.default,
    details: `"Actually GODLIKE - he is the all time leader in professional wins (32) as Zeus"`,
    twitter: "DotaFata",
  },
  {
    inGameName: "MSS",
    realName: "Arif Anwar",
    playerRole: "Support/Pos 4",
    memberPic: mss.default,
    details: `“Dota. Gym. Anime. Repeat.”`,
    twitter: "MSSDota",
  },
  {
    inGameName: "LESLAO",
    realName: "Rodrigo Santos",
    playerRole: "Offlaner/Pos 3",
    memberPic: leslao.default,
    details: `"Duo language speaker (portugese, english) and BASED guitarist."`,
    twitter: "lelisdota",
  },
  {
    inGameName: "QUINN",
    realName: "Quinn Callahan",
    playerRole: "Midlane/Pos 2",
    memberPic: quinn.default,
    details: `“Quinn always gets the rune because Quinn checks one and CCNC checks the other.”`,
    twitter: "ccncdota2",
  },
  {
    inGameName: "YAWAR",
    realName: "Yawar Hassan",
    playerRole: "Safelane Carry/Pos 1",
    memberPic: yawar.default,
    details: `“@OG @SumaaaaiL is YawaR's brother, not the other way around.”`,
    twitter: `YawaR_YS`,
  },

  {
    inGameName: "KBBQ",
    realName: "Jack Chen",
    playerRole: "Manager",
    memberPic: kbbq.default,
    details: `“Hands down, the heart of the team, except when he picks veno.”`,
    twitter: "KBBQDotA",
  },
];
const cardBaseConstractor = players.map((plr, index) => {
  // if (index < 2 || index > 4) {
  //   return `
  //   <div class="col-lg-6 col-12 d-flex align-items-center justify-content-center">
  //   <div class="cards">
  //   <div class="cardFront" id="${plr.inGameName}">
  //       <img src="${plr.memberPic}" alt="" class="playerImg img-fluid">
  //   </div>
  // </div>`;
  // } else {
  return `<div class="col-12 col-md-4 d-flex align-items-center justify-content-center">
    <div class="cards">
    <div class="cardFront" id="${plr.inGameName}">
        <img src="${plr.memberPic}" alt="" class="playerImg img-fluid">
    </div>
  </div>`;
  // }
});
cardBaseConstractor.forEach((card) => (cardHolder.innerHTML += card));

//-------------------------------------------------------------

const cardBase = document.querySelectorAll(".cards");
const inGameNameModal1 = document.querySelector("#inGameNameModal");
const realNameModal1 = document.querySelector("#realNameModal");
const playerRoleModal1 = document.querySelector("#playerRoleModal");
const playerImgModal1 = document.querySelector("#playerImgModal");
const details = document.querySelector("#details");
const twitter = document.querySelector("#twitter");
function generateModal(itemData) {
  modalCont.classList.add("show");
  inGameNameModal1.textContent = itemData.inGameName;
  realNameModal1.textContent = itemData.realName;
  playerRoleModal1.textContent = itemData.playerRole;
  playerImgModal1.src = itemData.memberPic;
  details.innerHTML = itemData.details;
  twitter.href = `https://twitter.com/${itemData.twitter}`;
  twitter.innerHTML = `<i class="fa fa-twitter fa-2x text-primary"><span class="text-white h4 twitter-font">@${itemData.twitter}</span>`;
}
cardBase.forEach((card, index) => {
  console.log(card);
  card.addEventListener("click", () => generateModal(players[index]));
});

modalCont.addEventListener("click", () => {
  modalCont.classList.remove("show");
});
