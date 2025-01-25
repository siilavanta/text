
var RootPath = './author';
var MonkPath = RootPath + '/monk';
var ManPath = RootPath + '/man';


//.........Author property...........//
// 1 .MonkAuthor[i][0] = ইংরেজি নাম
// 2. MonkAuthor[i][1] = বাংলা নাম
// 2. MonkAuthor[i][2] = প্রবন্ধ সংখ্যা
// 4. MonkAuthor[i][3] = কবিতা সংখ্যা
// 5. MonkAuthor[i][4] = উপসম্পদা তারিখ
// 6. MonkAuthor[i][5] = বাংলা চারেক্টার কোড
// 7. MonkAuthor[i][6] = লাইক সংখ্যা
//..............................    ///


//var onlineArr = []
//var MonkAuthor = MonkAuthor.concat(onlineArr)

const viewOption = function(e) {
    var tr = e.target.getAttribute('id');
    loadByView(tr)
}
var listStyle = `
    .col {
        float: none;
        width: 94%;
        text-align: left;
        }
    .img_div{
        display: inline-block;
        }
    .imgbox{
        height: 45px;
        width: 45px;
        margin-left: 20px;
    }
    .textbox{
        text-align: left;
        display: inline-block;
    }`
var titleStyle = `
.col {
    float: none;
    width: 94%;
    text-align: left;
    }
.img_div{
    display: none;
    }
.imgbox{
    height: 45px;
    width: 45px;
    margin-left: 20px;
}
.textbox{
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: left;
}
.textbox_item{
    margin: -15px 10px 0px 10px
}
`


const loadByView = (key) => {
    window.localStorage.setItem('viewoption', `${key}`);
    var styleview = document.getElementById('styleview');
    switch (key) {
        case 'grid':
            styleview.innerHTML = '';
            break;
        case 'list':
            styleview.innerHTML = listStyle;
            break;
        case 'title':
            styleview.innerHTML = titleStyle;
            break;
        default:
            styleview.innerHTML = listStyle;
            break;
    }
}


const filterOption = (id) => {
   
    loadBySort(`${id}`)
    console.log(id)
};


const getVassa = (upasampadaDate) => {
    return Math.floor((new Date() - new Date(upasampadaDate).getTime()) / 3.15576e+10)
}
//const getVassa = upasampadaDate => Math.floor((new Date() - new Date(upasampadaDate).getTime()) / 3.15576e+10)
// insert bn charcode for sorting
const insertBnCharCode = (charName, id) => {
    var arr = [];
    var arr2 = [];

    if (id === 'monk') {
        for (var i = 0; i < charName.length; i++) {
            arr.push(charName[i][1].charCodeAt(0));
            MonkAuthor[i].splice(MonkAuthor[i].length, 0, arr[i])
            // get year
            MonkAuthor[i][4] = getVassa(MonkAuthor[i][4])
            console.log('charcode insert monk')
        }
    }
    else if (id === 'man') {
        for (var i = 0; i < charName.length; i++) {
            arr2.push(charName[i][1].charCodeAt(0));
            ManAuthor[i].splice(ManAuthor[i].length, 0, arr2[i])
            console.log('charcode insert man')
        }
    }
    // return arr;
}
insertBnCharCode(MonkAuthor, 'monk');
insertBnCharCode(ManAuthor, 'man');




const insertLikeNum = (like) => {
    var arr = []
    for (var i = 0; i < charName.length; i++) {
        arr.push(like[i][1].charCodeAt(0));
        MonkAuthor[i].splice(MonkAuthor[i].length, 0, arr[i])
    }
}

const rout = (url) => {
    var monkOrman = window.localStorage.getItem('author')
    if (url) {
       
            genarateProfileMonk(MonkAuthor, 6);
            genarateProfileMan(ManAuthor, 3);
            console.log('app.html')

    } else {
            if(monkOrman === 'monk'){
                console.log('allauthor.html for monk')

                genarateProfileMonk(MonkAuthor, MonkAuthor.length);
               
            }else if(monkOrman === 'man'){
                console.log('allauthor.html for man')

                genarateProfileMan(ManAuthor, ManAuthor.length);

            }
      

    }
}

