let pTag1 = document.querySelector('.first_parallel')
let pTag2 = document.querySelector('.second_parallel')

let textArr1 = 'welcome Hello welcome Hello welcome Hello welcome Hello'.split(' ');
//띄워쓰기를 기준으로 잘라서 배열로 만든다
console.log(textArr1)

let textArr2 = "My Portfoilo My Portfoilo My Portfoilo My Portfoilo".split(' ')
console.log(textArr2)

// let arr=[];
// arr.push(...textArr1) //...textArr 문법 --> textArr1를 그대로 복사
// console.log(arr)

let count1 = 0;
let count2 = 0;

initTexts(pTag1, textArr1);
initTexts(pTag2, textArr2);

function initTexts(element, textArray) {
    textArray.push(...textArray) //8개의 배열안의 아이템을 복사하여 다시 배열뒤에 넣는다.
    console.log("함수안" + textArray)
    for (let i = 0; i < textArray.length; i++) {
        // &nbsp
        // \u00A0 --> JavaScript의 공백을 나타냄.
        element.innerHTML += `${textArray[i]}\u00A0\u00A0\u00A0`
    }
}

//여기까지 사실 그냥 HTML으로 여덞번 썻어도 됐을 과정

function animate() {
    count1++;
    // console.log(count1)
    count2++;

    count1 = marqueeText(count1, pTag1, -1)
    count2 = marqueeText(count2, pTag2, 1)

    // setInterval-->어떤시간마다 할일 근데 메모리를 많이먹음.. requestAnimationFrame << 한단계 진화버전 
    window.requestAnimationFrame(animate)

}

function marqueeText(count, element, direction) {
    // .scrollHeight /* -- > 보이지않는 공간이라도 공간의 높이의값 */
    //.scrollWidth -->
    console.log("element.scrollWidth" + element.scrollWidth)
    console.log("count" + count)
    if (count > element.scrollWidth / 2) {
        count = 0;
        element.style.transform = `translate(0,0)`;
    }
    element.style.transform = `translate(${count * direction}px,0)`;

    return count
}

function scrollHandler() {
    count1 += 25;
    count2 += 25;
}
// function scrollHandler() {
//     console.log("나호출")
// }
//window.addEventListener('scroll',function(){
//     console.log("나호출");
// }위과 같은뜻
animate()

// //window.addEventListener('scroll',function(){
//     scrollHandler
// }) 밑과같은뜻인듯..


window.addEventListener('scroll', scrollHandler)