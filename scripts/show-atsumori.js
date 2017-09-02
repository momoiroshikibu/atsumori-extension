const image = document.createElement('img');
image.src = chrome.extension.getURL('images/atsumori.png');
image.className = 'atsumori';
image.style = `
  position: fixed;
  right: 50px;
  bottom: 0px;
  z-index: 100000;
`;
document.getElementsByTagName("body")[0].appendChild(image);
