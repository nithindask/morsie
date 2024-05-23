const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    '.': '.-.-.-', ',': '--..--', '?': '..--..', '\'': '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
};

const reverseMorseCode = {};
for (let key in morseCode) {
    if (morseCode.hasOwnProperty(key)) {
        reverseMorseCode[morseCode[key]] = key;
    }
}

function translateToMorse() {
    const text = document.getElementById('inputText').value.toUpperCase();
    let morseText = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === ' ') {
            morseText += ' ';
        } else if (morseCode.hasOwnProperty(char)) {
            morseText += morseCode[char] + ' ';
        }
    }
    document.getElementById('outputMorse').value = morseText.trim();
}

function translateToText() {
    const morseText = document.getElementById('outputMorse').value.trim();
    const morseWords = morseText.split(' ');
    let translatedText = '';
    for (let i = 0; i < morseWords.length; i++) {
        const morseWord = morseWords[i];
        if (reverseMorseCode.hasOwnProperty(morseWord)) {
            translatedText += reverseMorseCode[morseWord];
        } else if (morseWord === '') {
            translatedText += ' ';
        }
    }
    document.getElementById('inputText').value = translatedText;
}

function validateInput() {
    const text = document.getElementById('inputText').value;
    const validCharacters = /^[A-Za-z0-9\s\.,\?!\'\/\(\)&:;=\+\-_\"$@]*$/;

    const inputText = document.getElementById('inputText');
    const charArray = text.split('');

    for (let i = 0; i < charArray.length; i++) {
        const char = charArray[i];
        if (!validCharacters.test(char)) {
            inputText.setSelectionRange(i, i + 1);
            inputText.focus();
            inputText.classList.add('invalid-char');
            return;
        }
    }

    inputText.classList.remove('invalid-char');
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const themeToggle = document.querySelector('.theme-toggle');
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

function copyText(elementId) {
    const textarea = document.getElementById(elementId);
    textarea.select();
    document.execCommand("copy");
}
