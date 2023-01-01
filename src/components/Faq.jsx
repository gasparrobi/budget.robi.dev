const faqs = [
  {
    id: 1,
    question: 'Mi ez és miért készült ez az oldal?',
    answer: `Ez egy személyes projekt, amelynek célja, hogy segítsen év végén az elmúlt 1 év pénzügyeit különböző szempontok alapján kiértékelni.
    Mivel én OTP Bank ügyfél vagyok, ezért első körben az oldal csak az OTP bankos kimutatásokat tudja feldolgozni.<br>`,
  },
  {
    id: 3,
    question: 'Melyek a támogatott Bankok?',
    answer: 'Jelenleg csak az OTP Bank támogatott.',
  },
  {
    id: 2,
    question: 'Biztonságosban vannak az adataim?',
    answer: `Az oldal csak kliens oldali logikát tartalmaz. A kliens oldali használat azt jelenti, hogy a fájlokat a böngészőben futó JavaScript vagy egyéb kód használja, 
    de nem kerülnek továbbításra semmilyen szerverre. Ebben az esetben a fájlok csak a böngészőben vannak tárolva, és nem érik el őket külső személyek.
    Tehát betöltés után akár internetkapcsolat nélkül is használhatod az oldalt.<br> Ezen kívül a forráskód nyíltan elérhető
    a <a href="https://github.com/gasparrobi/budget.robi.dev" target="_blank" rel="noreferrer noopener">Githubon</a>.`,
  },
  {
    id: 5,
    question: 'Hogyan tudom letölteni az OTPs tranzakcióimat?',
    answer: `Az <a href="https://internetbank.otpbank.hu/" target="_blank" rel="noreferrer noopener">OTP InternetBankból</a> 
    letöltheted a tranzakcióidat. Belépés után navigálj a "számlatörténet" menüpontra, majd 
    a "Tranzakciók letöltése" gombra kattintva - a dátumok megadása után - letöltheted az excel file-t`,
  },
  {
    id: 4,
    question:
      'Feltöltés után nem valósak az adatok, hiányosak az egyes kategóriákban lévő tranzakciók, miért?',
    answer: `Előfordulhat, hogy az OTP nem tudja az egyes tranzakciókat automatikusan kategorizálni vagy egyes tranzakciók rosszul kerültek kategorizálásra.
    Érdemes tehát már az OTP applikációban vagy az internetbankban helyesen kategorizálni az egyes elemeket.<br />
    Arra is van lehetőség, hogy a már letöltött xlsx fájlban manuálisan módosítsuk az egyes tranzakciókhoz tartozó költési kategóriákat.<br /> <br />
    Fontos tudni, hogy aki rendelkezik hitelkártyával, azoknak a hitelkártya törlesztési tranzakciói megjelenhetek a bevételi és a kiadási oldalon is.
    Így ezeket érdemes manuálisan törölni a letöltött xlsx fájlból hiszen ezek torzítják az össz bevétel/kiadás értéket.`,
  },
];

export default function Faq() {
  return (
    <div id="faq" className="bg-gray-900">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:max-w-2xl ">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Gyakran ismételt kérdések
          </h2>
          {/* <p className="mt-4 text-gray-400">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada
            adipiscing sagittis vel nulla nec. Urna, sed a lectus elementum blandit et.
          </p> */}
        </div>
        <div className="mt-20">
          <dl className="space-y-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 lg:space-y-0">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="font-semibold text-white">{faq.question}</dt>
                <dd
                  className="mt-3 text-gray-400"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                ></dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
