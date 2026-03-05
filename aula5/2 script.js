const description = [
"Shelly é a brawler inicial do jogo, usa uma espingarda que causa alto dano de perto e seu Super destrói obstáculos.",
  "Nita controla o campo com ondas de choque e pode invocar um urso para atacar inimigos.",
  "Colt dispara várias balas em linha reta, causando grande dano à distância com alta precisão.",
  "Bull é um tanque resistente que causa muito dano de perto e avança com tudo usando seu Super.",
  "Brock ataca com foguetes de longo alcance e pode lançar uma chuva de explosões com seu Super.",
  "El Primo é um lutador corpo a corpo com muita vida e um Super de salto que causa dano em área.",
  "Jessie dispara projéteis que ricocheteiam entre inimigos e pode posicionar uma torre automática.",
  "Tick controla território com minas explosivas e envia sua cabeça explosiva como Super.",
  "8-Bit é um personagem de longo alcance que dispara lasers e pode aumentar o dano dos aliados com sua torre.",
  "squeak dispara gosmas que grudam em seus oponentes e atravesa paredes e causa grande dano em área.",
];

const heading = [
  "Shelly",
  "Nita",
  "Colt",
  "Bull",
  "Brock",
  "El Primo",
  "Jessie",
   "Tick",
  "8-Bit",
  "squeak",
];


const imgCard = document.getElementsByClassName('img-card')
const titulo = document.getElementsByClassName('titulo')
const info = document.getElementsByClassName('info')


for(let i = 0; i < 10; i++){
    imgCard[i].setAttribute("scr", imgScr[i])
    titulo[i].textContent = headings[i]
    info[i].textContent = dataInfo[i]
}