import { Content } from 'types';

const CONTENTS: Array<Content> = [
  {
    word: 'a',
    phrase: 'Buy me a bag',
    translation: 'uma/um'
  },
  {
    word: 'ability',
    phrase: `I can only applaud this man's ability to deduce`,
    translation: 'habilidade'
  },
  {
    word: 'able',
    phrase: 'Able to participate in the conversation',
    translation: 'capaz'
  },
  {
    word: 'about',
    phrase: 'The book is about a sea voyage',
    translation: 'sobre'
  },
  {
    word: 'above',
    phrase: 'I trust him above everyone else',
    translation: 'acima'
  },
  {
    word: 'accept',
    phrase: 'Did he accept the money?',
    translation: 'aceitar'
  },
  {
    word: 'according',
    phrase: 'Cook the rice according to the instructions',
    translation: 'de acordo com'
  },
  {
    word: 'account',
    phrase: 'I asked him to put it on my account',
    translation: 'conta'
  },
  {
    word: 'across',
    phrase: 'Children, across all ages, like it',
    translation: 'entre'
  },
  {
    word: 'act',
    phrase: 'A criminal act',
    translation: 'ato'
  },
  {
    word: 'action',
    phrase: 'People in the media want to be where the action is',
    translation: 'ação'
  },
  {
    word: 'activity',
    phrase: 'There was a lot of activity',
    translation: 'atividade'
  },
  {
    word: 'actually',
    phrase: `Actually that's what she said`,
    translation: 'na realidade'
  },
  {
    word: 'add',
    phrase: 'Children learned to add and subtract quickly and accurately',
    translation: 'adicionar'
  },
  {
    word: 'address',
    phrase: `What's his address?`,
    translation: 'endereço'
  },
  {
    word: 'administration',
    phrase: 'The day-to-day administration of the company',
    translation: 'administração'
  },
  {
    word: 'admit',
    phrase: 'They need to admit new members',
    translation: 'admitir'
  },
  {
    word: 'adult',
    phrase: 'Children should be accompanied by an adult',
    translation: 'adulto'
  },
  {
    word: 'affect',
    phrase: 'Rain will affect some places tonight',
    translation: 'afetar'
  },
  {
    word: 'after',
    phrase: 'After six years of waiting',
    translation: 'depois'
  },
  {
    word: 'again',
    phrase: 'The same amount again',
    translation: 'novamente'
  },
  {
    word: 'against',
    phrase: 'She battled against the system bugs',
    translation: 'contra'
  },
  {
    word: 'age',
    phrase: 'In the modern age',
    translation: 'idade'
  },
  {
    word: 'agency',
    phrase: 'The movies could be an agency molding the values of the public',
    translation: 'agência'
  },
  {
    word: 'agent',
    phrase: 'He was an agent of change',
    translation: 'agente'
  },
  {
    word: 'ago',
    phrase: 'Not long ago he came across a rattlesnake outside his house',
    translation: 'atrás'
  },
  {
    word: 'agree',
    phrase: 'Your body language does not agree with what you are saying',
    translation: 'aceitar'
  },
  {
    word: 'agreement',
    phrase: 'There was agreement that something must be done',
    translation: 'acordo'
  },
  {
    word: 'ahead',
    phrase: 'He contemplated the day ahead',
    translation: 'à frente'
  },
  {
    word: 'air',
    phrase: 'Radio stations have successfully sold products over the air',
    translation: 'ar'
  },
  {
    word: 'all',
    phrase: 'She was doing all the work',
    translation: 'todos'
  },
  {
    word: 'allow',
    phrase: 'He stopped for a moment to allow his eyes to adjust',
    translation: 'permitir'
  },
  {
    word: 'almost',
    phrase: 'He almost dropped the bottle',
    translation: 'quase'
  },
  {
    word: 'alone',
    phrase: 'Team members are more effective than individuals working alone',
    translation: 'sozinho'
  },
  {
    word: 'along',
    phrase: 'They can be helped along the road to modernity',
    translation: 'ao longo'
  },
  {
    word: 'already',
    phrase: `There's already a lot of trouble in that area`,
    translation: 'já'
  },
  {
    word: 'also',
    phrase: `They're not only our neighbours but also our friends`,
    translation: 'também'
  },
  {
    word: 'although',
    phrase: 'The hours are flexible although you must do twenty hours',
    translation: 'embora/apesar'
  },
  {
    word: 'always',
    phrase: `It's always been our aim to serve the public`,
    translation: 'sempre'
  },
  {
    word: 'american',
    phrase: 'He lives in the United States, he is American',
    translation: 'americano'
  },
  {
    word: 'among',
    phrase: `There's a lot of dissatisfaction among the doctors`,
    translation: 'entre/dentre'
  },
  {
    word: 'amount',
    phrase: 'They have spent a colossal amount rebuilding the stadium',
    translation: 'quantia/quantidade'
  },
  {
    word: 'analysis',
    phrase: 'Samples are sent to the laboratory for analysis',
    translation: 'análise'
  },
  {
    word: 'and',
    phrase: 'We have three hundred and forty four cows',
    translation: 'e'
  },
  {
    word: 'animal',
    phrase: 'Your animal instincts take over',
    translation: 'animal'
  },
  {
    word: 'another',
    phrase: 'They kept moving from one place to another',
    translation: 'outro'
  },
  {
    word: 'answer',
    phrase: 'He knocked and entered without waiting for an answer',
    translation: 'resposta'
  },
  {
    word: 'any',
    phrase: `You don't need special bags, any will do`,
    translation: 'qualquer'
  },
  {
    word: 'anyone',
    phrase: `Here's a chance for anyone who's interested in music`,
    translation: 'qualquer um'
  },
  {
    word: 'anything',
    phrase: 'They think they can buy anything',
    translation: 'nada/qualquer coisa'
  },
  {
    word: 'appear',
    phrase: `I don't want to appear ignorant`,
    translation: 'aparecer'
  },
  {
    word: 'apply',
    phrase: 'To apply for a job',
    translation: 'aplicar'
  },
  {
    word: 'approach',
    phrase: `She hadn't heard him approach`,
    translation: 'aproximar'
  },
  {
    word: 'area',
    phrase: 'The people of the area',
    translation: 'área'
  },
  {
    word: 'argue',
    phrase: `He's able to argue his way out of anything`,
    translation: 'argumentar'
  },
  {
    word: 'arm',
    phrase: 'She injured her left arm',
    translation: 'braço'
  },
  {
    word: 'around',
    phrase: 'Software costs would be around $1,500',
    translation: 'ao redor/em torno'
  },
  {
    word: 'arrive',
    phrase: 'It should arrive in the schools soon',
    translation: 'chegar'
  },
  {
    word: 'art',
    phrase: 'Great art is concerned with moral imperfections',
    translation: 'arte'
  },
  {
    word: 'article',
    phrase: 'An article about the JavaScript language',
    translation: 'artigo'
  },
  {
    word: 'artist',
    phrase: `She's an artist with the scissors`,
    translation: 'artista'
  },
  {
    word: 'as',
    phrase: 'He had often been sick as a child',
    translation: 'como'
  },
  {
    word: 'ask',
    phrase: 'I have a favour to ask you',
    translation: 'perguntar'
  },
  {
    word: 'assume',
    phrase: 'I assume you know the way there',
    translation: 'presumir/assumir'
  },
  {
    word: 'at',
    phrase: 'To be at university',
    translation: 'no/arroba'
  },
  {
    word: 'attack',
    phrase: 'The disease is thought to attack certain cells in the brain',
    translation: 'atacar'
  },
  {
    word: 'attention',
    phrase: 'He failed to give the patient adequate medical attention',
    translation: 'atenção'
  },
  {
    word: 'attorney',
    phrase: 'Unfortunately, my attorney thinks they have a pretty good case',
    translation: 'advogado'
  },
  {
    word: 'audience',
    phrase: `This officer's audience lasted a long time`,
    translation: 'público/audiência'
  },
  {
    word: 'author',
    phrase: 'She is the author of some commendable verses',
    translation: 'autor'
  },
  {
    word: 'authority',
    phrase: 'Now he was exerting his authority in another way',
    translation: 'autoridade'
  },
  {
    word: 'available',
    phrase: 'The number of choices available added to the confusion',
    translation: 'disponível'
  },
  {
    word: 'avoid',
    phrase: `You can't avoid conflict all the time`,
    translation: 'evitar'
  },
  {
    word: 'away',
    phrase:
      'One wicked witch named Mombi stole him and carried him away, keeping him as a prisoner',
    translation: 'longe/ausente'
  },
  {
    word: 'baby',
    phrase: 'Bats only have one baby a year',
    translation: 'bebê'
  },
  {
    word: 'back',
    phrase: 'An empty spot in the back of the plane',
    translation: 'voltar/atrás'
  },
  {
    word: 'bad',
    phrase:
      'I feel bad that our business is benefiting from something so horrible',
    translation: 'ruim/mau'
  },
  {
    word: 'bag',
    phrase: 'A bag of apples',
    translation: 'bolsa/saco'
  },
  {
    word: 'ball',
    phrase: 'He comes across a group of kids playing ball',
    translation: 'bola/esfera'
  },
  {
    word: 'bank',
    phrase: 'I paid the money straight into my bank',
    translation: 'banco'
  },
  {
    word: 'bar',
    phrase: 'An iron bar',
    translation: 'barra'
  },
  {
    word: 'base',
    phrase: `Think we're safer at our base camp?`,
    translation: 'base/suporte'
  },
  {
    word: 'be',
    phrase: 'We must not be late',
    translation: 'ser/estar'
  },
  {
    word: 'beat',
    phrase: 'He heard the beat of a drum',
    translation: 'batida/ritmo'
  },
  {
    word: 'beautiful',
    phrase: 'Look at those big gray eyes and that beautiful red hair',
    translation: 'bonito/belo'
  },
  {
    word: 'because',
    phrase:
      'I think he felt included because he was helping as much as we were',
    translation: 'porque/pois'
  },
  {
    word: 'become',
    phrase: `It's the only way for him to become a vamp`,
    translation: 'tornar-se'
  },
  {
    word: 'bed',
    phrase: 'He sat up in the bed and looked around',
    translation: 'cama'
  },
  {
    word: 'before',
    phrase: 'Night came on before he had finished it',
    translation: 'antes'
  },
  {
    word: 'begin',
    phrase: 'Pierre was about to begin reading',
    translation: 'começar'
  },
  {
    word: 'behavior',
    phrase: 'My sister will instruct you in the behavior I expect of you',
    translation: 'comportamento'
  },
  {
    word: 'behind',
    phrase: 'The boy got up at once, and sat behind the king',
    translation: 'atrás'
  },
  {
    word: 'believe',
    phrase:
      'He is the handsomest and strongest of men, and I believe he is the wisest also',
    translation: 'acreditar'
  },
  {
    word: 'benefit',
    phrase: `If you think you'd benefit, you probably will`,
    translation: 'beneficiar'
  },
  {
    word: 'best',
    phrase: 'Try to look your best',
    translation: 'melhor'
  },
  {
    word: 'better',
    phrase: `We'd better go down for breakfast`,
    translation: 'melhor'
  },
  {
    word: 'between',
    phrase: 'There were sparks between them from the start',
    translation: 'entre'
  },
  {
    word: 'beyond',
    phrase: 'To infinity and beyond',
    translation: 'além'
  },
  {
    word: 'big',
    phrase: 'What a big family it was',
    translation: 'grande'
  },
  {
    word: 'bill',
    phrase: 'I paid the electric and water bill this week.',
    translation: 'conta'
  },
  {
    word: 'billion',
    phrase: 'A billion different stories and experiences.',
    translation: 'bilhão'
  },
  {
    word: 'bit',
    phrase: 'A little bit of information',
    translation: 'mordeu/pedaço'
  },
  {
    word: 'black',
    phrase: `It's just a black snake`,
    translation: 'preto'
  },
  {
    word: 'blood',
    phrase: 'Blood raced up her neck to warm her cheeks',
    translation: 'sangue'
  },
  {
    word: 'blue',
    phrase: 'She handed him a light blue shirt',
    translation: 'azul'
  },
  {
    word: 'board',
    phrase: 'Pete set the pieces out on the board',
    translation: 'borda/mesa/tabuleiro'
  },
  {
    word: 'body',
    phrase: 'Every muscle in her body was sore',
    translation: 'corpo'
  },
  {
    word: 'book',
    phrase:
      'A coloring book and crayons kept her busy while they worked and talked',
    translation: 'livro'
  },
  {
    word: 'born',
    phrase: 'Embrace it like a new born child',
    translation: 'nascido'
  },
  {
    word: 'both',
    phrase: 'I liked them both very much',
    translation: 'ambos'
  },
  {
    word: 'box',
    phrase: 'Her jewelry box was tiny and wooden',
    translation: 'caixa'
  },
  {
    word: 'boy',
    phrase: `My dear boy, don't say another word`,
    translation: 'menino'
  },
  {
    word: 'break',
    phrase: 'If you break it, you replace it.',
    translation: 'quebrar/intervalo'
  },
  {
    word: 'bring',
    phrase: 'Bring yourself and your friends to the party',
    translation: 'trazer'
  },
  {
    word: 'brother',
    phrase: 'She remembered her brother and his love',
    translation: 'irmão'
  },
  {
    word: 'budget',
    phrase: `The bike was a trophy from a time when Dean's budget contained more expendable income`,
    translation: 'orçamento'
  },
  {
    word: 'build',
    phrase: 'He paused, to build the suspense',
    translation: 'construir'
  },
  {
    word: 'building',
    phrase: 'They demolished the building',
    translation: 'prédio/edifício'
  },
  {
    word: 'business',
    phrase: 'I mean, I could still have my business in town',
    translation: 'negócio/empresa'
  },
  {
    word: 'but',
    phrase: 'She objected at first, but finally submitted',
    translation: 'mas'
  },
  {
    word: 'buy',
    phrase: 'Money is not required to buy one necessary of the soul',
    translation: 'comprar'
  },
  {
    word: 'by',
    phrase: 'I guess he was stunned by my beauty',
    translation: 'por'
  },
  {
    word: 'call',
    phrase: '',
    translation: ''
  },
  {
    word: 'camera',
    phrase: '',
    translation: ''
  },
  {
    word: 'campaign',
    phrase: '',
    translation: ''
  },
  {
    word: 'can',
    phrase: '',
    translation: ''
  },
  {
    word: 'cancer',
    phrase: '',
    translation: ''
  },
  {
    word: 'candidate',
    phrase: '',
    translation: ''
  },
  {
    word: 'capital',
    phrase: '',
    translation: ''
  },
  {
    word: 'car',
    phrase: '',
    translation: ''
  },
  {
    word: 'card',
    phrase: '',
    translation: ''
  },
  {
    word: 'care',
    phrase: '',
    translation: ''
  },
  {
    word: 'career',
    phrase: '',
    translation: ''
  },
  {
    word: 'carry',
    phrase: '',
    translation: ''
  },
  {
    word: 'case',
    phrase: '',
    translation: ''
  },
  {
    word: 'catch',
    phrase: '',
    translation: ''
  },
  {
    word: 'cause',
    phrase: '',
    translation: ''
  },
  {
    word: 'cell',
    phrase: '',
    translation: ''
  },
  {
    word: 'center',
    phrase: '',
    translation: ''
  },
  {
    word: 'central',
    phrase: '',
    translation: ''
  },
  {
    word: 'century',
    phrase: '',
    translation: ''
  },
  {
    word: 'certain',
    phrase: '',
    translation: ''
  },
  {
    word: 'certainly',
    phrase: '',
    translation: ''
  },
  {
    word: 'chair',
    phrase: '',
    translation: ''
  },
  {
    word: 'challenge',
    phrase: '',
    translation: ''
  },
  {
    word: 'chance',
    phrase: '',
    translation: ''
  },
  {
    word: 'change',
    phrase: '',
    translation: ''
  },
  {
    word: 'character',
    phrase: '',
    translation: ''
  },
  {
    word: 'charge',
    phrase: '',
    translation: ''
  },
  {
    word: 'check',
    phrase: '',
    translation: ''
  },
  {
    word: 'child',
    phrase: '',
    translation: ''
  },
  {
    word: 'choice',
    phrase: '',
    translation: ''
  },
  {
    word: 'choose',
    phrase: '',
    translation: ''
  },
  {
    word: 'church',
    phrase: '',
    translation: ''
  },
  {
    word: 'citizen',
    phrase: '',
    translation: ''
  },
  {
    word: 'city',
    phrase: '',
    translation: ''
  },
  {
    word: 'civil',
    phrase: '',
    translation: ''
  },
  {
    word: 'claim',
    phrase: '',
    translation: ''
  },
  {
    word: 'class',
    phrase: '',
    translation: ''
  },
  {
    word: 'clear',
    phrase: '',
    translation: ''
  },
  {
    word: 'clearly',
    phrase: '',
    translation: ''
  },
  {
    word: 'close',
    phrase: '',
    translation: ''
  },
  {
    word: 'coach',
    phrase: '',
    translation: ''
  },
  {
    word: 'cold',
    phrase: '',
    translation: ''
  },
  {
    word: 'collection',
    phrase: '',
    translation: ''
  },
  {
    word: 'college',
    phrase: '',
    translation: ''
  },
  {
    word: 'color',
    phrase: '',
    translation: ''
  },
  {
    word: 'come',
    phrase: '',
    translation: ''
  },
  {
    word: 'commercial',
    phrase: '',
    translation: ''
  },
  {
    word: 'common',
    phrase: '',
    translation: ''
  },
  {
    word: 'community',
    phrase: '',
    translation: ''
  },
  {
    word: 'company',
    phrase: '',
    translation: ''
  },
  {
    word: 'compare',
    phrase: '',
    translation: ''
  },
  {
    word: 'computer',
    phrase: '',
    translation: ''
  },
  {
    word: 'concern',
    phrase: '',
    translation: ''
  },
  {
    word: 'condition',
    phrase: '',
    translation: ''
  },
  {
    word: 'conference',
    phrase: '',
    translation: ''
  },
  {
    word: 'Congress',
    phrase: '',
    translation: ''
  },
  {
    word: 'consider',
    phrase: '',
    translation: ''
  },
  {
    word: 'consumer',
    phrase: '',
    translation: ''
  },
  {
    word: 'contain',
    phrase: '',
    translation: ''
  },
  {
    word: 'continue',
    phrase: '',
    translation: ''
  },
  {
    word: 'control',
    phrase: '',
    translation: ''
  },
  {
    word: 'cost',
    phrase: '',
    translation: ''
  },
  {
    word: 'could',
    phrase: '',
    translation: ''
  },
  {
    word: 'country',
    phrase: '',
    translation: ''
  },
  {
    word: 'couple',
    phrase: '',
    translation: ''
  },
  {
    word: 'course',
    phrase: '',
    translation: ''
  },
  {
    word: 'court',
    phrase: '',
    translation: ''
  },
  {
    word: 'cover',
    phrase: '',
    translation: ''
  },
  {
    word: 'create',
    phrase: '',
    translation: ''
  },
  {
    word: 'crime',
    phrase: '',
    translation: ''
  },
  {
    word: 'cultural',
    phrase: '',
    translation: ''
  },
  {
    word: 'culture',
    phrase: '',
    translation: ''
  },
  {
    word: 'cup',
    phrase: '',
    translation: ''
  },
  {
    word: 'current',
    phrase: '',
    translation: ''
  },
  {
    word: 'customer',
    phrase: '',
    translation: ''
  },
  {
    word: 'cut',
    phrase: '',
    translation: ''
  },
  {
    word: 'dark',
    phrase: '',
    translation: ''
  },
  {
    word: 'data',
    phrase: '',
    translation: ''
  },
  {
    word: 'daughter',
    phrase: '',
    translation: ''
  },
  {
    word: 'day',
    phrase: '',
    translation: ''
  },
  {
    word: 'dead',
    phrase: '',
    translation: ''
  },
  {
    word: 'deal',
    phrase: '',
    translation: ''
  },
  {
    word: 'death',
    phrase: '',
    translation: ''
  },
  {
    word: 'debate',
    phrase: '',
    translation: ''
  },
  {
    word: 'decade',
    phrase: '',
    translation: ''
  },
  {
    word: 'decide',
    phrase: '',
    translation: ''
  },
  {
    word: 'decision',
    phrase: '',
    translation: ''
  },
  {
    word: 'deep',
    phrase: '',
    translation: ''
  },
  {
    word: 'defense',
    phrase: '',
    translation: ''
  },
  {
    word: 'degree',
    phrase: '',
    translation: ''
  },
  {
    word: 'Democrat',
    phrase: '',
    translation: ''
  },
  {
    word: 'democratic',
    phrase: '',
    translation: ''
  },
  {
    word: 'describe',
    phrase: '',
    translation: ''
  },
  {
    word: 'design',
    phrase: '',
    translation: ''
  },
  {
    word: 'despite',
    phrase: '',
    translation: ''
  },
  {
    word: 'detail',
    phrase: '',
    translation: ''
  },
  {
    word: 'determine',
    phrase: '',
    translation: ''
  },
  {
    word: 'develop',
    phrase: '',
    translation: ''
  },
  {
    word: 'development',
    phrase: '',
    translation: ''
  },
  {
    word: 'die',
    phrase: '',
    translation: ''
  },
  {
    word: 'difference',
    phrase: '',
    translation: ''
  },
  {
    word: 'different',
    phrase: '',
    translation: ''
  },
  {
    word: 'difficult',
    phrase: '',
    translation: ''
  },
  {
    word: 'dinner',
    phrase: '',
    translation: ''
  },
  {
    word: 'direction',
    phrase: '',
    translation: ''
  },
  {
    word: 'director',
    phrase: '',
    translation: ''
  },
  {
    word: 'discover',
    phrase: '',
    translation: ''
  },
  {
    word: 'discuss',
    phrase: '',
    translation: ''
  },
  {
    word: 'discussion',
    phrase: '',
    translation: ''
  },
  {
    word: 'disease',
    phrase: '',
    translation: ''
  },
  {
    word: 'do',
    phrase: '',
    translation: ''
  },
  {
    word: 'doctor',
    phrase: '',
    translation: ''
  },
  {
    word: 'dog',
    phrase: '',
    translation: ''
  },
  {
    word: 'door',
    phrase: '',
    translation: ''
  },
  {
    word: 'down',
    phrase: '',
    translation: ''
  },
  {
    word: 'draw',
    phrase: '',
    translation: ''
  },
  {
    word: 'dream',
    phrase: '',
    translation: ''
  },
  {
    word: 'drive',
    phrase: '',
    translation: ''
  },
  {
    word: 'drop',
    phrase: '',
    translation: ''
  },
  {
    word: 'drug',
    phrase: '',
    translation: ''
  },
  {
    word: 'during',
    phrase: '',
    translation: ''
  },
  {
    word: 'each',
    phrase: '',
    translation: ''
  },
  {
    word: 'early',
    phrase: '',
    translation: ''
  },
  {
    word: 'east',
    phrase: '',
    translation: ''
  },
  {
    word: 'easy',
    phrase: '',
    translation: ''
  },
  {
    word: 'eat',
    phrase: '',
    translation: ''
  },
  {
    word: 'economic',
    phrase: '',
    translation: ''
  },
  {
    word: 'economy',
    phrase: '',
    translation: ''
  },
  {
    word: 'edge',
    phrase: '',
    translation: ''
  },
  {
    word: 'education',
    phrase: '',
    translation: ''
  },
  {
    word: 'effect',
    phrase: '',
    translation: ''
  },
  {
    word: 'effort',
    phrase: '',
    translation: ''
  },
  {
    word: 'eight',
    phrase: '',
    translation: ''
  },
  {
    word: 'either',
    phrase: '',
    translation: ''
  },
  {
    word: 'election',
    phrase: '',
    translation: ''
  },
  {
    word: 'else',
    phrase: '',
    translation: ''
  },
  {
    word: 'employee',
    phrase: '',
    translation: ''
  },
  {
    word: 'end',
    phrase: '',
    translation: ''
  },
  {
    word: 'energy',
    phrase: '',
    translation: ''
  },
  {
    word: 'enjoy',
    phrase: '',
    translation: ''
  },
  {
    word: 'enough',
    phrase: '',
    translation: ''
  },
  {
    word: 'enter',
    phrase: '',
    translation: ''
  },
  {
    word: 'entire',
    phrase: '',
    translation: ''
  },
  {
    word: 'environment',
    phrase: '',
    translation: ''
  },
  {
    word: 'environmental',
    phrase: '',
    translation: ''
  },
  {
    word: 'especially',
    phrase: '',
    translation: ''
  },
  {
    word: 'establish',
    phrase: '',
    translation: ''
  },
  {
    word: 'even',
    phrase: '',
    translation: ''
  },
  {
    word: 'evening',
    phrase: '',
    translation: ''
  },
  {
    word: 'event',
    phrase: '',
    translation: ''
  },
  {
    word: 'ever',
    phrase: '',
    translation: ''
  },
  {
    word: 'every',
    phrase: '',
    translation: ''
  },
  {
    word: 'everybody',
    phrase: '',
    translation: ''
  },
  {
    word: 'everyone',
    phrase: '',
    translation: ''
  },
  {
    word: 'everything',
    phrase: '',
    translation: ''
  },
  {
    word: 'evidence',
    phrase: '',
    translation: ''
  },
  {
    word: 'exactly',
    phrase: '',
    translation: ''
  },
  {
    word: 'example',
    phrase: '',
    translation: ''
  },
  {
    word: 'executive',
    phrase: '',
    translation: ''
  },
  {
    word: 'exist',
    phrase: '',
    translation: ''
  },
  {
    word: 'expect',
    phrase: '',
    translation: ''
  },
  {
    word: 'experience',
    phrase: '',
    translation: ''
  },
  {
    word: 'expert',
    phrase: '',
    translation: ''
  },
  {
    word: 'explain',
    phrase: '',
    translation: ''
  },
  {
    word: 'eye',
    phrase: '',
    translation: ''
  },
  {
    word: 'face',
    phrase: '',
    translation: ''
  },
  {
    word: 'fact',
    phrase: '',
    translation: ''
  },
  {
    word: 'factor',
    phrase: '',
    translation: ''
  },
  {
    word: 'fail',
    phrase: '',
    translation: ''
  },
  {
    word: 'fall',
    phrase: '',
    translation: ''
  },
  {
    word: 'family',
    phrase: '',
    translation: ''
  },
  {
    word: 'far',
    phrase: '',
    translation: ''
  },
  {
    word: 'fast',
    phrase: '',
    translation: ''
  },
  {
    word: 'father',
    phrase: '',
    translation: ''
  },
  {
    word: 'fear',
    phrase: '',
    translation: ''
  },
  {
    word: 'federal',
    phrase: '',
    translation: ''
  },
  {
    word: 'feel',
    phrase: `Do you feel that wind?`,

    translation: ''
  },
  {
    word: 'feeling',
    phrase: '',
    translation: ''
  },
  {
    word: 'few',
    phrase: '',
    translation: ''
  },
  {
    word: 'field',
    phrase: '',
    translation: ''
  },
  {
    word: 'fight',
    phrase: '',
    translation: ''
  },
  {
    word: 'figure',
    phrase: '',
    translation: ''
  },
  {
    word: 'fill',
    phrase: '',
    translation: ''
  },
  {
    word: 'film',
    phrase: '',
    translation: ''
  },
  {
    word: 'final',
    phrase: '',
    translation: ''
  },
  {
    word: 'finally',
    phrase: '',
    translation: ''
  },
  {
    word: 'financial',
    phrase: '',
    translation: ''
  },
  {
    word: 'find',
    phrase: '',
    translation: ''
  },
  {
    word: 'fine',
    phrase: '',
    translation: ''
  },
  {
    word: 'finger',
    phrase: '',
    translation: ''
  },
  {
    word: 'finish',
    phrase: '',
    translation: ''
  },
  {
    word: 'fire',
    phrase: '',
    translation: ''
  },
  {
    word: 'firm',
    phrase: '',
    translation: ''
  },
  {
    word: 'first',
    phrase: '',
    translation: ''
  },
  {
    word: 'fish',
    phrase: '',
    translation: ''
  },
  {
    word: 'five',
    phrase: '',
    translation: ''
  },
  {
    word: 'floor',
    phrase: '',
    translation: ''
  },
  {
    word: 'fly',
    phrase: '',
    translation: ''
  },
  {
    word: 'focus',
    phrase: '',
    translation: ''
  },
  {
    word: 'follow',
    phrase: '',
    translation: ''
  },
  {
    word: 'food',
    phrase: '',
    translation: ''
  },
  {
    word: 'foot',
    phrase: '',
    translation: ''
  },
  {
    word: 'for',
    phrase: '',
    translation: ''
  },
  {
    word: 'force',
    phrase: '',
    translation: ''
  },
  {
    word: 'foreign',
    phrase: '',
    translation: ''
  },
  {
    word: 'forget',
    phrase: '',
    translation: ''
  },
  {
    word: 'form',
    phrase: '',
    translation: ''
  },
  {
    word: 'former',
    phrase: '',
    translation: ''
  },
  {
    word: 'forward',
    phrase: '',
    translation: ''
  },
  {
    word: 'four',
    phrase: '',
    translation: ''
  },
  {
    word: 'free',
    phrase: '',
    translation: ''
  },
  {
    word: 'friend',
    phrase: '',
    translation: ''
  },
  {
    word: 'from',
    phrase: '',
    translation: ''
  },
  {
    word: 'front',
    phrase: '',
    translation: ''
  },
  {
    word: 'full',
    phrase: '',
    translation: ''
  },
  {
    word: 'fund',
    phrase: '',
    translation: ''
  },
  {
    word: 'future',
    phrase: '',
    translation: ''
  },
  {
    word: 'game',
    phrase: '',
    translation: ''
  },
  {
    word: 'garden',
    phrase: '',
    translation: ''
  },
  {
    word: 'gas',
    phrase: '',
    translation: ''
  },
  {
    word: 'general',
    phrase: '',
    translation: ''
  },
  {
    word: 'generation',
    phrase: '',
    translation: ''
  },
  {
    word: 'get',
    phrase: '',
    translation: ''
  },
  {
    word: 'girl',
    phrase: '',
    translation: ''
  },
  {
    word: 'give',
    phrase: '',
    translation: ''
  },
  {
    word: 'glass',
    phrase: '',
    translation: ''
  },
  {
    word: 'go',
    phrase: '',
    translation: ''
  },
  {
    word: 'goal',
    phrase: '',
    translation: ''
  },
  {
    word: 'good',
    phrase: '',
    translation: ''
  },
  {
    word: 'government',
    phrase: '',
    translation: ''
  },
  {
    word: 'great',
    phrase: '',
    translation: ''
  },
  {
    word: 'green',
    phrase: '',
    translation: ''
  },
  {
    word: 'ground',
    phrase: '',
    translation: ''
  },
  {
    word: 'group',
    phrase: '',
    translation: ''
  },
  {
    word: 'grow',
    phrase: '',
    translation: ''
  },
  {
    word: 'growth',
    phrase: '',
    translation: ''
  },
  {
    word: 'guess',
    phrase: '',
    translation: ''
  },
  {
    word: 'gun',
    phrase: '',
    translation: ''
  },
  {
    word: 'guy',
    phrase: '',
    translation: ''
  },
  {
    word: 'hair',
    phrase: '',
    translation: ''
  },
  {
    word: 'half',
    phrase: '',
    translation: ''
  },
  {
    word: 'hand',
    phrase: '',
    translation: ''
  },
  {
    word: 'hang',
    phrase: '',
    translation: ''
  },
  {
    word: 'happen',
    phrase: '',
    translation: ''
  },
  {
    word: 'happy',
    phrase: '',
    translation: ''
  },
  {
    word: 'hard',
    phrase: '',
    translation: ''
  },
  {
    word: 'have',
    phrase: '',
    translation: ''
  },
  {
    word: 'he',
    phrase: '',
    translation: ''
  },
  {
    word: 'head',
    phrase: '',
    translation: ''
  },
  {
    word: 'health',
    phrase: '',
    translation: ''
  },
  {
    word: 'hear',
    phrase: '',
    translation: ''
  },
  {
    word: 'heart',
    phrase: '',
    translation: ''
  },
  {
    word: 'heat',
    phrase: '',
    translation: ''
  },
  {
    word: 'heavy',
    phrase: '',
    translation: ''
  },
  {
    word: 'help',
    phrase: '',
    translation: ''
  },
  {
    word: 'her',
    phrase: '',
    translation: ''
  },
  {
    word: 'here',
    phrase: '',
    translation: ''
  },
  {
    word: 'herself',
    phrase: '',
    translation: ''
  },
  {
    word: 'high',
    phrase: '',
    translation: ''
  },
  {
    word: 'him',
    phrase: '',
    translation: ''
  },
  {
    word: 'himself',
    phrase: '',
    translation: ''
  },
  {
    word: 'his',
    phrase: '',
    translation: ''
  },
  {
    word: 'history',
    phrase: '',
    translation: ''
  },
  {
    word: 'hit',
    phrase: '',
    translation: ''
  },
  {
    word: 'hold',
    phrase: '',
    translation: ''
  },
  {
    word: 'home',
    phrase: '',
    translation: ''
  },
  {
    word: 'hope',
    phrase: '',
    translation: ''
  },
  {
    word: 'hospital',
    phrase: '',
    translation: ''
  },
  {
    word: 'hot',
    phrase: '',
    translation: ''
  },
  {
    word: 'hotel',
    phrase: '',
    translation: ''
  },
  {
    word: 'hour',
    phrase: '',
    translation: ''
  },
  {
    word: 'house',
    phrase: '',
    translation: ''
  },
  {
    word: 'how',
    phrase: '',
    translation: ''
  },
  {
    word: 'however',
    phrase: '',
    translation: ''
  },
  {
    word: 'huge',
    phrase: '',
    translation: ''
  },
  {
    word: 'human',
    phrase: '',
    translation: ''
  },
  {
    word: 'hundred',
    phrase: '',
    translation: ''
  },
  {
    word: 'husband',
    phrase: '',
    translation: ''
  },
  {
    word: 'I',
    phrase: '',
    translation: ''
  },
  {
    word: 'idea',
    phrase: '',
    translation: ''
  },
  {
    word: 'identify',
    phrase: '',
    translation: ''
  },
  {
    word: 'if',
    phrase: '',
    translation: ''
  },
  {
    word: 'image',
    phrase: '',
    translation: ''
  },
  {
    word: 'imagine',
    phrase: '',
    translation: ''
  },
  {
    word: 'impact',
    phrase: '',
    translation: ''
  },
  {
    word: 'important',
    phrase: '',
    translation: ''
  },
  {
    word: 'improve',
    phrase: '',
    translation: ''
  },
  {
    word: 'in',
    phrase: '',
    translation: ''
  },
  {
    word: 'include',
    phrase: '',
    translation: ''
  },
  {
    word: 'including',
    phrase: '',
    translation: ''
  },
  {
    word: 'increase',
    phrase: '',
    translation: ''
  },
  {
    word: 'indeed',
    phrase: '',
    translation: ''
  },
  {
    word: 'indicate',
    phrase: '',
    translation: ''
  },
  {
    word: 'individual',
    phrase: '',
    translation: ''
  },
  {
    word: 'industry',
    phrase: '',
    translation: ''
  },
  {
    word: 'information',
    phrase: '',
    translation: ''
  },
  {
    word: 'inside',
    phrase: '',
    translation: ''
  },
  {
    word: 'instead',
    phrase: '',
    translation: ''
  },
  {
    word: 'institution',
    phrase: '',
    translation: ''
  },
  {
    word: 'interest',
    phrase: '',
    translation: ''
  },
  {
    word: 'interesting',
    phrase: '',
    translation: ''
  },
  {
    word: 'international',
    phrase: '',
    translation: ''
  },
  {
    word: 'interview',
    phrase: '',
    translation: ''
  },
  {
    word: 'into',
    phrase: '',
    translation: ''
  },
  {
    word: 'investment',
    phrase: '',
    translation: ''
  },
  {
    word: 'involve',
    phrase: '',
    translation: ''
  },
  {
    word: 'issue',
    phrase: '',
    translation: ''
  },
  {
    word: 'it',
    phrase: '',
    translation: ''
  },
  {
    word: 'item',
    phrase: '',
    translation: ''
  },
  {
    word: 'its',
    phrase: '',
    translation: ''
  },
  {
    word: 'itself',
    phrase: '',
    translation: ''
  },
  {
    word: 'job',
    phrase: '',
    translation: ''
  },
  {
    word: 'join',
    phrase: '',
    translation: ''
  },
  {
    word: 'just',
    phrase: '',
    translation: ''
  },
  {
    word: 'keep',
    phrase: '',
    translation: ''
  },
  {
    word: 'key',
    phrase: '',
    translation: ''
  },
  {
    word: 'kid',
    phrase: '',
    translation: ''
  },
  {
    word: 'kill',
    phrase: '',
    translation: ''
  },
  {
    word: 'kind',
    phrase: '',
    translation: ''
  },
  {
    word: 'kitchen',
    phrase: '',
    translation: ''
  },
  {
    word: 'know',
    phrase: '',
    translation: ''
  },
  {
    word: 'knowledge',
    phrase: '',
    translation: ''
  },
  {
    word: 'land',
    phrase: '',
    translation: ''
  },
  {
    word: 'language',
    phrase: '',
    translation: ''
  },
  {
    word: 'large',
    phrase: '',
    translation: ''
  },
  {
    word: 'last',
    phrase: '',
    translation: ''
  },
  {
    word: 'late',
    phrase: '',
    translation: ''
  },
  {
    word: 'later',
    phrase: '',
    translation: ''
  },
  {
    word: 'laugh',
    phrase: '',
    translation: ''
  },
  {
    word: 'law',
    phrase: '',
    translation: ''
  },
  {
    word: 'lawyer',
    phrase: '',
    translation: ''
  },
  {
    word: 'lay',
    phrase: '',
    translation: ''
  },
  {
    word: 'lead',
    phrase: '',
    translation: ''
  },
  {
    word: 'leader',
    phrase: '',
    translation: ''
  },
  {
    word: 'learn',
    phrase: '',
    translation: ''
  },
  {
    word: 'least',
    phrase: '',
    translation: ''
  },
  {
    word: 'leave',
    phrase: '',
    translation: ''
  },
  {
    word: 'left',
    phrase: '',
    translation: ''
  },
  {
    word: 'leg',
    phrase: '',
    translation: ''
  },
  {
    word: 'legal',
    phrase: '',
    translation: ''
  },
  {
    word: 'less',
    phrase: '',
    translation: ''
  },
  {
    word: 'let',
    phrase: '',
    translation: ''
  },
  {
    word: 'letter',
    phrase: '',
    translation: ''
  },
  {
    word: 'level',
    phrase: '',
    translation: ''
  },
  {
    word: 'lie',
    phrase: '',
    translation: ''
  },
  {
    word: 'life',
    phrase: '',
    translation: ''
  },
  {
    word: 'light',
    phrase: '',
    translation: ''
  },
  {
    word: 'like',
    phrase: '',
    translation: ''
  },
  {
    word: 'likely',
    phrase: '',
    translation: ''
  },
  {
    word: 'line',
    phrase: '',
    translation: ''
  },
  {
    word: 'list',
    phrase: '',
    translation: ''
  },
  {
    word: 'listen',
    phrase: '',
    translation: ''
  },
  {
    word: 'little',
    phrase: '',
    translation: ''
  },
  {
    word: 'live',
    phrase: '',
    translation: ''
  },
  {
    word: 'local',
    phrase: '',
    translation: ''
  },
  {
    word: 'long',
    phrase: '',
    translation: ''
  },
  {
    word: 'look',
    phrase: '',
    translation: ''
  },
  {
    word: 'lose',
    phrase: '',
    translation: ''
  },
  {
    word: 'loss',
    phrase: '',
    translation: ''
  },
  {
    word: 'lot',
    phrase: '',
    translation: ''
  },
  {
    word: 'love',
    phrase: '',
    translation: ''
  },
  {
    word: 'low',
    phrase: '',
    translation: ''
  },
  {
    word: 'machine',
    phrase: '',
    translation: ''
  },
  {
    word: 'magazine',
    phrase: '',
    translation: ''
  },
  {
    word: 'main',
    phrase: '',
    translation: ''
  },
  {
    word: 'maintain',
    phrase: '',
    translation: ''
  },
  {
    word: 'major',
    phrase: '',
    translation: ''
  },
  {
    word: 'majority',
    phrase: '',
    translation: ''
  },
  {
    word: 'make',
    phrase: '',
    translation: ''
  },
  {
    word: 'man',
    phrase: '',
    translation: ''
  },
  {
    word: 'manage',
    phrase: '',
    translation: ''
  },
  {
    word: 'management',
    phrase: '',
    translation: ''
  },
  {
    word: 'manager',
    phrase: '',
    translation: ''
  },
  {
    word: 'many',
    phrase: '',
    translation: ''
  },
  {
    word: 'market',
    phrase: '',
    translation: ''
  },
  {
    word: 'marriage',
    phrase: '',
    translation: ''
  },
  {
    word: 'material',
    phrase: '',
    translation: ''
  },
  {
    word: 'matter',
    phrase: '',
    translation: ''
  },
  {
    word: 'may',
    phrase: '',
    translation: ''
  },
  {
    word: 'maybe',
    phrase: '',
    translation: ''
  },
  {
    word: 'me',
    phrase: '',
    translation: ''
  },
  {
    word: 'mean',
    phrase: '',
    translation: ''
  },
  {
    word: 'measure',
    phrase: '',
    translation: ''
  },
  {
    word: 'media',
    phrase: '',
    translation: ''
  },
  {
    word: 'medical',
    phrase: '',
    translation: ''
  },
  {
    word: 'meet',
    phrase: '',
    translation: ''
  },
  {
    word: 'meeting',
    phrase: '',
    translation: ''
  },
  {
    word: 'member',
    phrase: '',
    translation: ''
  },
  {
    word: 'memory',
    phrase: '',
    translation: ''
  },
  {
    word: 'mention',
    phrase: '',
    translation: ''
  },
  {
    word: 'message',
    phrase: '',
    translation: ''
  },
  {
    word: 'method',
    phrase: '',
    translation: ''
  },
  {
    word: 'middle',
    phrase: '',
    translation: ''
  },
  {
    word: 'might',
    phrase: '',
    translation: ''
  },
  {
    word: 'military',
    phrase: '',
    translation: ''
  },
  {
    word: 'million',
    phrase: '',
    translation: ''
  },
  {
    word: 'mind',
    phrase: '',
    translation: ''
  },
  {
    word: 'minute',
    phrase: '',
    translation: ''
  },
  {
    word: 'miss',
    phrase: '',
    translation: ''
  },
  {
    word: 'mission',
    phrase: '',
    translation: ''
  },
  {
    word: 'model',
    phrase: '',
    translation: ''
  },
  {
    word: 'modern',
    phrase: '',
    translation: ''
  },
  {
    word: 'moment',
    phrase: '',
    translation: ''
  },
  {
    word: 'money',
    phrase: '',
    translation: ''
  },
  {
    word: 'month',
    phrase: '',
    translation: ''
  },
  {
    word: 'more',
    phrase: '',
    translation: ''
  },
  {
    word: 'morning',
    phrase: '',
    translation: ''
  },
  {
    word: 'most',
    phrase: '',
    translation: ''
  },
  {
    word: 'mother',
    phrase: '',
    translation: ''
  },
  {
    word: 'mouth',
    phrase: '',
    translation: ''
  },
  {
    word: 'move',
    phrase: '',
    translation: ''
  },
  {
    word: 'movement',
    phrase: '',
    translation: ''
  },
  {
    word: 'movie',
    phrase: '',
    translation: ''
  },
  {
    word: 'Mr',
    phrase: '',
    translation: ''
  },
  {
    word: 'Mrs',
    phrase: '',
    translation: ''
  },
  {
    word: 'much',
    phrase: '',
    translation: ''
  },
  {
    word: 'music',
    phrase: '',
    translation: ''
  },
  {
    word: 'must',
    phrase: '',
    translation: ''
  },
  {
    word: 'my',
    phrase: '',
    translation: ''
  },
  {
    word: 'myself',
    phrase: '',
    translation: ''
  },
  {
    word: 'name',
    phrase: '',
    translation: ''
  },
  {
    word: 'nation',
    phrase: '',
    translation: ''
  },
  {
    word: 'national',
    phrase: '',
    translation: ''
  },
  {
    word: 'natural',
    phrase: '',
    translation: ''
  },
  {
    word: 'nature',
    phrase: '',
    translation: ''
  },
  {
    word: 'near',
    phrase: '',
    translation: ''
  },
  {
    word: 'nearly',
    phrase: '',
    translation: ''
  },
  {
    word: 'necessary',
    phrase: '',
    translation: ''
  },
  {
    word: 'need',
    phrase: '',
    translation: ''
  },
  {
    word: 'network',
    phrase: '',
    translation: ''
  },
  {
    word: 'never',
    phrase: '',
    translation: ''
  },
  {
    word: 'new',
    phrase: '',
    translation: ''
  },
  {
    word: 'news',
    phrase: '',
    translation: ''
  },
  {
    word: 'newspaper',
    phrase: '',
    translation: ''
  },
  {
    word: 'next',
    phrase: '',
    translation: ''
  },
  {
    word: 'nice',
    phrase: '',
    translation: ''
  },
  {
    word: 'night',
    phrase: '',
    translation: ''
  },
  {
    word: 'no',
    phrase: '',
    translation: ''
  },
  {
    word: 'none',
    phrase: '',
    translation: ''
  },
  {
    word: 'nor',
    phrase: '',
    translation: ''
  },
  {
    word: 'north',
    phrase: '',
    translation: ''
  },
  {
    word: 'not',
    phrase: '',
    translation: ''
  },
  {
    word: 'note',
    phrase: '',
    translation: ''
  },
  {
    word: 'nothing',
    phrase: '',
    translation: ''
  },
  {
    word: 'notice',
    phrase: '',
    translation: ''
  },
  {
    word: 'now',
    phrase: '',
    translation: ''
  },
  {
    word: 'number',
    phrase: '',
    translation: ''
  },
  {
    word: 'occur',
    phrase: '',
    translation: ''
  },
  {
    word: 'of',
    phrase: '',
    translation: ''
  },
  {
    word: 'off',
    phrase: '',
    translation: ''
  },
  {
    word: 'offer',
    phrase: '',
    translation: ''
  },
  {
    word: 'office',
    phrase: '',
    translation: ''
  },
  {
    word: 'officer',
    phrase: '',
    translation: ''
  },
  {
    word: 'official',
    phrase: '',
    translation: ''
  },
  {
    word: 'often',
    phrase: '',
    translation: ''
  },
  {
    word: 'oh',
    phrase: '',
    translation: ''
  },
  {
    word: 'oil',
    phrase: '',
    translation: ''
  },
  {
    word: 'ok',
    phrase: '',
    translation: ''
  },
  {
    word: 'old',
    phrase: '',
    translation: ''
  },
  {
    word: 'on',
    phrase: '',
    translation: ''
  },
  {
    word: 'once',
    phrase: '',
    translation: ''
  },
  {
    word: 'one',
    phrase: '',
    translation: ''
  },
  {
    word: 'only',
    phrase: '',
    translation: ''
  },
  {
    word: 'onto',
    phrase: '',
    translation: ''
  },
  {
    word: 'open',
    phrase: '',
    translation: ''
  },
  {
    word: 'operation',
    phrase: '',
    translation: ''
  },
  {
    word: 'opportunity',
    phrase: '',
    translation: ''
  },
  {
    word: 'option',
    phrase: '',
    translation: ''
  },
  {
    word: 'or',
    phrase: '',
    translation: ''
  },
  {
    word: 'order',
    phrase: '',
    translation: ''
  },
  {
    word: 'organization',
    phrase: '',
    translation: ''
  },
  {
    word: 'other',
    phrase: '',
    translation: ''
  },
  {
    word: 'others',
    phrase: '',
    translation: ''
  },
  {
    word: 'our',
    phrase: '',
    translation: ''
  },
  {
    word: 'out',
    phrase: '',
    translation: ''
  },
  {
    word: 'outside',
    phrase: '',
    translation: ''
  },
  {
    word: 'over',
    phrase: '',
    translation: ''
  },
  {
    word: 'own',
    phrase: '',
    translation: ''
  },
  {
    word: 'owner',
    phrase: '',
    translation: ''
  },
  {
    word: 'page',
    phrase: '',
    translation: ''
  },
  {
    word: 'pain',
    phrase: '',
    translation: ''
  },
  {
    word: 'painting',
    phrase: '',
    translation: ''
  },
  {
    word: 'paper',
    phrase: '',
    translation: ''
  },
  {
    word: 'parent',
    phrase: '',
    translation: ''
  },
  {
    word: 'part',
    phrase: '',
    translation: ''
  },
  {
    word: 'participant',
    phrase: '',
    translation: ''
  },
  {
    word: 'particular',
    phrase: '',
    translation: ''
  },
  {
    word: 'particularly',
    phrase: '',
    translation: ''
  },
  {
    word: 'partner',
    phrase: '',
    translation: ''
  },
  {
    word: 'party',
    phrase: '',
    translation: ''
  },
  {
    word: 'pass',
    phrase: '',
    translation: ''
  },
  {
    word: 'past',
    phrase: '',
    translation: ''
  },
  {
    word: 'patient',
    phrase: '',
    translation: ''
  },
  {
    word: 'pattern',
    phrase: '',
    translation: ''
  },
  {
    word: 'pay',
    phrase: '',
    translation: ''
  },
  {
    word: 'peace',
    phrase: '',
    translation: ''
  },
  {
    word: 'people',
    phrase: '',
    translation: ''
  },
  {
    word: 'per',
    phrase: '',
    translation: ''
  },
  {
    word: 'perform',
    phrase: '',
    translation: ''
  },
  {
    word: 'performance',
    phrase: '',
    translation: ''
  },
  {
    word: 'perhaps',
    phrase: '',
    translation: ''
  },
  {
    word: 'period',
    phrase: '',
    translation: ''
  },
  {
    word: 'person',
    phrase: '',
    translation: ''
  },
  {
    word: 'personal',
    phrase: '',
    translation: ''
  },
  {
    word: 'phone',
    phrase: '',
    translation: ''
  },
  {
    word: 'physical',
    phrase: '',
    translation: ''
  },
  {
    word: 'pick',
    phrase: '',
    translation: ''
  },
  {
    word: 'picture',
    phrase: '',
    translation: ''
  },
  {
    word: 'piece',
    phrase: '',
    translation: ''
  },
  {
    word: 'place',
    phrase: '',
    translation: ''
  },
  {
    word: 'plan',
    phrase: '',
    translation: ''
  },
  {
    word: 'plant',
    phrase: '',
    translation: ''
  },
  {
    word: 'play',
    phrase: '',
    translation: ''
  },
  {
    word: 'player',
    phrase: '',
    translation: ''
  },
  {
    word: 'PM',
    phrase: '',
    translation: ''
  },
  {
    word: 'point',
    phrase: '',
    translation: ''
  },
  {
    word: 'police',
    phrase: '',
    translation: ''
  },
  {
    word: 'policy',
    phrase: '',
    translation: ''
  },
  {
    word: 'political',
    phrase: '',
    translation: ''
  },
  {
    word: 'politics',
    phrase: '',
    translation: ''
  },
  {
    word: 'poor',
    phrase: '',
    translation: ''
  },
  {
    word: 'popular',
    phrase: '',
    translation: ''
  },
  {
    word: 'population',
    phrase: '',
    translation: ''
  },
  {
    word: 'position',
    phrase: '',
    translation: ''
  },
  {
    word: 'positive',
    phrase: '',
    translation: ''
  },
  {
    word: 'possible',
    phrase: '',
    translation: ''
  },
  {
    word: 'power',
    phrase: '',
    translation: ''
  },
  {
    word: 'practice',
    phrase: '',
    translation: ''
  },
  {
    word: 'prepare',
    phrase: '',
    translation: ''
  },
  {
    word: 'present',
    phrase: '',
    translation: ''
  },
  {
    word: 'president',
    phrase: '',
    translation: ''
  },
  {
    word: 'pressure',
    phrase: '',
    translation: ''
  },
  {
    word: 'pretty',
    phrase: '',
    translation: ''
  },
  {
    word: 'prevent',
    phrase: '',
    translation: ''
  },
  {
    word: 'price',
    phrase: '',
    translation: ''
  },
  {
    word: 'private',
    phrase: '',
    translation: ''
  },
  {
    word: 'probably',
    phrase: '',
    translation: ''
  },
  {
    word: 'problem',
    phrase: '',
    translation: ''
  },
  {
    word: 'process',
    phrase: '',
    translation: ''
  },
  {
    word: 'produce',
    phrase: '',
    translation: ''
  },
  {
    word: 'product',
    phrase: '',
    translation: ''
  },
  {
    word: 'production',
    phrase: '',
    translation: ''
  },
  {
    word: 'professional',
    phrase: '',
    translation: ''
  },
  {
    word: 'professor',
    phrase: '',
    translation: ''
  },
  {
    word: 'program',
    phrase: '',
    translation: ''
  },
  {
    word: 'project',
    phrase: '',
    translation: ''
  },
  {
    word: 'property',
    phrase: '',
    translation: ''
  },
  {
    word: 'protect',
    phrase: '',
    translation: ''
  },
  {
    word: 'prove',
    phrase: '',
    translation: ''
  },
  {
    word: 'provide',
    phrase: '',
    translation: ''
  },
  {
    word: 'public',
    phrase: '',
    translation: ''
  },
  {
    word: 'pull',
    phrase: '',
    translation: ''
  },
  {
    word: 'purpose',
    phrase: '',
    translation: ''
  },
  {
    word: 'push',
    phrase: '',
    translation: ''
  },
  {
    word: 'put',
    phrase: '',
    translation: ''
  },
  {
    word: 'quality',
    phrase: '',
    translation: ''
  },
  {
    word: 'question',
    phrase: '',
    translation: ''
  },
  {
    word: 'quickly',
    phrase: '',
    translation: ''
  },
  {
    word: 'quite',
    phrase: '',
    translation: ''
  },
  {
    word: 'race',
    phrase: '',
    translation: ''
  },
  {
    word: 'radio',
    phrase: '',
    translation: ''
  },
  {
    word: 'raise',
    phrase: '',
    translation: ''
  },
  {
    word: 'range',
    phrase: '',
    translation: ''
  },
  {
    word: 'rate',
    phrase: '',
    translation: ''
  },
  {
    word: 'rather',
    phrase: '',
    translation: ''
  },
  {
    word: 'reach',
    phrase: '',
    translation: ''
  },
  {
    word: 'read',
    phrase: '',
    translation: ''
  },
  {
    word: 'ready',
    phrase: '',
    translation: ''
  },
  {
    word: 'real',
    phrase: '',
    translation: ''
  },
  {
    word: 'reality',
    phrase: '',
    translation: ''
  },
  {
    word: 'realize',
    phrase: '',
    translation: ''
  },
  {
    word: 'really',
    phrase: '',
    translation: ''
  },
  {
    word: 'reason',
    phrase: '',
    translation: ''
  },
  {
    word: 'receive',
    phrase: '',
    translation: ''
  },
  {
    word: 'recent',
    phrase: '',
    translation: ''
  },
  {
    word: 'recently',
    phrase: '',
    translation: ''
  },
  {
    word: 'recognize',
    phrase: '',
    translation: ''
  },
  {
    word: 'record',
    phrase: '',
    translation: ''
  },
  {
    word: 'red',
    phrase: '',
    translation: ''
  },
  {
    word: 'reduce',
    phrase: '',
    translation: ''
  },
  {
    word: 'reflect',
    phrase: '',
    translation: ''
  },
  {
    word: 'region',
    phrase: '',
    translation: ''
  },
  {
    word: 'relate',
    phrase: '',
    translation: ''
  },
  {
    word: 'relationship',
    phrase: '',
    translation: ''
  },
  {
    word: 'religious',
    phrase: '',
    translation: ''
  },
  {
    word: 'remain',
    phrase: '',
    translation: ''
  },
  {
    word: 'remember',
    phrase: '',
    translation: ''
  },
  {
    word: 'remove',
    phrase: '',
    translation: ''
  },
  {
    word: 'report',
    phrase: '',
    translation: ''
  },
  {
    word: 'represent',
    phrase: '',
    translation: ''
  },
  {
    word: 'Republican',
    phrase: '',
    translation: ''
  },
  {
    word: 'require',
    phrase: '',
    translation: ''
  },
  {
    word: 'research',
    phrase: '',
    translation: ''
  },
  {
    word: 'resource',
    phrase: '',
    translation: ''
  },
  {
    word: 'respond',
    phrase: '',
    translation: ''
  },
  {
    word: 'response',
    phrase: '',
    translation: ''
  },
  {
    word: 'responsibility',
    phrase: '',
    translation: ''
  },
  {
    word: 'rest',
    phrase: '',
    translation: ''
  },
  {
    word: 'result',
    phrase: '',
    translation: ''
  },
  {
    word: 'return',
    phrase: '',
    translation: ''
  },
  {
    word: 'reveal',
    phrase: '',
    translation: ''
  },
  {
    word: 'rich',
    phrase: '',
    translation: ''
  },
  {
    word: 'right',
    phrase: '',
    translation: ''
  },
  {
    word: 'rise',
    phrase: '',
    translation: ''
  },
  {
    word: 'risk',
    phrase: '',
    translation: ''
  },
  {
    word: 'road',
    phrase: '',
    translation: ''
  },
  {
    word: 'rock',
    phrase: '',
    translation: ''
  },
  {
    word: 'role',
    phrase: '',
    translation: ''
  },
  {
    word: 'room',
    phrase: '',
    translation: ''
  },
  {
    word: 'rule',
    phrase: '',
    translation: ''
  },
  {
    word: 'run',
    phrase: '',
    translation: ''
  },
  {
    word: 'safe',
    phrase: '',
    translation: ''
  },
  {
    word: 'same',
    phrase: '',
    translation: ''
  },
  {
    word: 'save',
    phrase: '',
    translation: ''
  },
  {
    word: 'say',
    phrase: '',
    translation: ''
  },
  {
    word: 'scene',
    phrase: '',
    translation: ''
  },
  {
    word: 'school',
    phrase: '',
    translation: ''
  },
  {
    word: 'science',
    phrase: '',
    translation: ''
  },
  {
    word: 'scientist',
    phrase: '',
    translation: ''
  },
  {
    word: 'score',
    phrase: '',
    translation: ''
  },
  {
    word: 'sea',
    phrase: '',
    translation: ''
  },
  {
    word: 'season',
    phrase: '',
    translation: ''
  },
  {
    word: 'seat',
    phrase: '',
    translation: ''
  },
  {
    word: 'second',
    phrase: '',
    translation: ''
  },
  {
    word: 'section',
    phrase: '',
    translation: ''
  },
  {
    word: 'security',
    phrase: '',
    translation: ''
  },
  {
    word: 'see',
    phrase: '',
    translation: ''
  },
  {
    word: 'seek',
    phrase: '',
    translation: ''
  },
  {
    word: 'seem',
    phrase: '',
    translation: ''
  },
  {
    word: 'sell',
    phrase: '',
    translation: ''
  },
  {
    word: 'send',
    phrase: '',
    translation: ''
  },
  {
    word: 'senior',
    phrase: '',
    translation: ''
  },
  {
    word: 'sense',
    phrase: '',
    translation: ''
  },
  {
    word: 'series',
    phrase: '',
    translation: ''
  },
  {
    word: 'serious',
    phrase: '',
    translation: ''
  },
  {
    word: 'serve',
    phrase: '',
    translation: ''
  },
  {
    word: 'service',
    phrase: '',
    translation: ''
  },
  {
    word: 'set',
    phrase: '',
    translation: ''
  },
  {
    word: 'seven',
    phrase: '',
    translation: ''
  },
  {
    word: 'several',
    phrase: '',
    translation: ''
  },
  {
    word: 'sex',
    phrase: '',
    translation: ''
  },
  {
    word: 'sexual',
    phrase: '',
    translation: ''
  },
  {
    word: 'shake',
    phrase: '',
    translation: ''
  },
  {
    word: 'share',
    phrase: '',
    translation: ''
  },
  {
    word: 'she',
    phrase: '',
    translation: ''
  },
  {
    word: 'shoot',
    phrase: '',
    translation: ''
  },
  {
    word: 'short',
    phrase: '',
    translation: ''
  },
  {
    word: 'shot',
    phrase: '',
    translation: ''
  },
  {
    word: 'should',
    phrase: '',
    translation: ''
  },
  {
    word: 'shoulder',
    phrase: '',
    translation: ''
  },
  {
    word: 'show',
    phrase: '',
    translation: ''
  },
  {
    word: 'side',
    phrase: '',
    translation: ''
  },
  {
    word: 'sign',
    phrase: '',
    translation: ''
  },
  {
    word: 'significant',
    phrase: '',
    translation: ''
  },
  {
    word: 'similar',
    phrase: '',
    translation: ''
  },
  {
    word: 'simple',
    phrase: '',
    translation: ''
  },
  {
    word: 'simply',
    phrase: '',
    translation: ''
  },
  {
    word: 'since',
    phrase: '',
    translation: ''
  },
  {
    word: 'sing',
    phrase: '',
    translation: ''
  },
  {
    word: 'single',
    phrase: '',
    translation: ''
  },
  {
    word: 'sister',
    phrase: '',
    translation: ''
  },
  {
    word: 'sit',
    phrase: '',
    translation: ''
  },
  {
    word: 'site',
    phrase: '',
    translation: ''
  },
  {
    word: 'situation',
    phrase: '',
    translation: ''
  },
  {
    word: 'six',
    phrase: '',
    translation: ''
  },
  {
    word: 'size',
    phrase: '',
    translation: ''
  },
  {
    word: 'skill',
    phrase: '',
    translation: ''
  },
  {
    word: 'skin',
    phrase: '',
    translation: ''
  },
  {
    word: 'small',
    phrase: '',
    translation: ''
  },
  {
    word: 'smile',
    phrase: '',
    translation: ''
  },
  {
    word: 'so',
    phrase: '',
    translation: ''
  },
  {
    word: 'social',
    phrase: '',
    translation: ''
  },
  {
    word: 'society',
    phrase: '',
    translation: ''
  },
  {
    word: 'soldier',
    phrase: '',
    translation: ''
  },
  {
    word: 'some',
    phrase: '',
    translation: ''
  },
  {
    word: 'somebody',
    phrase: '',
    translation: ''
  },
  {
    word: 'someone',
    phrase: '',
    translation: ''
  },
  {
    word: 'something',
    phrase: '',
    translation: ''
  },
  {
    word: 'sometimes',
    phrase: '',
    translation: ''
  },
  {
    word: 'son',
    phrase: '',
    translation: ''
  },
  {
    word: 'song',
    phrase: '',
    translation: ''
  },
  {
    word: 'soon',
    phrase: '',
    translation: ''
  },
  {
    word: 'sort',
    phrase: '',
    translation: ''
  },
  {
    word: 'sound',
    phrase: '',
    translation: ''
  },
  {
    word: 'source',
    phrase: '',
    translation: ''
  },
  {
    word: 'south',
    phrase: '',
    translation: ''
  },
  {
    word: 'southern',
    phrase: '',
    translation: ''
  },
  {
    word: 'space',
    phrase: '',
    translation: ''
  },
  {
    word: 'speak',
    phrase: '',
    translation: ''
  },
  {
    word: 'special',
    phrase: '',
    translation: ''
  },
  {
    word: 'specific',
    phrase: '',
    translation: ''
  },
  {
    word: 'speech',
    phrase: '',
    translation: ''
  },
  {
    word: 'spend',
    phrase: '',
    translation: ''
  },
  {
    word: 'sport',
    phrase: '',
    translation: ''
  },
  {
    word: 'spring',
    phrase: '',
    translation: ''
  },
  {
    word: 'staff',
    phrase: '',
    translation: ''
  },
  {
    word: 'stage',
    phrase: '',
    translation: ''
  },
  {
    word: 'stand',
    phrase: '',
    translation: ''
  },
  {
    word: 'standard',
    phrase: '',
    translation: ''
  },
  {
    word: 'star',
    phrase: '',
    translation: ''
  },
  {
    word: 'start',
    phrase: '',
    translation: ''
  },
  {
    word: 'state',
    phrase: '',
    translation: ''
  },
  {
    word: 'statement',
    phrase: '',
    translation: ''
  },
  {
    word: 'station',
    phrase: '',
    translation: ''
  },
  {
    word: 'stay',
    phrase: '',
    translation: ''
  },
  {
    word: 'step',
    phrase: '',
    translation: ''
  },
  {
    word: 'still',
    phrase: '',
    translation: ''
  },
  {
    word: 'stock',
    phrase: '',
    translation: ''
  },
  {
    word: 'stop',
    phrase: '',
    translation: ''
  },
  {
    word: 'store',
    phrase: '',
    translation: ''
  },
  {
    word: 'story',
    phrase: '',
    translation: ''
  },
  {
    word: 'strategy',
    phrase: '',
    translation: ''
  },
  {
    word: 'street',
    phrase: '',
    translation: ''
  },
  {
    word: 'strong',
    phrase: '',
    translation: ''
  },
  {
    word: 'structure',
    phrase: '',
    translation: ''
  },
  {
    word: 'student',
    phrase: '',
    translation: ''
  },
  {
    word: 'study',
    phrase: '',
    translation: ''
  },
  {
    word: 'stuff',
    phrase: '',
    translation: ''
  },
  {
    word: 'style',
    phrase: '',
    translation: ''
  },
  {
    word: 'subject',
    phrase: '',
    translation: ''
  },
  {
    word: 'success',
    phrase: '',
    translation: ''
  },
  {
    word: 'successful',
    phrase: '',
    translation: ''
  },
  {
    word: 'such',
    phrase: '',
    translation: ''
  },
  {
    word: 'suddenly',
    phrase: '',
    translation: ''
  },
  {
    word: 'suffer',
    phrase: '',
    translation: ''
  },
  {
    word: 'suggest',
    phrase: '',
    translation: ''
  },
  {
    word: 'summer',
    phrase: '',
    translation: ''
  },
  {
    word: 'support',
    phrase: '',
    translation: ''
  },
  {
    word: 'sure',
    phrase: '',
    translation: ''
  },
  {
    word: 'surface',
    phrase: '',
    translation: ''
  },
  {
    word: 'system',
    phrase: '',
    translation: ''
  },
  {
    word: 'table',
    phrase: '',
    translation: ''
  },
  {
    word: 'take',
    phrase: '',
    translation: ''
  },
  {
    word: 'talk',
    phrase: '',
    translation: ''
  },
  {
    word: 'task',
    phrase: '',
    translation: ''
  },
  {
    word: 'tax',
    phrase: '',
    translation: ''
  },
  {
    word: 'teach',
    phrase: '',
    translation: ''
  },
  {
    word: 'teacher',
    phrase: '',
    translation: ''
  },
  {
    word: 'team',
    phrase: '',
    translation: ''
  },
  {
    word: 'technology',
    phrase: '',
    translation: ''
  },
  {
    word: 'television',
    phrase: '',
    translation: ''
  },
  {
    word: 'tell',
    phrase: '',
    translation: ''
  },
  {
    word: 'ten',
    phrase: '',
    translation: ''
  },
  {
    word: 'tend',
    phrase: '',
    translation: ''
  },
  {
    word: 'term',
    phrase: '',
    translation: ''
  },
  {
    word: 'test',
    phrase: '',
    translation: ''
  },
  {
    word: 'than',
    phrase: '',
    translation: ''
  },
  {
    word: 'thank',
    phrase: '',
    translation: ''
  },
  {
    word: 'that',
    phrase: '',
    translation: ''
  },
  {
    word: 'the',
    phrase: '',
    translation: ''
  },
  {
    word: 'their',
    phrase: '',
    translation: ''
  },
  {
    word: 'them',
    phrase: '',
    translation: ''
  },
  {
    word: 'themselves',
    phrase: '',
    translation: ''
  },
  {
    word: 'then',
    phrase: '',
    translation: ''
  },
  {
    word: 'theory',
    phrase: '',
    translation: ''
  },
  {
    word: 'there',
    phrase: '',
    translation: ''
  },
  {
    word: 'these',
    phrase: '',
    translation: ''
  },
  {
    word: 'they',
    phrase: '',
    translation: ''
  },
  {
    word: 'thing',
    phrase: '',
    translation: ''
  },
  {
    word: 'think',
    phrase: '',
    translation: ''
  },
  {
    word: 'third',
    phrase: '',
    translation: ''
  },
  {
    word: 'this',
    phrase: '',
    translation: ''
  },
  {
    word: 'those',
    phrase: '',
    translation: ''
  },
  {
    word: 'though',
    phrase: '',
    translation: ''
  },
  {
    word: 'thought',
    phrase: '',
    translation: ''
  },
  {
    word: 'thousand',
    phrase: '',
    translation: ''
  },
  {
    word: 'threat',
    phrase: '',
    translation: ''
  },
  {
    word: 'three',
    phrase: '',
    translation: ''
  },
  {
    word: 'through',
    phrase: '',
    translation: ''
  },
  {
    word: 'throughout',
    phrase: '',
    translation: ''
  },
  {
    word: 'throw',
    phrase: '',
    translation: ''
  },
  {
    word: 'thus',
    phrase: '',
    translation: ''
  },
  {
    word: 'time',
    phrase: '',
    translation: ''
  },
  {
    word: 'to',
    phrase: '',
    translation: ''
  },
  {
    word: 'today',
    phrase: '',
    translation: ''
  },
  {
    word: 'together',
    phrase: '',
    translation: ''
  },
  {
    word: 'tonight',
    phrase: '',
    translation: ''
  },
  {
    word: 'too',
    phrase: '',
    translation: ''
  },
  {
    word: 'top',
    phrase: '',
    translation: ''
  },
  {
    word: 'total',
    phrase: '',
    translation: ''
  },
  {
    word: 'tough',
    phrase: '',
    translation: ''
  },
  {
    word: 'toward',
    phrase: '',
    translation: ''
  },
  {
    word: 'town',
    phrase: '',
    translation: ''
  },
  {
    word: 'trade',
    phrase: '',
    translation: ''
  },
  {
    word: 'traditional',
    phrase: '',
    translation: ''
  },
  {
    word: 'training',
    phrase: '',
    translation: ''
  },
  {
    word: 'travel',
    phrase: '',
    translation: ''
  },
  {
    word: 'treat',
    phrase: '',
    translation: ''
  },
  {
    word: 'treatment',
    phrase: '',
    translation: ''
  },
  {
    word: 'tree',
    phrase: '',
    translation: ''
  },
  {
    word: 'trial',
    phrase: '',
    translation: ''
  },
  {
    word: 'trip',
    phrase: '',
    translation: ''
  },
  {
    word: 'trouble',
    phrase: '',
    translation: ''
  },
  {
    word: 'true',
    phrase: '',
    translation: ''
  },
  {
    word: 'truth',
    phrase: '',
    translation: ''
  },
  {
    word: 'try',
    phrase: 'Try to call me on Saturdays',
    translation: 'tentar'
  },
  {
    word: 'turn',
    phrase: '',
    translation: ''
  },
  {
    word: 'TV',
    phrase: '',
    translation: ''
  },
  {
    word: 'two',
    phrase: '',
    translation: ''
  },
  {
    word: 'type',
    phrase: '',
    translation: ''
  },
  {
    word: 'under',
    phrase: '',
    translation: ''
  },
  {
    word: 'understand',
    phrase: '',
    translation: ''
  },
  {
    word: 'unit',
    phrase: '',
    translation: ''
  },
  {
    word: 'until',
    phrase: '',
    translation: ''
  },
  {
    word: 'up',
    phrase: '',
    translation: ''
  },
  {
    word: 'upon',
    phrase: '',
    translation: ''
  },
  {
    word: 'us',
    phrase: '',
    translation: ''
  },
  {
    word: 'use',
    phrase: '',
    translation: ''
  },
  {
    word: 'usually',
    phrase: '',
    translation: ''
  },
  {
    word: 'value',
    phrase: '',
    translation: ''
  },
  {
    word: 'various',
    phrase: '',
    translation: ''
  },
  {
    word: 'very',
    phrase: '',
    translation: ''
  },
  {
    word: 'victim',
    phrase: '',
    translation: ''
  },
  {
    word: 'view',
    phrase: '',
    translation: ''
  },
  {
    word: 'violence',
    phrase: '',
    translation: ''
  },
  {
    word: 'visit',
    phrase: '',
    translation: ''
  },
  {
    word: 'voice',
    phrase: '',
    translation: ''
  },
  {
    word: 'vote',
    phrase: '',
    translation: ''
  },
  {
    word: 'wait',
    phrase: '',
    translation: ''
  },
  {
    word: 'walk',
    phrase: '',
    translation: ''
  },
  {
    word: 'wall',
    phrase: '',
    translation: ''
  },
  {
    word: 'want',
    phrase: '',
    translation: ''
  },
  {
    word: 'war',
    phrase: '',
    translation: ''
  },
  {
    word: 'watch',
    phrase: '',
    translation: ''
  },
  {
    word: 'water',
    phrase: '',
    translation: ''
  },
  {
    word: 'way',
    phrase: '',
    translation: ''
  },
  {
    word: 'we',
    phrase: '',
    translation: ''
  },
  {
    word: 'weapon',
    phrase: '',
    translation: ''
  },
  {
    word: 'wear',
    phrase: '',
    translation: ''
  },
  {
    word: 'week',
    phrase: '',
    translation: ''
  },
  {
    word: 'weight',
    phrase: '',
    translation: ''
  },
  {
    word: 'well',
    phrase: '',
    translation: ''
  },
  {
    word: 'west',
    phrase: '',
    translation: ''
  },
  {
    word: 'western',
    phrase: '',
    translation: ''
  },
  {
    word: 'what',
    phrase: '',
    translation: ''
  },
  {
    word: 'whatever',
    phrase: '',
    translation: ''
  },
  {
    word: 'when',
    phrase: '',
    translation: ''
  },
  {
    word: 'where',
    phrase: '',
    translation: ''
  },
  {
    word: 'whether',
    phrase: '',
    translation: ''
  },
  {
    word: 'which',
    phrase: '',
    translation: ''
  },
  {
    word: 'while',
    phrase: '',
    translation: ''
  },
  {
    word: 'white',
    phrase: '',
    translation: ''
  },
  {
    word: 'who',
    phrase: '',
    translation: ''
  },
  {
    word: 'whole',
    phrase: '',
    translation: ''
  },
  {
    word: 'whom',
    phrase: '',
    translation: ''
  },
  {
    word: 'whose',
    phrase: '',
    translation: ''
  },
  {
    word: 'why',
    phrase: '',
    translation: ''
  },
  {
    word: 'wide',
    phrase: '',
    translation: ''
  },
  {
    word: 'wife',
    phrase: '',
    translation: ''
  },
  {
    word: 'will',
    phrase: '',
    translation: ''
  },
  {
    word: 'win',
    phrase: '',
    translation: ''
  },
  {
    word: 'wind',
    phrase: '',
    translation: ''
  },
  {
    word: 'window',
    phrase: '',
    translation: ''
  },
  {
    word: 'wish',
    phrase: '',
    translation: ''
  },
  {
    word: 'with',
    phrase: '',
    translation: ''
  },
  {
    word: 'within',
    phrase: '',
    translation: ''
  },
  {
    word: 'without',
    phrase: '',
    translation: ''
  },
  {
    word: 'woman',
    phrase: '',
    translation: ''
  },
  {
    word: 'wonder',
    phrase: '',
    translation: ''
  },
  {
    word: 'word',
    phrase: '',
    translation: ''
  },
  {
    word: 'work',
    phrase: '',
    translation: ''
  },
  {
    word: 'worker',
    phrase: '',
    translation: ''
  },
  {
    word: 'world',
    phrase: '',
    translation: ''
  },
  {
    word: 'worry',
    phrase: '',
    translation: ''
  },
  {
    word: 'would',
    phrase: '',
    translation: ''
  },
  {
    word: 'write',
    phrase: '',
    translation: ''
  },
  {
    word: 'writer',
    phrase: '',
    translation: ''
  },
  {
    word: 'wrong',
    phrase: '',
    translation: ''
  },
  {
    word: 'yard',
    phrase: '',
    translation: ''
  },
  {
    word: 'yeah',
    phrase: '',
    translation: ''
  },
  {
    word: 'year',
    phrase: '',
    translation: ''
  },
  {
    word: 'yes',
    phrase: '',
    translation: ''
  },
  {
    word: 'yet',
    phrase: '',
    translation: ''
  },
  {
    word: 'you',
    phrase: '',
    translation: ''
  },
  {
    word: 'young',
    phrase: '',
    translation: ''
  },
  {
    word: 'your',
    phrase: '',
    translation: ''
  },
  {
    word: 'yourself',
    phrase: '',
    translation: ''
  }
];

export default CONTENTS;
