let pTag1=document.querySelector('.first_parallel');
let pTag2=document.querySelector('.second_parallel');

let imageArr1=[
    'http://makorang.com/img/main/main_12_btn_20.jpg', 
    'http://makorang.com/img/main/main_12_btn_19.jpg', 
    'http://makorang.com/img/main/main_12_btn_17.jpg', 
    'http://makorang.com/img/main/main_12_btn_16.jpg',
    'http://makorang.com/img/main/main_12_btn_15.jpg',
    'http://makorang.com/img/main/main_12_btn_14.jpg',
]

let imageArr2=[
    'http://makorang.com/img/main/main_12_btn_20.jpg', 
    'http://makorang.com/img/main/main_12_btn_19.jpg', 
    'http://makorang.com/img/main/main_12_btn_17.jpg', 
    'http://makorang.com/img/main/main_12_btn_16.jpg',
    'http://makorang.com/img/main/main_12_btn_15.jpg',
    'http://makorang.com/img/main/main_12_btn_14.jpg',
];

count1=0;
count2=0;

initImages(pTag1,imageArr1);
initImages(pTag2,imageArr2);


function initImages(element,imageArr){
    imageArr.push(...imageArr)
    imageArr.push(...imageArr)
    // console.log(imageArr) //제곱되서 24개가있네
    for(let i=0; i<imageArr.length; i=i+1){
        //이미지 태그 만들기
        const img=document.createElement('img');
        img.src=imageArr[i];
        img.alt=`Image ${i + 1}`;
        element.appendChild(img);
    }
}

function animate(){
    count1++;
    count2++;
    console.log(count1)

    count1 = marqueeImage(count1,pTag1,-1)
    count2 = marqueeImage(count2,pTag2,1)

    window.requestAnimationFrame(animate)

}

function marqueeImage(count,element,direction){
    //.scrollHeight
    //.scrollWidth
    if(count>element.scrollWidth / 2){
        count=0;
        element.style.transform=`translate(0,0)`;
    }
    element.style.transform=`translate(${count * direction}px,0)`;

    return count;

}

function scrollHandler(){
    count1 += 25;
    count2 += 25;
}

animate()

// window.addEventListener('scroll',function(){
//     scrollHandler()
// })

window.addEventListener('scroll',scrollHandler)