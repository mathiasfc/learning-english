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
    phrase: 'I paid the electric and water bill this week',
    translation: 'conta'
  },
  {
    word: 'billion',
    phrase: 'A billion different stories and experiences',
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
    phrase: 'If you break it, you replace it',
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
    phrase: 'Please call me Lucy',
    translation: 'ligar'
  },
  {
    word: 'camera',
    phrase: `A photographer's camera flashed`,
    translation: 'câmera'
  },
  {
    word: 'campaign',
    phrase: 'An election campaign',
    translation: 'campanha'
  },
  {
    word: 'can',
    phrase: 'I can speak English',
    translation: 'posso'
  },
  {
    word: 'cancer',
    phrase: 'Smoking is the major cause of lung cancer',
    translation: 'câncer'
  },
  {
    word: 'candidate',
    phrase: 'She was the perfect candidate for a biography',
    translation: 'candidato'
  },
  {
    word: 'capital',
    phrase: 'Warsaw is the capital of Poland',
    translation: 'capital'
  },
  {
    word: 'car',
    phrase: 'She drove up in a car',
    translation: 'carro'
  },
  {
    word: 'card',
    phrase: 'A birthday card',
    translation: 'carta/cartão'
  },
  {
    word: 'care',
    phrase: `They don't care about human life`,
    translation: 'cuidado'
  },
  {
    word: 'career',
    phrase: 'He seemed destined for a career as an engineer like his father',
    translation: 'carreira'
  },
  {
    word: 'carry',
    phrase: 'We did a carry of equipment from the camp',
    translation: 'carregar'
  },
  {
    word: 'case',
    phrase: `I'll make an exception in your case`,
    translation: 'caso'
  },
  {
    word: 'catch',
    phrase: 'A record catch of 6.9 billion pounds of fish',
    translation: 'pegar/capturar'
  },
  {
    word: 'cause',
    phrase: 'The cause of the bug is not clear',
    translation: 'causa'
  },
  {
    word: 'cell',
    phrase:
      'In every cell of your body except your red blood cells exists a copy of your DNA',
    translation: 'célula'
  },
  {
    word: 'center',
    phrase: 'In the center was a large emerald-green star',
    translation: 'centro'
  },
  {
    word: 'central',
    phrase: 'After the war, it remained a central hub',
    translation: 'central'
  },
  {
    word: 'century',
    phrase: 'A century later, machines entered the scene',
    translation: 'século'
  },
  {
    word: 'certain',
    phrase: 'I feel certain of it',
    translation: 'certo(a)'
  },
  {
    word: 'certainly',
    phrase: 'Certainly she had been under a lot of stress',
    translation: 'certamente'
  },
  {
    word: 'chair',
    phrase: 'a chair by the window',
    translation: 'cadeira'
  },
  {
    word: 'challenge',
    phrase: "A number of doctors are challenging the study's claims",
    translation: 'desafio'
  },
  {
    word: 'chance',
    phrase: 'This is the chance of a lifetime!',
    translation: 'chance'
  },
  {
    word: 'change',
    phrase: 'going through changes',
    translation: 'mudar'
  },
  {
    word: 'character',
    phrase: 'a cheerful disposition',
    translation: 'personagem'
  },
  {
    word: 'charge',
    phrase: 'They were charged as being instigators',
    translation: 'carga'
  },
  {
    word: 'check',
    phrase: 'checking out new cars',
    translation: 'checar'
  },
  { word: 'child', phrase: 'a child of nature', translation: 'filho(a)' },
  { word: 'choice', phrase: 'freedom of choice', translation: 'escolha' },
  {
    word: 'choose',
    phrase: 'The political party chose a leader',
    translation: 'escolher'
  },
  {
    word: 'church',
    phrase: 'This is the oldest church in town',
    translation: 'igreja'
  },
  {
    word: 'citizen',
    phrase: 'the rights of a free citizen',
    translation: 'cidadão / cidadã'
  },
  {
    word: 'city',
    phrase: 'Getting lost in the maze was panic city',
    translation: 'cidade'
  },
  {
    word: 'civil',
    phrase: 'It was hard to be civil when I felt so angry',
    translation: 'civil'
  },
  {
    word: 'claim',
    phrase: 'The driver claimed the right to a hearing',
    translation: 'afirmação'
  },
  {
    word: 'class',
    phrase: 'There are 20 students in the class',
    translation: 'aula'
  },
  {
    word: 'clear',
    phrase: 'clear plastic bags',
    translation: 'claro/evidente'
  },
  {
    word: 'clearly',
    phrase: 'You should try to speak more clearly',
    translation: 'claramente'
  },
  {
    word: 'close',
    phrase:
      'closed his football career with an outstanding big bowl performance',
    translation: 'fechar/perto'
  },
  { word: 'coach', phrase: 'a birth coach', translation: 'treinador(a)' },
  { word: 'cold', phrase: 'a cold drafty attic', translation: 'frio' },
  {
    word: 'collection',
    phrase: 'the collection of taxes',
    translation: 'coleção'
  },
  {
    word: 'college',
    phrase: 'an embalming college',
    translation: 'faculdade'
  },
  {
    word: 'color',
    phrase: 'wore his college colors to the game',
    translation: 'cor'
  },
  {
    word: 'come',
    phrase: "Come and see what's going on",
    translation: 'venha'
  },
  {
    word: 'commercial',
    phrase: 'commercial services',
    translation: 'comercial'
  },
  {
    word: 'common',
    phrase: 'buried in a common grave',
    translation: 'comum'
  },
  {
    word: 'community',
    phrase: 'a monastic community',
    translation: 'comunidade'
  },
  {
    word: 'company',
    phrase: 'a publishing company',
    translation: 'companhia'
  },
  {
    word: 'compare',
    phrase: 'The test was easy compared with the last one',
    translation: 'comparar'
  },
  {
    word: 'computer',
    phrase: 'He works all day on a computer',
    translation: 'computador'
  },
  {
    word: 'concern',
    phrase: 'The report concerns global warming',
    translation: 'interesse'
  },
  {
    word: 'condition',
    phrase: 'exercising to get into condition',
    translation: 'condição'
  },
  {
    word: 'conference',
    phrase: 'The organization held its annual conference in New York this year',
    translation: 'conferência'
  },
  {
    word: 'congress',
    phrase: "She was recently elected to the country's congress",
    translation: 'congresso'
  },
  {
    word: 'consider',
    phrase: 'considered moving to the city',
    translation: 'considerar'
  },
  {
    word: 'consumer',
    phrase:
      'Many consumers are still not comfortable making purchases on the Internet',
    translation: 'consumidor(a)'
  },
  {
    word: 'contain',
    phrase: 'Firefighters contained the wildfire',
    translation: 'conter'
  },
  {
    word: 'continue',
    phrase: 'the search for peace will continue',
    translation: 'continuar'
  },
  {
    word: 'control',
    phrase: 'control a disease',
    translation: 'controlar'
  },
  {
    word: 'cost',
    phrase: 'She attends college at a cost of $15,000 a year',
    translation: 'custo'
  },
  {
    word: 'could',
    phrase: 'You could have been hurt',
    translation: 'poderia'
  },
  {
    word: 'country',
    phrase: 'The two countries have a lot in common',
    translation: 'país'
  },
  { word: 'couple', phrase: 'a couple weeks', translation: 'casal' },
  {
    word: 'course',
    phrase: 'the course of a river',
    translation: 'curso'
  },
  {
    word: 'court',
    phrase: 'Both candidates were courting the independent voters',
    translation: 'tribunal'
  },
  {
    word: 'cover',
    phrase: 'The gardener covered the soil with mulch',
    translation: 'cobrir'
  },
  { word: 'create', phrase: 'create new jobs', translation: 'criar' },
  {
    word: 'crime',
    phrase: 'at that school no offense went unpunished',
    translation: 'crime'
  },
  {
    word: 'cultural',
    phrase: 'We studied our cultural heritage',
    translation: 'cultural'
  },
  { word: 'culture', phrase: 'Southern culture', translation: 'cultura' },
  {
    word: 'cup',
    phrase: 'Would you like another cup of tea?',
    translation: 'copo'
  },
  { word: 'current', phrase: 'current supplies', translation: 'atual' },
  {
    word: 'customer',
    phrase: 'She is one of our best customers',
    translation: 'cliente'
  },
  { word: 'cut', phrase: 'cut a commercial', translation: 'cortar' },
  {
    word: 'dark',
    phrase: 'obscure poems',
    translation: 'sombrio/escuro'
  },
  {
    word: 'data',
    phrase: 'These data have been questioned',
    translation: 'dados'
  },
  {
    word: 'daughter',
    phrase: 'daughter DNA molecules',
    translation: 'filha'
  },
  {
    word: 'day',
    phrase: 'the first day of every month',
    translation: 'dia'
  },
  { word: 'dead', phrase: 'dead soldiers', translation: 'morto(a)' },
  {
    word: 'deal',
    phrase: 'a lawyer who deals with real estate law',
    translation: 'lídar/acordo'
  },
  {
    word: 'death',
    phrase: 'managed to escape death',
    translation: 'morto'
  },
  {
    word: 'debate',
    phrase: 'The case sparked a raging public debate on property rights',
    translation: 'debate'
  },
  {
    word: 'decade',
    phrase: 'the decade of the twenties',
    translation: 'década'
  },
  {
    word: 'decide',
    phrase: "couldn't decide whether to take the job or not",
    translation: 'decidir'
  },
  {
    word: 'decision',
    phrase: 'a Supreme Court decision',
    translation: 'decisão'
  },
  { word: 'deep', phrase: 'a deep chasm', translation: 'profundo(a)' },
  {
    word: 'defense',
    phrase: 'speak out in defense of justice',
    translation: 'defesa'
  },
  {
    word: 'degree',
    phrase: 'requiring a high degree of skill',
    translation: 'grau/diploma'
  },
  {
    word: 'democrat',
    phrase:
      "a true democrat, he has always abhorred that nation's class system",
    translation: 'democrata'
  },
  {
    word: 'democratic',
    phrase: 'a democratic government',
    translation: 'democrático(a0'
  },
  {
    word: 'describe',
    phrase: 'The police asked her to describe the thief',
    translation: 'descrever'
  },
  {
    word: 'design',
    phrase: 'a suitcase designed to hold a laptop computer',
    translation: 'desenhar/projetar'
  },
  {
    word: 'despite',
    phrase: 'we went to the party despite the bad weather outside',
    translation: 'apesar de'
  },
  {
    word: 'detail',
    phrase: 'giving careful attention to detail',
    translation: 'detalhe'
  },
  {
    word: 'determine',
    phrase: "the extent to which genetics determines one's personality",
    translation: 'determinar'
  },
  {
    word: 'develop',
    phrase: 'develop software',
    translation: 'desenvolve'
  },
  {
    word: 'development',
    phrase: 'an interesting development in the case',
    translation: 'desenvolvimento'
  },
  { word: 'die', phrase: 'die a thousand deaths', translation: 'morrer' },
  {
    word: 'difference',
    phrase: 'She knows the difference between right and wrong',
    translation: 'diferença'
  },
  {
    word: 'different',
    phrase: 'different foods',
    translation: 'diferente'
  },
  {
    word: 'difficult',
    phrase: 'having a difficult time coping with her death',
    translation: 'dificuldade'
  },
  {
    word: 'dinner',
    phrase: 'We had many pleasant dinners together',
    translation: 'jantar'
  },
  {
    word: 'direction',
    phrase: 'follow directions',
    translation: 'direção'
  },
  {
    word: 'director',
    phrase: 'a communications director',
    translation: 'diretor'
  },
  {
    word: 'discover',
    phrase: 'discovered a new Italian restaurant',
    translation: 'descobrir'
  },
  {
    word: 'discuss',
    phrase: 'discussed the need for a new highway',
    translation: 'discutir'
  },
  {
    word: 'discussion',
    phrase: 'The class was involved in a heated discussion about politics',
    translation: 'discusão'
  },
  {
    word: 'disease',
    phrase: 'a rare genetic disease',
    translation: 'doença'
  },
  { word: 'do', phrase: 'did his duty', translation: 'faz/fazer' },
  {
    word: 'doctor',
    phrase: 'The class is being taught by Doctor Menzer',
    translation: 'doutor'
  },
  {
    word: 'dog',
    phrase: 'you lucky dog',
    translation: 'cachorro/cadela'
  },
  { word: 'door', phrase: 'door to success', translation: 'porta' },
  {
    word: 'down',
    phrase: 'Pull down the blind',
    translation: 'baixo(a)'
  },
  { word: 'draw', phrase: 'drew a gun', translation: 'desenhar' },
  { word: 'dream', phrase: 'gives me bad dreams', translation: 'sonho' },
  {
    word: 'drive',
    phrase: 'drive the nail into the beam',
    translation: 'dirigir'
  },
  { word: 'drop', phrase: 'a drop in demand', translation: 'solta' },
  {
    word: 'drug',
    phrase: 'drugs for treating high blood pressure',
    translation: 'medicamento/droga'
  },
  {
    word: 'during',
    phrase: 'She swims every day during the summer',
    translation: 'durante'
  },
  {
    word: 'each',
    phrase: 'A rope was tied to each end of the boat',
    translation: 'cada'
  },
  {
    word: 'early',
    phrase: 'the early symptoms of the disease',
    translation: 'cedo'
  },
  { word: 'east', phrase: 'the east side of town', translation: 'leste' },
  {
    word: 'easy',
    phrase: 'an easy mark for con men',
    translation: 'fácil'
  },
  {
    word: 'eat',
    phrase: 'gadgets that eat up too much space',
    translation: 'comer'
  },
  {
    word: 'economic',
    phrase: 'a program to prevent inflation and economic collapse',
    translation: 'económico'
  },
  {
    word: 'economy',
    phrase: "The war altered the country's economy",
    translation: 'economia'
  },
  {
    word: 'edge',
    phrase: 'They peered over the edge of the roof',
    translation: 'borda'
  },
  {
    word: 'education',
    phrase:
      'The school is devoted to the education of children with reading difficulties',
    translation: 'educação'
  },
  {
    word: 'effect',
    phrase: 'performed gymnastics',
    translation: 'efeito'
  },
  {
    word: 'effort',
    phrase: 'He put a lot of effort into finishing the project on time',
    translation: 'empenho'
  },
  { word: 'eight', phrase: '', translation: 'oito' },
  {
    word: 'either',
    phrase: 'plays either instrument well',
    translation: 'tampouco'
  },
  {
    word: 'election',
    phrase: 'freedom of choice',
    translation: 'eleição'
  },
  { word: 'else', phrase: 'here and nowhere else', translation: 'mais' },
  {
    word: 'employee',
    phrase: 'A good boss listens to his employees',
    translation: 'empregado'
  },
  { word: 'end', phrase: 'end markets', translation: 'terminar' },
  {
    word: 'energy',
    phrase: 'the awesome power of flowing water',
    translation: 'energia'
  },
  {
    word: 'enjoy',
    phrase: 'Relax and enjoy the view',
    translation: 'gozar'
  },
  {
    word: 'enough',
    phrase: 'had enough of their foolishness',
    translation: 'suficiente'
  },
  { word: 'enter', phrase: 'enter a race', translation: 'entrar' },
  {
    word: 'entire',
    phrase: 'read the whole book',
    translation: 'inteiro'
  },
  {
    word: 'environment',
    phrase: 'the shocking decision was part of the background of the riots',
    translation: 'ambiente'
  },
  {
    word: 'environmental',
    phrase: 'the shocking decision was part of the background of the riots',
    translation: 'ambiental'
  },
  {
    word: 'especially',
    phrase: 'nothing especially radical in the remarks',
    translation: 'especialmente'
  },
  {
    word: 'establish',
    phrase: 'The film established her as a star',
    translation: 'estabelecer'
  },
  {
    word: 'even',
    phrase: 'the vast prairies are nearly level',
    translation: 'mesmo'
  },
  { word: 'evening', phrase: 'evening clothes', translation: 'noite' },
  {
    word: 'event',
    phrase: 'an encounter that was a chance occurrence',
    translation: 'acontecimento'
  },
  {
    word: 'ever',
    phrase: 'the ever-increasing population',
    translation: 'alguma vez'
  },
  { word: 'every', phrase: 'every once in a while', translation: 'cada' },
  {
    word: 'everybody',
    phrase: 'The president waved to everybody in the crowd',
    translation: 'todos'
  },
  {
    word: 'everyone',
    phrase: 'Not everyone finished their meal',
    translation: 'todos'
  },
  {
    word: 'everything',
    phrase: 'People will buy everything she paints',
    translation: 'tudo'
  },
  {
    word: 'evidence',
    phrase: 'careful not to show his true feelings',
    translation: 'evidência'
  },
  {
    word: 'exactly',
    phrase: 'these two pieces are exactly the same size',
    translation: 'exatamente'
  },
  {
    word: 'example',
    phrase: 'an instance of history repeating itself',
    translation: 'exemplo'
  },
  {
    word: 'executive',
    phrase: 'She has good executive skills',
    translation: 'executivo'
  },
  {
    word: 'exist',
    phrase: 'the largest galaxy known to exist',
    translation: 'existir'
  },
  {
    word: 'expect',
    phrase: 'expect that things will improve',
    translation: 'esperar'
  },
  {
    word: 'experience',
    phrase: 'The best way to learn is by experience',
    translation: 'experiência'
  },
  {
    word: 'expert',
    phrase: 'proficient in translating foreign languages',
    translation: 'especialista'
  },
  {
    word: 'explain',
    phrase: 'explain the rules',
    translation: 'explicar'
  },
  { word: 'eye', phrase: 'in the public eye', translation: 'olho' },
  {
    word: 'face',
    phrase: 'the face of an anvil',
    translation: 'rosto'
  },
  {
    word: 'fact',
    phrase: 'Rapid electronic communication is now a fact',
    translation: 'fato'
  },
  {
    word: 'factor',
    phrase: 'There were several factors contributing to their recent decline',
    translation: 'fator'
  },
  {
    word: 'fail',
    phrase:
      'He failed in his first attempt but succeeded in his second attempt',
    translation: 'falhar'
  },
  { word: 'fall', phrase: 'We fell into a trap', translation: 'cair' },
  { word: 'family', phrase: 'family movies', translation: 'família' },
  {
    word: 'far',
    phrase: 'worked far into the night',
    translation: 'longe'
  },
  { word: 'fast', phrase: 'acid-fast bacteria', translation: 'rápido' },
  {
    word: 'father',
    phrase: 'He became a father when he was 30',
    translation: 'father'
  },
  {
    word: 'fear',
    phrase: 'feared to go out at night',
    translation: 'medo'
  },
  {
    word: 'federal',
    phrase: 'We pay federal, state, and local taxes',
    translation: 'federal'
  },
  {
    word: 'feel',
    phrase: 'He felt a sudden pain in his leg',
    translation: 'sentir-se'
  },
  {
    word: 'feeling',
    phrase: 'the feelings that once moved me are gone',
    translation: 'sentimento'
  },
  {
    word: 'few',
    phrase: 'few of his stories are true',
    translation: 'pouco'
  },
  {
    word: 'field',
    phrase: 'a gravitational field',
    translation: 'campo'
  },
  {
    word: 'fight',
    phrase: 'was fighting a forest fire',
    translation: 'lutar'
  },
  {
    word: 'figure',
    phrase: 'a score in double figures',
    translation: 'figura'
  },
  { word: 'fill', phrase: 'fill in the blanks', translation: 'encher' },
  { word: 'film', phrase: 'film critics', translation: 'filme' },
  { word: 'final', phrase: 'final exams', translation: 'final' },
  {
    word: 'finally',
    phrase: 'He finally got around to calling',
    translation: 'enfim'
  },
  {
    word: 'financial',
    phrase: 'the financial district',
    translation: 'financeiro'
  },
  {
    word: 'find',
    phrase: 'found himself on the verge of bankruptcy',
    translation: 'encontrar'
  },
  { word: 'fine', phrase: 'a fine day', translation: 'multa' },
  {
    word: 'finger',
    phrase: "Don't stick your fingers in the cookie batter!",
    translation: 'dedo'
  },
  { word: 'finish', phrase: 'close a debate', translation: 'acabar' },
  {
    word: 'fire',
    phrase: 'They opened fire on [=began shooting at] the enemy',
    translation: 'despedir'
  },
  { word: 'firm', phrase: 'a firm date', translation: 'firme' },
  {
    word: 'first',
    phrase: 'his first girlfriend',
    translation: 'primeira'
  },
  { word: 'fish', phrase: 'cuttlefish', translation: 'peixe' },
  {
    word: 'five',
    phrase: 'I get off work at five',
    translation: 'cinco'
  },
  {
    word: 'floor',
    phrase: 'Keep your feet on the floor',
    translation: 'chão'
  },
  { word: 'fly', phrase: 'butterfly', translation: 'mosca' },
  {
    word: 'focus',
    phrase: 'put immigration into focus as a hot topic for commentators',
    translation: 'foco'
  },
  {
    word: 'follow',
    phrase: 'speeches followed the dinner',
    translation: 'seguir'
  },
  {
    word: 'food',
    phrase: 'Books were his mental food',
    translation: 'comida'
  },
  {
    word: 'foot',
    phrase: 'He was wearing boots on his feet',
    translation: 'pé'
  },
  { word: 'for', phrase: 'acted for the best', translation: 'durante' },
  {
    word: 'force',
    phrase: 'the motivating force in her life',
    translation: 'força'
  },
  {
    word: 'foreign',
    phrase: 'foreign languages',
    translation: 'estrangeiro'
  },
  {
    word: 'forget',
    phrase: "He's now a forgotten hero",
    translation: 'esquecer'
  },
  { word: 'form', phrase: 'a form of art', translation: 'forma' },
  {
    word: 'former',
    phrase: 'restoring the theater to its former glory',
    translation: 'antigo'
  },
  {
    word: 'forward',
    phrase: 'moved slowly forward',
    translation: 'encaminhar'
  },
  {
    word: 'four',
    phrase: "What time is it? It's four",
    translation: 'quatro'
  },
  { word: 'free', phrase: 'a free ticket', translation: 'livre' },
  {
    word: 'friend',
    phrase: 'The friends of the library will host a fund-raiser',
    translation: 'amigo'
  },
  { word: 'from', phrase: 'a week from today', translation: 'de' },
  {
    word: 'front',
    phrase:
      'the front of the church features a magnificent stained-glass window',
    translation: 'frente'
  },
  { word: 'full', phrase: 'gone a full hour', translation: 'cheio' },
  {
    word: 'fund',
    phrase: 'The fund was established to aid the poor',
    translation: 'fundo'
  },
  {
    word: 'future',
    phrase: 'We cannot foretell future events',
    translation: 'futuro'
  },
  { word: 'game', phrase: 'the game of politics', translation: 'jogo' },
  { word: 'garden', phrase: 'a garden hose', translation: 'jardim' },
  {
    word: 'gas',
    phrase: 'ran out of gas in the seventh inning',
    translation: 'gás'
  },
  {
    word: 'general',
    phrase: 'They have issued a general warning',
    translation: 'geral'
  },
  {
    word: 'generation',
    phrase: 'She was worshipped by a generation of moviegoers',
    translation: 'geração'
  },
  {
    word: 'get',
    phrase: 'get the better of an enemy',
    translation: 'obter'
  },
  {
    word: 'girl',
    phrase: 'Is this your little girl?',
    translation: 'menina'
  },
  {
    word: 'give',
    phrase: '84 divided by 12 gives 7',
    translation: 'dar'
  },
  {
    word: 'glass',
    phrase: 'The waiter filled our glasses with water',
    translation: 'vidro'
  },
  { word: 'go', phrase: 'went by train', translation: 'go' },
  {
    word: 'goal',
    phrase: 'announced his intention to marry',
    translation: 'objetivo'
  },
  {
    word: 'good',
    phrase: 'good for a hundred dollars',
    translation: 'bom'
  },
  {
    word: 'government',
    phrase: 'The government has been slow to react to the crisis',
    translation: 'governo'
  },
  { word: 'great', phrase: 'It was just great', translation: 'legal' },
  {
    word: 'green',
    phrase: 'fields green with meadow grass',
    translation: 'verde'
  },
  { word: 'ground', phrase: 'fishing grounds', translation: 'chão' },
  {
    word: 'group',
    phrase: "It'll be easier if we go there as a group",
    translation: 'grupo'
  },
  {
    word: 'grow',
    phrase: 'The city is growing rapidly',
    translation: 'crescer'
  },
  {
    word: 'growth',
    phrase: 'He had a growth spurt when he was 16 years old',
    translation: 'crescimento'
  },
  {
    word: 'guess',
    phrase: 'Can you guess how many people were there?',
    translation: 'adivinhar'
  },
  {
    word: 'gun',
    phrase: 'a gun battle between gang members and the police',
    translation: 'arma'
  },
  { word: 'guy', phrase: 'This guy is my brother', translation: 'cara' },
  {
    word: 'hair',
    phrase: 'He plucked a hair from his arm',
    translation: 'pelo'
  },
  {
    word: 'half',
    phrase: 'the larger half of the fortune',
    translation: 'metade'
  },
  {
    word: 'hand',
    phrase: 'She put her hands over her eyes',
    translation: 'mão'
  },
  {
    word: 'hang',
    phrase: 'a room hung with streamers',
    translation: 'pendurar'
  },
  {
    word: 'happen',
    phrase: 'Something like that was bound to happen sooner or later',
    translation: 'acontecer'
  },
  { word: 'happy', phrase: 'a happy childhood', translation: 'feliz' },
  {
    word: 'hard',
    phrase: 'an uncomfortably hard chair',
    translation: 'duro'
  },
  { word: 'have', phrase: 'I have my rights', translation: 'ter' },
  {
    word: 'he',
    phrase: 'one should do the best he can',
    translation: 'ele'
  },
  { word: 'head', phrase: 'head of a sail', translation: 'cabeça' },
  { word: 'health', phrase: 'in poor health', translation: 'saúde' },
  {
    word: 'hear',
    phrase: 'thought I heard them leave',
    translation: 'ouvir'
  },
  {
    word: 'heart',
    phrase: 'a man after my own heart',
    translation: 'coração'
  },
  {
    word: 'heat',
    phrase: 'heat the oven to 350 degrees',
    translation: 'calor'
  },
  { word: 'heavy', phrase: 'heavy clouds', translation: 'pesado' },
  {
    word: 'help',
    phrase: 'took an aspirin to help her headache',
    translation: 'ajuda'
  },
  { word: 'her', phrase: 'her research', translation: 'dela' },
  { word: 'here', phrase: 'this book here', translation: 'aqui' },
  { word: 'herself', phrase: 'she herself did it', translation: 'se' },
  { word: 'high', phrase: 'a high fly ball', translation: 'chapado' },
  { word: 'him', phrase: '', translation: 'ele' },
  {
    word: 'himself',
    phrase: 'he himself did it',
    translation: 'ele mesmo'
  },
  { word: 'his', phrase: 'his writings', translation: 'ihs' },
  { word: 'history', phrase: "you're history", translation: 'história' },
  { word: 'hit', phrase: 'He was hit by a car', translation: 'bater' },
  {
    word: 'hold',
    phrase: 'the bank holds the title to the car',
    translation: 'segurar'
  },
  { word: 'home', phrase: 'a place to call home', translation: 'lar' },
  {
    word: 'hope',
    phrase: 'hoping for the best',
    translation: 'esperança'
  },
  { word: 'hospital', phrase: '', translation: 'hospital' },
  {
    word: 'hot',
    phrase: 'serving hot meals to the poor',
    translation: 'quente'
  },
  { word: 'hotel', phrase: 'check out of a hotel', translation: 'hotel' },
  { word: 'hour', phrase: 'in our hour of need', translation: 'hora' },
  { word: 'house', phrase: 'a two-family house', translation: 'casa' },
  { word: 'how', phrase: 'How did he die?', translation: 'como' },
  {
    word: 'however',
    phrase: "would like to go; however, I think I'd better not",
    translation: 'contudo'
  },
  { word: 'huge', phrase: 'a huge undertaking', translation: 'enorme' },
  { word: 'human', phrase: 'human voices', translation: 'humano' },
  {
    word: 'hundred',
    phrase: "it seems like we've answered this question hundreds of times",
    translation: 'cem'
  },
  {
    word: 'husband',
    phrase: 'Have you met her husband?',
    translation: 'marido'
  },
  { word: 'I', phrase: 'raticide', translation: 'i' },
  { word: 'idea', phrase: 'innovative ideas', translation: 'idéia' },
  {
    word: 'identify',
    phrase: 'She identified the dog as her lost pet',
    translation: 'identificar'
  },
  {
    word: 'if',
    phrase: "I doubt if I'll pass the course",
    translation: 'se'
  },
  {
    word: 'image',
    phrase: 'image the bone using X-rays',
    translation: 'imagem'
  },
  {
    word: 'imagine',
    phrase: 'I just thought of a good joke',
    translation: 'imaginar'
  },
  {
    word: 'impact',
    phrase:
      'a study outlining the potential environmental impacts of the construction project',
    translation: 'impacto'
  },
  {
    word: 'important',
    phrase: 'Diet and exercise are important for health',
    translation: 'importante'
  },
  {
    word: 'improve',
    phrase: 'measures to further improve the quality of medical care',
    translation: 'aprimorar'
  },
  { word: 'in', phrase: 'wounded in the leg', translation: 'em' },
  {
    word: 'include',
    phrase: 'the price of dinner includes dessert',
    translation: 'incluir'
  },
  {
    word: 'including',
    phrase: 'the price of dinner includes dessert',
    translation: 'incluindo'
  },
  {
    word: 'increase',
    phrase: 'his waistline increased with age',
    translation: 'aumento'
  },
  {
    word: 'indeed',
    phrase: 'I know that you can indeed do better than that',
    translation: 'realmente'
  },
  {
    word: 'indicate',
    phrase: 'the indicated treatment',
    translation: 'indicar'
  },
  {
    word: 'individual',
    phrase: 'special ingredients',
    translation: 'individual'
  },
  {
    word: 'industry',
    phrase: 'He favors policies that promote industry',
    translation: 'indústria'
  },
  {
    word: 'information',
    phrase:
      "They're working to collect information about the early settlers in the region",
    translation: 'informação'
  },
  {
    word: 'inside',
    phrase: 'The inside of the church is quite beautiful',
    translation: 'dentro'
  },
  {
    word: 'instead',
    phrase: 'I was offered a ride, but I chose to walk instead',
    translation: 'em vez de'
  },
  {
    word: 'institution',
    phrase: 'banks and other financial institutions',
    translation: 'instituição'
  },
  {
    word: 'interest',
    phrase: 'She told us about her lifelong interest in music',
    translation: 'interesse'
  },
  {
    word: 'interesting',
    phrase: "This is one of the most interesting books I've read all year",
    translation: 'interessante'
  },
  {
    word: 'international',
    phrase: 'an international association of chemists',
    translation: 'internacional'
  },
  {
    word: 'interview',
    phrase: 'was interviewed on television',
    translation: 'entrevista'
  },
  { word: 'into', phrase: 'enter into an alliance', translation: 'em' },
  { word: 'investment', phrase: '', translation: 'investimento' },
  {
    word: 'involve',
    phrase: 'the price of dinner includes dessert',
    translation: 'envolver'
  },
  {
    word: 'issue',
    phrase: "They misquoted me, but I didn't want to make an issue of it",
    translation: 'questão'
  },
  { word: 'it', phrase: '', translation: 'ela' },
  {
    word: 'item',
    phrase: 'every item on the list',
    translation: 'artigo'
  },
  {
    word: 'its',
    phrase: 'a suite with its own private bathroom',
    translation: 'sua'
  },
  {
    word: 'itself',
    phrase: 'This itself is a good enough reason',
    translation: 'próprio'
  },
  { word: 'job', phrase: 'she quit her job', translation: 'trabalho' },
  { word: 'join', phrase: 'join the navy', translation: 'juntar' },
  { word: 'just', phrase: 'just be yourself', translation: 'só' },
  {
    word: 'keep',
    phrase: 'kept him back with difficulty',
    translation: 'guardar'
  },
  {
    word: 'key',
    phrase: 'a key moment in the game',
    translation: 'chave'
  },
  { word: 'kid', phrase: 'you poor kid', translation: 'puto' },
  {
    word: 'kill',
    phrase: 'He threatened to kill them',
    translation: 'matar'
  },
  {
    word: 'kind',
    phrase: 'They were very kind to us',
    translation: 'tipo'
  },
  {
    word: 'kitchen',
    phrase: 'They want a house with a large kitchen',
    translation: 'cozinha'
  },
  {
    word: 'know',
    phrase: 'He knows a lot about the history of the town',
    translation: 'saber'
  },
  {
    word: 'knowledge',
    phrase: 'rich in the knowledge of human nature',
    translation: 'conhecimento'
  },
  {
    word: 'land',
    phrase: 'landed the leading role',
    translation: 'terra'
  },
  { word: 'language', phrase: 'medical language', translation: 'idioma' },
  {
    word: 'large',
    phrase: 'will take a larger role in the negotiations',
    translation: 'grande'
  },
  {
    word: 'last',
    phrase: 'His last book was a failure',
    translation: 'último'
  },
  { word: 'late', phrase: 'was late for class', translation: 'tarde' },
  {
    word: 'later',
    phrase: 'they later regretted the decision',
    translation: 'posterior'
  },
  {
    word: 'laugh',
    phrase: 'What are you laughing about?',
    translation: 'rir'
  },
  { word: 'law', phrase: 'probate law', translation: 'lei' },
  {
    word: 'lawyer',
    phrase:
      "their lawyers told them that they couldn't use the park for the concert without permission from the city",
    translation: 'advogado'
  },
  { word: 'lay', phrase: 'lay plaster', translation: 'colocar' },
  {
    word: 'lead',
    phrase: 'guided the scouts through the cave',
    translation: 'conduzir'
  },
  {
    word: 'leader',
    phrase: 'The tour leader suggested several restaurants in the area',
    translation: 'líder'
  },
  {
    word: 'learn',
    phrase: 'learned to play chess',
    translation: 'aprender'
  },
  {
    word: 'least',
    phrase: 'Who was the least at fault in the case?',
    translation: 'menos'
  },
  {
    word: 'leave',
    phrase: 'the wound left an ugly scar',
    translation: 'deixer'
  },
  {
    word: 'left',
    phrase: 'the left arm of a chair',
    translation: 'esquerda'
  },
  { word: 'leg', phrase: 'legless lizards', translation: 'perna' },
  {
    word: 'legal',
    phrase: 'Fishing in this lake is legal',
    translation: 'legal'
  },
  { word: 'less', phrase: 'less than half done', translation: 'menos' },
  {
    word: 'let',
    phrase: 'a break in the clouds let us see the summit',
    translation: 'deixar'
  },
  { word: 'letter', phrase: '', translation: 'letra' },
  {
    word: 'level',
    phrase: 'the job appeals to me on many levels',
    translation: 'nível'
  },
  { word: 'lie', phrase: 'lie asleep', translation: 'mentira' },
  {
    word: 'life',
    phrase: 'He believes that God gives life to all creatures',
    translation: 'vida'
  },
  { word: 'light', phrase: 'a light lunch', translation: 'luz' },
  {
    word: 'like',
    phrase: 'my car does not like cold weather',
    translation: 'gostar'
  },
  {
    word: 'likely',
    phrase: 'That seems to be the most likely explanation',
    translation: 'provável'
  },
  { word: 'line', phrase: 'stand on line', translation: 'linha' },
  { word: 'list', phrase: '', translation: 'lista' },
  {
    word: 'listen',
    phrase:
      "I listened as hard as I could, but I couldn't hear a word of what he said over all that noise",
    translation: 'escutar'
  },
  { word: 'little', phrase: 'little towns', translation: 'pequeno(a)' },
  {
    word: 'live',
    phrase: 'they had always lived in the country',
    translation: 'viver'
  },
  {
    word: 'local',
    phrase: 'We had dinner at a local restaurant',
    translation: 'local'
  },
  { word: 'long', phrase: 'long i in sign', translation: 'longas' },
  { word: 'look', phrase: 'look at the map', translation: 'olhar' },
  { word: 'lose', phrase: 'lost his temper', translation: 'perder' },
  { word: 'loss', phrase: 'habitat loss', translation: 'perda' },
  { word: 'lot', phrase: 'lots of friends', translation: 'lote' },
  {
    word: 'love',
    phrase: 'Children need unconditional love from their parents',
    translation: 'amar'
  },
  { word: 'low', phrase: 'a low income group', translation: 'baixo' },
  {
    word: 'machine',
    phrase: 'Shovels are tools; bulldozers are machines',
    translation: 'máquina'
  },
  {
    word: 'magazine',
    phrase: 'a gardening magazine',
    translation: 'revista'
  },
  { word: 'main', phrase: 'by main strength', translation: 'principal' },
  {
    word: 'maintain',
    phrase: 'steadfastly maintained his innocence',
    translation: 'manter'
  },
  {
    word: 'major',
    phrase: "He's one of the major figures in 19th-century U.S. history",
    translation: 'principal'
  },
  {
    word: 'majority',
    phrase: 'a two-thirds majority',
    translation: 'maioria'
  },
  { word: 'make', phrase: 'makes it possible', translation: 'fazer' },
  {
    word: 'man',
    phrase: 'He was a shy boy, but he grew to be a strong and confident man',
    translation: 'homem'
  },
  {
    word: 'manage',
    phrase: 'manage a bond issue',
    translation: 'gerenciar'
  },
  {
    word: 'management',
    phrase: 'Business improved under the management of new owners',
    translation: 'gestão'
  },
  {
    word: 'manager',
    phrase: "I'd like to speak to the manager, please",
    translation: 'gerente'
  },
  {
    word: 'many',
    phrase: 'the many advantages of an education',
    translation: 'muito'
  },
  {
    word: 'market',
    phrase: 'I stopped at the market on the way home for some juice',
    translation: 'mercado'
  },
  {
    word: 'marriage',
    phrase: 'It was his second marriage',
    translation: 'casamento'
  },
  {
    word: 'material',
    phrase: 'the material aspect of being',
    translation: 'material'
  },
  {
    word: 'matter',
    phrase: 'as a matter of policy',
    translation: 'matéria'
  },
  { word: 'may', phrase: 'things you may need', translation: 'maio' },
  {
    word: 'maybe',
    phrase: 'maybe we can make it to the concert, if we hurry',
    translation: 'talvez'
  },
  { word: 'me', phrase: 'who, me?', translation: 'me' },
  {
    word: 'mean',
    phrase: 'a lean, mean athlete',
    translation: 'significar'
  },
  {
    word: 'measure',
    phrase: 'She felt equal measures of hope and fear',
    translation: 'medir'
  },
  { word: 'media', phrase: '', translation: 'mídia' },
  { word: 'medical', phrase: 'a medical journal', translation: 'médico' },
  { word: 'meet', phrase: 'fit for battle', translation: 'encontrar' },
  {
    word: 'meeting',
    phrase: "The club's monthly meeting will be held next Monday evening",
    translation: 'encontro'
  },
  {
    word: 'member',
    phrase: 'they ran only part of the way',
    translation: 'membro'
  },
  {
    word: 'memory',
    phrase: 'gifted with a remarkable memory',
    translation: 'memória'
  },
  {
    word: 'mention',
    phrase: 'In her speech, she carefully avoided any mention of her costar',
    translation: 'mencionar'
  },
  {
    word: 'message',
    phrase: 'Did you get my message?',
    translation: 'mensagem'
  },
  {
    word: 'method',
    phrase: 'effective teaching methods',
    translation: 'método'
  },
  {
    word: 'middle',
    phrase: "during the century's middle decades",
    translation: 'meio'
  },
  {
    word: 'might',
    phrase: 'I might go, but then again, I might not',
    translation: 'força'
  },
  {
    word: 'military',
    phrase: "the country's military needs",
    translation: 'militar'
  },
  { word: 'million', phrase: '', translation: 'milhão' },
  { word: 'mind', phrase: 'time out of mind', translation: 'mente' },
  {
    word: 'minute',
    phrase: 'a relatively small backyard',
    translation: 'minuto'
  },
  {
    word: 'miss',
    phrase: 'He swung and missed the ball completely',
    translation: 'errar'
  },
  { word: 'mission', phrase: 'a space mission', translation: 'missão' },
  {
    word: 'model',
    phrase: 'a decor that is a model of good taste',
    translation: 'modelo'
  },
  {
    word: 'modern',
    phrase: 'Water pollution is a growing problem in the modern world',
    translation: 'moderno'
  },
  {
    word: 'moment',
    phrase: 'a region with no cities of importance',
    translation: 'momento'
  },
  { word: 'money', phrase: 'a money pitch', translation: 'dinheiro' },
  {
    word: 'month',
    phrase: 'July is my favorite month',
    translation: 'mês'
  },
  { word: 'more', phrase: 'more was spilled', translation: 'mais' },
  {
    word: 'morning',
    phrase: 'She liked to get things done early in the morning',
    translation: 'manhã'
  },
  {
    word: 'most',
    phrase: 'Choosing a color took the most time',
    translation: 'mais'
  },
  {
    word: 'mother',
    phrase: 'the mother of all ocean liners',
    translation: 'mãe'
  },
  {
    word: 'mouth',
    phrase: 'the mouth of a volcano',
    translation: 'boca'
  },
  {
    word: 'move',
    phrase: 'retiring early was a smart move',
    translation: 'mover'
  },
  {
    word: 'movement',
    phrase: 'a movement to increase the minimum wage',
    translation: 'movimento'
  },
  {
    word: 'movie',
    phrase: 'a movie about the Civil War',
    translation: 'filme'
  },
  { word: 'Mr', phrase: '', translation: 'sr' },
  { word: 'Mrs', phrase: '', translation: 'sra' },
  { word: 'much', phrase: 'taken too much time', translation: 'muito' },
  { word: 'music', phrase: 'piano music', translation: 'música' },
  {
    word: 'must',
    phrase: 'we must be quiet during the performance',
    translation: 'deve'
  },
  { word: 'my', phrase: 'my injuries', translation: 'a minha' },
  {
    word: 'myself',
    phrase: 'others and myself continued to press for the legislation',
    translation: 'me'
  },
  {
    word: 'name',
    phrase: 'Please write your name on this line',
    translation: 'nome'
  },
  {
    word: 'nation',
    phrase: "It's one of the richest nations in the world",
    translation: 'nação'
  },
  {
    word: 'national',
    phrase: 'the national flag',
    translation: 'nacional'
  },
  { word: 'natural', phrase: 'a natural leader', translation: 'natural' },
  {
    word: 'nature',
    phrase: 'her romantic nature',
    translation: 'natureza'
  },
  {
    word: 'near',
    phrase: 'seemed to be near death',
    translation: 'perto'
  },
  { word: 'nearly', phrase: 'nearly a year later', translation: 'quase' },
  {
    word: 'necessary',
    phrase: 'Is it really necessary for me to have surgery?',
    translation: 'necessário'
  },
  {
    word: 'need',
    phrase: 'refugees in need of shelter and food',
    translation: 'precisar'
  },
  {
    word: 'network',
    phrase: 'a network of blood vessels',
    translation: 'rede'
  },
  {
    word: 'never',
    phrase: 'I will never shop at that store again',
    translation: 'jamais'
  },
  { word: 'new', phrase: 'He bought a new car', translation: 'novo' },
  {
    word: 'news',
    phrase: 'the virus was bad news',
    translation: 'notícia'
  },
  {
    word: 'newspaper',
    phrase: 'He used some newspaper to get the fire started',
    translation: 'jornal'
  },
  {
    word: 'next',
    phrase: 'the next closest school',
    translation: 'próximo'
  },
  {
    word: 'nice',
    phrase: "That's nice of you to say",
    translation: 'bacana'
  },
  { word: 'night', phrase: 'a night nurse', translation: 'noite' },
  { word: 'no', phrase: 'no disputing the decision', translation: 'não' },
  {
    word: 'none',
    phrase: 'your help comes none too soon',
    translation: 'nenhum'
  },
  {
    word: 'nor',
    phrase: 'not done by you nor me nor anyone',
    translation: 'nem'
  },
  {
    word: 'north',
    phrase: 'Turn north onto Elm Street',
    translation: 'norte'
  },
  {
    word: 'not',
    phrase: 'He was standing not six feet away from me',
    translation: 'naõ'
  },
  { word: 'note', phrase: 'end on a high note', translation: 'nota' },
  {
    word: 'nothing',
    phrase: "There's nothing in my hands",
    translation: 'nada'
  },
  {
    word: 'notice',
    phrase: 'Please give us enough notice to prepare for your arrival',
    translation: 'aviso prévio'
  },
  { word: 'now', phrase: 'now you be sure to write', translation: 'ora' },
  {
    word: 'number',
    phrase: 'the number of elderly is rising',
    translation: 'número'
  },
  {
    word: 'occur',
    phrase: 'The event is scheduled to occur at noon tomorrow',
    translation: 'acontecer'
  },
  { word: 'of', phrase: 'cup of water', translation: 'de' },
  { word: 'off', phrase: 'a long way off', translation: 'desligado' },
  {
    word: 'offer',
    phrase: 'an offer of marriage',
    translation: 'oferecer'
  },
  {
    word: 'office',
    phrase: 'She works at our Chicago office',
    translation: 'escritório'
  },
  {
    word: 'officer',
    phrase: 'chief executive officer',
    translation: 'oficial'
  },
  {
    word: 'official',
    phrase: 'A company official responded to our request',
    translation: 'oficial'
  },
  {
    word: 'often',
    phrase: 'They go out to dinner fairly often',
    translation: 'amiúde'
  },
  { word: 'oh', phrase: "Oh, don't stop!", translation: 'ah' },
  {
    word: 'oil',
    phrase: 'The price of crude oil is expected to rise',
    translation: 'óleo'
  },
  {
    word: 'ok',
    phrase: 'We need her OK on this before we place the order',
    translation: 'okey'
  },
  {
    word: 'old',
    phrase: 'they brought up the same old argument',
    translation: 'de idade'
  },
  { word: 'on', phrase: 'I have a cut on my finger', translation: 'on' },
  { word: 'once', phrase: 'went skydiving once', translation: 'uma vez' },
  { word: 'one', phrase: 'She is one year old', translation: 'uma' },
  {
    word: 'only',
    phrase: 'the only known species',
    translation: 'apenas'
  },
  {
    word: 'onto',
    phrase: 'Turn left onto Fifth Avenue',
    translation: 'no'
  },
  { word: 'open', phrase: 'her eyes were open', translation: 'abrir' },
  {
    word: 'operation',
    phrase: 'The family runs a small farming operation',
    translation: 'operação'
  },
  {
    word: 'opportunity',
    phrase:
      "You'll have an opportunity to ask questions after the presentation",
    translation: 'oportunidade'
  },
  { word: 'option', phrase: 'freedom of choice', translation: 'opção' },
  { word: 'or', phrase: 'sink or swim', translation: 'ou' },
  {
    word: 'order',
    phrase: "I ordered the books from the company's website",
    translation: 'encomendar'
  },
  {
    word: 'organization',
    phrase:
      'She is the leader of an international organization devoted to the protection of natural resources',
    translation: 'organização'
  },
  {
    word: 'other',
    phrase: 'something other than it seems to be',
    translation: 'outros'
  },
  {
    word: 'others',
    phrase: 'something other than it seems to be',
    translation: 'outros'
  },
  { word: 'our', phrase: 'our actions', translation: 'nosso' },
  { word: 'out', phrase: 'threw his shoulder out', translation: 'fora' },
  { word: 'outside', phrase: 'outside the law', translation: 'fora' },
  { word: 'over', phrase: 'sleep over', translation: 'sobre' },
  {
    word: 'own',
    phrase: 'was responsible for his own bad luck',
    translation: 'possuir'
  },
  {
    word: 'owner',
    phrase: 'He and his sister are owners of the restaurant',
    translation: 'proprietário'
  },
  {
    word: 'page',
    phrase: 'got a page from the client',
    translation: 'página'
  },
  {
    word: 'pain',
    phrase:
      'The medication may upset your stomach but if you experience acute abdominal pain call your doctor',
    translation: 'dormento'
  },
  {
    word: 'painting',
    phrase: 'They hung the painting in the living room',
    translation: 'pintura'
  },
  {
    word: 'paper',
    phrase: "We'll need pens, glue, and some paper",
    translation: 'papel'
  },
  {
    word: 'parent',
    phrase: 'My parents live in New York',
    translation: 'pai'
  },
  {
    word: 'part',
    phrase: 'took off for parts unknown',
    translation: 'parte'
  },
  {
    word: 'participant',
    phrase: 'he seemed to be a willing participant in the prank',
    translation: 'participante'
  },
  {
    word: 'particular',
    phrase: 'This computer program will be of particular interest to teachers',
    translation: 'particular'
  },
  {
    word: 'particularly',
    phrase: 'particularly stormy weather',
    translation: 'particularmente'
  },
  {
    word: 'partner',
    phrase:
      'His partner, his wife of 20 years, was shocked to hear about his accident',
    translation: 'sócio'
  },
  {
    word: 'party',
    phrase: 'a party to the transaction',
    translation: 'partido'
  },
  {
    word: 'pass',
    phrase: 'title passes to the buyer upon payment in full',
    translation: 'passar'
  },
  {
    word: 'past',
    phrase: 'started working on this project 10 years past',
    translation: 'passado'
  },
  {
    word: 'patient',
    phrase: 'psychiatric patients',
    translation: 'paciente'
  },
  {
    word: 'pattern',
    phrase: 'the pattern of events',
    translation: 'padrão'
  },
  {
    word: 'pay',
    phrase: 'paid a teenager to mow his lawn',
    translation: 'pagar'
  },
  {
    word: 'peace',
    phrase:
      'After many years of war, people on both sides were longing for peace',
    translation: 'paz'
  },
  {
    word: 'people',
    phrase: 'People can be really cruel sometimes',
    translation: 'gente'
  },
  { word: 'per', phrase: 'as per usual', translation: 'por' },
  {
    word: 'perform',
    phrase: 'performed gymnastics',
    translation: 'executar'
  },
  {
    word: 'performance',
    phrase: "This evening's performance will start at 8 o'clock",
    translation: 'desempenho'
  },
  {
    word: 'perhaps',
    phrase: 'perhaps we will not have to take this exam, but I doubt it',
    translation: 'talvez'
  },
  { word: 'period', phrase: 'period costumes', translation: 'período' },
  { word: 'person', phrase: 'spokesperson', translation: 'pessoa' },
  {
    word: 'personal',
    phrase: 'personal financial gain',
    translation: 'pessoal'
  },
  { word: 'phone', phrase: 'radiophone', translation: 'telefone' },
  {
    word: 'physical',
    phrase: 'physical attraction',
    translation: 'físico'
  },
  { word: 'pick', phrase: '', translation: 'colher' },
  {
    word: 'picture',
    phrase: 'she was the very picture of health',
    translation: 'imagem'
  },
  { word: 'piece', phrase: 'a three-piece suit', translation: 'peça' },
  {
    word: 'place',
    phrase: 'a fine eating place',
    translation: 'colocar'
  },
  { word: 'plan', phrase: 'plans for a house', translation: 'plano' },
  {
    word: 'plant',
    phrase: 'I planted corn this year',
    translation: 'planta'
  },
  {
    word: 'play',
    phrase: 'several issues are at play',
    translation: 'brincar'
  },
  { word: 'player', phrase: 'a chess player', translation: 'jogador' },
  { word: 'PM', phrase: '', translation: 'pm' },
  { word: 'point', phrase: 'in point of fact', translation: 'ponto' },
  {
    word: 'police',
    phrase: 'Police arrested a man whom they identified as the murderer',
    translation: 'polícia'
  },
  { word: 'policy', phrase: '', translation: 'política' },
  {
    word: 'political',
    phrase: 'The senator has changed political parties',
    translation: 'político'
  },
  {
    word: 'politics',
    phrase: 'ethnic politics',
    translation: 'política'
  },
  {
    word: 'poor',
    phrase: 'We were too poor to buy new clothes',
    translation: 'pobre'
  },
  { word: 'popular', phrase: 'a common error', translation: 'popular' },
  {
    word: 'population',
    phrase: "The world's population has increased greatly",
    translation: 'população'
  },
  {
    word: 'position',
    phrase: 'positioned the company in the global market',
    translation: 'posição'
  },
  {
    word: 'positive',
    phrase: 'positive cash flow',
    translation: 'positivo'
  },
  {
    word: 'possible',
    phrase: 'the worst possible circumstance',
    translation: 'possível'
  },
  { word: 'power', phrase: 'power tools', translation: 'podera' },
  {
    word: 'practice',
    phrase: 'had a habit of tapping his fingers',
    translation: 'praticar'
  },
  {
    word: 'prepare',
    phrase: 'The teacher prepared the students for the test',
    translation: 'preparar'
  },
  { word: 'present', phrase: 'give alms', translation: 'apresentar' },
  {
    word: 'president',
    phrase: 'The President will hold a news conference tomorrow',
    translation: 'presidente'
  },
  {
    word: 'pressure',
    phrase: 'predation pressure',
    translation: 'pressão'
  },
  {
    word: 'pretty',
    phrase: 'cost a pretty penny',
    translation: 'bonito'
  },
  {
    word: 'prevent',
    phrase: 'measures taken to prevent leaks',
    translation: 'impedir'
  },
  {
    word: 'price',
    phrase: 'You paid a high price for the car',
    translation: 'preço'
  },
  {
    word: 'private',
    phrase:
      "It was the first time many had seen works from the artist's private collection",
    translation: 'privado'
  },
  {
    word: 'probably',
    phrase: 'it will probably rain',
    translation: 'provavelmente'
  },
  {
    word: 'problem',
    phrase: 'the mystery of the stone monoliths',
    translation: 'problema'
  },
  {
    word: 'process',
    phrase: 'a nerve cell process',
    translation: 'processo'
  },
  {
    word: 'produce',
    phrase: 'Thousands of cars are produced here each year',
    translation: 'produzir'
  },
  {
    word: 'product',
    phrase: "The company's newest product is selling well",
    translation: 'produto'
  },
  {
    word: 'production',
    phrase: 'production housing',
    translation: 'produção'
  },
  {
    word: 'professional',
    phrase: 'Do you have any professional experience?',
    translation: 'profissional'
  },
  {
    word: 'professor',
    phrase: 'Professor Williams will be teaching the class',
    translation: 'professor'
  },
  {
    word: 'program',
    phrase: 'a program of regular dental checkups',
    translation: 'programa'
  },
  {
    word: 'project',
    phrase: 'plans for a house',
    translation: 'projeto'
  },
  {
    word: 'property',
    phrase: 'material with a silky quality',
    translation: 'imóvel'
  },
  {
    word: 'protect',
    phrase: "protect one's rights",
    translation: 'proteger'
  },
  {
    word: 'prove',
    phrase: 'the charges were never proved in court',
    translation: 'provar'
  },
  {
    word: 'provide',
    phrase: 'The Web site provides information about local activities',
    translation: 'fornecer'
  },
  {
    word: 'public',
    phrase: 'a campaign to raise public awareness of the issue',
    translation: 'público'
  },
  { word: 'pull', phrase: 'pull turnips', translation: 'puxar' },
  {
    word: 'purpose',
    phrase: 'announced his intention to marry',
    translation: 'finalidade'
  },
  {
    word: 'push',
    phrase: 'Do you want to push the shopping cart?',
    translation: 'empurrar'
  },
  { word: 'put', phrase: 'put him on a diet', translation: 'pôr' },
  {
    word: 'quality',
    phrase: 'material with a silky quality',
    translation: 'qualidade'
  },
  {
    word: 'question',
    phrase: 'ask for directions',
    translation: 'pergunta'
  },
  { word: 'quickly', phrase: 'quick thinking', translation: 'rápido' },
  { word: 'quite', phrase: 'quite a beauty', translation: 'bastante' },
  { word: 'race', phrase: 'a bicycle race', translation: 'corrida' },
  {
    word: 'radio',
    phrase: 'The news was sent by radio',
    translation: 'rádio'
  },
  {
    word: 'raise',
    phrase: 'raise sunken treasure',
    translation: 'levantar'
  },
  {
    word: 'range',
    phrase: 'the entire range of human experience',
    translation: 'gama'
  },
  {
    word: 'rate',
    phrase: 'estimated the crowd at two hundred',
    translation: 'taxa'
  },
  {
    word: 'rather',
    phrase: 'would rather read than watch television',
    translation: 'de preferência'
  },
  {
    word: 'reach',
    phrase: 'his voice reached the last rows',
    translation: 'chegar'
  },
  {
    word: 'read',
    phrase: 'a golfer reading a green',
    translation: 'ler'
  },
  { word: 'ready', phrase: 'quick reflexes', translation: 'pronto' },
  { word: 'real', phrase: 'a story of real life', translation: 'real' },
  {
    word: 'reality',
    phrase: 'the difference between fiction and reality',
    translation: 'realidade'
  },
  {
    word: 'realize',
    phrase: 'I just thought of a good joke',
    translation: 'realizar'
  },
  {
    word: 'really',
    phrase: 'he runs really fast',
    translation: 'realmente'
  },
  {
    word: 'reason',
    phrase: 'teaches students how to think',
    translation: 'razão'
  },
  {
    word: 'receive',
    phrase:
      'You will be charged a late fee if the electric company does not receive your payment on time',
    translation: 'receber'
  },
  {
    word: 'recent',
    phrase: 'Recent events have brought attention to the problem',
    translation: 'recente'
  },
  {
    word: 'recently',
    phrase: 'She recently graduated from college',
    translation: 'recentemente'
  },
  {
    word: 'recognize',
    phrase: "I didn't recognize you at first with your new haircut",
    translation: 'reconhecer'
  },
  {
    word: 'record',
    phrase: 'a liberal voting record',
    translation: 'registro'
  },
  { word: 'red', phrase: 'red tomatoes', translation: 'vermelha' },
  {
    word: 'reduce',
    phrase: 'reduce the likelihood of war',
    translation: 'reduzir'
  },
  {
    word: 'reflect',
    phrase: 'the pulse reflects the condition of the heart',
    translation: 'refletir'
  },
  {
    word: 'region',
    phrase: 'The bird returns to this region every year',
    translation: 'região'
  },
  {
    word: 'relate',
    phrase: 'characters the reader can easily relate to',
    translation: 'relacionar'
  },
  {
    word: 'relationship',
    phrase: 'The relationship between the two countries has improved',
    translation: 'relação'
  },
  {
    word: 'religious',
    phrase: 'religious attitudes',
    translation: 'religioso'
  },
  {
    word: 'remain',
    phrase: 'Little remained after the fire',
    translation: 'remanecente'
  },
  {
    word: 'remember',
    phrase: 'remembers that day as though it were yesterday',
    translation: 'lembrar'
  },
  {
    word: 'remove',
    phrase: 'Remove the trash from the front yard',
    translation: 'retirar'
  },
  {
    word: 'report',
    phrase: 'a special report on health',
    translation: 'relatório'
  },
  {
    word: 'represent',
    phrase: 'He represented his company at the meeting',
    translation: 'representar'
  },
  {
    word: 'Republican',
    phrase: 'Our state representative is a Republican',
    translation: 'republicano'
  },
  {
    word: 'require',
    phrase: 'demanded payment of the debt',
    translation: 'requerer'
  },
  {
    word: 'research',
    phrase: "She conducts research into the causes of Alzheimer's disease",
    translation: 'pesquisa'
  },
  {
    word: 'resource',
    phrase: 'exhausted all of their resources',
    translation: 'recurso'
  },
  {
    word: 'respond',
    phrase: "She hasn't yet responded to my letter",
    translation: 'responder'
  },
  {
    word: 'response',
    phrase: 'had answers to all their questions',
    translation: 'resposta'
  },
  {
    word: 'responsibility',
    phrase: 'The boys denied any responsibility for the damage to the fence',
    translation: 'responsabilidade'
  },
  {
    word: 'rest',
    phrase: 'We will not rest until we discover the truth',
    translation: 'descanso'
  },
  {
    word: 'result',
    phrase: 'If you take this drug, side effects may result',
    translation: 'resultado'
  },
  {
    word: 'return',
    phrase: 'reciprocated their hospitality by inviting them for a visit',
    translation: 'volta'
  },
  {
    word: 'reveal',
    phrase: 'divine will as revealed in sacred writings',
    translation: 'revelar'
  },
  {
    word: 'rich',
    phrase: 'became rich through shrewd investing',
    translation: 'rico'
  },
  {
    word: 'right',
    phrase: 'his right to decide',
    translation: 'direito'
  },
  {
    word: 'rise',
    phrase: 'an idea that springs to mind',
    translation: 'subir'
  },
  {
    word: 'risk',
    phrase: 'I prefer not to expose my money to too much risk',
    translation: 'risco'
  },
  {
    word: 'road',
    phrase: "on tour with the musical's road company",
    translation: 'estrada'
  },
  {
    word: 'rock',
    phrase: 'shake well before using',
    translation: 'rocha'
  },
  {
    word: 'role',
    phrase: 'He plays the role of the villain',
    translation: 'papel'
  },
  {
    word: 'room',
    phrase: 'Cigarette smoke filled the room',
    translation: 'quarto'
  },
  {
    word: 'rule',
    phrase: 'ruled his appetites firmly',
    translation: 'regra'
  },
  {
    word: 'run',
    phrase: 'ran with a wild crowd when he was young',
    translation: 'correr'
  },
  {
    word: 'safe',
    phrase: "I don't feel safe in this neighborhood",
    translation: 'seguro'
  },
  { word: 'same', phrase: 'took the same route', translation: 'mesmo' },
  {
    word: 'save',
    phrase: 'Remember to save your work frequently',
    translation: 'salvar'
  },
  {
    word: 'say',
    phrase: 'Is anybody there? he said',
    translation: 'dizem'
  },
  {
    word: 'scene',
    phrase: "The play's opening scene takes place in the courtyard",
    translation: 'cena'
  },
  { word: 'school', phrase: 'driving schools', translation: 'letivo' },
  {
    word: 'science',
    phrase: 'The program encourages students to pursue a career in science',
    translation: 'ciência'
  },
  { word: 'scientist', phrase: '', translation: 'cientista' },
  {
    word: 'score',
    phrase: 'scored three points',
    translation: 'pontuação'
  },
  {
    word: 'scowl',
    phrase: 'He had a scowl on his face',
    translation: 'carranca'
  },
  {
    word: 'sea',
    phrase: 'the seas of the Southern Hemisphere',
    translation: 'mar'
  },
  { word: 'season', phrase: 'hunting season', translation: 'estação' },
  { word: 'seat', phrase: 'trouser seat', translation: 'assento' },
  {
    word: 'second',
    phrase: 'They are my second favorite band',
    translation: 'segundo'
  },
  {
    word: 'section',
    phrase: 'the northern section of the route',
    translation: 'seção'
  },
  {
    word: 'security',
    phrase: 'We must insure our national security',
    translation: 'segurança'
  },
  {
    word: 'see',
    phrase: "I'll see you dead before I accept your terms",
    translation: 'ver'
  },
  {
    word: 'seek',
    phrase: 'The office is seeking a salesperson',
    translation: 'buscar'
  },
  {
    word: 'seem',
    phrase: "What they're doing doesn't seem right to me",
    translation: 'parecer'
  },
  {
    word: 'sell',
    phrase: 'He buys and remodels houses and then sells them at a profit',
    translation: 'vender'
  },
  {
    word: 'send',
    phrase: 'Satellites receive signals in space and send them back to Earth',
    translation: 'enviar'
  },
  {
    word: 'senior',
    phrase: 'As his senior, she commanded quite a bit of respect',
    translation: 'sênior'
  },
  { word: 'sense', phrase: 'a sense of danger', translation: 'senso' },
  {
    word: 'series',
    phrase: 'the hall opened into a series of small rooms',
    translation: 'série'
  },
  {
    word: 'serious',
    phrase: 'making serious money',
    translation: 'sério'
  },
  {
    word: 'serve',
    phrase: 'Soup was served as the first course',
    translation: 'servir'
  },
  { word: 'service', phrase: 'bus service', translation: 'serviço' },
  { word: 'set', phrase: 'set a stone on the grave', translation: 'set' },
  {
    word: 'seven',
    phrase: "What time is it? It's seven",
    translation: 'sete'
  },
  {
    word: 'several',
    phrase: 'It took several days for the package to arrive',
    translation: 'diversos'
  },
  {
    word: 'sex',
    phrase: 'The form asks for your name, age, and sex',
    translation: 'sexo'
  },
  { word: 'sexual', phrase: 'sexual conflict', translation: 'sexual' },
  { word: 'shake', phrase: 'shake off a cold', translation: 'tremer' },
  {
    word: 'share',
    phrase: 'shared my toys with the others',
    translation: 'compartilhar'
  },
  { word: 'she', phrase: 'she-cousin', translation: 'ela' },
  { word: 'shoot', phrase: 'shoot a spitball', translation: 'atirar' },
  { word: 'short', phrase: 'short of cash', translation: 'curto' },
  { word: 'shot', phrase: 'a shot of espresso', translation: 'injeção' },
  {
    word: 'should',
    phrase: 'you should brush your teeth after each meal',
    translation: 'se'
  },
  {
    word: 'shoulder',
    phrase: "He rested the baby's head on his shoulder",
    translation: 'ombro'
  },
  {
    word: 'show',
    phrase: 'showed her snapshots to the whole group',
    translation: 'mostrar'
  },
  {
    word: 'side',
    phrase: 'the back side of the moon',
    translation: 'lado'
  },
  { word: 'sign', phrase: 'a sign of the times', translation: 'sinal' },
  {
    word: 'significant',
    phrase: 'producing significant profits',
    translation: 'significativo'
  },
  {
    word: 'similar',
    phrase: 'similar polygons',
    translation: 'semelhante'
  },
  { word: 'simple', phrase: 'a simple leaf', translation: 'simples' },
  {
    word: 'simply',
    phrase: 'Simply add water to the mix and stir',
    translation: 'simplesmente'
  },
  {
    word: 'since',
    phrase: 'She graduated four years ago and has since married',
    translation: 'desde'
  },
  {
    word: 'sing',
    phrase: 'She sings in the choir',
    translation: 'cantar'
  },
  { word: 'single', phrase: 'a single bed', translation: 'solteira' },
  {
    word: 'sister',
    phrase: 'The sisters live in the convent',
    translation: 'irmã'
  },
  {
    word: 'sit',
    phrase: 'He was sitting in a chair next to the window',
    translation: 'sentar'
  },
  {
    word: 'site',
    phrase: 'Hard hats must be worn on the construction site',
    translation: 'local'
  },
  {
    word: 'situation',
    phrase: "He's in a bad situation",
    translation: 'situação'
  },
  {
    word: 'six',
    phrase: "What time is it? It's six",
    translation: 'seis'
  },
  { word: 'size', phrase: '', translation: 'tamanho' },
  {
    word: 'skill',
    phrase: 'the art of choosing the right word',
    translation: 'habilidade'
  },
  {
    word: 'skin',
    phrase: 'the rough skin of a shark',
    translation: 'pele'
  },
  {
    word: 'small',
    phrase: 'a relatively small backyard',
    translation: 'pequeno'
  },
  {
    word: 'smile',
    phrase: 'The photographer asked us to smile for the camera',
    translation: 'sorrir'
  },
  {
    word: 'so',
    phrase: "I didn't like it and I told her so",
    translation: 'tão'
  },
  {
    word: 'social',
    phrase: 'She has poor social skills',
    translation: 'social'
  },
  {
    word: 'society',
    phrase: 'Poverty hurts society as a whole',
    translation: 'sociedade'
  },
  {
    word: 'soldier',
    phrase: 'Many soldiers were wounded in combat',
    translation: 'soldado'
  },
  { word: 'some', phrase: 'have some apples', translation: 'algum' },
  {
    word: 'somebody',
    phrase: 'Somebody left you a message',
    translation: 'alguém'
  },
  {
    word: 'someone',
    phrase: 'Someone left you a message',
    translation: 'alguém'
  },
  {
    word: 'something',
    phrase: 'a group of fifty-somethings',
    translation: 'alguma coisa'
  },
  {
    word: 'sometimes',
    phrase: 'His jokes are funny, but sometimes he goes too far',
    translation: 'as vezes'
  },
  { word: 'son', phrase: 'sonogram', translation: 'filho' },
  { word: 'song', phrase: 'He sang a love song', translation: 'canção' },
  { word: 'soon', phrase: 'the sooner the better', translation: 'logo' },
  { word: 'sort', phrase: 'sort mail', translation: 'ordenar' },
  {
    word: 'sound',
    phrase: 'you sound just like your mother',
    translation: 'som'
  },
  {
    word: 'source',
    phrase: 'an investigation into the origin of baseball',
    translation: 'fonte'
  },
  {
    word: 'south',
    phrase: 'Turn south onto Elm Street',
    translation: 'sul'
  },
  {
    word: 'southern',
    phrase: 'the southern part of the state',
    translation: 'austral'
  },
  { word: 'space', phrase: 'floor space', translation: 'espaço' },
  {
    word: 'speak',
    phrase: 'Have you two spoken since yesterday?',
    translation: 'falar'
  },
  {
    word: 'special',
    phrase: 'special ingredients',
    translation: 'especial'
  },
  {
    word: 'specific',
    phrase: 'special ingredients',
    translation: 'específico'
  },
  {
    word: 'speech',
    phrase: 'She has to make a speech at the convention',
    translation: 'fala'
  },
  {
    word: 'spend',
    phrase: 'I spent $30 on his birthday gift',
    translation: 'gastar'
  },
  { word: 'sport', phrase: 'a poor sport', translation: 'desporto' },
  {
    word: 'spring',
    phrase: 'an idea that springs to mind',
    translation: 'primavera'
  },
  {
    word: 'staff',
    phrase: 'The entire staff has done a great job this year',
    translation: 'pessoal'
  },
  {
    word: 'stage',
    phrase: 'stage a hunger strike',
    translation: 'etapa'
  },
  {
    word: 'stand',
    phrase: 'can you stand on your head',
    translation: 'estar em pé'
  },
  {
    word: 'standard',
    phrase: 'standards of behavior',
    translation: 'padrão'
  },
  {
    word: 'star',
    phrase: 'She had a starring role in his latest film',
    translation: 'estrela'
  },
  {
    word: 'start',
    phrase: 'the rain started up again',
    translation: 'iniciar'
  },
  {
    word: 'state',
    phrase: 'the gaseous state of water',
    translation: 'estado'
  },
  {
    word: 'statement',
    phrase: 'His office issued an official statement concerning his departure',
    translation: 'declaração'
  },
  {
    word: 'station',
    phrase: 'a marine biological station',
    translation: 'estação'
  },
  {
    word: 'stay',
    phrase: 'went for a short vacation but stayed on for weeks',
    translation: 'estada'
  },
  { word: 'step', phrase: 'stepsister', translation: 'passo' },
  {
    word: 'still',
    phrase: "drink it while it's still hot",
    translation: 'ainda'
  },
  { word: 'stock', phrase: 'a stock model', translation: 'estoque' },
  { word: 'stop', phrase: 'the motor stopped', translation: 'deter' },
  {
    word: 'store',
    phrase: 'an organism that absorbs and stores DDT',
    translation: 'loja'
  },
  { word: 'story', phrase: '', translation: 'história' },
  {
    word: 'strategy',
    phrase:
      'They are proposing a new strategy for treating the disease with a combination of medications',
    translation: 'estratégia'
  },
  {
    word: 'street',
    phrase: 'success through compromise is a two-way street',
    translation: 'rua'
  },
  { word: 'strong', phrase: 'strong talk', translation: 'forte' },
  {
    word: 'structure',
    phrase: 'leaves and other plant structures',
    translation: 'estrutura'
  },
  {
    word: 'student',
    phrase: 'a group of college students',
    translation: 'estudante'
  },
  {
    word: 'study',
    phrase: 'refused even to consider my proposal',
    translation: 'estudo'
  },
  {
    word: 'stuff',
    phrase: 'long-term policy stuff',
    translation: 'rechear'
  },
  {
    word: 'style',
    phrase: 'the flowery style of 18th century prose',
    translation: 'estilo'
  },
  {
    word: 'subject',
    phrase: 'the rights of a free citizen',
    translation: 'assunto'
  },
  {
    word: 'success',
    phrase: 'Success came easily to him',
    translation: 'sucesso'
  },
  {
    word: 'successful',
    phrase: 'the play had a successful run on Broadway',
    translation: 'bem-sucedido'
  },
  { word: 'such', phrase: 'such a fine person', translation: 'tal' },
  {
    word: 'suddenly',
    phrase: "the army's precipitate withdrawal",
    translation: 'repentinamente'
  },
  {
    word: 'suffer',
    phrase: 'forced to bear a tragic loss',
    translation: 'sofrer'
  },
  {
    word: 'suggest',
    phrase: 'a film title that suggests its subject matter',
    translation: 'sugerir'
  },
  { word: 'summer', phrase: 'a summer home', translation: 'verão' },
  { word: 'support', phrase: 'support a habit', translation: 'apoio' },
  { word: 'sure', phrase: 'a sure hand', translation: 'certo' },
  {
    word: 'surface',
    phrase: "the earth's surface",
    translation: 'superfície'
  },
  { word: 'system', phrase: 'a heating system', translation: 'sistema' },
  {
    word: 'table',
    phrase: 'They were sitting at the dining table',
    translation: 'tabela'
  },
  { word: 'take', phrase: 'taken ill', translation: 'tomar' },
  {
    word: 'talk',
    phrase: 'make the computer talk to the printer',
    translation: 'falar'
  },
  {
    word: 'task',
    phrase: 'charged with a variety of tasks',
    translation: 'tarefa'
  },
  { word: 'tax', phrase: 'taxidermy', translation: 'imposto' },
  {
    word: 'teach',
    phrase: 'taught us a lot about our planet',
    translation: 'ensinar'
  },
  {
    word: 'teacher',
    phrase: 'Experience is a good teacher',
    translation: 'professor'
  },
  {
    word: 'team',
    phrase: 'a doubles team in tennis',
    translation: 'equipe'
  },
  {
    word: 'technology',
    phrase: 'Recent advances in medical technology have saved countless lives',
    translation: 'tecnologia'
  },
  {
    word: 'television',
    phrase:
      'people who turn on the television the minute they walk in the door',
    translation: 'televisão'
  },
  {
    word: 'tell',
    phrase: 'divine will as revealed in sacred writings',
    translation: 'contar'
  },
  {
    word: 'ten',
    phrase: "What time is it It's ten",
    translation: 'ten'
  },
  {
    word: 'tend',
    phrase: 'tend to our correspondence',
    translation: 'tender'
  },
  {
    word: 'term',
    phrase: 'lost money in the short term',
    translation: 'prazo'
  },
  { word: 'test', phrase: 'the cake tested done', translation: 'testar' },
  { word: 'than', phrase: 'easier said than done', translation: 'que' },
  {
    word: 'thank',
    phrase: 'I want to thank everyone who helped today',
    translation: 'agradecer'
  },
  {
    word: 'that',
    phrase: 'the senses are that whereby we experience the world',
    translation: 'aquilo'
  },
  { word: 'the', phrase: 'the Lord', translation: 'as' },
  { word: 'their', phrase: 'their verses', translation: 'seu' },
  { word: 'them', phrase: 'gave it to them', translation: 'eles' },
  {
    word: 'themselves',
    phrase: 'they themselves were present',
    translation: 'se'
  },
  {
    word: 'then',
    phrase: 'She lived in the Soviet Union, as it then was called',
    translation: 'então'
  },
  {
    word: 'theory',
    phrase: 'a hypothesis explaining the extinction of the dinosaurs',
    translation: 'teoria'
  },
  {
    word: 'there',
    phrase: 'Put the package there on the table',
    translation: 'ali'
  },
  { word: 'these', phrase: '', translation: 'estes' },
  {
    word: 'they',
    phrase: 'What do they want to do?',
    translation: 'elas'
  },
  {
    word: 'thing',
    phrase: 'What is that thing on the floor?',
    translation: 'coisa'
  },
  {
    word: 'think',
    phrase:
      'If he thinks he can fool me, he has another think coming. [=he is wrong]',
    translation: 'pensar'
  },
  {
    word: 'third',
    phrase: 'We sat in the third row',
    translation: 'terço'
  },
  { word: 'this', phrase: 'early this morning', translation: 'este' },
  { word: 'those', phrase: '', translation: 'aqueles' },
  {
    word: 'though',
    phrase: 'Though it was raining, we went hiking',
    translation: 'embora'
  },
  {
    word: 'thought',
    phrase: 'innovative ideas',
    translation: 'pensamento'
  },
  { word: 'thousand', phrase: '', translation: 'mil' },
  {
    word: 'threat',
    phrase: 'He was willing to use violence and threats to get what he wanted',
    translation: 'ameaça'
  },
  {
    word: 'three',
    phrase: "What time is it? It's three",
    translation: 'três'
  },
  {
    word: 'through',
    phrase: 'a road through the desert',
    translation: 'através'
  },
  {
    word: 'throughout',
    phrase: 'The company has stores throughout the United States and Canada',
    translation: 'por todo'
  },
  { word: 'throw', phrase: 'thrown into chaos', translation: 'jogar' },
  {
    word: 'thus',
    phrase:
      'The judge expressed it thus: Our obligation is to discover the truth',
    translation: 'assim'
  },
  { word: 'time', phrase: 'move with the times', translation: 'vez' },
  {
    word: 'to',
    phrase: 'went back to the original idea',
    translation: 'to'
  },
  {
    word: 'today',
    phrase: 'We have to finish today',
    translation: 'hoje'
  },
  { word: 'together', phrase: 'add together', translation: 'juntos' },
  {
    word: 'tonight',
    phrase: "This afternoon I'm busy, but tonight I'm free",
    translation: 'esta noite'
  },
  {
    word: 'too',
    phrase: 'We are selling the house and the furniture too',
    translation: 'também'
  },
  { word: 'top', phrase: 'top form', translation: 'início' },
  { word: 'total', phrase: 'a total stranger', translation: 'total' },
  { word: 'tough', phrase: 'tough luck', translation: 'durão' },
  {
    word: 'toward',
    phrase: 'The bus is heading toward town',
    translation: 'para'
  },
  {
    word: 'town',
    phrase: 'the town of Jackson, Florida',
    translation: 'cidade'
  },
  {
    word: 'trade',
    phrase: 'did a good trade in small appliances',
    translation: 'freguesia'
  },
  {
    word: 'traditional',
    phrase: 'traditional songs/stories',
    translation: 'tradicional'
  },
  {
    word: 'training',
    phrase: 'The job requires special training',
    translation: 'treinamento'
  },
  {
    word: 'travel',
    phrase: 'The birds are traveling south for the winter',
    translation: 'viajar'
  },
  {
    word: 'treat',
    phrase: 'The author treats this issue in the next chapter',
    translation: 'tratar'
  },
  {
    word: 'treatment',
    phrase: 'palliative treatment of inoperable cancer',
    translation: 'tratamento'
  },
  { word: 'tree', phrase: 'a banana tree', translation: 'árvore' },
  {
    word: 'trial',
    phrase: 'He did not get a fair trial',
    translation: 'julgamento'
  },
  { word: 'trip', phrase: 'on a nostalgia trip', translation: 'viagem' },
  {
    word: 'trouble',
    phrase: 'heading for trouble',
    translation: 'incomodar'
  },
  { word: 'true', phrase: 'the true faith', translation: 'verdadeiro' },
  {
    word: 'truth',
    phrase: 'At some point you have to face the simple truth that we failed',
    translation: 'verdade'
  },
  {
    word: 'try',
    phrase: 'ills that afflict the elderly',
    translation: 'tentar'
  },
  { word: 'turn', phrase: 'turn a crank', translation: 'virada' },
  { word: 'TV', phrase: 'We need a new TV', translation: 'TV' },
  {
    word: 'two',
    phrase: 'It was two in the morning',
    translation: 'duas'
  },
  {
    word: 'type',
    phrase: 'one of three basic body types',
    translation: 'digitar'
  },
  {
    word: 'under',
    phrase: 'a soft heart under a stern exterior',
    translation: 'embaixo'
  },
  {
    word: 'understand',
    phrase: 'orders that were fully understood and promptly obeyed',
    translation: 'compreender'
  },
  {
    word: 'unit',
    phrase: 'The family is the basic unit of society',
    translation: 'unidade'
  },
  {
    word: 'until',
    phrase: "we don't open until ten",
    translation: 'até'
  },
  {
    word: 'up',
    phrase: 'at prices of $10 and up',
    translation: 'em cima'
  },
  {
    word: 'upon',
    phrase: 'He carefully placed the vase upon the table',
    translation: 'sobre'
  },
  { word: 'us', phrase: 'Does God walk among us?', translation: 'nós' },
  { word: 'use', phrase: "didn't use to smoke", translation: 'uso' },
  {
    word: 'usually',
    phrase: 'a time of year when the weather is usually hot',
    translation: 'normalmente'
  },
  {
    word: 'value',
    phrase: 'the value of base stealing in baseball',
    translation: 'valor'
  },
  { word: 'various', phrase: 'different foods', translation: 'vários' },
  { word: 'very', phrase: "didn't hurt very much", translation: 'muito' },
  {
    word: 'victim',
    phrase: 'a victim of the auto crash',
    translation: 'vítima'
  },
  {
    word: 'view',
    phrase: 'sat high in the bleachers to get a good view',
    translation: 'vista'
  },
  {
    word: 'violence',
    phrase:
      'They need to learn how to settle their arguments without resorting to violence',
    translation: 'violência'
  },
  {
    word: 'visit',
    phrase: 'She is visiting her aunt in New York',
    translation: 'visitar'
  },
  {
    word: 'voice',
    phrase: 'expressed her feelings in music',
    translation: 'voz'
  },
  {
    word: 'vote',
    phrase: 'They encouraged everyone to vote in the presidential election',
    translation: 'votar'
  },
  { word: 'wait', phrase: 'wait your turn', translation: 'esperar' },
  { word: 'walk', phrase: 'walk a tightrope', translation: 'andar' },
  { word: 'wall', phrase: 'heart walls', translation: 'parede' },
  {
    word: 'want',
    phrase: 'wants out of the deal',
    translation: 'querer'
  },
  { word: 'war', phrase: 'a war against disease', translation: 'guerra' },
  { word: 'watch', phrase: 'watch a ball game', translation: 'relógio' },
  {
    word: 'water',
    phrase: 'Would you like a glass of water?',
    translation: 'regar'
  },
  { word: 'way', phrase: 'a way with words', translation: 'caminho' },
  {
    word: 'we',
    phrase: 'We would like to order now',
    translation: 'nós'
  },
  {
    word: 'weapon',
    phrase: 'assault with a deadly weapon',
    translation: 'arma'
  },
  { word: 'wear', phrase: 'wear glasses', translation: 'desgaste' },
  {
    word: 'week',
    phrase: 'the last week of the month',
    translation: 'semana'
  },
  {
    word: 'weight',
    phrase: 'a region with no cities of importance',
    translation: 'peso'
  },
  {
    word: 'well',
    phrase: 'works well under pressure',
    translation: 'bem'
  },
  {
    word: 'west',
    phrase: 'They drove west after they got off the highway',
    translation: 'poente'
  },
  { word: 'western', phrase: 'western music', translation: 'ocidental' },
  {
    word: 'what',
    phrase: 'What is wealth without friends?',
    translation: 'what'
  },
  {
    word: 'whatever',
    phrase: 'no food whatever',
    translation: 'o que quer que'
  },
  {
    word: 'when',
    phrase: 'When did the American Civil War begin?',
    translation: 'quando'
  },
  { word: 'where', phrase: 'where are we going', translation: 'onde' },
  {
    word: 'whether',
    phrase: 'wondered whether to stay',
    translation: 'se'
  },
  {
    word: 'which',
    phrase: 'kept a record of which employees took their vacations in July',
    translation: 'o qual'
  },
  {
    word: 'while',
    phrase: 'It took them a while to find out what was causing the problem',
    translation: 'enquanto'
  },
  { word: 'white', phrase: 'a white rabbit', translation: 'branca' },
  { word: 'who', phrase: 'find out who they are', translation: 'quem' },
  { word: 'whole', phrase: 'a whole egg', translation: 'todo' },
  {
    word: 'whom',
    phrase: 'whom shall I say is calling?',
    translation: 'quem'
  },
  {
    word: 'whose',
    phrase: 'This is the book whose cover is torn',
    translation: 'de quem'
  },
  {
    word: 'why',
    phrase: 'that is why you did it',
    translation: 'por que'
  },
  { word: 'wide', phrase: 'industry-wide', translation: 'largo' },
  {
    word: 'wife',
    phrase: 'We met him and his wife',
    translation: 'esposa'
  },
  {
    word: 'will',
    phrase: 'if we will all do our best',
    translation: 'vai'
  },
  {
    word: 'win',
    phrase: 'The boxer won the match by knockout',
    translation: 'ganhar'
  },
  { word: 'wind', phrase: '', translation: 'vento' },
  {
    word: 'window',
    phrase: 'She opened a window to let in some air',
    translation: 'janela'
  },
  {
    word: 'wish',
    phrase: 'desires to start a new life',
    translation: 'desejo'
  },
  { word: 'with', phrase: 'a talk with a friend', translation: 'com' },
  { word: 'within', phrase: 'within sight', translation: 'dentro de' },
  { word: 'without', phrase: 'left without him', translation: 'sem' },
  {
    word: 'woman',
    phrase: 'She grew up to become a confident and beautiful woman',
    translation: 'mulher'
  },
  {
    word: 'wonder',
    phrase: 'the pyramid is a wonder to behold',
    translation: 'maravilha'
  },
  {
    word: 'word',
    phrase: 'How do you spell that word?',
    translation: 'palavrao'
  },
  { word: 'work', phrase: 'work farmland', translation: 'trabalho' },
  {
    word: 'worker',
    phrase: 'The company is planning to hire 200 workers',
    translation: 'trabalhador'
  },
  { word: 'world', phrase: 'the digital world', translation: 'mundo' },
  {
    word: 'worry',
    phrase: 'pursued a policy of worrying the enemy',
    translation: 'preocupação'
  },
  {
    word: 'would',
    phrase: 'would be glad to know the answer',
    translation: 'seria'
  },
  { word: 'write', phrase: 'write a check', translation: 'escrever' },
  {
    word: 'writer',
    phrase: 'She is my favorite French writer',
    translation: 'escritor'
  },
  {
    word: 'wrong',
    phrase: 'the injustices suffered by the lower classes',
    translation: 'errado'
  },
  { word: 'yard', phrase: '', translation: 'pátio' },
  {
    word: 'yeah',
    phrase: 'Do you want to come? Yeah, sure',
    translation: 'sim'
  },
  {
    word: 'year',
    phrase: "I haven't seen her in a year",
    translation: 'ano'
  },
  {
    word: 'yes',
    phrase: "yes, I'll be ready for the test tomorrow",
    translation: 'sim'
  },
  {
    word: 'yet',
    phrase: 'His latest novel is his best one yet',
    translation: 'ainda'
  },
  { word: 'you', phrase: '', translation: 'você' },
  { word: 'young', phrase: 'a young wine', translation: 'jovem' },
  {
    word: 'your',
    phrase: 'Please wash your hands before dinner',
    translation: 'tua'
  },
  {
    word: 'yourself',
    phrase: "You're not yourself today. Is something wrong?",
    translation: 'você mesmo'
  }
];

export default CONTENTS;
