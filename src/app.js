import * as ponlo from "./images/PONLO.png";
import * as milan from "./images/MILAN.png";
import * as quinn from "./images/NEW_QUINN.png";
import * as yawar from "./images/NEW_YAWAR.png";
import * as khezu from "./images/NEW_KHEZU.png";
import * as kbbq from "./images/KBBQ.png";

const cardHolder = document.querySelector("#cardHolder");

const players = [
  {
    inGameName: "Khezu",
    realName: "Maurice Guttmann",
    playerRole: "Offlane/Pos 3/Captain",
    memberPic: khezu.default,
    details: `“Shoutout to all the 4's and 5's that are chill”`,
    twitter: "KheZu",
  },
  {
    inGameName: "PONLO",
    realName: "Remus Goh",
    playerRole: "Support/Pos 5",
    memberPic: ponlo.default,
    details: `A newly minted member of the 10K MMR club. Congrats Ponlo.`,
    twitter: "ponlodota",
  },
  {
    inGameName: "MILAN",
    realName: "Milan Kozomara",
    playerRole: "Support/Pos 4",
    memberPic: milan.default,
    details: `Actual “OG,” Milan is the first Bosnian player to ever play a TI.`,
    twitter: "milandota2",
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
