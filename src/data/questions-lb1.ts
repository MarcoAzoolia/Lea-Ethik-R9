import type { Question } from '../types';

export const questionsLB1: Question[] = [
  {
    id: 'lb1-q01',
    areaId: 'lb1',
    question: 'Welche vier Schritte umfasst die Gewaltfreie Kommunikation nach Marshall Rosenberg?',
    answers: [
      { id: 'a', text: 'Beobachtung, Gefuehl, Beduerfnis, Bitte', isCorrect: true },
      { id: 'b', text: 'Vorwurf, Kritik, Forderung, Drohung', isCorrect: false },
      { id: 'c', text: 'Analyse, Bewertung, Loesung, Umsetzung', isCorrect: false },
      { id: 'd', text: 'Zuhoeren, Verstehen, Antworten, Handeln', isCorrect: false },
    ],
    explanation:
      'Die vier Schritte der Gewaltfreien Kommunikation (GFK) nach Rosenberg lauten: 1. Beobachtung (ohne Bewertung), 2. Gefuehl (eigene Emotionen benennen), 3. Beduerfnis (das hinter dem Gefuehl steht), 4. Bitte (konkret und erfuellbar formulieren).',
    difficulty: 'leicht',
    topic: 'Gewaltfreie Kommunikation',
  },
  {
    id: 'lb1-q02',
    areaId: 'lb1',
    question:
      'Was ist der Unterschied zwischen einer Beobachtung und einer Bewertung in der Gewaltfreien Kommunikation?',
    answers: [
      { id: 'a', text: 'Es gibt keinen Unterschied, beides meint dasselbe.', isCorrect: false },
      {
        id: 'b',
        text: 'Eine Beobachtung beschreibt, was tatsaechlich passiert ist, ohne es zu beurteilen. Eine Bewertung enthaelt eine persoenliche Einschaetzung.',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Beobachtungen macht man mit den Augen, Bewertungen mit dem Verstand.',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Bewertungen sind immer negativ, Beobachtungen immer positiv.',
        isCorrect: false,
      },
    ],
    explanation:
      'In der GFK ist es wichtig, reine Beobachtungen von Bewertungen zu trennen. "Du hast mich dreimal unterbrochen" ist eine Beobachtung, "Du bist respektlos" waere eine Bewertung. Bewertungen fuehren oft zu Abwehr beim Gegenueber.',
    difficulty: 'mittel',
    topic: 'Gewaltfreie Kommunikation',
  },
  {
    id: 'lb1-q03',
    areaId: 'lb1',
    question: 'Was versteht Johan Galtung unter "negativem Frieden"?',
    answers: [
      { id: 'a', text: 'Einen Zustand, in dem Menschen ungluecklich sind.', isCorrect: false },
      {
        id: 'b',
        text: 'Die blosse Abwesenheit von Krieg und direkter Gewalt, ohne dass Gerechtigkeit herrscht.',
        isCorrect: true,
      },
      { id: 'c', text: 'Einen Friedensvertrag, der von einer Seite gebrochen wird.', isCorrect: false },
      { id: 'd', text: 'Frieden, der durch Waffen erzwungen wird.', isCorrect: false },
    ],
    explanation:
      'Negativer Frieden nach Galtung bedeutet lediglich die Abwesenheit von direkter Gewalt und Krieg. Es fehlen aber moeglicherweise Gerechtigkeit, Freiheit und Chancengleichheit. Erst wenn diese vorhanden sind, spricht Galtung von positivem Frieden.',
    difficulty: 'mittel',
    topic: 'Positiver und negativer Frieden',
  },
  {
    id: 'lb1-q04',
    areaId: 'lb1',
    question: 'Was kennzeichnet den "positiven Frieden" nach Galtung?',
    answers: [
      { id: 'a', text: 'Es herrscht kein Krieg.', isCorrect: false },
      { id: 'b', text: 'Alle Menschen sind bewaffnet und koennen sich verteidigen.', isCorrect: false },
      {
        id: 'c',
        text: 'Neben der Abwesenheit von Gewalt herrschen auch Gerechtigkeit, Freiheit und Gleichberechtigung.',
        isCorrect: true,
      },
      { id: 'd', text: 'Die Regierung kontrolliert alle Konflikte.', isCorrect: false },
    ],
    explanation:
      'Positiver Frieden geht ueber die blosse Abwesenheit von Krieg hinaus. Er umfasst soziale Gerechtigkeit, Menschenrechte, Chancengleichheit und Freiheit. Galtung sieht dies als das eigentliche Ziel der Friedensforschung.',
    difficulty: 'leicht',
    topic: 'Positiver und negativer Frieden',
  },
  {
    id: 'lb1-q05',
    areaId: 'lb1',
    question: 'Welches Beispiel beschreibt "strukturelle Gewalt" nach Galtung?',
    answers: [
      { id: 'a', text: 'Ein Schueler schlaegt einen Mitschueler auf dem Pausenhof.', isCorrect: false },
      {
        id: 'b',
        text: 'Maedchen wird in einem Land der Zugang zu Bildung verwehrt, weil Gesetze dies verbieten.',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'In einem Film wird Gewalt als cool dargestellt.',
        isCorrect: false,
      },
      { id: 'd', text: 'Jemand beleidigt eine andere Person im Internet.', isCorrect: false },
    ],
    explanation:
      'Strukturelle Gewalt ist in gesellschaftliche Strukturen eingebaut. Sie aeussert sich z. B. in ungerechten Gesetzen, Armut oder fehlenden Bildungschancen. Im Gegensatz zur direkten Gewalt hat sie keinen konkreten Taeter, sondern ist im System verankert.',
    difficulty: 'mittel',
    topic: 'Gewaltformen nach Galtung',
  },
  {
    id: 'lb1-q06',
    areaId: 'lb1',
    question: 'Was versteht Galtung unter "kultureller Gewalt"?',
    answers: [
      { id: 'a', text: 'Gewalt, die bei kulturellen Veranstaltungen ausbricht.', isCorrect: false },
      { id: 'b', text: 'Gewalt zwischen verschiedenen Kulturen.', isCorrect: false },
      {
        id: 'c',
        text: 'Ideen, Normen oder Traditionen, die direkte oder strukturelle Gewalt rechtfertigen oder legitimieren.',
        isCorrect: true,
      },
      { id: 'd', text: 'Zerstoerung von Kunstwerken und Denkmaelern.', isCorrect: false },
    ],
    explanation:
      'Kulturelle Gewalt umfasst Aspekte der Kultur (Religion, Ideologie, Sprache, Kunst), die dazu dienen, direkte oder strukturelle Gewalt zu legitimieren. Beispiel: Rassistische Ideologien, die Diskriminierung als "natuerlich" darstellen.',
    difficulty: 'schwer',
    topic: 'Gewaltformen nach Galtung',
  },
  {
    id: 'lb1-q07',
    areaId: 'lb1',
    question: 'Was ist das Ziel einer Mediation?',
    answers: [
      {
        id: 'a',
        text: 'Dass ein Richter entscheidet, wer Recht hat.',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Dass beide Konfliktparteien mit Hilfe eines neutralen Vermittlers eine gemeinsame Loesung finden.',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Dass eine Partei nachgibt und die andere gewinnt.',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Dass der Konflikt oeffentlich gemacht wird.',
        isCorrect: false,
      },
    ],
    explanation:
      'Bei einer Mediation hilft ein neutraler Vermittler (Mediator) den Konfliktparteien, eigenstaendig eine Loesung zu finden, mit der beide Seiten einverstanden sind (Win-Win-Loesung). Der Mediator entscheidet nicht, sondern moderiert das Gespraech.',
    difficulty: 'leicht',
    topic: 'Mediation',
  },
  {
    id: 'lb1-q08',
    areaId: 'lb1',
    question: 'Was ist eine "Killerphrase"?',
    answers: [
      { id: 'a', text: 'Ein besonders ueberzeugender Satz in einer Diskussion.', isCorrect: false },
      {
        id: 'b',
        text: 'Ein Satz, der ein Gespraech oder eine Idee sofort abwuergt, ohne sachlich darauf einzugehen.',
        isCorrect: true,
      },
      { id: 'c', text: 'Ein Satz, mit dem man einen Streit gewinnt.', isCorrect: false },
      { id: 'd', text: 'Eine besonders hoefliche Art, Nein zu sagen.', isCorrect: false },
    ],
    explanation:
      'Killerphrasen sind Saetze wie "Das haben wir schon immer so gemacht", "Das funktioniert sowieso nicht" oder "Dafuer bist du noch zu jung". Sie toeten jede weitere Diskussion, ohne sich inhaltlich mit dem Argument auseinanderzusetzen.',
    difficulty: 'leicht',
    topic: 'Killerphrasen',
  },
  {
    id: 'lb1-q09',
    areaId: 'lb1',
    question: 'Welcher Satz ist ein typisches Beispiel fuer eine Killerphrase?',
    answers: [
      { id: 'a', text: '"Kannst du mir das bitte genauer erklaeren?"', isCorrect: false },
      { id: 'b', text: '"Ich sehe das anders, weil..."', isCorrect: false },
      { id: 'c', text: '"Das haben wir noch nie so gemacht!"', isCorrect: true },
      { id: 'd', text: '"Lass uns gemeinsam eine Loesung suchen."', isCorrect: false },
    ],
    explanation:
      '"Das haben wir noch nie so gemacht!" ist eine klassische Killerphrase. Sie lehnt einen Vorschlag ab, ohne sich inhaltlich damit zu befassen. Die anderen Antworten zeigen konstruktive Gespraechsfuehrung.',
    difficulty: 'leicht',
    topic: 'Killerphrasen',
  },
  {
    id: 'lb1-q10',
    areaId: 'lb1',
    question: 'Was schuetzt Artikel 2 des Grundgesetzes?',
    answers: [
      { id: 'a', text: 'Das Recht auf freie Meinungsaeusserung.', isCorrect: false },
      {
        id: 'b',
        text: 'Das Recht auf freie Entfaltung der Persoenlichkeit und auf koerperliche Unversehrtheit.',
        isCorrect: true,
      },
      { id: 'c', text: 'Das Recht auf Eigentum.', isCorrect: false },
      { id: 'd', text: 'Das Recht auf Asyl.', isCorrect: false },
    ],
    explanation:
      'Art. 2 GG schuetzt die freie Entfaltung der Persoenlichkeit (Abs. 1) sowie das Recht auf Leben und koerperliche Unversehrtheit (Abs. 2). Die freie Entfaltung findet ihre Grenze dort, wo die Rechte anderer verletzt werden.',
    difficulty: 'mittel',
    topic: 'Grundgesetz',
  },
  {
    id: 'lb1-q11',
    areaId: 'lb1',
    question: 'Was besagt Artikel 3 des Grundgesetzes?',
    answers: [
      { id: 'a', text: 'Alle Deutschen haben das Recht, sich friedlich zu versammeln.', isCorrect: false },
      { id: 'b', text: 'Die Wuerde des Menschen ist unantastbar.', isCorrect: false },
      {
        id: 'c',
        text: 'Alle Menschen sind vor dem Gesetz gleich. Niemand darf wegen Geschlecht, Herkunft, Rasse, Sprache, Religion oder Behinderung benachteiligt werden.',
        isCorrect: true,
      },
      { id: 'd', text: 'Jeder hat das Recht auf Bildung.', isCorrect: false },
    ],
    explanation:
      'Art. 3 GG ist der Gleichheitsgrundsatz. Er verbietet Diskriminierung aufgrund von Geschlecht, Abstammung, Rasse, Sprache, Heimat, Herkunft, Glauben, religioesen oder politischen Anschauungen und Behinderung.',
    difficulty: 'mittel',
    topic: 'Grundgesetz',
  },
  {
    id: 'lb1-q12',
    areaId: 'lb1',
    question: 'Welches ist ein Beispiel fuer psychische Gewalt?',
    answers: [
      { id: 'a', text: 'Jemanden schlagen.', isCorrect: false },
      {
        id: 'b',
        text: 'Jemanden ueber laengere Zeit systematisch ausgrenzen und ignorieren.',
        isCorrect: true,
      },
      { id: 'c', text: 'Jemandem den Ball wegnehmen.', isCorrect: false },
      { id: 'd', text: 'Jemanden an der Schulter festhalten.', isCorrect: false },
    ],
    explanation:
      'Psychische Gewalt umfasst Handlungen wie Mobbing, Ausgrenzung, Beschimpfungen, Drohungen oder Einschuechterung. Sie hinterlaesst keine sichtbaren Verletzungen, kann aber schwere seelische Schaeden verursachen.',
    difficulty: 'leicht',
    topic: 'Psychische und physische Gewalt',
  },
  {
    id: 'lb1-q13',
    areaId: 'lb1',
    question: 'Warum ist der Einsatz von Kindersoldaten ein schweres Verbrechen?',
    answers: [
      { id: 'a', text: 'Weil Kinder schlechte Soldaten sind.', isCorrect: false },
      { id: 'b', text: 'Weil Kinder zu teuer in der Ausbildung sind.', isCorrect: false },
      {
        id: 'c',
        text: 'Weil Kindern das Recht auf Schutz, Bildung und eine gewaltfreie Kindheit genommen wird und sie schwer traumatisiert werden.',
        isCorrect: true,
      },
      { id: 'd', text: 'Weil es gegen die Schulpflicht verstoesst.', isCorrect: false },
    ],
    explanation:
      'Der Einsatz von Kindersoldaten verletzt grundlegende Kinderrechte: das Recht auf Schutz vor Gewalt, auf Bildung und auf eine kindgerechte Entwicklung. Kinder werden oft entfuehrt, unter Drogen gesetzt und schwer traumatisiert. Die UN-Kinderrechtskonvention verbietet dies.',
    difficulty: 'mittel',
    topic: 'Kindersoldaten und Kinder in Kriegen',
  },
  {
    id: 'lb1-q14',
    areaId: 'lb1',
    question: 'Was regelt die UN-Kinderrechtskonvention?',
    answers: [
      { id: 'a', text: 'Nur die Schulpflicht fuer Kinder weltweit.', isCorrect: false },
      { id: 'b', text: 'Die Handelsbeziehungen zwischen Staaten.', isCorrect: false },
      {
        id: 'c',
        text: 'Die grundlegenden Rechte aller Kinder weltweit, z. B. auf Schutz, Bildung, Gesundheit und Mitbestimmung.',
        isCorrect: true,
      },
      { id: 'd', text: 'Nur die Rechte von Kindern in Europa.', isCorrect: false },
    ],
    explanation:
      'Die UN-Kinderrechtskonvention von 1989 legt grundlegende Rechte fuer alle Kinder unter 18 Jahren fest. Dazu gehoeren das Recht auf Ueberleben, Entwicklung, Schutz und Beteiligung. Fast alle Laender der Welt haben sie unterschrieben.',
    difficulty: 'leicht',
    topic: 'UN-Kinderrechtskonvention',
  },
  {
    id: 'lb1-q15',
    areaId: 'lb1',
    question: 'Welche Organisation setzt sich weltweit speziell fuer die Rechte von Kindern ein?',
    answers: [
      { id: 'a', text: 'Greenpeace', isCorrect: false },
      { id: 'b', text: 'UNICEF (Kinderhilfswerk der Vereinten Nationen)', isCorrect: true },
      { id: 'c', text: 'Amnesty International', isCorrect: false },
      { id: 'd', text: 'WWF', isCorrect: false },
    ],
    explanation:
      'UNICEF (United Nations International Children\'s Emergency Fund) ist das Kinderhilfswerk der Vereinten Nationen. Es setzt sich weltweit fuer den Schutz, die Bildung und die Gesundheit von Kindern ein, besonders in Krisen- und Kriegsgebieten.',
    difficulty: 'leicht',
    topic: 'Hilfsorganisationen',
  },
  {
    id: 'lb1-q16',
    areaId: 'lb1',
    question: 'Wofuer steht Mahatma Gandhi mit seinem Prinzip "Ahimsa"?',
    answers: [
      { id: 'a', text: 'Fuer den bewaffneten Widerstand gegen Unterdrueckung.', isCorrect: false },
      {
        id: 'b',
        text: 'Fuer Gewaltlosigkeit als Grundprinzip des Zusammenlebens und des politischen Kampfes.',
        isCorrect: true,
      },
      { id: 'c', text: 'Fuer die Trennung von Religion und Politik.', isCorrect: false },
      { id: 'd', text: 'Fuer die wirtschaftliche Unabhaengigkeit Indiens.', isCorrect: false },
    ],
    explanation:
      'Ahimsa bedeutet Gewaltlosigkeit und ist ein zentrales Prinzip in Gandhis Philosophie. Gandhi setzte Ahimsa als Mittel des politischen Widerstands ein, z. B. durch gewaltlose Proteste und zivilen Ungehorsam gegen die britische Kolonialherrschaft in Indien.',
    difficulty: 'mittel',
    topic: 'Gandhi und Gewaltlosigkeit',
  },
  {
    id: 'lb1-q17',
    areaId: 'lb1',
    question: 'Welche Methode nutzte Martin Luther King im Kampf gegen Rassendiskriminierung?',
    answers: [
      { id: 'a', text: 'Bewaffneten Aufstand.', isCorrect: false },
      { id: 'b', text: 'Wirtschaftliche Erpressung.', isCorrect: false },
      {
        id: 'c',
        text: 'Gewaltfreien Widerstand durch friedliche Demonstrationen, Boykotte und oeffentliche Reden.',
        isCorrect: true,
      },
      { id: 'd', text: 'Diplomatische Verhandlungen im Geheimen.', isCorrect: false },
    ],
    explanation:
      'Martin Luther King Jr. setzte auf gewaltfreien Widerstand, inspiriert von Gandhi. Er organisierte friedliche Maersche, Sitzstreiks und Boykotte (z. B. den Busboykott von Montgomery). Seine beruehmte Rede "I Have a Dream" steht fuer den Traum von Gleichberechtigung.',
    difficulty: 'mittel',
    topic: 'Martin Luther King',
  },
  {
    id: 'lb1-q18',
    areaId: 'lb1',
    question: 'Was forderte Immanuel Kant in seiner Schrift "Zum ewigen Frieden"?',
    answers: [
      { id: 'a', text: 'Dass ein einzelner maechtiger Staat die Welt regieren soll.', isCorrect: false },
      {
        id: 'b',
        text: 'Einen Voelkerbund freier Staaten, der durch internationale Regeln und Vertraege dauerhaften Frieden sichert.',
        isCorrect: true,
      },
      { id: 'c', text: 'Dass Kriege durch Duelle zwischen Staatsoberhaeuptern entschieden werden.', isCorrect: false },
      { id: 'd', text: 'Die Abschaffung aller Armeen und Waffen sofort und ohne Bedingungen.', isCorrect: false },
    ],
    explanation:
      'Kant entwarf 1795 die Idee eines Voelkerbundes, in dem sich freie Republiken zusammenschliessen und durch voelkerrechtliche Vertraege den Frieden sichern. Diese Idee gilt als Vorlaeufer der Vereinten Nationen (UN).',
    difficulty: 'schwer',
    topic: 'Kant und ewiger Frieden',
  },
  {
    id: 'lb1-q19',
    areaId: 'lb1',
    question:
      'Inwiefern unterscheidet sich die Darstellung von Krieg in Filmen und Computerspielen von der Realitaet?',
    answers: [
      { id: 'a', text: 'Es gibt keinen Unterschied, Medien zeigen die Realitaet.', isCorrect: false },
      { id: 'b', text: 'In Medien wird Krieg immer als negativ dargestellt.', isCorrect: false },
      {
        id: 'c',
        text: 'In Medien wird Krieg oft verharmlost oder als Abenteuer dargestellt, waehrend die Realitaet Leid, Trauma, Zerstoerung und Tod bedeutet.',
        isCorrect: true,
      },
      { id: 'd', text: 'Die Realitaet ist weniger schlimm als in Filmen.', isCorrect: false },
    ],
    explanation:
      'Filme und Computerspiele stellen Krieg oft als spannendes Abenteuer dar, in dem Helden kaempfen und gewinnen. Die Realitaet von Krieg umfasst aber Leid, Tod, Zerstoerung, Traumatisierung, Flucht und langfristige Folgen fuer die Zivilbevoelkerung. Diese kritische Medienkompetenz ist wichtig.',
    difficulty: 'mittel',
    topic: 'Krieg in Medien vs. Realitaet',
  },
  {
    id: 'lb1-q20',
    areaId: 'lb1',
    question:
      'Welche Hilfsorganisation ist fuer ihren Einsatz mit Aerzten in Krisengebieten bekannt und traegt den Namen "Aerzte ohne Grenzen"?',
    answers: [
      { id: 'a', text: 'terre des hommes', isCorrect: false },
      { id: 'b', text: 'Internationales Rotes Kreuz', isCorrect: false },
      { id: 'c', text: 'Medecins Sans Frontieres (MSF)', isCorrect: true },
      { id: 'd', text: 'UNICEF', isCorrect: false },
    ],
    explanation:
      'Medecins Sans Frontieres (MSF), auf Deutsch "Aerzte ohne Grenzen", ist eine internationale Hilfsorganisation, die medizinische Nothilfe in Krisengebieten leistet. Sie arbeitet unabhaengig von Regierungen und versorgt Menschen in Kriegsgebieten, nach Naturkatastrophen und bei Epidemien.',
    difficulty: 'leicht',
    topic: 'Hilfsorganisationen',
  },
];
