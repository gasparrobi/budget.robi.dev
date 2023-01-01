![](/public/og-image.jpg?raw=true)

## Mi ez és miért készült ez az oldal?

Ez egy személyes projekt, amelynek célja, hogy segítsen év végén az elmúlt 1 év pénzügyeit különböző szempontok alapján kiértékelni. Mivel én OTP Bank ügyfél vagyok, ezért első körben az oldal csak az OTP bankos kimutatásokat tudja feldolgozni.

## Melyek a támogatott Bankok?

Jelenleg csak az OTP Bank támogatott.

## Biztonságosban vannak az adataim?

Az oldal csak kliens oldali logikát tartalmaz. A kliens oldali használat azt jelenti, hogy a fájlokat a böngészőben futó JavaScript vagy egyéb kód használja,
de nem kerülnek továbbításra semmilyen szerverre. Ebben az esetben a fájlok csak a böngészőben vannak tárolva, és nem érik el őket külső személyek.
Tehát betöltés után akár internetkapcsolat nélkül is használhatod az oldalt.<br> Ezen kívül a forráskód nyíltan elérhető
a <a href="https://github.com/gasparrobi/budget.robi.dev" target="_blank" rel="noreferrer noopener">Githubon</a>.

## Hogyan tudom letölteni az OTPs tranzakcióimat?

Az <a href="https://internetbank.otpbank.hu/" target="_blank" rel="noreferrer noopener">OTP InternetBankból</a>
letöltheted a tranzakcióidat. Belépés után navigálj a "számlatörténet" menüpontra, majd
a "Tranzakciók letöltése" gombra kattintva - a dátumok megadása után - letöltheted az excel file-t

## Feltöltés után nem valósak az adatok, hiányosak az egyes kategóriákban lévő tranzakciók, miért?

Előfordulhat, hogy az OTP nem tudja az egyes tranzakciókat automatikusan kategorizálni vagy egyes tranzakciók rosszul kerültek kategorizálásra.
Érdemes tehát már az OTP applikációban vagy az internetbankban helyesen kategorizálni az egyes elemeket.<br />
Arra is van lehetőség, hogy a már letöltött xlsx fájlban manuálisan módosítsuk az egyes tranzakciókhoz tartozó költési kategóriákat.<br /> <br />
Fontos tudni, hogy aki rendelkezik hitelkártyával, azoknak a hitelkártya törlesztési tranzakciói megjelenhetek a bevételi és a kiadási oldalon is.
Így ezeket érdemes manuálisan törölni a letöltött xlsx fájlból hiszen ezek torzítják az össz bevétel/kiadás értéket.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---
