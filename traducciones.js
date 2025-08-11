// Nuevas palabras
const nuevasPalabras = {
  "mamaguebo": "maguvo",
  "loco": "loku",
  "guapo": "viro"
};

// Verbo SER (es)
const verboSer = {
  "yo soy": "na esa",
  "tú eres": "te ese",
  "él es": "le ese",
  "ella es": "la ese",
  "nosotros somos": "no esen",
  "ustedes son": "se esen",
  "ellos son": "les esen",
  "yo fui": "na ese",
  "tú fuiste": "te ese",
  "él fue": "le ese",
  "ella fue": "la ese",
  "nosotros fuimos": "no esen",
  "ustedes fueron": "se esen",
  "ellos fueron": "les esen",
  "yo seré": "na esu",
  "tú serás": "te esu",
  "él será": "le esu",
  "ella será": "la esu",
  "nosotros seremos": "no esun",
  "ustedes serán": "se esun",
  "ellos serán": "les esun"
};

// Verbo ESTAR (est)
const verboEstar = {
  "yo estoy": "na esta",
  "tú estás": "te esta",
  "él está": "le esta",
  "ella está": "la esta",
  "nosotros estamos": "no estan",
  "ustedes están": "se estan",
  "ellos están": "les estan",
  "yo estuve": "na este",
  "tú estuviste": "te este",
  "él estuvo": "le este",
  "ella estuvo": "la este",
  "nosotros estuvimos": "no esten",
  "ustedes estuvieron": "se esten",
  "ellos estuvieron": "les esten",
  "yo estaré": "na estu",
  "tú estarás": "te estu",
  "él estará": "le estu",
  "ella estará": "la estu",
  "nosotros estaremos": "no estun",
  "ustedes estarán": "se estun",
  "ellos estarán": "les estun"
};

// Mezclar con las palabras existentes
Object.assign(nuevasPalabras, verboSer);
Object.assign(nuevasPalabras, verboEstar);
