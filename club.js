//get input by onclick
const submit=()=>{
    const inputArea=document.getElementById('input-area')
    const searchClub=inputArea.value;
    console.log(searchClub);
    inputArea.value='';
    //call api
    const url=`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchClub}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayData(data.teams[0]));
    }
//display Data

const displayData=teams=>{

    const searchResult=document.getElementById('header');
    searchResult.textContent='';
    const div=document.createElement('div')
    div.classList.add('result')
        div.innerHTML=`
        <img  src="${teams.strTeamBadge}">
        <h1>${teams.strAlternate}</h1>
        <p>${teams.strKeywords}</p>
        <h4>${teams.intFormedYear}</h4>
        <p>${teams.strLeague}</p>
        <p>${teams.strStadiumDescription}</p>        
        `;
    searchResult.appendChild(div);  
    
}