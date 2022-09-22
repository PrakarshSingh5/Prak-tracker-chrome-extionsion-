let myleads=[]
const inputEl=document.getElementById("input-el")
let Button=document.getElementById("input-btn")
const ulEl=document.getElementById("like")
const deleteBtn=document.getElementById("delete-btn")
const leadsFromlocalStorage=JSON.parse(localStorage.getItem("myleads"))
const tabBtn=document.getElementById("tab-btn")
if(leadsFromlocalStorage){
  myleads=leadsFromlocalStorage
  render(myleads)
} 
tabBtn.addEventListener("click",function(){
  chrome.tabs.query({active:true,currentWindow:true},function(tabs){
       myleads.push(tabs[0].url)
       localStorage.setItem("myleads",JSON.stringify(myleads))
       render(myleads)
  })
})
deleteBtn.addEventListener("dblclick",function(){
  
  localStorage.clear()
  myleads=[]
  render(myleads)
})
Button.addEventListener("click",function(){
        myleads.push(inputEl.value);
        inputEl.value=""
        localStorage.setItem("myleads",JSON.stringify(myleads))
        render(myleads)
})
function render(leads){
    let listItems =""
    for(let i=0;i<leads.length;i++){
    listItems+= `
    <li>
    <a target='_blank' href='${leads[i]}'>
      ${leads[i]}  
    </a>
    </li>` 
}
ulEl.innerHTML=listItems
}