const loadBySort = (tr) => {
    window.localStorage.setItem(`filterOption`, `${tr}`)
   
    var mainUrl = location.href.includes('app.html')
   
    
    console.log(ManAuthor)
    switch (tr) {
        case 'alphabet':
            MonkAuthor.sort(sortAlphabet);
          //  ManAuthor.sort(sortAlphabet);
            rout(mainUrl);
            break;
        case 'older':
            MonkAuthor.sort(sortOlder);
            rout(mainUrl);
            break;
        case 'popular':
            MonkAuthor.sort(sortOlder);
            rout(mainUrl);
            
            if(mainUrl){
                alert("এই ফিচারটি শ্রীঘ্রই আসছে")
            }else{
                
            }

            break;
        case 'posting':
            MonkAuthor.sort(sortPosting);
           // ManAuthor.sort(sortPosting);
            rout(mainUrl);
            break;
        default:
            MonkAuthor.sort(sortOlder);
            rout(mainUrl);
            break;
    }
}


function sortPopular(a, b, ) {
    if (a[6] === b[6]) {
        return 0;
    }
    else {
        return (a[6] > b[6]) ? -1 : 1;
    }
}

function sortAlphabet(a, b) {
    if (a[5] === b[5]) {
        return 0;
    }
    else {
        return (a[5] < b[5]) ? -1 : 1;
    }
}

function sortOlder(a, b) {
    if (a[4] === b[4]) {
        return 0;
    }
    else {
        return (a[4] > b[4]) ? -1 : 1;
    }
}

function sortPosting(a, b) {
    if (a[2] === b[2]) {
        return 0;
    }
    else {
        return (a[2] > b[2]) ? -1 : 1;
    }
}


const genarateProfileMonk = (monk, len) => {
    var tempmonk = '';
    for (var i = 0; i < len; i++) {

        var proFile = `setProfile('${monk[i][0]}', '${monk[i][1]}', 'monk')`;

        var template = `
            <div onclick="${proFile}" class="col monkauthor">
                <div class="img_div" ><img class="authorPic imgbox" onerror="errPic(event)" src="./author/monk/${monk[i][0]}.png" alt=""></div>
                <div class="textbox">
                    <div class="name textbox_item">${monk[i][1]}</div>
                    <div class="totalpost textbox_item" id="totalPost">প্রবন্ধ : ${monk[i][2]}</div>
                    <div class="totalkobita textbox_item" id="totalPost">কবিতা : ${monk[i][3]}</div>
                </div>
            </div>`;

        //MonkAuthorId.insertAdjacentHTML('beforeend', template)
        tempmonk += template;
       
    }
    var MonkAuthorId = document.getElementById('monkauthor');
    MonkAuthorId.innerHTML = tempmonk
    console.log('pro monk')
}


const genarateProfileMan = (man, len) => {
    var mantext = '';
    for (var i = 0; i < len; i++) {

        var proFileMan = `setProfile('${man[i][0]}', '${man[i][1]}', 'man')`;

        var templateMan = `
            <div onclick="${proFileMan}" class="col manauthor">
                <div class="img_div" ><img class="authorPic imgbox" onerror="errPic(event)" src="./author/man/${man[i][0]}.png" alt=""></div>
                <div class="textbox">
                    <div class="name textbox_item">${man[i][1]}</div>
                    <div class="totalpost textbox_item" id="totalPost">প্রবন্ধ : ${man[i][2]}</div>
                    <div class="totalkobita textbox_item" id="totalPost">কবিতা : ${man[i][3]}</div>
                </div>
            </div>`;
        mantext += templateMan;
        
    }
    var ManAuthorId = document.getElementById('manauthor');
    ManAuthorId.innerHTML = mantext;
    console.log('pro man')
}
var viewItem = window.localStorage.getItem('viewoption');

setTimeout(()=>{
    if (viewItem) {
        loadByView(`${viewItem}`)
        console.log('view')
    }
    var sortItem = window.localStorage.getItem('filterOption')
    if(sortItem !== null){
        loadBySort(sortItem)
        
        console.log('filter' + sortItem)
    }else{
        //loadBySort('older')
    }
}, 100)
    //console.log('monk author')

   