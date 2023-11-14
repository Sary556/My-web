let acc=document.getElementsByClassName('accordion');

console.log(acc[0])
console.log(acc.length)

// for( ① ; ② ;④){
    // ③
// }

for(let i=0; i<acc.length;i++){
    acc[i].addEventListener('click',function(){
        this.classList.toggle('active')

        let panel = this.nextElementSibling;//나의 다음요소(동생)

        if(panel.style.maxHeight){
            panel.style.maxHeight=null;
        }else{
            //scrollHeight:숨어있는 높이값을 포함한 높이값을 찾아준다.
            panel.style.maxHeight=panel.scrollHeight + "px";
        }
    })
}
