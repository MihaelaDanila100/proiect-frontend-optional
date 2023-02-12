# proiect-frontend-optional

## Cerinta 1:
#### Sa aiba mai multe rute: 

Avem in fisierul __app-routing.module.ts__ stabilite caile pentru _/home_ (se incarca modulul AuthentificationModule folosind lazy loading), _/cabinet_, _/pacient_, _/spital_, care la randul lor incarca fiecare modulul lor corespunzator. 
Fiecare dintre aceste module are la randul sau routing, continand la randul lor pentru diferite cai randate diferite componente din modulul respectiv.

_Observatie_: Accesarea acestor rute se face prin intermediul serviciului Router la nevoie si, pentru a avea in vedere posibilitatea schimbarii numelor anumitor rute in routing-modules, am facut serviciul _route-paths.service.ts_ care contine functii ce fac route.navigate si pot fi apelate in orice zona a aplicatiei prin injectarea serviciului in constructor.

## Cerinta 2:
#### Sa se foloseasca componente reutilizabile

Aplicatia foloseste atat componente prezentationale create de noi in diferitele module ale aplicatiei.

## Cerinta 3:
#### Sa se comunice intre componente

Comunicarea intre componente este realizata:
  1. sub forma parinte - copil: folosind @Input() si @Output(): exemplu: componenta parinte dosar si componenta parinte details: copilul primeste de la parinte prin @Input() obiectul pacient pentru a randa detaliile pacientului respectiv in html si anunta prin @Output() parintele cand a fost inchis popup-ul acestei componente.
  
  2. sub forma de serviciu: folosind serviciul _transmite-pacient.service.ts_ se comunica intre componenta _dosar_ si componenta _programare-consultatie_(ele nefiind parinte-copil): componenta dosar stabileste in serviciu care este pacientul curent ale carui detalii sunt vizualizate iar componenta programare-consultatie preia datele acestui pacient in vederea programarii consultatiei.
 
 ## Cerinta 4:
 #### Rute publice si private:

 Implementare cu canActivate.
 In fisierul __app-routing.module.ts__, se poate observa ca avem caile _/home_, _/cabinet_, _/pacient_ publice si calea _/spital_ care este private, fiind protejata de guardsurile PrivateGuard(verifica din localStorage daca avem user logat) si SpitalGuard(verifica din localStorage daca tipul de cont cu care este logat userul este spital)
 
 ## Cerinta 5:
 #### Sa fie cel putin o pagina de form:
 
 Avem formularele _login-form_ (Reactive form), _sign-up-form_ (Reactive form) in cadrul modulului AuthentificationModule. De asemenea, avem formularul pentru o consultatie noua _consultatie-form_ in modulul CabinetModule.
 
 ## Cerinta 6:
 #### Mediu de backend:
 Pentru backend am folosit NodeJS in fisierul index.js din folderul backend, unde m-am conectat la baza de date mysql si am creat functiiile de CRUD din baza de date. 
