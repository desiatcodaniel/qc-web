const cardHolder = document.querySelector("#cardHolder");

const players = [
  {
    inGameName: "SVG",
    realName: "Avery Silverman",
    playerRole: "Support/Pos 5/Captain",
    memberPic: "./src/images/NEW_LOA.png",
    details: `“Want a lesson on mental fortitude and some ways to improve the DPC? Listen to THE Captain:
    <a href="https://t.co/nBlmJw1S0G" target="_blank">https://t.co/nBlmJw1S0G</a>”`,
    twitter: "SVGDota",
  },
  {
    inGameName: "MSS",
    realName: "Arif Anwar",
    playerRole: "Support/Pos 4",
    memberPic: "./src/images/NEW_MSS.png",
    details: `“Dota. Gym. Anime. Repeat.”`,
    twitter: "MSSDota",
  },
  {
    inGameName: "QUINN",
    realName: "Quinn Callahan",
    playerRole: "Midlane/Pos 2",
    memberPic: "./src/images/NEW_QUINN.png",
    details: `“Quinn always gets the rune because Quinn checks one and CCNC checks the other.”`,
    twitter: "ccncdota2",
  },
  {
    inGameName: "LESLAO",
    realName: "Rodrigo Santos",
    playerRole: "Offlaner/Pos 3",
    memberPic: "./src/images/NEW_LELIS.png",
    details: `"Duo language speaker (portugese, english) and BASED guitarist."`,
    twitter: "lelisdota",
  },
  {
    inGameName: "YAWAR",
    realName: "Yawar Hassan",
    playerRole: "Safelane Carry/Pos 1",
    memberPic: "./src/images/NEW_YAWAR.png",
    details: `“@OG @SumaaaaiL is YawaR's brother, not the other way around.”`,
    twitter: `YawaR_YS`,
  },
  {
    inGameName: "Khezu",
    realName: "Khezu",
    playerRole: "Coach",
    memberPic: "./src/images/NEW_KHEZU.png",
    details: `“Shoutout to all the 4's and 5's that are chill”`,
    twitter: "KheZu",
  },
  {
    inGameName: "KBBQ",
    realName: "Jack Chen",
    playerRole: "Manager",
    memberPic: "./src/images/KBBQ.png",
    details: `“Hands down, the heart of the team, except when he picks veno.”`,
    twitter: "KBBQDotA",
  },
];
const cardBaseConstractor = players.map((plr, index) => {
  if (index < 2 || index > 4) {
    return `
    <div class="col-lg-6 col-12  d-md-flex align-items-center justify-content-center">
    <div class="cards">
    <div class="cardFront m-md-0" id="${plr.inGameName}">
        <img src="${plr.memberPic}" alt="" class="playerImg">
    </div>
  </div>`;
  } else {
    return `<div class="col-12 col-lg-3 d-md-flex align-items-center justify-content-center">
    <div class="cards">
    <div class="cardFront" id="${plr.inGameName}">
        <img src="${plr.memberPic}" alt="" class="playerImg">
    </div>
  </div>`;
  }
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
  twitter.src = `https://twitter.com/${itemData.twitter}`;
  twitter.innerHTML = `<i class="fa fa-twitter fa-2x text-primary"><span class="text-white h4 twitter-font">@${itemData.twitter}</span>`;
}
cardBase.forEach((card, index) => {
  console.log(card);
  card.addEventListener("click", () => generateModal(players[index]));
});

modalCont.addEventListener("click", () => {
  modalCont.classList.remove("show");
});
