function eachMemberFairDetails(gid,mid){
    for(let i=0;i<myObj.length;i++){
        const o=myObj;
       // console.log(o[i]);
        if(o[i].accId==123){
            detailsObj=o[i].details;
           // console.log(detailsObj);
            for(j=0;j<detailsObj.length;j++){
                if(detailsObj[j].grpId==gid){
                    grpName=detailsObj[j].grpName;
                    membersObj=detailsObj[j].members;
                    //console.log(membersObj,grpName);
                    for(k=0;k<membersObj.length;k++){
                        if(membersObj[k].memId==mid){
                            fairDetailsObj=membersObj[k].fairDetails;
                            //console.log(fairDetailsObj);
                            for(p=0;p<fairDetailsObj.length;p++){
                                date=fairDetailsObj[p].date;
                                reason=fairDetailsObj[p].reason;
                                fair=fairDetailsObj[p].fair;
                                //console.log(date,reason,fair);
                                eachMemberfairDisplay(date,reason,fair);
                            }
                        }
                        
                    }
                }
                
            }
        }
        break;
    }
}
function grpMemberNameDetails(id){
    for(let i=0;i<myObj.length;i++){
        const o=myObj;
        //console.log(o[i]);
        if(o[i].accId==123){
            detailsObj=o[i].details;
            //console.log(detailsObj);
            for(j=0;j<detailsObj.length;j++){
                if(detailsObj[j].grpId==id){
                
                    membersObj=detailsObj[j].members;
                    //console.log(membersObj);
                    for(k=0;k<membersObj.length;k++){
                        memberNames=membersObj[k].memName;
                        totalfair=membersObj[k].totalFair;
                        memid=membersObj[k].memId;
                        //console.log(memberNames,totalfair)
                        displayMemNames(memberNames,totalfair,memid);
                       
                        
                    }
                }
                
            }
        }
        break;
    }
}
function grpNameDetails(){
    for(let i=0;i<myObj.length;i++){
        const o=myObj;
        //console.log(o[i]);
        if(o[i].accId==123){
            detailsObj=o[i].details;
            //console.log(detailsObj);
            for(j=0;j<detailsObj.length;j++){
                grpNames=detailsObj[j].grpName;
                grpid=detailsObj[j].grpId;
                displayGrpNames(grpNames,grpid);
            }
        }
        break;
    }
}
function eachMemberfairDisplay(d,r,f){
    div=document.createElement('div');
    div.setAttribute('class','group-list list-member');
    li=document.createElement('li');
    li.innerHTML=`<h5 id="date">${d}</h5><p>${r}</p> <h3 id="fair">${f}</h3>`;
    div.appendChild(li);
    memberdetailsUL.appendChild(div);

}
function displayMemNames(name,tfair,id){
    div=document.createElement('div');
    div.setAttribute('class','group-list list-member');
    li=document.createElement('li');
    li.setAttribute('value',`${id}`);
    li.innerHTML=`<h5 >${name}</h5> <h3 id="fair">${tfair}</h3>`;
    div.appendChild(li);
    MemberNamesUL.appendChild(div);

}
function displayGrpNames(name,id){
    div=document.createElement('div');
    div.setAttribute('class','group-list');
    li=document.createElement('li');
    li.setAttribute('value',`${id}`);
    li.innerHTML=`${name}`;
    div.appendChild(li);
    reportUL.appendChild(div);
}

