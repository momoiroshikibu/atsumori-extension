const hotWords = ['熱', '勝', '台風', 'サンシャイン池崎', '修造', 'アントニオ猪木']

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
    const image = document.createElement('img');
    image.src = chrome.extension.getURL('images/atsumori.png');
    image.className = 'atsumori';
    image.style = `
  position: fixed;
  right: 50px;
  bottom: 0px;
  z-index: 100000;
  cursor: pointer;
`;
    body.appendChild(image);
    image.onclick = (e) => {
        e.target.remove();
        (new Audio(chrome.extension.getURL('sound/shitsurei.mp3'))).play();
    }
}
