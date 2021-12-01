export default function Main() {
  return (
    <div id="main_wrap">
    <div class="top">
      <ul class="top_icon">
        {/* <li><img src="./img/logo0.jpg" alt=""></li>
        <li><a href="#"><img src="./img/icon/1x/outline_pending_black_24dp.png" alt=""></a></li>
        <li><a href="#"><img src="./img/icon/1x/outline_aspect_ratio_black_24dp.png" alt=""></a></li>
        <li><a href="#"><img src="./img/icon/1x/outline_air_black_24dp.png" alt=""></a></li>
        <li><a href="#"><img src="./img/icon/1x/outline_cached_black_24dp.png" alt=""></a></li> */}
      </ul>
    </div>
    <div class="center">
      <div class="top_slide">
        <ul class=" slide slide1">
          {/* <li><a href="#"><img src="./img/icon/1x/outline_flashlight_on_black_24dp.png" alt=""></a>플래시</li>
          <li><a href="#"><img src="./img/icon/1x/outline_grid_3x3_black_24dp.png" alt=""></a>그리드</li>
          <li><a href="#"><img src="./img/icon/1x/outline_alarm_on_black_24dp.png" alt=""></a>타이머</li>
          <li><a href="#"><img src="./img/icon/1x/outline_touch_app_black_24dp.png" alt=""></a>터치촬영</li>
          <li><a href="#"><img src="./img/icon/1x/outline_settings_black_24dp.png" alt=""></a>설정</li> */}
        </ul>
        <ul class=" slide slide2">
          <li><a href="#">1:1</a></li>
          <li><a href="#">3:4</a></li>
          <li><a href="#">9:16</a></li>
          <li><a href="#">FULL</a></li>
        </ul>
        <ul class=" slide slide3">
          <li class="left_text">
            {/* <p>부산광역시<br>사상구 모라로</p> */}
            <p>2021. 11. 24</p>
          </li>
          <li class="dust dust_1">
            <p>미세먼지</p>
            <div class="dust-in">
              <div class="icon"><i class="far fa-smile"></i></div>
              <div class="icon_text">
                <p>좋음</p>
                <p>22㎍/m³</p>  
              </div>
            </div>  
          </li>
          <li class="dust dust_1">
            <p>초미세먼지</p>
            <div class="dust-in">
              <div class="icon"><i class="far fa-smile"></i></div>
              <div class="icon_text">
                <p>좋음</p>
                <p>13㎍/m³</p>  
              </div>
            </div>
          </li>
          <li class="last-btn">
            <div><a href="#">일기예보</a></div>
            <div class="filter"><a href="#">필터적용</a></div>
          </li>
        </ul> 
      </div>
      <div class="typing-txt">
        <ul>
          <li class>HELLO~!</li>
          <li>I WANT TO BE</li>
          <li>A MEMBER</li>
          <li>OF AMUZ :)</li>
        </ul>
      </div>
    </div>  


    <div class="bottom_top">
      <div class="top_btn">
        <div class="top_left">
          <a href="#">사진</a>
        </div>
        <div class="top_right on">
          <a href="#">동영상</a>
        </div>
      </div>
    </div> 
    <div class="bottom_top1">
      <div class="top_btn">
      </div>
      <div class="btn_circle">
        
      </div>
    </div> 
    <div class="bottom_bottom bottom1">
      {/* <li><a href="./page/index3.html"><img src="./img/icon/1x/outline_insert_photo_black_24dp.png" alt=""></a>사진</li> */}
      {/* <li><a href="#"><img src="./img/icon/1x/outline_auto_awesome_black_24dp.png" alt=""></a>데코</li>      */}
      <li>
        <div class="circle_btn">
          <div class="btn_in">
           
          </div>
        </div>
      </li>
      {/* <li><a href="#"><img src="./img/icon/1x/outline_auto_fix_high_black_24dp.png" alt=""></a>효과</li>
      <li><a href="#"><img src="./img/icon/1x/outline_filter_alt_black_24dp.png" alt=""></a>필터</li> */}
    </div>
    <div class="bottom_bottom bottom2">
    <ul class="picture">
      <li>
        <div class="pic pic0">
          {/* <!-- <img src="../img/cloude.jfif" alt=""> --> */}
        </div>
        <div class="text">PURE</div>
      </li>
      <li>
        <div class="pic pic1">
          {/* <img src="../img/cloude.jfif" alt=""> */}
        </div>
        <div class="text">PURE 1</div>
      </li>
      <li>
        <div class="pic pic2">
          {/* <img src="../img/cloude.jfif" alt=""> */}
        </div>
        <div class="text">PURE 2</div>
      </li>
      <li>
        <div class="pic pic3">
          {/* <img src="../img/cloude.jfif" alt=""> */}
        </div>
        <div class="text">PURE 3</div>
      </li>
      <li>
        <div class="pic pic4">
          {/* <img src="../img/cloude.jfif" alt=""> */}
        </div>
        <div class="text">PURE 4</div>
      </li>  
      <li>
        <div class="pic pic5 on">
          {/* <img src="../img/cloude.jfif" alt=""> */}
        </div>
        <div class="text">PURE 5</div>
      </li>
      <li>
        <div class="pic pic6">
          {/* <img src="../img/cloude.jfif" alt=""> */}
        </div>
        <div class="text">PURE 6</div>
      </li>
    </ul>
   </div>
  </div>
  )
}