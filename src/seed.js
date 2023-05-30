import { collection, addDoc } from "firebase/firestore";

export let seedDatabase = async (db) => {
  function getUUID() {
    // eslint gets funny about bitwise
    /* eslint-disable */
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
    /* eslint-enable */
  }

  /* Series
    ============================================ */
  // Documentaries
  await addDoc(collection(db, "series"), {
    id: getUUID(),
    title: "Tiger King",
    description:
      "An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.",
    genre: "documentaries",
    maturity: "18",
    slug: "tiger-king",
  });
  await addDoc(collection(db, "series"), {
    id: getUUID(),
    title: "Amanda Knox",
    description:
      "Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.",
    genre: "documentaries",
    maturity: "12",
    slug: "amanda-knox",
  });

  // Comedies
  await addDoc(collection(db, "series"), {
    id: getUUID(),
    title: "The Office",
    description:
      "A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.",
    genre: "comedies",
    maturity: "15",
    slug: "the-office",
  });
  await addDoc(collection(db, "series"), {
    id: getUUID(),
    title: "Arrested Development",
    description:
      "The Bluth family, once a prominent name in the business, loses everything after the head patriarch gets convicted for fraud.",
    genre: "comedies",
    maturity: "15",
    slug: "arrested-development",
  });

  // Crime
  await addDoc(collection(db, "series"), {
    id: getUUID(),
    title: "Making a Murderer",
    description:
      "Exonerated after spending nearly two decades in prison for a crime he did not commit, Steven Avery filed suit against Manitowoc County, Wis., and several individuals involved with his arrest.",
    genre: "crime",
    maturity: "18",
    slug: "making-a-murderer",
  });
  await addDoc(collection(db, "series"), {
    id: getUUID(),
    title: "Long Shot",
    description:
      "An innocent man is accused of murder, leading his attorney on a wild chase to confirm his alibi using raw footage from a television show.",
    genre: "crime",
    maturity: "18",
    slug: "long-shot",
  });

  // Feel-good
  await addDoc(collection(db, "series"), {
    id: getUUID(),
    title: "Good Will Hunting",
    description:
      "Will Hunting, a genius in mathematics, solves all the difficult mathematical problems. When he faces an emotional crisis, he takes help from psychiatrist Dr Sean Maguireto, who helps him recover.",
    genre: "feel-good",
    maturity: "12",
    slug: "good-will-hunting",
  });
  await addDoc(collection(db, "series"), {
    id: getUUID(),
    title: "Forrest Gump",
    description:
      "Forrest Gump, a man with a low IQ, joins the army for service where he meets Dan and Bubba. However, he cannot stop thinking about his childhood sweetheart Jenny Curran, whose life is messed up.",
    genre: "feel-good",
    maturity: "12",
    slug: "forrest-gump",
  });

  /* Films
    ============================================ */
  // Drama
  await addDoc(collection(db, "films"), {
    id: getUUID(),
    title: "The Prestige",
    description:
      "Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.",
    genre: "drama",
    maturity: "15",
    slug: "the-prestige",
  });
  await addDoc(collection(db, "films"), {
    id: getUUID(),
    title: "Fight Club",
    description:
      "Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.",
    genre: "drama",
    maturity: "15",
    slug: "fight-club",
  });

  // Suspense
  await addDoc(collection(db, "films"), {
    id: getUUID(),
    title: "Shutter Island",
    description:
      "Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.",
    genre: "suspense",
    maturity: "15",
    slug: "shutter-island",
  });
  await addDoc(collection(db, "films"), {
    id: getUUID(),
    title: "Gone Girl",
    description:
      "Nick Dunne discovers that the entire media focus has shifted on him when his wife Amy Dunne disappears on the day of their fifth wedding anniversary.",
    genre: "suspense",
    maturity: "15",
    slug: "gone-girl",
  });

  // Children
  await addDoc(collection(db, "films"), {
    id: getUUID(),
    title: "Hotel Transylvania",
    description:
      "Dracula, who owns a high-end resort for monsters, attempts to keep his daughter from falling in love with Jonathan, a human.",
    genre: "children",
    maturity: "0",
    slug: "hotel-transylvania",
  });
  await addDoc(collection(db, "films"), {
    id: getUUID(),
    title: "Despicable Me",
    description:
      "Gru, a criminal mastermind, adopts three orphans as pawns to carry out the biggest heist in history. His life takes an unexpected turn when the little girls see him as their potential father.",
    genre: "children",
    maturity: "0",
    slug: "despicable-me",
  });
  // Thriller
  await addDoc(collection(db, "films"), {
    id: getUUID(),
    title: "Joker",
    description:
      "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City.",
    genre: "thriller",
    maturity: "15",
    slug: "joker",
  });
  await addDoc(collection(db, "films"), {
    id: getUUID(),
    title: "A Quiet Place",
    description:
      "The Abbott family must now face the terrors of the outside world as they fight for survival in silence. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.",
    genre: "thriller",
    maturity: "15",
    slug: "a-quiet-place",
  });
  // Romance
  await addDoc(collection(db, "films"), {
    id: getUUID(),
    title: "A Star Is Born",
    description:
      "After falling in love with struggling artist Ally, Jackson, a musician, coaxes her to follow her dreams, while he battles with alcoholism and his personal demons.",
    genre: "romance",
    maturity: "15",
    slug: "a-star-is-born",
  });
  await addDoc(collection(db, "films"), {
    id: getUUID(),
    title: "Blue Valentine",
    description:
      "Dean and Cynthia are married with a daughter and their marriage is about to fall apart. Both come from dysfunctional families and struggle to make sense of their relationship.",
    genre: "romance",
    maturity: "15",
    slug: "blue-valentine",
  });
};
