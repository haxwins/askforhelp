# askforhelp

Pierwsza komenda do zainstalowania node_modules
```
npm install
```
Następnie stawianie serwera
```
node app 
```
Frontend (z osobnego okna terminala)
```
npm start 
```

Serwer powinien stać na porcie 3000, a frontend na 3001. W package.json ustawiony jest port dla frontendu na 3001, a serwer odpala domyślny. 
W przypadku gdy na linuxie będą z tym problemy prosze w pliku package.json zamienic linijkę
```
"start": "set PORT=3001 && react-scripts start", 
```
na
```
"start": "react-scripts start",
```
Następnie odpalić jeszcze raz najpierw serwer na domyślnym porcie 3000, a później frontend. Skrypt zapyta czy użyć innego portu niż 3000 bo jest on już zajety. Zostanie wybrany następny czyli 3001 i wszystko powinna działać.

Proszę pamiętać o wtyczce do chrome [CORS](https://chrome.google.com/webstore/detail/cors-toggle/jioikioepegflmdnbocfhgmpmopmjkim)

