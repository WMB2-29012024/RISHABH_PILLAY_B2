const pattern = "abba";
const s = "dog cat cat dog";

const isBijection = (pattern, s) => {  

    const Words = {};
    const Chars = {};

    const words = s.split(' ');

    if (pattern.length !== words.length) {
        return false; 
    }

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (Words[char] === undefined) {
            Words[char] = word;
        } else {
            if (Words[char] !== word) {
                return false; 
            }
        }

        if (Chars[word] === undefined) {
            Chars[word] = char;
        } else {
            if (Chars[word] !== char) {
                return false; 
            }
        }
    }

    return true; 
}

console.log(isBijection(pattern, s));
