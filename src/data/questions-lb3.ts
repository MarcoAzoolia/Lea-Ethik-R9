import type { Question } from '../types';

export const questionsLB3: Question[] = [
  {
    id: 'lb3-q01',
    areaId: 'lb3',
    question: 'Welche Funktion erfuellt Religion NICHT fuer glaeubige Menschen?',
    answers: [
      { id: 'a', text: 'Sinnstiftung und Orientierung im Leben', isCorrect: false },
      { id: 'b', text: 'Gemeinschaft und Zusammenhalt', isCorrect: false },
      { id: 'c', text: 'Garantie fuer wirtschaftlichen Erfolg', isCorrect: true },
      { id: 'd', text: 'Hilfe bei der Bewaeltigung von Aengsten', isCorrect: false },
    ],
    explanation:
      'Religion bietet Sinnstiftung, Orientierung, Gemeinschaft und Angstbewaeltigung. Wirtschaftlichen Erfolg garantiert keine Religion.',
    difficulty: 'leicht',
    topic: 'Funktion von Religion',
  },
  {
    id: 'lb3-q02',
    areaId: 'lb3',
    question: 'Was schuetzt Artikel 4 des Grundgesetzes?',
    answers: [
      { id: 'a', text: 'Nur das Recht, einer Religion anzugehoeren', isCorrect: false },
      { id: 'b', text: 'Die Religionsfreiheit: sowohl die Freiheit ZUR als auch die Freiheit VON Religion', isCorrect: true },
      { id: 'c', text: 'Nur das Recht, keiner Religion anzugehoeren', isCorrect: false },
      { id: 'd', text: 'Das Verbot religioser Symbole in der Oeffentlichkeit', isCorrect: false },
    ],
    explanation:
      'Art. 4 GG schuetzt die positive Religionsfreiheit (Freiheit ZUR Religion) und die negative Religionsfreiheit (Freiheit VON Religion). Jeder darf glauben oder nicht glauben.',
    difficulty: 'mittel',
    topic: 'Art. 4 GG - Religionsfreiheit',
  },
  {
    id: 'lb3-q03',
    areaId: 'lb3',
    question: 'Was regelt Artikel 9 der Europaeischen Menschenrechtskonvention (EMRK)?',
    answers: [
      { id: 'a', text: 'Das Recht auf Eigentum', isCorrect: false },
      { id: 'b', text: 'Das Recht auf freie Meinungsaeusserung', isCorrect: false },
      { id: 'c', text: 'Die Gedanken-, Gewissens- und Religionsfreiheit', isCorrect: true },
      { id: 'd', text: 'Das Recht auf koerperliche Unversehrtheit', isCorrect: false },
    ],
    explanation:
      'Art. 9 EMRK schuetzt die Gedanken-, Gewissens- und Religionsfreiheit auf europaeischer Ebene, aehnlich wie Art. 4 GG auf nationaler Ebene.',
    difficulty: 'mittel',
    topic: 'Art. 9 EMRK',
  },
  {
    id: 'lb3-q04',
    areaId: 'lb3',
    question: 'Was ist der wesentliche Unterschied zwischen religioesen Geboten und staatlichen Gesetzen?',
    answers: [
      { id: 'a', text: 'Religioese Gebote gelten nur fuer Glaeubige, staatliche Gesetze fuer alle Buerger', isCorrect: true },
      { id: 'b', text: 'Staatliche Gesetze gelten nur fuer Erwachsene', isCorrect: false },
      { id: 'c', text: 'Religioese Gebote sind strenger als staatliche Gesetze', isCorrect: false },
      { id: 'd', text: 'Staatliche Gesetze duerfen religioesen Geboten nie widersprechen', isCorrect: false },
    ],
    explanation:
      'Religioese Gebote binden nur die Anhaenger einer Religion. Staatliche Gesetze hingegen gelten fuer alle Menschen in einem Staat, unabhaengig von ihrer Religion.',
    difficulty: 'leicht',
    topic: 'Religioese Gebote vs. staatliche Gesetze',
  },
  {
    id: 'lb3-q05',
    areaId: 'lb3',
    question: 'Was versteht man unter religioesem Fundamentalismus?',
    answers: [
      { id: 'a', text: 'Eine besonders friedliche Auslegung religioeser Texte', isCorrect: false },
      { id: 'b', text: 'Die woertliche, kompromisslose Auslegung religioeser Schriften, oft verbunden mit Intoleranz', isCorrect: true },
      { id: 'c', text: 'Das gruendliche Studium verschiedener Religionen', isCorrect: false },
      { id: 'd', text: 'Die wissenschaftliche Erforschung religioeser Grundlagen', isCorrect: false },
    ],
    explanation:
      'Fundamentalismus bedeutet eine woertliche, starre Auslegung religioeser Texte. In extremer Form kann er zu Intoleranz und Gewalt fuehren und stellt einen Missbrauch von Religion dar.',
    difficulty: 'mittel',
    topic: 'Fundamentalismus und Extremismus',
  },
  {
    id: 'lb3-q06',
    areaId: 'lb3',
    question: 'Wie lautet die Goldene Regel des juedischen Gelehrten Hillel?',
    answers: [
      { id: 'a', text: 'Liebe deinen Naechsten wie dich selbst', isCorrect: false },
      { id: 'b', text: 'Was dir verhasst ist, das tue keinem anderen an', isCorrect: true },
      { id: 'c', text: 'Auge um Auge, Zahn um Zahn', isCorrect: false },
      { id: 'd', text: 'Du sollst nicht toeten', isCorrect: false },
    ],
    explanation:
      'Hillel fasste die Thora in einem Satz zusammen: "Was dir verhasst ist, das tue keinem anderen an." Dies ist die Goldene Regel im Judentum.',
    difficulty: 'mittel',
    topic: 'Judentum - Goldene Regel',
  },
  {
    id: 'lb3-q07',
    areaId: 'lb3',
    question: 'Welches Gebot gehoert NICHT zu den Zehn Geboten (Dekalog)?',
    answers: [
      { id: 'a', text: 'Du sollst nicht toeten', isCorrect: false },
      { id: 'b', text: 'Du sollst nicht stehlen', isCorrect: false },
      { id: 'c', text: 'Du sollst taeglich beten', isCorrect: true },
      { id: 'd', text: 'Du sollst Vater und Mutter ehren', isCorrect: false },
    ],
    explanation:
      'Die Zehn Gebote enthalten unter anderem "Du sollst nicht toeten", "Du sollst nicht stehlen" und "Du sollst Vater und Mutter ehren". Taegliches Beten ist kein Bestandteil des Dekalogs.',
    difficulty: 'leicht',
    topic: 'Judentum - Zehn Gebote',
  },
  {
    id: 'lb3-q08',
    areaId: 'lb3',
    question: 'In welchem Teil der Bibel findet sich die Bergpredigt?',
    answers: [
      { id: 'a', text: 'Im Buch Genesis (Altes Testament)', isCorrect: false },
      { id: 'b', text: 'Im Matthaeus-Evangelium, Kapitel 5-7 (Neues Testament)', isCorrect: true },
      { id: 'c', text: 'In der Apostelgeschichte', isCorrect: false },
      { id: 'd', text: 'Im Buch der Psalmen', isCorrect: false },
    ],
    explanation:
      'Die Bergpredigt steht im Matthaeus-Evangelium (Mt 5-7). Sie enthaelt zentrale ethische Lehren Jesu wie die Seligpreisungen, die Feindesliebe und die Naechstenliebe.',
    difficulty: 'leicht',
    topic: 'Christentum - Bergpredigt',
  },
  {
    id: 'lb3-q09',
    areaId: 'lb3',
    question: 'Was fordert Jesus in der Bergpredigt mit dem Gebot der Feindesliebe?',
    answers: [
      { id: 'a', text: 'Man soll seine Feinde ignorieren', isCorrect: false },
      { id: 'b', text: 'Man soll sich an seinen Feinden raechen', isCorrect: false },
      { id: 'c', text: 'Man soll auch seine Feinde lieben und fuer sie beten', isCorrect: true },
      { id: 'd', text: 'Man soll keine Feinde haben', isCorrect: false },
    ],
    explanation:
      'Die Feindesliebe (Mt 5,44) ist eine der radikalsten Forderungen der Bergpredigt: Man soll seine Feinde lieben und fuer die beten, die einen verfolgen.',
    difficulty: 'mittel',
    topic: 'Christentum - Feindesliebe',
  },
  {
    id: 'lb3-q10',
    areaId: 'lb3',
    question: 'Welche Sure ist die Eroeffnungssure des Koran?',
    answers: [
      { id: 'a', text: 'Sure 17 (Al-Isra)', isCorrect: false },
      { id: 'b', text: 'Sure 2 (Al-Baqara)', isCorrect: false },
      { id: 'c', text: 'Sure 1 (Al-Fatiha)', isCorrect: true },
      { id: 'd', text: 'Sure 112 (Al-Ikhlas)', isCorrect: false },
    ],
    explanation:
      'Al-Fatiha (Sure 1) ist die Eroeffnungssure des Koran. Sie wird in jedem islamischen Gebet rezitiert und gilt als Zusammenfassung des gesamten Koran.',
    difficulty: 'leicht',
    topic: 'Islam - Al-Fatiha',
  },
  {
    id: 'lb3-q11',
    areaId: 'lb3',
    question: 'Welche ethische Weisung enthaelt Sure 17, Verse 22-38 des Koran?',
    answers: [
      { id: 'a', text: 'Regeln fuer den Ramadan', isCorrect: false },
      { id: 'b', text: 'Einen Pflichtenkodex mit Elternehrung, Toetungsverbot und weiteren Verhaltensregeln', isCorrect: true },
      { id: 'c', text: 'Anweisungen fuer die Pilgerfahrt nach Mekka', isCorrect: false },
      { id: 'd', text: 'Die Geschichte des Propheten Mohammed', isCorrect: false },
    ],
    explanation:
      'Sure 17, Verse 22-38 enthalten einen islamischen Pflichtenkodex: Nur Gott anbeten, Eltern ehren, nicht toeten, nicht Unzucht treiben, ehrlich handeln und nicht hochmuetig sein.',
    difficulty: 'schwer',
    topic: 'Islam - Pflichtenkodex',
  },
  {
    id: 'lb3-q12',
    areaId: 'lb3',
    question: 'Was sind die Vier Edlen Wahrheiten im Buddhismus?',
    answers: [
      { id: 'a', text: 'Geburt, Leben, Tod, Wiedergeburt', isCorrect: false },
      { id: 'b', text: 'Wahrheit vom Leiden, der Ursache des Leidens, der Aufhebung des Leidens und dem Weg dorthin', isCorrect: true },
      { id: 'c', text: 'Liebe, Mitgefuehl, Freude, Gleichmut', isCorrect: false },
      { id: 'd', text: 'Weisheit, Mut, Gerechtigkeit, Maessigung', isCorrect: false },
    ],
    explanation:
      'Die Vier Edlen Wahrheiten lauten: 1. Leben ist Leiden (Dukkha), 2. Ursache des Leidens ist die Gier, 3. Leiden kann ueberwunden werden, 4. Der Weg dorthin ist der Achtfache Pfad.',
    difficulty: 'mittel',
    topic: 'Buddhismus - Vier Edle Wahrheiten',
  },
  {
    id: 'lb3-q13',
    areaId: 'lb3',
    question: 'Welches Element gehoert NICHT zum Achtfachen Pfad im Buddhismus?',
    answers: [
      { id: 'a', text: 'Rechte Achtsamkeit', isCorrect: false },
      { id: 'b', text: 'Rechte Rede', isCorrect: false },
      { id: 'c', text: 'Rechter Reichtum', isCorrect: true },
      { id: 'd', text: 'Rechter Lebenserwerb', isCorrect: false },
    ],
    explanation:
      'Der Achtfache Pfad umfasst: rechte Erkenntnis, rechte Absicht, rechte Rede, rechtes Handeln, rechter Lebenserwerb, rechte Anstrengung, rechte Achtsamkeit, rechte Sammlung. "Rechter Reichtum" gehoert nicht dazu.',
    difficulty: 'mittel',
    topic: 'Buddhismus - Achtfacher Pfad',
  },
  {
    id: 'lb3-q14',
    areaId: 'lb3',
    question: 'Was bedeutet "Ahimsa" im Hinduismus?',
    answers: [
      { id: 'a', text: 'Die Pflicht zur Pilgerreise', isCorrect: false },
      { id: 'b', text: 'Gewaltlosigkeit gegenueber allen Lebewesen', isCorrect: true },
      { id: 'c', text: 'Die Verehrung heiliger Kuehe', isCorrect: false },
      { id: 'd', text: 'Das Kastensystem', isCorrect: false },
    ],
    explanation:
      'Ahimsa ist das Prinzip der Gewaltlosigkeit gegenueber allen Lebewesen. Es ist ein zentraler ethischer Grundsatz im Hinduismus, der auch Mahatma Gandhi praegte.',
    difficulty: 'leicht',
    topic: 'Hinduismus - Ahimsa',
  },
  {
    id: 'lb3-q15',
    areaId: 'lb3',
    question: 'Welcher Begriff im Hinduismus beschreibt das kosmische Gesetz von Ursache und Wirkung?',
    answers: [
      { id: 'a', text: 'Dharma', isCorrect: false },
      { id: 'b', text: 'Karma', isCorrect: true },
      { id: 'c', text: 'Veda', isCorrect: false },
      { id: 'd', text: 'Moksha', isCorrect: false },
    ],
    explanation:
      'Karma beschreibt das Gesetz von Ursache und Wirkung: Gute Taten fuehren zu gutem Karma, schlechte Taten zu schlechtem. Dharma ist die kosmische Ordnung und ethische Pflicht, Veden sind die heiligen Schriften.',
    difficulty: 'leicht',
    topic: 'Hinduismus - Karma',
  },
  {
    id: 'lb3-q16',
    areaId: 'lb3',
    question: 'Welches Grundprinzip steht im Zentrum von Hans Kuengs Projekt Weltethos?',
    answers: [
      { id: 'a', text: 'Alle Religionen sollen zu einer verschmelzen', isCorrect: false },
      { id: 'b', text: 'Das Prinzip der Menschlichkeit: Jeder Mensch muss menschlich behandelt werden', isCorrect: true },
      { id: 'c', text: 'Religionen sollen sich aus der Politik heraushalten', isCorrect: false },
      { id: 'd', text: 'Nur wissenschaftliche Erkenntnisse zaehlen', isCorrect: false },
    ],
    explanation:
      'Hans Kuengs Weltethos basiert auf dem Grundprinzip der Menschlichkeit: Jeder Mensch muss menschlich behandelt werden. Dazu kommen vier Weisungen: Gewaltlosigkeit, Solidaritaet, Toleranz und Gleichberechtigung.',
    difficulty: 'mittel',
    topic: 'Hans Kueng - Weltethos',
  },
  {
    id: 'lb3-q17',
    areaId: 'lb3',
    question: 'Welche vier Weisungen gehoeren zum Weltethos nach Hans Kueng?',
    answers: [
      { id: 'a', text: 'Glaube, Hoffnung, Liebe, Barmherzigkeit', isCorrect: false },
      { id: 'b', text: 'Freiheit, Gleichheit, Bruederlichkeit, Gerechtigkeit', isCorrect: false },
      { id: 'c', text: 'Gewaltlosigkeit, Solidaritaet, Toleranz, Gleichberechtigung', isCorrect: true },
      { id: 'd', text: 'Demut, Gehorsam, Armut, Keuschheit', isCorrect: false },
    ],
    explanation:
      'Die vier Weisungen des Weltethos sind: 1. Kultur der Gewaltlosigkeit, 2. Kultur der Solidaritaet, 3. Kultur der Toleranz, 4. Kultur der Gleichberechtigung von Mann und Frau.',
    difficulty: 'schwer',
    topic: 'Hans Kueng - Weltethos',
  },
  {
    id: 'lb3-q18',
    areaId: 'lb3',
    question: 'Was verbindet die Goldene Regel in verschiedenen Weltreligionen?',
    answers: [
      { id: 'a', text: 'Sie fordern alle das taegliche Gebet', isCorrect: false },
      { id: 'b', text: 'Sie enthalten den Grundsatz, andere so zu behandeln, wie man selbst behandelt werden moechte', isCorrect: true },
      { id: 'c', text: 'Sie verbieten alle den Verzehr von Fleisch', isCorrect: false },
      { id: 'd', text: 'Sie verlangen alle eine Pilgerfahrt', isCorrect: false },
    ],
    explanation:
      'Die Goldene Regel findet sich in fast allen Religionen: "Behandle andere so, wie du selbst behandelt werden moechtest." Sie ist der gemeinsame ethische Kern der Weltreligionen.',
    difficulty: 'leicht',
    topic: 'Goldene Regel in Weltreligionen',
  },
  {
    id: 'lb3-q19',
    areaId: 'lb3',
    question:
      'In Deutschland gibt es immer wieder Debatten um den Bau von Moscheen oder Synagogen. Welches Grundrecht schuetzt den Bau religioser Gebaeude?',
    answers: [
      { id: 'a', text: 'Art. 1 GG - Die Wuerde des Menschen', isCorrect: false },
      { id: 'b', text: 'Art. 4 GG - Religionsfreiheit, einschliesslich der ungestoerten Religionsausuebung', isCorrect: true },
      { id: 'c', text: 'Art. 5 GG - Meinungsfreiheit', isCorrect: false },
      { id: 'd', text: 'Art. 14 GG - Eigentumsrecht', isCorrect: false },
    ],
    explanation:
      'Art. 4 GG schuetzt die ungestoerte Religionsausuebung, wozu auch der Bau von Gotteshaeusern gehoert. Debatten um Moschee- oder Synagogenbau beruehren dieses Grundrecht direkt.',
    difficulty: 'schwer',
    topic: 'Gelebter Glaube in Deutschland',
  },
  {
    id: 'lb3-q20',
    areaId: 'lb3',
    question: 'Welche Aussage ueber die Seligpreisungen der Bergpredigt ist richtig?',
    answers: [
      { id: 'a', text: 'Sie versprechen den Reichen besonderen Segen', isCorrect: false },
      { id: 'b', text: 'Sie preisen die Maeuchtigen und Erfolgreichen selig', isCorrect: false },
      { id: 'c', text: 'Sie sprechen den Armen, Trauernden und Friedensstiftern Gottes Segen zu', isCorrect: true },
      { id: 'd', text: 'Sie gelten nur fuer Priester und Ordensleute', isCorrect: false },
    ],
    explanation:
      'Die Seligpreisungen (Mt 5,3-12) sprechen gerade den Armen im Geiste, den Trauernden, den Sanftmuetigen und den Friedensstiftern Gottes Segen zu - nicht den Reichen und Maechtigen.',
    difficulty: 'mittel',
    topic: 'Christentum - Seligpreisungen',
  },
  {
    id: 'lb3-q21',
    areaId: 'lb3',
    question:
      'Warum ist religioser Terrorismus ein Missbrauch von Religion?',
    answers: [
      {
        id: 'a',
        text: 'Weil Terrorismus die zentralen ethischen Grundsaetze aller Religionen -- wie Naechstenliebe und Gewaltlosigkeit -- fundamental verletzt.',
        isCorrect: true,
      },
      {
        id: 'b',
        text: 'Weil Terrorismus nur von Nicht-Glaeubigen veruebt wird.',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'Weil Religion und Politik nichts miteinander zu tun haben.',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Weil heilige Schriften Gewalt immer ausdruecklich erlauben.',
        isCorrect: false,
      },
    ],
    explanation:
      'Religioser Terrorismus missbraucht den Glauben, um Gewalt zu rechtfertigen. Alle Weltreligionen haben im Kern ethische Grundsaetze wie Naechstenliebe, Barmherzigkeit und Friedfertigkeit. Terroristische Akte widersprechen diesen Grundsaetzen und instrumentalisieren Religion fuer politische oder ideologische Ziele.',
    difficulty: 'mittel',
    topic: 'Terrorismus als Missbrauch von Religion',
  },
  {
    id: 'lb3-q22',
    areaId: 'lb3',
    question:
      'Was sind die Veden im Hinduismus?',
    answers: [
      {
        id: 'a',
        text: 'Die aeltesten und heiligsten Schriften des Hinduismus, die Hymnen, Rituale und philosophische Lehren enthalten.',
        isCorrect: true,
      },
      {
        id: 'b',
        text: 'Die Lebensgeschichte Buddhas.',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'Ein Gesetzbuch fuer die indische Regierung.',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Gebete, die nur Priester lesen duerfen.',
        isCorrect: false,
      },
    ],
    explanation:
      'Die Veden (Sanskrit: "Wissen") sind die aeltesten religiosen Texte des Hinduismus, entstanden ca. 1500-500 v. Chr. Sie enthalten Hymnen, Opferrituale und philosophische Lehren (Upanishaden). Die ethischen Grundsaetze des Hinduismus wie Ahimsa (Gewaltlosigkeit), Dharma (kosmische Ordnung) und Karma haben hier ihren Ursprung.',
    difficulty: 'mittel',
    topic: 'Hinduismus - Veden',
  },
];
