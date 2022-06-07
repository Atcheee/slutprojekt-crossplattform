# Slutprojekt - Crossplattformutvecklig
## ITHS Dashboard
Ni ska bygga en mobilanpassad Dashboard för ITHS.

En dashboard är en instrumentpanel som består av ett rutnät av olika komponenter som antingen visar någon information eller kan interageras med.
![](dashboard.png)


## Specifikation
Den ämnas att kunna köras i mobiltelefoner och på TV-skärmen i korridoren.
Den ska vara installerbar och fungera offline.
Om man är offline så ska ett meddelande visas. Vissa funktioner kan behöva bete sig annorlunda beroende på om man är uppkopplad, t.ex svara med cachade responses och/eller stängas av helt och hållet.

### Look & Feel
Eftersom dashboarden är ämnad för att visas i skolans korridorer ska ni följa ITHS grafiska profil.


## Komponenter
Vilka komponenter som ska läggas till i dashboarden är upp till er.

### Förslag på komponenter
* Klocka (https://en.wikipedia.org/wiki/Sun)
* News feed (? https://docs.github.com/en/rest/gists ?)
* Väderprognos (https://home.openweathermap.org/)
* Avgångar från hållplatser (https://www.trafiklab.se/api/trafiklab-apis/resrobot-v2/)
* Qoute of the day / Dagens göteborgsskämt (https://quotes.rest/ https://xn--dligaskmt-12ae.se/k/pappaskamt)
* Valfria andra komponenter

# Bedömning
## G
* PWA i React
* Minst 3st olika komponenter till dashboarden varav minst 1 använder ett API.
* Offline Capable - Cachade statiska assets
* Mobilanpassad

## VG
* {...G}
* Ingen krasch, varken online eller offline
* Publicerad på [Netlify](https://www.netlify.com/)
* API Keys gömda på Netlify (https://docs.netlify.com/configure-builds/environment-variables/)