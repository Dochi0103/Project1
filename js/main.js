$(function(){
	let video=document.getElementById("main_video");
	main_video.muted=true;

	video.addEventListener("loadeddata", function() {
      // console.log("loaded event");
	video.play();
	});

	video.addEventListener("ended", function(){
      // console.log("ended event");
		video.currentTime=0;
		video.play();
	});
	const swiper = new Swiper("#section3 .sec3_swiper", {
		loop:true,
		autoplay: 
			{delay: 3000},
		slidesPerView: 1, // 450 미만
		spaceBetween: 20,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
		},
		breakpoints: {
			450: { // 990 미만 450 이상 
				slidesPerView: 1.5,
				centeredSlides: true
			},
			991: { // 991 이상
				slidesPerView: 3
			}
		},
	});

	$("a.prev").click(function(e){
		e.preventDefault();
		swiper.slidePrev();
	});
	$("a.next").click(function(e){
		e.preventDefault();
		swiper.slideNext();
	});
	
	$(function(){
		$(window).scroll(function(){
			wint=$(window).scrollTop()
			if(wint > 700){
				$("#start header").addClass("fixed")
			}
			else{
			$("#start header").removeClass("fixed")
			}
		});

		$("#gnb > ul > li").mouseenter(function(){
			if(headerFlag === false){
				$("header").addClass("active");
			}
		});
		$("header").mouseleave(function(){
			if(headerFlag === false){
				$("header").removeClass("active");				
			}
		});
	});

	
	let winw;
$(window).resize(function(){
	winw=$(window).width();
	if(winw>1020){
		if($("#tab").hasClass("close") === true){
			$("body").removeClass("fixed");
			$("header").removeClass("active");
			$("#mobile").hide();
			$("#tab").removeClass("close");
		}
	}
});
	$("#mobile > ul > li").click(function(e){
		e.preventDefault();

		if($(this).hasClass("on") === false){ //닫혀있음
				$("#mobile > ul > li").removeClass("on");
			$(this).addClass("on");
			$("#mobile ul ul").slideUp(300);
			$(this).find("ul").slideDown(300);
		}
		else{
			$(this).removeClass("on");
			$(this).find("ul").slideUp(300);
		}
	});
	let headerFlag=false; //중복클릭을 방지
	$("#tab").click(function(e){
		e.preventDefault();
		if($("#tab").hasClass("close") === false){ //닫혀있음
			headerFlag=true;
			$("header").addClass("active");
			$("body").addClass("fixed");
			$("#mobile").slideDown(300);
			$(this).addClass("close");
		}
		else{
			headerFlag=false;
			$("header").removeClass("active");
			$("body").removeClass("fixed");
			$("#mobile").slideUp(300);
			$(this).removeClass("close")
		}
	});
});