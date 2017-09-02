mkdir build
cp -rp icons images manifest.json scripts sound styles build

cd build && zip -r atsumori.zip icons images manifest.json scripts sound styles
