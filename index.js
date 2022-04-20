var file =document.getElementById("Form")
file.onsubmit= function(e){
    e.preventDefault();
    
}

var logoapi=[{"name":"Chennai Super Kings","logo":"https://www.newsboa.com/wp-content/uploads/2020/09/CSK-Logo.png","id":0,"url":"csk.html","color":"linear-gradient( to left,pink,white, skyblue);"},
{"name":"Royal Challengers Bangalore","logo":"https://www.sportstiger.com/wp-content/uploads/2021/04/RCB-2.jpg","id":1,"url":"rcb.html"},
{"name":"Kolkata knight Riders","logo":"https://logodix.com/logo/1747971.jpg","id":2,"url":"kkr.html"},
{"name":"Punjab Kings","logo":"https://bizbehindsports.com/wp-content/uploads/2021/02/ItTZtPrSIp-1536x864.jpg","id":3,"url":"kx11p.html","color":"linear-gradient( to left,pink,white, skyblue);"},
{"name":"Delhi Capitals","logo":"https://www.sportsunfold.com/wp-content/uploads/2022/03/delhi-capitals.jpg","id":4,"url":"dc.html"},
{"name":"Sun Risers Hyderabad","logo":"https://crictribune.com/wp-content/uploads/2020/09/cc771a3aab6b5d60347f2a2ca42ef24f.jpg","id":5,"url":"srh.html"},
{"name":"Rajasthan Royals","logo":"https://scontent.fhyd5-1.fna.fbcdn.net/v/t1.6435-9/32147955_10160419483455080_2987668607892193280_n.png?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=WvfIz76IcnQAX-1zD8o&_nc_ht=scontent.fhyd5-1.fna&oh=00_AT9GFdgAT_5LtBb_6I76FjX5pVCeaq3psx5L4D4--puyEA&oe=6282AE95","id":6,"url":"rr.html"},
{"name":"Mumbai Indians","logo":"https://wallpaperaccess.com/full/4561383.jpg","id":7,"url":"mi.html"},
{"name":"Gujarat Titans","logo":"https://dd20lazkioz9n.cloudfront.net/wp-content/uploads/2022/02/Titans-H.jpg","id":8,"url":"gt.html"},
{"name":"Lucknow Super Giants","logo":"https://imgk.timesnownews.com/story/Lucknow_Super_Giants_logo.png?tr=w-600,h-450,fo-auto","id":9,"url":"lsg.html"}]


function teaming(logosrc,name,logoid,url,color){
    var teamlogo=document.createElement("div");
    var teamlogoimg=document.createElement("img");
    teamlogo.className="team-info"
    teamlogo.id="dot"+logoid
    teamlogoimg.className="teamimg"
    teamlogoimg.src=logosrc
    teamlogoimg.alt=logoid
    
    
    var teamName=document.createElement("h3");
    teamName.id="team-name"
    teamName.innerHTML=name.toUpperCase()
    teamlogo.appendChild(teamlogoimg);
    teamlogo.appendChild(teamName)
    teamlogo.onclick=function(){
        window.location.href = url;
    };

     var home=document.getElementById("home");
    home.appendChild(teamlogo)

}
for (var pos=0;pos<logoapi.length;pos++){
    teaming(logoapi[pos].logo,logoapi[pos].name,logoapi[pos].id,logoapi[pos].url,logoapi[pos].color)
}


function buttonclick(){
 var Input=document.getElementById("inputName")
 var Input2=document.getElementById("inputName2")
 var InputValue=Input.value
 var InputValue2=Input2.value
 var obj={Name:InputValue,Url:InputValue2}
 var objList=localStorage.getItem("data")===null ? [] :JSON.parse(localStorage.getItem("data"))
                        
                            
 objList.push(obj);
 localStorage.setItem("data",JSON.stringify(objList));
    var teamlogo=document.createElement("div");
    var teamlogoimg=document.createElement("img");
    teamlogo.className="team-info"
    teamlogoimg.className="teamimg"
    teamlogoimg.src=obj.Url
    teamlogoimg.alt="44"
    
    
    var teamName=document.createElement("h3");
    teamName.id="team-name-1"
    teamName.innerHTML=obj.Name
    teamlogo.appendChild(teamlogoimg);
    teamlogo.appendChild(teamName)
 
    var Yourteam=document.getElementById("yourteam");
    Yourteam.appendChild(teamlogo);
    window.location.href = "index.html";
    console.log(JSON.parse(localStorage.getItem("data")));
    
}

localFile=JSON.parse(localStorage.getItem("data"));
console.log(localFile.Name)
for(i=0;i<localFile.length;i++){
    var teamlogo=document.createElement("div");
    var teamlogoimg=document.createElement("img");
    teamlogo.className="team-info"
    teamlogoimg.className="teamimg"
    teamlogoimg.src=localFile[i].Url
    teamlogoimg.alt="44"
    
    
    var teamName=document.createElement("h3");
    teamName.id="team-name-1"
    teamName.innerHTML=localFile[i].Name
    teamlogo.appendChild(teamlogoimg);
    teamlogo.appendChild(teamName)
    

    var Yourteam=document.getElementById("yourteam");
    Yourteam.appendChild(teamlogo);
    console.log(JSON.parse(localStorage.getItem("data")));
    

}
