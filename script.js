// Your Script here.
function rot13(encrytedString) {
	// "ssdddhgd dhdhd hdsddj hdksdhdjs sdhds"
	// "This is a sample message"
 var lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};
	var words = encrytedString.split(" ");
	var decreptedWords = [];
	for(var index = 0 ; index < words.lenght; index++) {
		var encryptedWord = words[i]; // ssdddhgd;
		var decreptedWord= "";
		for(var j = 0 ; j<encryptedWord.length; j++) {
			decreptedWord += lookup[encryptedWord.charAt(j)];
		}

		decreptedWords.push(decreptedWord);
		
	}

	return decreptedWords.join(" ");
}