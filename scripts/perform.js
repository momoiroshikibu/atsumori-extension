const documentText = document.body.innerText;
const hotWords = [
    '熱',
    '勝',
    '台風',
    'サンシャイン池崎',
    '修造',
    'アントニオ猪木'
];
const isHot = hotWords.find((hotWord) => (documentText.indexOf(hotWord) > -1));
if (isHot) {
    showAtsumori();
    playAtsumoriVoiceRandomly();
}



function showAtsumori() {
    const div = document.createElement('div');
    div.className = 'atsumori';
    const image = document.createElement('img');
    image.src = chrome.extension.getURL('images/atsumori.png');

    div.appendChild(image);
    document.body.appendChild(div);

    div.onclick = (e) => {
        div.remove();
        playApologyVoice();
    }
}

function playAtsumoriVoiceRandomly() {
    const timestamp = (new Date()).getTime();
    if (timestamp % 2 === 0) {
        playLongAtsumoriVoice();
    } else {
        playShortAtsumoriVoice();
    }
}

function playLongAtsumoriVoice() {
    playSound('sound/aaatsumori.mp3');
}

function playShortAtsumoriVoice() {
    playSound('sound/atsumori.mp3');
}

function playApologyVoice() {
    playSound('sound/shitsurei.mp3');
}

function playSound(filePath) {
    (new Audio(chrome.extension.getURL(filePath))).play();
}

