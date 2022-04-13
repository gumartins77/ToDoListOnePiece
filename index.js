const express = require('express');
const cors = require('cors');

const port = 3002;

const app = express();
app.use(express.json());
app.use(cors());

const mugiwaras = [
  {
    id: 1,
    name: 'Monkey D. Luffy',
    nickname: 'Chapéu de Palha',
    profession: 'Capitão',
    origin: 'East Blue',
    age: 19,
    reward: 1500000000,
    habilit: 'Gomo Gomo no Mi',
    description:
      'Monkey D. Luffy, também conhecido como Luffy Chapéu de Palha ou Chapéu de Palha, é um pirata e o protagonista do anime e mangá One Piece. Ele é o fundador e o capitão do cada vez mais infame e poderoso Piratas do Chapéu de Palha, bem como um de seus principais lutadores. Seu sonho de vida é se tornar o Rei dos Piratas, encontrando o lendário tesouro deixado pelo falecido Rei dos Piratas, Gol D. Roger. Ele acredita que ser o Rei dos Piratas significa ter a maior liberdade do mundo.',
    image:
      'https://static.wikia.nocookie.net/onepiece/images/6/6d/Monkey_D._Luffy_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/239?cb=20190303115209&path-prefix=pt',
  },
  {
    id: 2,
    name: 'Roronoa Zoro',
    nickname: 'Caçador de Piratas',
    profession: 'Espadachim',
    origin: 'East Blue',
    age: 21,
    reward: 320000000,
    habilit: 'Santoryu',
    description:
      'Roronoa Zoro, também conhecido como Caçador de Piratas, é o combatente dos Piratas do Chapéu de Palha e um ex-caçador de recompensas. Ele foi o primeiro membro a juntar-se à tripulação. Ele é um dos quatro melhores lutadores da tripulação, ao lado de Luffy, Sanji e Jinbe, e seu sonho é se tornar o maior espadachim do mundo. Zoro também é considerado como um dos doze piratas que são referidos como A Pior Geração.',
    image:
      'https://static.wikia.nocookie.net/onepiece/images/5/52/Roronoa_Zoro_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/188?cb=20181209230036&path-prefix=pt',
  },
  {
    id: 3,
    name: 'Nami',
    nickname: 'Gata Ladra',
    profession: 'Navegadora',
    origin: 'East Blue',
    age: 20,
    reward: 66000000,
    habilit: 'Controladora do Clima',
    description:
      'A Gata Ladra Nami é a navegadora dos Piratas do Chapéu de Palha. Ela foi o terceiro membro da tripulação e a segunda a entrar. Ela é a irmã adotiva de Nojiko, desde que as duas ficaram órfãs e foram levadas por Bell-mère. Ela era anteriormente membro dos Piratas do Arlong e juntou-se inicialmente aos Chapéus de Palha com a intenção de roubá-los, mas se tornou de fato um dos Chapéus de Palha depois que eles se rebelaram e derrotaram Arlong. Seu sonho é fazer um mapa do mundo inteiro.',
    image:
      'https://static.wikia.nocookie.net/onepiece/images/6/68/Nami_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/298?cb=20191226141741&path-prefix=pt',
  },
  {
    id: 4,
    name: 'Usopp',
    nickname: 'Sogeking',
    profession: 'Atirador',
    origin: 'East Blue',
    age: 19,
    reward: 200000000,
    habilit: 'Kabuto Kuro',
    description:
      'God Usopp é o Atirador dos Piratas do Chapéu de Palha. Ele é o quarto membro da tripulação e o terceiro a entrar, fazendo isso no final do Arco Vila Syrup. Usopp é o filho de Yasopp e Banchina. Ele nasceu e foi criado na Vila Syrup, e era o capitão dos Piratas Usopp e o amigo mais próximo de Kaya. Após colaborar com os Chapéus de Palha para derrotar Kuro e os Piratas do Gato Preto, ele foi convidado a se juntar à tripulação. Apesar de sua covardia normal, Usopp sonha em se tornar um corajoso guerreiro do mar como seu pai, e vive todos os dias em busca de viver à altura deste sonho.',
    image:
      'https://static.wikia.nocookie.net/onepiece/images/3/35/Usopp_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/260?cb=20150911145251&path-prefix=pt',
  },
  {
    id: 5,
    name: 'Vinsmoke Sanji',
    nickname: 'Perna Negra',
    profession: 'Cozinheiro',
    origin: 'North Blue',
    age: 21,
    reward: 330000000,
    habilit: 'Diable Jambe',
    description:
      'Perna Negra Sanji, nascido como Vinsmoke Sanji, e também é o cozinheiro dos Piratas do Chapéu de Palha, assim como um antigo chefe de cozinha do Baratie. Ele é oficialmente o quinto membro da tripulação e o quarto a se juntar, fazendo isso no final do Arco Baratie. Ele é um dos quatro melhores lutadores da tripulação, ao lado de Luffy, Zoro e Jinbe. Seu sonho é encontrar o paraíso dos chefes, All Blue, sendo esse o lugar onde o East Blue, o West Blue, o North Blue e o South Blue se encontram, juntamente com sua vida selvagem.',
    image:
      'https://static.wikia.nocookie.net/onepiece/images/b/b6/Sanji_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/167?cb=20190110152811&path-prefix=pt',
  },
  {
    id: 6,
    name: 'Tony Tony Chopper',
    nickname: 'Amante de Algodão Doce',
    profession: 'Médico',
    origin: 'Ilha de Drum (Grand Line)',
    age: 17,
    reward: 100,
    habilit: 'Hito Hito no Mi',
    description:
      'Tony Tony Chopper é uma rena. Ele é o médico da tripulação dos Piratas do Chapéu de Palha. Chopper é uma rena que, após comer a Hito Hito no Mi, adquiriu a habilidade de se transformar e raciocinar como os humanos. Ele é o sexto membro e um dos poucos membros da tripulação que nasceu na Grand Line, numa ilha chamada Drum. Por ter sido confundido como mascote, a recompensa atual de sua captura é de apenas 100 Belly. Seu sonho é se tornar um médico que cura todos os males e que pode tratar qualquer doença.',
    image:
      'https://static.wikia.nocookie.net/onepiece/images/b/b6/Sanji_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/167?cb=20190110152811&path-prefix=pt',
  },
  {
    id: 7,
    name: 'Nico Robin',
    nickname: 'Criança Demoniaca',
    profession: 'Arqueóloga',
    origin: 'West Blue',
    age: 30,
    reward: 130000000,
    habilit: 'Hana Hana no Mi',
    description:
      'Nico Robin, também conhecida como "Criança Demônio", é a arqueóloga dos Piratas do Chapéu de Palha. Ela é a única sobrevivente da ilha destruída de Ohara, localizada no West Blue. Como resultado, ela é atualmente a única pessoa no mundo com a capacidade de ler e decifrar Poneglyphs. Ela foi introduzida pela primeira vez como o vice-presidente da Baroque Works e antagonista secundária da Saga Alabasta, conhecida como Miss All Sunday, antes de se juntar aos Chapéus de Palha. Ela é a sétima integrante da tripulação, a sexta a se unir. Ela comeu a Hana Hana no Mi. Seu sonho é encontrar o Rio Poneglyph, que conta a verdadeira história. ',
    image:
      'https://static.wikia.nocookie.net/onepiece/images/b/bc/Nico_Robin_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/257?cb=20190301011950&path-prefix=pt',
  },
  {
    id: 8,
    name: 'Franky',
    nickname: 'Cyborg',
    profession: 'Carpinteiro',
    origin: 'South Blue',
    age: 36,
    reward: 94000000,
    habilit: 'Corpo-Cyborg Reforçado',
    description:
      'Franky é o carpinteiro dos Piratas do Chapéu de Palha. Ele é um cyborg de 36 anos de Water 7 e foi introduzido na história como o líder da Família Franky, um grupo de desmantelamento de navios. Ele foi originalmente chamado de Cutty Flam até trocar seu nome original por seu apelido a pedidos de Iceburg para esconder sua identidade. Franky e seus seguidores foram inicialmente introduzidos como antagonistas do Arco Water 7 contra os Chapéus de Palha até as circunstâncias forçá-los a se tornarem aliados. Franky foi permitido se juntar aos Chapéu de Palha para realizar seu sonho de criar e dirigir um navio capaz de dar a volta ao mundo, o Thousand Sunny. Ele é o oitavo membro da tripulação dos Chapéus de Palha e o sétimo a se juntar ao bando de Luffy.',
    image:
      'https://static.wikia.nocookie.net/onepiece/images/8/8c/Franky_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/270?cb=20190108221617&path-prefix=pt',
  },
  {
    id: 9,
    name: 'Brook',
    nickname: 'Soul-King',
    profession: 'Músico',
    origin: 'West Blue',
    age: 90,
    reward: 83000000,
    habilit: 'Yomi Yomi no Mi',
    description:
      'Brook é o Músico dos Piratas do Chapéu de Palha. Ele é um esqueleto que os Chapéus de Palha encontraram a bordo de um navio fantasma depois de entrarem no Triângulo Florian. Ele é um usuário de Akuma no Mi que comeu a Yomi Yomi no Mi, o que o torna um pseudo-imortal por causa de seus poderes. Ele é o nono membro do Bando do Chapéu de Palha, e o oitavo a se juntar à tripulação de Luffy. Ele é também um dos dois Espadachins a bordo de seu atual navio, o outro sendo Zoro. Ele preenche o cargo do tão esperado músico que Luffy queria para sua tripulação desde que sua jornada começou.',
    image:
      'https://static.wikia.nocookie.net/onepiece/images/4/41/Brook_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/214?cb=20190115145845&path-prefix=pt',
  },
  {
    id: 10,
    name: 'Jinbe',
    nickname: 'Cavaleiro do Ma',
    profession: 'Timoneiro',
    origin: 'Ilha dos Homens Peixe',
    age: 46,
    reward: 438000000,
    habilit: 'Karatê Homem-Peixe',
    description:
      'Cavaleiro do Mar Jinbe é o timoneiro dos Piratas do Chapéu de Palha. Ele é o décimo membro da tripulação e o nono a se juntar, fazendo isso durante o Arco País de Wano. Jinbe é um homem-peixe sendo um tubarão-baleia e um poderoso mestre do karatê Homem-Peixe. Ele era um membro dos Piratas do Sol, e eventualmente se tornou um dos Shichibukai, embora tenha renunciado durante a Batalha de Marineford Seu sonho é realizar o desejo moribundo de seu ex-capitão Fisher Tiger de coexistência e igualdade entre humanos e homens-peixe.',
    image:
      'https://static.wikia.nocookie.net/onepiece/images/8/81/Jinbe_Anime_Infobox.png/revision/latest/scale-to-width-down/270?cb=20200920140002&path-prefix=pt',
  },
];

app.get('/mugiwaras/find-mugiwaras', (req, res) => {
  res.send(mugiwaras);
});

app.get('/mugiwaras/find-mugiwara/:id', (req, res) => {
  res.send(mugiwaras.find((mugiwara) => mugiwara.id === Number(req.params.id)));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
