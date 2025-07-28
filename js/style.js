document.addEventListener("DOMContentLoaded" , () =>{

    //상단 메뉴 활성화 유지 (active)
    const nav_a = document.querySelectorAll('header nav a');
    nav_a.forEach( i=> {
      i.addEventListener('click' , ()=> {
        nav_a.forEach( j=> j.classList.remove('active') );
        i.classList.add('active');        
        //let url = i.getAttribute('href');        
        //url = url.replace("#" , '');
      });
    });    

    //각 영역의 외부 윗부분 여백
    const aboutTop = document.querySelector("#About").offsetTop- 200;
    const skillTop = document.querySelector("#About>div:last-child").offsetTop-300;
    const markupTop = document.getElementById("MarkUp").offsetTop-200 ;
    const galleryTop = document.getElementById("Gallery").offsetTop-300 ;
    const contactTop = document.getElementById("Contact").offsetTop-300 ;


    let one = true; //스크롤내리면 1회만 실행
    window.addEventListener('scroll' , ()=> {
      const scrollTop = document.documentElement.scrollTop ||  window.scrollY;

      //상단메뉴 [Home] 활성화 (하이라이트)
      if(scrollTop < aboutTop) {         
          nav_a.forEach( j=> j.classList.remove('active') );
          nav_a[0].classList.add('active');          
      } 
      //상단메뉴 [About] 활성화
      if(scrollTop >= aboutTop) {         
          nav_a.forEach( j=> j.classList.remove('active') );
          nav_a[1].classList.add('active');          
      } 
	    //상단메뉴 [Markup] 활성화
      if(scrollTop >= markupTop) {         
          nav_a.forEach( j=> j.classList.remove('active') );
          nav_a[2].classList.add('active');          
      } 
      //상단메뉴 [Gallery] 활성화
      if(scrollTop >= galleryTop) {         
          nav_a.forEach( j=> j.classList.remove('active') );
          nav_a[3].classList.add('active');          
      } 
     //상단메뉴 [Contact] 활성화
      if(scrollTop >= contactTop) {         
          nav_a.forEach( j=> j.classList.remove('active') );
          nav_a[4].classList.add('active');          
      }



      //About 가로바 스킬(progress) 애니메이션
      if( one && scrollTop  >= skillTop ) { 

          one= false; //1회 행을 위해.             
          const progress = document.querySelectorAll("#About progress");
          
          progress.forEach( (i,j) =>{
            const number = Number(i.textContent);
            let n = 0;
            setTimeout(()=>{
              
              const interval=  setInterval(()=>{
                  if(n <= number ) {
                      n++;
                      i.setAttribute('value' , n);
                  }
                  else clearInterval(interval);
                } , 5 );
            } , 300* j );
          });              
      }
    });












    //작은기계장치에서 동작됨 (0~768픽셀 넓이)
    if( window.innerWidth <=768) {
        const nav = document.querySelector("header nav");        
        const menu = document.querySelector('header button');

        const toLeftNav = ()=> {
            nav.style.left = '-350px';
            document.body.style.overflow = 'auto';
            menu.textContent= 'menu';
        }

        menu.addEventListener('click' , ()=>{
            if(menu.textContent=="menu"){
                nav.style.left = 0;//왼쪽에서 내비 들어옴
                document.body.style.overflow = 'hidden';//스코롤방지
                menu.textContent= 'close';//[x]
            } else {
                toLeftNav();
            }
        });
        //내비게이션 메뉴항목 클릭
        nav_a.forEach( i=> {
            i.addEventListener('click' , ()=>  toLeftNav()  );
        });

    } //작은기계장치: 끝부분












    // === 첫 번째 타자 효과: Hello, World! ===
    const strongEl = document.querySelector('#Home strong');
    const bEl = document.querySelector('#Home b');

    const text1 = 'Hello!';
    const text2 = 'I am ';
    const text3 = 'JINA KIM';

    let i = 0;

    const typing1 = setInterval(() => {
    if (i < text1.length) {
        strongEl.textContent += text1[i++];
    } else {
        clearInterval(typing1);
        setTimeout(startTyping2, 500);
    }
    }, 200);

    // === 두 번째 타자 효과: I am + <span>JINA KIM</span> ===
    function startTyping2() {
    let j = 0;

    const typing2 = setInterval(() => {
        if (j < text2.length) {
        if (j === 0) {
            bEl.classList.add('active'); // ✅ 첫 글자 찍는 순간 배경 ON!
        }
        bEl.textContent += text2[j++];
        } else {
        clearInterval(typing2);
        typeSpanText();
        }
    }, 200);
    }

    // === <span>JINA KIM</span> 한 글자씩 ===
    function typeSpanText() {
    const span = document.createElement('span');
    bEl.appendChild(span);

    let k = 0;

    const typing3 = setInterval(() => {
        if (k < text3.length) {
        span.textContent += text3[k++];
        } else {
        clearInterval(typing3);
        }
    }, 200);
    }











  //What Can I Do?
    const slide = document.getElementById('slide');
    const slideBtn = document.querySelectorAll("#slide_bar button");
    slideBtn.forEach( (i , j) => {
        i.addEventListener('click' , ()=> {        
            if(j === 0) {
            toLeft();
            i.classList.add('active');
            slideBtn[1].classList.remove('active');
            }
            if(j === 1) {
            toRight();
            i.classList.add('active');
            slideBtn[0].classList.remove('active');
            }
        });
    });

    const toLeft = ()=> {
        slide.style.transition="left 1s";
        slide.style.left = "-1400px";    
    }
    const toRight = ()=> {
        slide.style.transition="left 1s";
        slide.style.left = 0;
    }




//MarkUp
  const slide_1 = document.getElementById('slide_1');
  const slideBtn_1 = document.querySelectorAll('#slide_bar_1 button');

  slideBtn_1.forEach( (i,j)=> {
    i.addEventListener('click' , ()=>{
      slideBtn_1.forEach( ii => ii.classList.remove('active') );
      i.classList.add('active');
      const index = j;
	  //작은기계장치(휴대폰)(0~768픽셀 넓이)
	  if( window.innerWidth <=768) {
		  switch( index ){
			case 0 :   slide_1.style.left = 0;        break;
			case 1 :   slide_1.style.left = "-90vw";  break;
			case 2 :   slide_1.style.left = "-180vw"; break;
            case 3 :   slide_1.style.left = "-270vw"; break;
			default :  slide_1.style.left = "-360vw"; 
		  }
	  } else {
		  switch( index ){
			case 0 :   slide_1.style.left = 0;         break;
			case 1 :   slide_1.style.left = "-700px";  break;
			case 2 :   slide_1.style.left = "-1400px"; break;
            case 3 :   slide_1.style.left = "-2100px"; break;
			default :  slide_1.style.left = "-2800px"; 
		  }
	  }
    });
  });




  // Gallery
  // 1. GALLERY nav 버튼 클릭 → 해당 G_box 보이기 + 슬라이드 기능 활성화
  const nav_btn = document.querySelectorAll('#Gallery nav button');
  const G_Boxes = document.querySelectorAll('#Gallery .G_box');

  nav_btn.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
  // nav 버튼 active 상태 변경
  nav_btn.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // G_box 보이기/숨기기 + active 설정
  G_Boxes.forEach(box => {
  box.classList.remove('active');
  box.style.display = 'none';
  });
  G_Boxes[idx].classList.add('active');
  G_Boxes[idx].style.display = 'block';

  // 해당 G_box의 슬라이드 버튼 연결
  GallerySlide(G_Boxes[idx]);
  });
  });

  // 2. 슬라이드 버튼 클릭 시 슬라이드 이동
  function GallerySlide(activeBox) {
  const G_slide = activeBox.querySelector('.slide');
  const G_btns = activeBox.querySelectorAll('.G_slide_bar button');

  G_btns.forEach((btn, j) => {
  btn.addEventListener('click', () => {
  G_btns.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const left = j * -1100;
  G_slide.style.left = `${left}px`;
  });
  });
  }

  // 3. 페이지 로드 시 초기 active 박스 슬라이드 연결
  const Gallery_G = document.querySelector('#Gallery .G_box.active');
  if (Gallery_G) {
  Gallery_G.style.display = 'block';
  GallerySlide(Gallery_G);
  }

    document.querySelectorAll("#Gallery .slide button").forEach(button => {
    button.addEventListener("click", e => {
        const img = e.currentTarget.querySelector("img");
        let src = img.getAttribute("src");
        const alt = img.getAttribute("alt");
        // 이미지 파일명 변경 (.jpg → -large.jpg)
        src = src.replace(".jpg", "-large.jpg");

        const popupImg = document.querySelector("#popup img");
        const popupTitle = document.querySelector("#popup h3");
        const popup = document.querySelector("#popup");

        popupImg.setAttribute("src", src);
        popupImg.setAttribute("alt", alt);
        popupTitle.textContent = alt;

        popup.style.display = "block";
        popup.style.opacity = 0;
        // fadeIn 효과
        setTimeout(() => popup.style.opacity = 1, 0);
    });
    });

    // 팝업 클릭 시 닫기
    document.querySelector("#popup").addEventListener("click", () => {
    const popup = document.querySelector("#popup");
    popup.style.opacity = 0;
    setTimeout(() => popup.style.display = "none", 300); // fadeOut 0.3초
    });

    // ESC 키로 닫기
    document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
        const popup = document.querySelector("#popup");
        popup.style.opacity = 0;
        setTimeout(() => popup.style.display = "none", 300);
    }
    });






}); //JS 끝!!!!!!!!!!!