# Uvod u ionic
Predavanje održano 22.12.2016. godine na Filozofskom fakultetu u 
Osijeku pred studentima diplomskog studija Informacijska tehnologija na kolegiju
Programiranje 3 na temu Uvod u razvoj hibridnih aplikacija gdje se u praktičnom dijelu razvila
Androd i iOS aplikacija koristeći Ionic Framework.

## Instalacija
###Node.js
Prije svega je potrebno instalirati Node.js
#####Windows
Može se preuzeti [ovdje](https://nodejs.org).

#####Linux i Mac OS
- `curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -`
- `sudo apt-get install -y nodejs` <br />
- [Popravak ovlasti](https://docs.npmjs.com/getting-started/fixing-npm-permissions) 
da se npm može izvoditi bez sudo

###Ionic framework
 - `npm install -g cordova ionic`

###Projekt
- `git clone https://github.com/amatanovic/ionicPredavanje.git`
- `cd ionicPredavanje`
- `npm install` 
- `ionic serve` 

#####Android
- `ionic platform add android`
- `ionic build android`

#####iOS
- `ionic platform add ios`
- `ionic build ios`





