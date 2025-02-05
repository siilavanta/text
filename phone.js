const phones = [
  ["প্রজ্ঞাদর্শী ভিক্ষু", "01993039997"],
  ["বিপর্শী ভিক্ষু", "01571747485"],
  ["সুদর্শন ভিক্ষু", "01831904697"],
  ["জ্ঞানশাসন ভিক্ষু", "01823051659"],
  ["আত্মসিদ্ধি ভিক্ষু", "01554331065"],
  ["বিমলদর্শী ভিক্ষু", "01820736188"],
  ["তাপস ভিক্ষু", "01843006363"],
  ["সারানন্দ ভিক্ষু", ""],
  ["জয়বর্দ্ধন ভিক্ষু", "01557343040"],
  ["সমাধি প্রিয় ভিক্ষু", "01558903565"],
  ["সর্বানন্দ ভিক্ষু-১", "01819305560"],
  ["শুভজিৎ ভিক্ষু", "01517831599"],
  ["শ্রদ্ধামিত্র ভিক্ষু", "01865061559"],
  ["জ্ঞানানন্দ ভিক্ষু", ""],
  ["করুণাজ্যোতি ভিক্ষু-১", "01627319424"],
  ["মঙ্গলজ্যোতি ভিক্ষু", "01865061635"],
  ["বিনয়শ্রী ভিক্ষু", "01820012394"],
  ["জ্ঞানস্মৃতি ভিক্ষু", "01831907313"],
  ["বুদ্ধসার ভিক্ষু", ""],
  ["সর্বানন্দ ভিক্ষু-২", "01831904551"],
  ["শীলতিষ্য ভিক্ষু", "01894852266"],
  ["আনন্দজ্যোতি ভিক্ষু", "01881410437"],
  ["দেবসেন ভিক্ষু", "01876054497"],
  ["ধর্মপাল ভিক্ষু-১", "01840891514"],
  ["সুগতপ্রিয় ভিক্ষু", "01521411739"],
  ["রাষ্ট্রপাল ভিক্ষু", "01827298417"],
  ["তিষ্যমিত্র ভিক্ষু", "01911206315"],
  ["সংঘপ্রিয় ভিক্ষু", "01521411763"],
  ["ধর্মনীতি ভিক্ষু", "01517-184698"],
  ["নন্দ ভিক্ষু", "01648336326"],
  ["উপালি ভিক্ষু", "01829421117"],
  ["বুদ্ধরক্ষিত ভিক্ষু", "01822848248"],
  ["সাধনামিত্র ভিক্ষু", "01610932760"],
  ["মঙ্গলশ্রী ভিক্ষু", "01521386701"],
  ["বোধিরত্ন ভিক্ষু", "01575064773"],
  ["শীলবন্ত ভিক্ষু", "01869739959"],
  ["পুন্নদীপ ভিক্ষু", "01893421506"],
  ["সংঘায়ন ভিক্ষু", "01614883056"],
  ["পবিত্র ভিক্ষু", "01820878002"],
  ["সাধনাদর্শী ভিক্ষু-১", "01518650332"],
  ["শান্তদীপ্তি ভিক্ষু", "01552961545"],
  ["অগ্রবংশ ভিক্ষু", "01591136639"],
  ["ধর্মশ্রী ভিক্ষু", "01833338387"],
  ["রত্নশ্রী ভিক্ষু-২", "01538-295304"],
  ["সুজাত ভিক্ষু", "01517184529"],
  ["দেবগুপ্ত ভিক্ষু", "01833344319"],
  ["দিব্যজ্যোতি ভিক্ষু", "01521454013"],
  ["সমাধি কল্যাণ ভিক্ষু", "0 1571-712753"],
  ["গুণলংকার ভিক্ষু", "01810649870"],
  ["সুবোধি ভিক্ষু", "01521241666"],
  ["সোমানন্দ ভিক্ষু", ""],
  ["শুভতিষ্য ভিক্ষু", "01894741242"],
  ["দয়ামিত্র ভিক্ষু", "01533316526"],
  ["আর্যনীতি ভিক্ষু", "01521411765"],
  ["মৈত্রীজিৎ ভিক্ষু", "01624413494"],
  ["সারমেধ ভিক্ষু", "01872682214"],
  ["করুণা ভিক্ষু", "01521-454676"],
  ["রত্নদীপ ভিক্ষু", "01517831472"],
  ["জ্ঞানসিদ্ধি ভিক্ষু", "01838011937"],
  ["কোণাগমন ভিক্ষু", "01571747238"],
  ["শীলজ্যোতি ভিক্ষু", "01571272551"],
  ["ধর্মময় ভিক্ষু", "01844263921"],
  ["করুণাজ্যোতি ভিক্ষু-২", "01867819942"],
  ["রত্নলংকার ভিক্ষু", "01878854227"],
  ["অনুজ্ঞানন্দ ভিক্ষু", "01633033617"],
  ["অভিজ্ঞানন্দ ভিক্ষু", "01615886531"],
  ["সর্বানন্দ ভিক্ষু-৩", "01840981604"],
  ["ধর্মপাল ভিক্ষু-২", "01840891514"],
  ["কুশলায়ন ভিক্ষু", "01568736224"],
  ["সুমেধ ভিক্ষু", "01533-584928"],
  ["জীবনপাল ভিক্ষু", "01866021920"],
  ["বুদ্ধজ্যোতি ভিক্ষু", "01517184546"],
  ["সম্প্রজ্ঞান ভিক্ষু", "01571239600"],
  ["জিনোত্তর ভিক্ষু", "01521387690"],
  ["প্রজ্ঞাবীর ভিক্ষু", "01537494288"],
  ["সাধনাসুখ ভিক্ষু", "01616335170"],
  ["অপূরমিত্র ভিক্ষু", "01842785407"],
  ["উত্তরানন্দ ভিক্ষু", "01571482076"],
  ["ধর্মআলো ভিক্ষু", "01517184697"],
  ["বিনয়পাল ভিক্ষু", "01852406374"],
  ["আর্যপ্রীতি ভিক্ষু", "0 1533-018513"],
  ["সুমুক্ত ভিক্ষু", "01827784223"],
  ["মৈত্রী আলো ভিক্ষু", "01869092242"],
  ["শীলাচার ভিক্ষু", "01571435172"],
  ["শাক্যবোধি ভিক্ষু", "01865061715"],
  ["শোকিয় ভিক্ষু", "01572210784"],
  ["মৈত্রীরক্ষিত ভিক্ষু", "01571144020"],
  ["পন্ডুরিক ভিক্ষু", "01571415140"],
  ["সত্যজ্যোতি ভিক্ষু", "01516560157"],
  ["সংঘজ্যোতি ভিক্ষু", "01810-232533"],
  ["বোধিমিত্র ভিক্ষু", "01516195508"],
  ["আর্যবিবেক ভিক্ষু", "01877861629"],
  ["সীবলী ভিক্ষু", "01571270214"],
  ["অভিজাত ভিক্ষু", "01516753846"],
  ["করুনাজগৎ ভিক্ষু", ""],
  ["শিষ্টানন্দ ভিক্ষু", "01810268716"],
  ["সত্যদ্বীপ ভিক্ষু", "01601514499"],
  ["অভিনন্দ ভিক্ষু", "01844847816"],
  ["অমরকীর্তি ভিক্ষু", "01864585606"],
  ["আর্যশাসন ভিক্ষু", "01631445914"],
  ["সুচিত্ত ভিক্ষু", "01603891727"],
  ["রত্নদর্শী ভিক্ষু", "01829825636"],
  ["সমুজ্জ্বল ভিক্ষু", "01887982915"],
  ["সমাধিদর্শী ভিক্ষু", "01575719860"],
  ["শান্তজয় ভিক্ষু", "01880-039148"],
  ["বীরসেন ভিক্ষু", "01612112124"],
  ["ধর্মপদ ভিক্ষু", "01879245309"],
  ["অভিজ্ঞান ভিক্ষু", "01571268110"],
  ["সংঘরত্ন ভিক্ষু", "01537430437"],
  ["সম্মদিট্ঠি ভিক্ষু", "01581148243"],
  ["তিষ্য ভিক্ষু", "01871070371"],
  ["অনুদর্শন ভিক্ষু", "01571475642"],
  ["বুদ্ধানন্দ ভিক্ষু", "01619548761"],
  ["কীর্তিসার ভিক্ষু", "01532340836"],
  ["বুদ্ধরত্ন ভিক্ষু", "01571300239"],
  ["জ্ঞানবোধি ভিক্ষু", "01660163731"],
  ["ত্রিকল্যাণ ভিক্ষু", "01841048503"],
  ["জয়তু ভিক্ষু", ""],
  ["মিত্রজ্যোতি ভিক্ষু", "01889413751"],
  ["পরমমিত্র ভিক্ষু", "01609984692"],
  ["সুখানন্দ ভিক্ষু", "01572007469"],
  ["পারমী ভিক্ষু", "01590069111"],
  ["সাধনপ্রিয় ভিক্ষু", "01629836255"],
  ["আর্যছন্দ ভিক্ষু", "01878855764"],
  ["সুগত ভিক্ষু", "01889763048"],
  ["পারমীপূর্ণ ভিক্ষু", ""],
  ["মৈত্রীশাসন ভিক্ষু", "01890325725"],
  ["পঞ্ঞাজ্যোতি ভিক্ষু", "01576534091"],
  ["প্রজ্ঞাধুর ভিক্ষু", ""],
  ["পূণ্যশ্রী ভিক্ষু", ""],
  ["প্রজ্ঞাজ্যোতি ভিক্ষু", "01896148689"],
  ["বিজয় ভিক্ষু", "01552692001"],
  ["মঙ্গলমুক্তি ভিক্ষু", "01604895042"],
  ["মহাসার ভিক্ষু", "01877956504"],
  ["শ্রদ্ধাশ্রী ভিক্ষু", "01872120336"],
  ["পণ্ডিত ভিক্ষু", "01613260923"],
  ["ক্ষেমানন্দ ভিক্ষু", "01610166160"],
  ["আর্যসুখ ভিক্ষু", "01608710933"],
  ["পুণ্যআলো ভিক্ষু", "01830827980"],
  ["স্মৃতিজয় ভিক্ষু", "01882487801"],
  ["মৈত্রীকল্যাণ ভিক্ষু", "01856986657"],
  ["প্রিয়দেব ভিক্ষু", "01602093074"],
  ["মুক্তস্মৃতি ভিক্ষু", "01818054323"],
  ["অজেয় ভিক্ষু", "01857974562"],
  ["প্রজ্ঞাস্মৃতি ভিক্ষু", "01896148812"],
  ["সত্যজ্ঞান ভিক্ষু", "01628245546"],
  ["ইন্দ্রকীর্তি ভিক্ষু", "01896148580"],
  ["পদ্মদর্শী ভিক্ষু", "01890312127"],
  ["বিনয়রত্ন ভিক্ষু", "01629426989"],
  ["ধর্মরক্ষিত ভিক্ষু", "01840970607"],
  ["শৌভনমিত্র ভিক্ষু", "01883200785"],
  ["ইন্দ্রজ্যোতি ভিক্ষু", "01896443984"],
  ["শান্তনন্দ ভিক্ষু", "01629416246"],
  ["মৈত্রীনন্দ ভিক্ষু", "01893041988"],
  ["আর্যদর্শন ভিক্ষু", "01576761014"],
  ["সুবোধিনন্দ ভিক্ষু", "01602-775611"],
  ["সাধনাজ্যোতি ভিক্ষু", "01894078920"],
  ["দয়ানন্দ ভিক্ষু", "01581841284"],
  ["সত্যজ্ঞান ভিক্ষু", "01628245546"],
  ["অক্ষয় ভিক্ষু", ""],
  ["ক্ষান্তিপারমী ভিক্ষু", "01867476401"],
  ["শীলরক্ষিত ভিক্ষু", "01602564922"],
  ["জ্ঞানজ্যোতি ভিক্ষু", "01581423394"],
  ["আচিন্ন ভিক্ষু", "01517113492"],
  ["ধর্মাজন ভিক্ষু", "0185247603"],
  ["মুদিতানন্দ ভিক্ষু", "01690010841"],
  ["দেবসিদ্ধি ভিক্ষু", "01616328097"],
  ["মহাপ্রিয় ভিক্ষু", "01606720259"],
  ["কুশলমিত্র ভিক্ষু", "01540642550"],
  ["মৈত্রী ভিক্ষু", "01877908668"],
  ["সমাহিত ভিক্ষু", "01819940891"]
]


const phoneId = document.getElementById('phone')

    phones.forEach((el, i)=>{

      const num  = el[1] != '' ? el[1] : 'No number'

      const htmlTemp = `<div class="item">${++i} ${el[0]}: <a href="tel:${num}">${num}</a> | <a href="https://wa.me/+88${num}">WhatsApp</a></div>`
      phoneId.insertAdjacentHTML('beforeend', htmlTemp)
    })
