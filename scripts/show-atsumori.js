const hotWords = [
    '熱',
    '勝',
    '台風',
    'サンシャイン池崎',
    '修造',
    'アントニオ猪木'
];

const body = document.getElementsByTagName('body')[0];
const documentText = body.innerText;

const isHot = hotWords.find((hotWord) => {
    return (documentText.indexOf(hotWord) > -1)
});

const timestamp = (new Date()).getTime();

if (isHot) {
    showAtsumori();
    const soundFileName = (timestamp % 2 === 0)? 'atsumori.mp3' : 'aaatsumori.mp3';
    (new Audio(chrome.extension.getURL('sound/' + soundFileName))).play();
}

function showAtsumori() {

    const div = document.createElement('div');
    div.className = 'atsumori';
    const image = document.createElement('img');
    image.src = chrome.extension.getURL('images/atsumori.png');

    div.appendChild(image);
    body.appendChild(div);

    div.onclick = (e) => {
        div.remove();
        (new Audio(chrome.extension.getURL('sound/shitsurei.mp3'))).play();
    }
}
