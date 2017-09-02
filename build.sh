mkdir build
cp -rp icons images main.js manifest.json scripts sound styles build

cd build && zip -r atsumori.zip icons images main.js manifest.json scripts sound styles
