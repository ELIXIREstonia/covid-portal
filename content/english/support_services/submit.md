---
title: Andmete sisestamine
toc: false
menu:
    top_nav:
        weight: 40
        pre: <i class="fas fa-paper-plane mr-2"></i>
        post: highlight
    main:
        identifier: submit_data
        parent: support_services
        weight: 50
        pre: <i class="fas fa-paper-plane"></i>
---

Avaldage oma COVID-19 uurimisandmed, et muuta see kättesaadavaks ülejäänud teadusringkonnale. Andmed tuleb hoiustada avalikus repositooriumis koos kirjeldavate metaandmetega. Paljude bioloogiliste andmetüüpide puhul on olemas rahvusvahelised andmebaasid, mida võib pidada _de facto_ standarditeks.

### Andmete sisestamine

[ELIXIR Eesti](https://elixir.ut.ee/) (elixir@ut.ee) konsulteerib kus ja kuidas andmeid avalikus andmebaasis jagada. Ärge kartke meiega ühendust võtta, kui teil on küsimusi. Teie uurimisrühm ei pea olema seotud ühegi konkreetse institutsiooniga, et saada meie abi, oleme kättesaadavad, et aidata kõiki Eesti teadlasi.

Euroopa Bioinformaatika Instituut (EBI) omab mitmeid erinevaid rahvusvahelisi andmerepositooriumeid, mida võiks vajadusel kasutada. Lisainformatsiooni saab [COVID-19 Andmeportaali andmete esitamise lehekülgelt](https://covid19dataportal.ee/ee/support_services/submit/). Andmetüüpide puhul, mille jaoks sobivat rahvusvahelist repositooriumit ei ole või teie andmed on seotud isikuandmetega, mida tuleks säilitada turvalises keskkonnas, teeme koostööd [Tartu Ülikooli Teadusarvutuste keskusega](https://hpc.ut.ee/) ning leiame sobiva lahenduse vastavalt teie vajadustele. 

Järgnevalt leiad meie andmete esitamise juhised igale konkreetsele andmetüübile:

* ##### Genoomi ja transkriptoomi andmed

    Viiruse toorandmed (järjestused), kuid ka kogutud ja annoteeritud genoomid esitataks [ENA andmebaasi](https://www.ebi.ac.uk/ena). [Dokumentatsioonist](https://ena-browser-docs.readthedocs.io/en/latest/help_and_guides/sars-cov-2-submissions.html) leiate õpetuse, kuidas SARS-CoV-2 andmeid üles laadida. Kindlasti tuleks enne toorandmete esitamist (nt. _Shotgun sequencing_) eemaldada inimesele spetsiifilised lugemid.

    Peremeesorganismi (inimese) järjestuste andmed vajavad piiratud juurdepääsu implementeerimist, kuna tegemist on eri liiki isikuandmetega. [ELIXIR Eesti](https://elixir.ut.ee/) (elixir@ut.ee) võimaldab hoiustada neid andmeid turvaliselt koostöös [Tartu Ülikooli Teadusarvutuste keskusega](https://hpc.ut.ee/). Siiski tuleks arvestada, et enne sobivasse repositooriumisse üles laadimist, tuleb andmed nii hoiustada kui ka analüüsida turvalises keskkonnas. Ka sellega saab ELIXIR Eesti aidata. Isikuandmete ja eri liiku isikuandmete puhul on soovituslik laadida metaandmed sobivasse repositooriumisse koos informatsiooniga selle kohta, kes ja kuidas saab andmetele ligipääsu. Lisaks on soovituslik lisada oma andmekogumile püsiva identifikaatori (nt DOI), mida saab kasutada kui on vaja andmekogu viidata (nt artiklis). 
   

    * [The European Nucleotide Archive (ENA)](https://www.ebi.ac.uk/ena)
    * [ENA SARS-CoV-2 andmete sisestamise juhend](https://ena-browser-docs.readthedocs.io/en/latest/help_and_guides/sars-cov-2-submissions.html)

    ***

* ##### Proteoomika andmed

    Leidmaks kureeritud nimekirja sobilikest proteoomika repositooriumitest on soovituslik konsulteerida [FAIRsharing andmebaasi](https://fairsharing.org/) kasutades päringut ’[proteoomics](https://fairsharing.org/search/?q=proteomics&content=biodbcore&name=&taxonomies=&organisations=&shortname=&description=&supportlinks=&licenses=&countries=&maintainers=&expanded_onto_domains=&expanded_onto_disciplines=&user_defined_tags=&record_id=&miriam_id=&search_state=hidden)’.

    Me soovitame kasutada [PRIDE](https://www.ebi.ac.uk/pride/) repositooriumit, mis on loodud [ProteomeXchange](http://www.proteomexchange.org/) konsrtsiumi poolt. Repositoorium võtab vastu valgu ja peptiidi identifitseerimise-/kvantifikatsiooniandmeid koos kaasnevate massspektromeetria andmetega, lisaks ka muid sellega seotud andmetüüpe. Andmete üleslaadimine toimub [PRIDE andmete üleslaadimise tööriista](https://www.ebi.ac.uk/pride/markdownpage/pridesubmissiontool) vahendusel.

    Samuti tuleks teha kättesaadavaks muud liiki proteoomika andmeid. Selleks, et andmete oleksid teise kasutatavad ning analüüsiks ja integreerimiseks valmis, tuleks lisada üksikasjalik kirjeldus andmevormingust ning muutujatest. Iga valgu muutuja peaks tulema unikaalse identifikaatoriga, nagu UniProt ID või ENGS ID (samuti tuleks kirjeldada, mis andmete versiooni kasutati andmete sidumiseks/ühildamiseks).

    * [PRIDE andmerepositoorium](https://www.ebi.ac.uk/pride/) ja [PRIDE andmete üleslaadimise tööriist](https://www.ebi.ac.uk/pride/markdownpage/pridesubmissiontool)

    ***

* ##### Pldiandmed

    Sõltuvalt pildiandmete tüübist, on soovituslik kasutada teemakohaseid repositooriumeid. Selleks palun konsulteeriga [BioImage Arhiivi](https://www.ebi.ac.uk/bioimage-archive/) soovituste tabelit.

    * [BioImage Arhiiv](https://www.ebi.ac.uk/bioimage-archive/)

    ***

* ##### Biokeemia andmed

    Biokeemia andmete jaoks soovitame, et kasutajad esitaksid andmeid [ChEMBL](https://www.ebi.ac.uk/chembl/) andmebaasi, mis on EMBL-EBI juhitud käsitsi kureeritud andmebaasi bioaktiivsetele molekulidele. See ühendab keemilised andmed bioaktiivsuse ja genoomiliste andmetega, et oleks võimalik tõhusalt töötada välja uued ravimid. 

    * [ChEMBL](https://www.ebi.ac.uk/chembl/)

    ***

* ##### Terviseandmed

    Isiklike andmete või eri liiki andmete puhul, ei ole soovituslik andmekaitse seaduse järgi neid avalikes andmerepositooriumites hoidustada. Sel juhul soovitame kontakteeruda [ELIXIR Eestiga](https://elixir.ut.ee/) (elixir@ut.ee) ning leiame teile sobiva lahenduse. 

    * [ELIXIR Eesti](https://elixir.ut.ee/) (elixir@ut.ee)

    ***

### Andmehalduse planeerimise toetamine

[ELIXIR Eesti](https://elixir.ut.ee/) (elixir@ut.ee) toetab teid andmehalduse planeerimisega projekti alguses, et andmejagamine oleks tõhusam [isiklike konsultatsioonide](elixir@ut.ee) kaudu andmehaldusplaanide loomise valdkonnas.
Samuti saame aidata teil tuvastada sobivaid repositooriumeid ja rahvusvahelisi standardeid teie andmete kirjeldamiseks ja avaldamiseks. Lisaks pakume abi ka andmete üleslaadimise protsessil.

* [Esita soov andmehalduse konsultatsiooni jaoks ELIXIR Eestilt](https://elixir.ut.ee/) (elixir@ut.ee)

###### Andmete hoiustamine avalikes repositooriumites

Hoiustades andmeid avalikes repositooriumites, nõustute, et andmeid avaldatakse ning neid võib kasutada ja jagada vastavalt konkreetsetele tingimustele, mille on määranud andmete üleslaadija või repositoorium. Andmete lisamist avalikesse repositooriumitesse peetakse oluliseks, seega andmete jagamine võib anda tunnustust ja tsiteeringuid. Andmete avaldamisel antakse kaasa unikaalse püsiidentifikaator (nt DOI), mida on sageli vaja ajakirjas artikli avaldamiseks. Andmete jagamine on tihti nõutud ka rahastajate poolt.

Vajaduse korral võib andmeid sageli avaldada embargoperioodiga, mis tähendab, et andmed ei avalikustata enne kuupäeva, mille olete seadnud.

_Pange tähele, et inimeste andmed vajavad erilisemat käsitlemist, kui on soov neid avalikuks teha._

###### Andmete hoiustamine ülikoolis

Eestis ei ole hetkel sätestatud reegleid ega nõudeid andmete hoisustamise kohta. Üldine soovitus on tagada toodetud andmete pikaajaline säilitamine kas ülikooliga seotud või valdkonna spetsiifilistes andmete repositooriumis. Soovi korral palun kontakteeruge [ELIXIR Eestiga](https://elixir.ut.ee/) (elixir@ut.ee), kes aitab leida teile sobiva lahenduse. 

##### Muud ressursid

* [Eesti COVID-19 Andmeportaali soovitused andmete üles laadimise valdkonnas](https://covid19dataportal.ee/ee/support_services/submit/)
