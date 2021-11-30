<template>
  <div class="b-wrapper">
    <div class="b-wrapper-header">
      <div class="b-container">
        <div class="b-header">
          <div class="b-container-header">
            <logo></logo>
            <search @filtered="filtered"></search>
          </div>
          <div class="b-container-header">
            <navbar></navbar>
            <account></account>
            <cart @cartJson="getJSON" @delGood="delGood"  @changeGood="changeGood" :goods="arrCartGoods"></cart>
          </div>
        </div>
      </div>
    </div>
    <div class="b-wrapper-brand">
      <div class="b-container">
        <div class="b-brand">
          <div class="b-container-brand"></div>
          <div class="b-container-brand">
            <div class="b-wrapper-brand-title">
              <div class="b-container-brand-title">
                <div class="b-brand-text">
                  <div class="b-brand-text__title">the brand</div>
                  <div class="b-brand-text__text">
                    OF LUXERIOUS
                    <span>FASHION</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="b-wrapper-for">
      <div class="b-container">
        <div class="b-for">
          <div class="b-for-box">
            <div class="b-for-box__content">
              <div class="b-for-box__firstLineText">30% OFF</div>
              <div class="b-for-box__secondLineText">FOR WOMEN</div>
            </div>
          </div>
          <div class="b-for-box">
            <div class="b-for-box__content">
              <div class="b-for-box__firstLineText">HOT DEAL</div>
              <div class="b-for-box__secondLineText">FOR MEN</div>
            </div>
          </div>
          <div class="b-for-box">
            <div class="b-for-box__content">
              <div class="b-for-box__firstLineText">NEW ARRIVALS</div>
              <div class="b-for-box__secondLineText">FOR KIDS</div>
            </div>
          </div>
          <div class="b-for-box">
            <div class="b-for-box__content">
              <div class="b-for-box__firstLineText">LUXIROUS & TRENDY</div>
              <div class="b-for-box__secondLineText">ACCESORIES</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="b-wrapper-items">
      <div class="b-container">
        <div class="b-items">
          <div class="b-items-title">
            <div class="b-items-title__firstRow">Fetured Items</div>
            <div
              class="b-items-title__secondRow"
            >Shop for items based on what we featured in this week</div>
          </div>
          <div class="b-goods">
            <good @getJSON="getJSON" @buyGood="buyGood" :goods="filterGoods" :disabled="disabled"></good>
          </div>
        </div>
      </div>
    </div>
    <div class="b-wrapper-service">
      <div class="b-container">
        <div class="b-service">
          <div class="b-service-box">
            <svg
              class="b-service-box__icon"
              width="45"
              height="31"
              viewBox="0 0 45 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.0956 26.3212H15.1423C14.9421 27.585 14.2975 28.7357 13.3246 29.5667C12.3516 30.3976 11.1141 30.8541 9.83463 30.8541C8.55513 30.8541 7.31761 30.3976 6.34466 29.5667C5.37171 28.7357 4.72718 27.585 4.52699 26.3212H2.65551C2.17743 26.3181 1.7201 26.1255 1.38376 25.7858C1.04743 25.446 0.859544 24.9868 0.861345 24.5087V1.81345C0.859288 1.3352 1.04704 0.875671 1.38341 0.535685C1.71977 0.195698 2.17726 0.00306626 2.65551 0H27.3421C27.8202 0.00306616 28.2776 0.19567 28.6138 0.535685C28.95 0.875699 29.1376 1.33529 29.1353 1.81345V3.65403H36.0153C36.093 3.6537 36.1703 3.66378 36.2453 3.68398C38.4675 3.87722 39.5853 5.03653 40.7641 7.02877L44.2026 12.9166C44.2846 13.0564 44.328 13.2155 44.3283 13.3775V25.414C44.3293 25.6532 44.2353 25.8828 44.067 26.0528C43.8987 26.2227 43.6698 26.319 43.4307 26.3203H40.7119C40.5117 27.584 39.8672 28.7348 38.8942 29.5657C37.9213 30.3967 36.6837 30.8532 35.4042 30.8532C34.1247 30.8532 32.8872 30.3967 31.9143 29.5657C30.9413 28.7348 30.2968 27.584 30.0966 26.3203L30.0956 26.3212ZM31.8135 25.414C31.8211 26.1222 32.038 26.8122 32.437 27.3973C32.836 27.9824 33.3991 28.4364 34.0556 28.7022C34.712 28.968 35.4324 29.0336 36.1261 28.8909C36.8197 28.7481 37.4557 28.4033 37.9538 27.9C38.452 27.3966 38.7901 26.7571 38.9256 26.062C39.0611 25.3669 38.9879 24.6472 38.7153 23.9935C38.4427 23.3399 37.9828 22.7817 37.3935 22.3888C36.8043 21.996 36.112 21.7862 35.4038 21.7859C34.4469 21.7921 33.5316 22.1777 32.8585 22.8578C32.1854 23.5379 31.8096 24.4572 31.8135 25.414ZM6.24485 25.414C6.25247 26.1222 6.46941 26.8122 6.86837 27.3973C7.26733 27.9824 7.83048 28.4364 8.48692 28.7022C9.14336 28.968 9.86376 29.0336 10.5574 28.8909C11.2511 28.7481 11.887 28.4033 12.3852 27.9C12.8833 27.3966 13.2214 26.7571 13.3569 26.062C13.4924 25.3669 13.4193 24.6472 13.1467 23.9935C12.874 23.3399 12.4142 22.7817 11.8249 22.3888C11.2356 21.996 10.5433 21.7862 9.8351 21.7859C8.87809 21.7918 7.96251 22.1772 7.28924 22.8573C6.61597 23.5375 6.24002 24.457 6.24388 25.414H6.24485ZM40.71 24.5078H42.5321V19.0797H39.8887C39.7703 19.0792 39.6531 19.0555 39.5438 19.0096C39.4346 18.9638 39.3354 18.8968 39.2521 18.8127C39.1687 18.7285 39.1028 18.6287 39.058 18.519C39.0132 18.4093 38.9905 18.2919 38.9911 18.1734V16.389C38.9908 15.6927 39.2571 15.0228 39.7351 14.5166H33.5719C33.4973 14.5165 33.423 14.507 33.3507 14.4885C32.6698 14.4278 32.0364 14.1139 31.5759 13.6087C31.1154 13.1034 30.8613 12.4437 30.8637 11.7601V7.21913C30.8631 7.10062 30.8858 6.98305 30.9306 6.87333C30.9753 6.7636 31.0413 6.6639 31.1246 6.57965C31.208 6.49541 31.3071 6.42839 31.4163 6.38246C31.5256 6.33652 31.6428 6.31256 31.7613 6.31193H38.025C37.6923 6.00404 37.2987 5.76921 36.8697 5.62292C36.4406 5.47664 35.9857 5.422 35.5342 5.46252H29.1353V24.5038H30.0956C30.2958 23.24 30.9404 22.0892 31.9133 21.2583C32.8863 20.4273 34.1238 19.9708 35.4033 19.9708C36.6828 19.9708 37.9203 20.4273 38.8932 21.2583C39.8662 22.0892 40.5107 23.24 40.7109 24.5038L40.71 24.5078ZM15.1413 24.5078H27.3411V1.81251H2.65551V24.5078H4.52699C4.72718 23.244 5.37171 22.093 6.34466 21.262C7.31761 20.4311 8.55513 19.9746 9.83463 19.9746C11.1141 19.9746 12.3516 20.4311 13.3246 21.262C14.2975 22.093 14.9421 23.244 15.1423 24.5078H15.1413ZM40.7853 16.3918V17.2702H42.5321V15.4856H41.6829C41.4444 15.4871 41.2162 15.5831 41.0482 15.7523C40.8802 15.9216 40.786 16.1505 40.7863 16.389L40.7853 16.3918ZM32.6569 11.762C32.6559 12.0059 32.7516 12.2404 32.9232 12.4139C33.0947 12.5874 33.328 12.6858 33.5719 12.6875C33.6336 12.6874 33.6952 12.6939 33.7555 12.7069H41.9921L39.3196 8.13128H32.6531L32.6569 11.762ZM32.7468 25.4159C32.744 24.7081 33.022 24.0281 33.52 23.5251C34.0179 23.0221 34.695 22.7371 35.4028 22.7328C35.6432 22.7328 35.8737 22.8284 36.0436 22.9984C36.2136 23.1683 36.309 23.3987 36.309 23.639C36.309 23.8794 36.2136 24.1099 36.0436 24.2799C35.8737 24.4499 35.6432 24.5453 35.4028 24.5453C35.2305 24.5437 35.0616 24.5936 34.9176 24.6882C34.7736 24.7828 34.661 24.918 34.594 25.0767C34.527 25.2355 34.5086 25.4107 34.5413 25.5798C34.574 25.749 34.6562 25.9047 34.7775 26.0271C34.8988 26.1495 35.0537 26.233 35.2225 26.2672C35.3914 26.3014 35.5667 26.2847 35.726 26.2191C35.8853 26.1535 36.0216 26.0419 36.1175 25.8987C36.2134 25.7556 36.2646 25.5873 36.2646 25.415C36.2646 25.177 36.3591 24.9489 36.5274 24.7807C36.6956 24.6124 36.9238 24.5179 37.1617 24.5179C37.3996 24.5179 37.6278 24.6124 37.796 24.7807C37.9643 24.9489 38.0588 25.177 38.0588 25.415C38.0588 26.1196 37.7789 26.7955 37.2806 27.2937C36.7823 27.792 36.1065 28.0719 35.4018 28.0719C34.6972 28.0719 34.0213 27.792 33.5231 27.2937C33.0248 26.7955 32.7449 26.1196 32.7449 25.415L32.7468 25.4159ZM7.17814 25.4159C7.17531 24.7081 7.45339 24.0281 7.95133 23.5251C8.44926 23.0221 9.12639 22.7371 9.83416 22.7328C10.0745 22.7328 10.305 22.8284 10.475 22.9984C10.6449 23.1683 10.7404 23.3987 10.7404 23.639C10.7404 23.8794 10.6449 24.1099 10.475 24.2799C10.305 24.4499 10.0745 24.5453 9.83416 24.5453C9.66185 24.5437 9.49296 24.5936 9.34895 24.6882C9.20494 24.7828 9.09229 24.918 9.02529 25.0767C8.95829 25.2355 8.93996 25.4107 8.97263 25.5798C9.00531 25.749 9.08751 25.9047 9.20881 26.0271C9.3301 26.1495 9.48503 26.233 9.65391 26.2672C9.8228 26.3014 9.99803 26.2847 10.1574 26.2191C10.3167 26.1535 10.453 26.0419 10.5489 25.8987C10.6448 25.7556 10.696 25.5873 10.696 25.415C10.696 25.177 10.7905 24.9489 10.9587 24.7807C11.127 24.6124 11.3551 24.5179 11.5931 24.5179C11.831 24.5179 12.0592 24.6124 12.2274 24.7807C12.3956 24.9489 12.4901 25.177 12.4901 25.415C12.4901 26.1196 12.2102 26.7955 11.7119 27.2937C11.2137 27.792 10.5379 28.0719 9.83318 28.0719C9.12851 28.0719 8.4527 27.792 7.95442 27.2937C7.45615 26.7955 7.17622 26.1196 7.17622 25.415L7.17814 25.4159ZM5.38303 5.46842C5.14267 5.46842 4.91216 5.37301 4.7422 5.20305C4.57224 5.0331 4.47675 4.80252 4.47675 4.56217C4.47675 4.32181 4.57224 4.09124 4.7422 3.92128C4.91216 3.75132 5.14267 3.65591 5.38303 3.65591H24.6097C24.8501 3.65591 25.0806 3.75132 25.2506 3.92128C25.4205 4.09124 25.516 4.32181 25.516 4.56217C25.516 4.80252 25.4205 5.0331 25.2506 5.20305C25.0806 5.37301 24.8501 5.46842 24.6097 5.46842H5.38303Z"
                fill="#F16D7F"
              />
            </svg>
            <div class="b-service-box__title">Free Delivery</div>
            <div
              class="b-service-box__discription"
            >Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</div>
          </div>
          <div class="b-service-box">
            <svg
              class="b-service-box__icon"
              width="40"
              height="39"
              viewBox="0 0 40 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.0832 35.9725L16.7296 38.7743L14.519 34.987L10.4225 36.4478L9.62825 32.1194L5.28728 32.076L5.99451 27.7282L1.92887 26.1822L4.06412 22.3506L0.765625 19.4858L4.06217 16.6192L1.92698 12.7882L5.99357 11.2425L5.28533 6.89947L9.62731 6.85702L10.4215 2.52861L14.5181 3.98847L16.7286 0.201172L20.0822 3.00296L23.4358 0.201172L25.6473 3.98941L29.7439 2.52861L30.5371 6.85796L34.879 6.90136L34.1718 11.2444L38.2374 12.7904L36.1022 16.622L39.3988 19.4868L36.1022 22.3534L38.2365 26.1853L34.1699 27.731L34.8781 32.0731L30.5352 32.1165L29.742 36.4459L25.6473 34.986L23.4358 38.7733L20.0832 35.9725ZM21.2484 34.5397L22.9498 35.9609L24.0715 34.0382L24.8367 32.7282L26.2551 33.2334L28.3333 33.9755L28.7362 31.7792L29.0115 30.2769L30.5197 30.2616L32.7245 30.2413L32.3651 28.0363L32.1197 26.5292L33.5293 25.994L35.5911 25.2083L34.509 23.2665L33.7689 21.938L34.9119 20.9457L36.5872 19.4868L34.9129 18.0375L33.7699 17.0433L34.51 15.7139L35.593 13.7709L33.5313 12.9873L32.1216 12.453L32.368 10.9458L32.7274 8.74194L30.5226 8.71977L29.0154 8.70443L28.74 7.20282L28.3381 5.00677L26.2589 5.74791L24.8406 6.25316L24.0744 4.94214L22.9517 3.01947L21.2493 4.44065L20.0851 5.41154L18.9209 4.44065L17.2195 3.01947L16.0977 4.94119L15.3326 6.25222L13.9132 5.74696L11.836 5.00488L11.4321 7.20187L11.1568 8.70349L9.64954 8.71882L7.44571 8.74005L7.80513 10.9448L8.0505 12.4502L6.64088 12.9864L4.5781 13.77L5.66121 15.7129L6.40129 17.0414L5.25833 18.0356L3.58298 19.4927L5.25732 20.9485L6.40028 21.9428L5.66021 23.2712L4.57716 25.2132L6.63799 25.9959L8.04862 26.5321L7.80224 28.0384L7.44376 30.2451L9.64759 30.2672L11.1548 30.2828L11.4302 31.7851L11.8331 33.9802L13.9123 33.2391L15.3315 32.7338L16.0967 34.0449L17.2195 35.9678L18.9209 34.5463L20.0851 33.5755L21.2484 34.5397ZM21.3624 22.4424C21.3624 19.6144 22.8744 18.0413 24.7043 18.0413C26.6425 18.0413 27.8927 19.5515 27.8927 22.2249C27.8927 25.1804 26.3613 26.6469 24.5932 26.6469C22.8744 26.6469 21.3817 25.2462 21.3624 22.4424ZM22.8319 22.3572C22.8097 24.1456 23.4908 25.505 24.6406 25.505C25.8744 25.505 26.428 24.1668 26.428 22.3166C26.428 20.6113 25.9381 19.1891 24.6406 19.1891C23.4706 19.1852 22.8319 20.5901 22.8319 22.3563V22.3572ZM15.4455 26.6085L23.5759 12.3875H24.7671L16.6369 26.6085H15.4455ZM12.3393 16.6163C12.3393 13.8145 13.8495 12.2377 15.6804 12.2377C17.6127 12.2377 18.8938 13.7488 18.8938 16.4232C18.8938 19.3777 17.3615 20.8433 15.5741 20.8433C13.8514 20.8433 12.3596 19.4424 12.3393 16.6173V16.6163ZM13.8292 16.5524C13.7867 18.3408 14.4485 19.6993 15.6166 19.7012C16.8503 19.7012 17.404 18.364 17.404 16.5128C17.404 14.8065 16.9141 13.3845 15.6166 13.3845C14.4485 13.3816 13.8292 14.7826 13.8292 16.5536V16.5524Z"
                fill="#F16D7F"
              />
            </svg>
            <div class="b-service-box__title">Sales & discounts</div>
            <div
              class="b-service-box__discription"
            >Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</div>
          </div>
          <div class="b-service-box">
            <svg
              class="b-service-box__icon"
              width="47"
              height="35"
              viewBox="0 0 47 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41.8606 8.77811C40.6853 8.76623 39.5533 9.22046 38.7121 10.0412C37.8708 10.862 37.3888 11.9825 37.3718 13.1577C37.3748 13.7761 37.511 14.3865 37.7711 14.9476C38.0312 15.5086 38.4091 16.007 38.8791 16.4088L33.2173 18.3945L25.1605 9.03899C26.0255 8.75036 26.7789 8.1992 27.3157 7.46213C27.8526 6.72506 28.1462 5.8387 28.1556 4.92689C28.1312 3.75276 27.6477 2.63501 26.8087 1.81326C25.9697 0.99151 24.8421 0.53125 23.6677 0.53125C22.4933 0.53125 21.3657 0.99151 20.5267 1.81326C19.6877 2.63501 19.2042 3.75276 19.1798 4.92689C19.1892 5.82967 19.4767 6.7077 20.0032 7.44114C20.5297 8.17457 21.2695 8.7279 22.1219 9.02555L14.0524 18.3973L8.39267 16.4119C8.86229 16.0099 9.23979 15.5112 9.49954 14.9502C9.75929 14.3892 9.89517 13.779 9.89794 13.1608C9.92019 12.3137 9.70223 11.4776 9.26932 10.7491C8.83641 10.0207 8.20619 9.42955 7.4515 9.04418C6.69682 8.65881 5.84852 8.49478 5.0046 8.57124C4.16067 8.6477 3.35561 8.96159 2.68247 9.47631C2.00933 9.99104 1.49561 10.6857 1.20067 11.4801C0.905725 12.2745 0.841609 13.1361 1.01574 13.9654C1.18987 14.7947 1.5951 15.5577 2.18464 16.1664C2.77419 16.775 3.524 17.2045 4.34732 17.405V29.2801C4.35443 29.3594 4.37056 29.4375 4.39555 29.513C4.36373 29.6354 4.34757 29.7615 4.34732 29.888C4.34732 34.1507 21.66 34.2763 23.6339 34.2763C25.6077 34.2763 42.9205 34.1517 42.9205 29.888C42.9198 29.7615 42.9035 29.6355 42.8722 29.513C42.8989 29.4379 42.9152 29.3596 42.9205 29.2801V17.405C43.9822 17.1729 44.9192 16.553 45.5479 15.6665C46.1766 14.7801 46.4518 13.6908 46.3197 12.6121C46.1876 11.5334 45.6576 10.5427 44.8336 9.83415C44.0096 9.12556 42.9508 8.74998 41.8645 8.78094L41.8606 8.77811ZM21.3595 4.92901C21.3484 4.47085 21.4741 4.01972 21.7205 3.63332C21.967 3.24692 22.3229 2.94272 22.7431 2.75961C23.1632 2.57651 23.6284 2.52283 24.0792 2.60535C24.53 2.68787 24.946 2.90283 25.2741 3.22288C25.6021 3.54294 25.8273 3.95341 25.9208 4.40205C26.0144 4.85069 25.9722 5.31711 25.7995 5.74162C25.6268 6.16613 25.3315 6.52952 24.9513 6.78539C24.571 7.04126 24.1232 7.17799 23.6649 7.17813C23.0613 7.18433 22.4797 6.95124 22.0477 6.52969C21.6156 6.10814 21.3682 5.53258 21.3595 4.92901ZM14.0263 20.6542C14.236 20.7266 14.4624 20.7351 14.6768 20.6783C14.8912 20.6215 15.0838 20.502 15.2301 20.3353L23.6359 10.5772L32.0415 20.3353C32.1875 20.5021 32.38 20.6216 32.5943 20.6785C32.8085 20.7355 33.0348 20.7274 33.2443 20.6552L40.7399 18.0225V27.6233C36.0202 25.5731 25.1759 25.4976 23.6387 25.4976C22.1015 25.4976 11.2534 25.5741 6.53759 27.6233V18.0225L14.0263 20.6542ZM23.6329 32.1409C15.2273 32.1409 9.866 31.1643 7.63608 30.3421C7.29689 30.2286 6.97252 30.0747 6.66991 29.884C7.36749 29.3806 9.62741 28.6937 13.4003 28.2107C20.1977 27.4332 27.0614 27.4332 33.8588 28.2107C37.6269 28.6937 39.8926 29.3806 40.5883 29.884C40.2881 30.0761 39.9652 30.23 39.6269 30.3421C37.4028 31.1624 32.0463 32.1409 23.6329 32.1409ZM3.10481 13.1577C3.09406 12.6996 3.22009 12.2489 3.46677 11.8627C3.71345 11.4766 4.06961 11.1725 4.48979 10.9897C4.90996 10.8069 5.37501 10.7534 5.8257 10.8362C6.27638 10.9189 6.69225 11.1343 7.02008 11.4544C7.34791 11.7745 7.57285 12.185 7.66627 12.6336C7.7597 13.0822 7.71734 13.5485 7.54456 13.9729C7.37178 14.3973 7.0764 14.7607 6.69621 15.0164C6.31603 15.2722 5.86829 15.4088 5.41008 15.4089C4.80607 15.4154 4.2241 15.1821 3.79193 14.76C3.35977 14.338 3.11271 13.7617 3.10481 13.1577ZM41.8606 15.4089C41.4181 15.3981 40.9887 15.2569 40.626 15.0032C40.2633 14.7495 39.9835 14.3945 39.8215 13.9826C39.6596 13.5706 39.6227 13.1201 39.7156 12.6874C39.8085 12.2546 40.027 11.8587 40.3436 11.5495C40.6603 11.2402 41.0612 11.0312 41.496 10.9487C41.9309 10.8661 42.3804 10.9136 42.7884 11.0853C43.1964 11.2569 43.5447 11.5453 43.7897 11.9139C44.0348 12.2825 44.1656 12.7151 44.166 13.1577C44.1576 13.7614 43.9102 14.3373 43.4781 14.7591C43.0461 15.1809 42.4644 15.4142 41.8606 15.408V15.4089Z"
                fill="#F16D7F"
              />
            </svg>
            <div class="b-service-box__title">Free Delivery</div>
            <div
              class="b-service-box__discription"
            >Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="b-wrapper-feedback">
      <div class="b-container">
        <div class="b-feedback">
          <div class="b-feedback-text">
            <img class="b-feedback-text__face" src="./assets/img/face-subscribe.svg" alt="face" />
            <div class="b-feedback-text__text">
              “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
              <span>a pulvinar purus condimentum“</span>
            </div>
          </div>
          <div class="b-feedback-field">
            <div class="b-feedback-form-text">
              <div class="b-feedback-form-text__title">SUBSCRIBE</div>
              <div class="b-feedback-form-text__text">FOR OUR NEWLETTER AND PROMOTION</div>
            </div>
            <form class="b-feedback-form">
              <input class="b-feedback-form__input" type="text" placeholder="Enter Your Email" />
              <div class="b-feedback-form__btn b-cursore">Subscribe</div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="b-wrapper-footer">
      <div class="b-container">
        <div class="b-footer">
          <div class="b-copy">&copy; 2021 Brand All Rights Reserved.</div>
          <div class="b-network">
            <div class="b-network__link">
              <a href="#">
                <svg
                  width="9"
                  height="15"
                  viewBox="0 0 9 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.08836 8.28L8.50686 5.61602H5.89022V3.88729C5.89022 3.15847 6.25574 2.44806 7.42765 2.44806H8.61722V0.179975C8.61722 0.179975 7.53772 0 6.50561 0C4.35073 0 2.9422 1.27593 2.9422 3.5857V5.61602H0.546875V8.28H2.9422V14.72H5.89022V8.28H8.08836Z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
            <div class="b-network__link">
              <a href="#">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.13897 3.68159C6.02383 3.68159 4.31774 5.38491 4.31774 7.49663C4.31774 9.60835 6.02383 11.3117 8.13897 11.3117C10.2541 11.3117 11.9602 9.60835 11.9602 7.49663C11.9602 5.38491 10.2541 3.68159 8.13897 3.68159ZM8.13897 9.9769C6.77211 9.9769 5.65467 8.8646 5.65467 7.49663C5.65467 6.12866 6.76878 5.01636 8.13897 5.01636C9.50915 5.01636 10.6233 6.12866 10.6233 7.49663C10.6233 8.8646 9.50583 9.9769 8.13897 9.9769ZM13.0078 3.52554C13.0078 4.02026 12.6087 4.41538 12.1165 4.41538C11.621 4.41538 11.2252 4.01694 11.2252 3.52554C11.2252 3.03413 11.6243 2.63569 12.1165 2.63569C12.6087 2.63569 13.0078 3.03413 13.0078 3.52554ZM15.5386 4.42866C15.4821 3.23667 15.2094 2.18081 14.3347 1.31089C13.4634 0.440967 12.4058 0.168701 11.2119 0.108936C9.9814 0.039209 6.29321 0.039209 5.0627 0.108936C3.8721 0.165381 2.81453 0.437646 1.93987 1.30757C1.06522 2.17749 0.795836 3.23335 0.735973 4.42534C0.666134 5.65386 0.666134 9.33608 0.735973 10.5646C0.79251 11.7566 1.06522 12.8124 1.93987 13.6824C2.81453 14.5523 3.86878 14.8246 5.0627 14.8843C6.29321 14.9541 9.9814 14.9541 11.2119 14.8843C12.4058 14.8279 13.4634 14.5556 14.3347 13.6824C15.2061 12.8124 15.4788 11.7566 15.5386 10.5646C15.6085 9.33608 15.6085 5.65718 15.5386 4.42866ZM13.949 11.8828C13.6895 12.5335 13.1874 13.0349 12.5322 13.2972C11.5511 13.6857 9.22314 13.596 8.13897 13.596C7.05479 13.596 4.72348 13.6824 3.74573 13.2972C3.09389 13.0382 2.59171 12.5369 2.32898 11.8828C1.93987 10.9033 2.02967 8.57905 2.02967 7.49663C2.02967 6.41421 1.9432 4.08667 2.32898 3.1105C2.58838 2.45972 3.09056 1.95835 3.74573 1.69604C4.7268 1.30757 7.05479 1.39722 8.13897 1.39722C9.22314 1.39722 11.5545 1.31089 12.5322 1.69604C13.184 1.95503 13.6862 2.4564 13.949 3.1105C14.3381 4.08999 14.2483 6.41421 14.2483 7.49663C14.2483 8.57905 14.3381 10.9066 13.949 11.8828Z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
            <div class="b-network__link">
              <a href="#">
                <svg
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.74032 0.203125C3.55564 0.203125 0.408203 2.34063 0.408203 5.8C0.408203 8 1.63738 9.25 2.38233 9.25C2.68963 9.25 2.86655 8.3875 2.86655 8.14375C2.86655 7.85313 2.13091 7.23438 2.13091 6.025C2.13091 3.5125 4.03055 1.73125 6.4889 1.73125C8.60271 1.73125 10.1671 2.94062 10.1671 5.1625C10.1671 6.82187 9.50597 9.93437 7.36422 9.93437C6.59133 9.93437 5.93018 9.37187 5.93018 8.56563C5.93018 7.38438 6.74963 6.24062 6.74963 5.02187C6.74963 2.95312 3.835 3.32812 3.835 5.82812C3.835 6.35313 3.90018 6.93437 4.13298 7.4125C3.70463 9.26875 2.82931 12.0344 2.82931 13.9469C2.82931 14.5375 2.91311 15.1188 2.96899 15.7094C3.07452 15.8281 3.02175 15.8156 3.18316 15.7563C4.74757 13.6 4.69169 13.1781 5.3994 10.3562C5.78119 11.0875 6.76826 11.4812 7.55046 11.4812C10.8469 11.4812 12.3275 8.24688 12.3275 5.33125C12.3275 2.22813 9.66427 0.203125 6.74032 0.203125Z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
            <div class="b-network__link">
              <a href="#">
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.417 3.74052C14.427 3.88264 14.427 4.0248 14.427 4.16692C14.427 8.50192 11.1498 13.4969 5.15986 13.4969C3.31448 13.4969 1.60022 12.9588 0.158203 12.0248C0.420396 12.0552 0.67247 12.0654 0.944752 12.0654C2.46741 12.0654 3.8691 11.5476 4.98843 10.6644C3.5565 10.6339 2.3565 9.68977 1.94305 8.39027C2.14475 8.4207 2.34642 8.44102 2.5582 8.44102C2.85063 8.44102 3.14308 8.40039 3.41533 8.32936C1.92291 8.02477 0.803551 6.70498 0.803551 5.11108V5.07048C1.23715 5.31414 1.74139 5.46642 2.2758 5.4867C1.39849 4.89786 0.823727 3.8928 0.823727 2.75573C0.823727 2.14661 0.985041 1.58823 1.26741 1.10092C2.87077 3.09077 5.28086 4.39023 7.98334 4.53239C7.93293 4.28873 7.90266 4.03495 7.90266 3.78114C7.90266 1.97402 9.35477 0.501953 11.1598 0.501953C12.0976 0.501953 12.9446 0.897891 13.5396 1.53748C14.2757 1.39536 14.9816 1.12123 15.6068 0.745609C15.3648 1.50705 14.8505 2.14664 14.1749 2.5527C14.8304 2.48167 15.4657 2.29889 16.0505 2.04511C15.6069 2.69483 15.0522 3.27348 14.417 3.74052Z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "./components/logo.vue"
import search from "./components/search.vue"
import navbar from "./components/navbar.vue"
import account from "./components/account.vue"
import cart from "./components/cart.vue"
import good from "./components/good.vue"

export default {
  name: 'App',
  components: { logo, search, navbar, account, cart, good },
  emits:["getJSON", "filtered", "cartJson", "buyGood", "delGood", "changeGood"],
  data() {
    return {
      goodsList: [],
      filterGoods: [],
      arrCartGoods:[],
      disabled: false
    }
  },
  mounted() {
    this.filterGoods = this.goodsList
  },
  methods: {
    getJSON(url, arr) {
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify()
      })
        .then(responce => responce.json())
        .then(data => data.forEach(item => {
          item.image = require(`./assets/img/goods/${item.id}.png`)
          this[arr].push(item)
        }))
    },
    filtered(searchLine){
      const regExp = new RegExp(searchLine, 'i')
      this.filterGoods = this.goodsList.filter(item => regExp.test(item.title))
    },
    buyGood(url, good){
      this.disabled = true;
      let find = this.arrCartGoods.find(item => item.id === good.id)
      if(find){
        this.changeGood(`${url}:id`, good, "add")
      } else {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(good)
      })
      .then(responce => responce.json())
      .then(data => {
        if(data.result === 1){
          this.arrCartGoods.push(Object.assign(good, {quantity: 1}))
          this.disabled = false;
        } 
      })
      }
    },
    changeGood(url, good, operation){
      let find = this.arrCartGoods.find(item => item.id === good.id)
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify([good, {'operation':operation}])
      })
      .then(responce => responce.json())
      .then(data => {
          if(data.result === 1 && operation == "add"){
            find.quantity++
            this.disabled = false;
          } else if( data.result === 1 && operation == "del"){
            if(find.quantity < 2){
              this.delGood(url, find);
            }else {
            find.quantity--
            }
          } else{
            console.log(`return fetch result: 0`)
          }
      })
    },
    delGood(url, good){
    let find = this.arrCartGoods.find(item => item.id === good.id)
    fetch(url, {
      method: "DELETE",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(find)
    })
      .then(responce => responce.json())
      .then(data => {
        if(data.result === 1){
          this.arrCartGoods.splice(this.arrCartGoods.indexOf(find), 1)
        }
      })
    }
  }
}
</script>

<style lang="scss">
$black: #222222;
$lightPink: #f1e4e6;
$darkPink: #f16d7f;
$lightGrey: #9f9f9f;

@font-face {
  font-family: "Lato";
  src: url(./assets/font/Lato-Bold.ttf);
  font-weight: 700;
}
@font-face {
  font-family: "Lato";
  src: url(./assets/font/Lato-Light.ttf);
  font-weight: 100;
}
@font-face {
  font-family: "Lato";
  src: url(./assets/font/Lato-Regular.ttf);
  font-weight: 300;
}
@font-face {
  font-family: "Lato";
  src: url(./assets/font/Lato-Black.ttf);
  font-weight: 900;
}
* {
  font-family: "Lato";
  margin: 0;
  padding: 0;
}
.b-cursore:hover {
  cursor: pointer;
}
.b-container {
  margin: 0 auto;
  max-width: 1140px;
}
.b-wrapper-header {
  background: $black;
}
.b-header {
  display: flex;
  justify-content: space-between;
  padding: 16px;

  @media (min-width: 768px) {
    padding: 16px 32px;
  }
  @media (min-width: 1140px) {
    padding: 16px 0;
  }
}
.b-container-header {
  display: flex;
  align-items: center;
}
.b-wrapper-brand {
  background: $lightPink;
}
.b-brand {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 363px;
  @media (min-width: 768px) {
    min-height: 367.57px;
  }
  @media (min-width: 1140px) {
    min-height: 764px;
  }
}
.b-container-brand {
  min-height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    width: 50%;
  }
}
.b-container-brand:first-child {
  display: none;

  @media (min-width: 768px) {
    display: block;
    height: 100%;
    background-image: url(./assets/img/man.png);
    background-repeat: no-repeat;
    background-position: center center;

    @media (min-width: 1140px) {
      background-size: cover;
    }
  }
}
.b-wrapper-brand-title {
  display: flex;
}
.b-container-brand-title {
  border-left: 12px solid $darkPink;
}
.b-brand-text {
  display: flex;
  flex-direction: column;
  padding-left: 15px;

  &__title {
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    text-transform: uppercase;
  }
  &__text {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }
  &__text span {
    color: $darkPink;
  }
  @media (min-width: 768px) {
    &__title {
      font-size: 44px;
      line-height: 52.8px;
    }
    &__text {
      font-weight: 700;
      font-size: 24px;
      line-height: 28.8px;
    }
  }
  @media (min-width: 1140px) {
    &__title {
      font-size: 48px;
      line-height: 57.6px;
    }
    &__text {
      font-weight: 700;
      font-size: 32px;
      line-height: 38.4px;
    }
  }
}
.b-for {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 64px 16px;
  @media (min-width: 768px) {
    padding: 20px 16px;
    justify-content: space-between;
  }
  @media (min-width: 1140px) {
    padding: 65px 0;
    justify-content: space-between;
  }
}
.b-for-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  &__firstLineText {
    color: white;
    font-weight: 400;
    font-size: 16px;
    line-height: 19.2px;
  }
  &__secondLineText {
    color: $darkPink;
    font-weight: 700;
    font-size: 24px;
    line-height: 28.8px;
  }
}
.b-for-box:not(:last-child) {
  margin-bottom: 32px;
  width: 343px;
  height: 247px;
  @media (min-width: 768px) {
    width: 232.5px;
    height: 167px;
  }
  @media (min-width: 1140px) {
    width: 360px;
    height: 260px;
  }
}
.b-for-box:nth-child(1) {
  background-image: url(./assets/img/firstbox.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.b-for-box:nth-child(2) {
  background-image: url(./assets/img/secondbox.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.b-for-box:nth-child(3) {
  background-image: url(./assets/img/thridbox.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.b-for-box:nth-child(4) {
  background-image: url(./assets/img/fourthbox.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 111px;
  @media (min-width: 768px) {
    height: 116px;
  }
  @media (min-width: 1140px) {
    height: 180px;
  }
}
.b-items {
  display: flex;
  flex-direction: column;
}
.b-items-title {
  text-align: center;
  &__firstRow {
    font-size: 30px;
    line-height: 36px;
  }
  &__secondRow {
    font-size: 14px;
    line-height: 17px;
    color: $lightGrey;
  }
}

.b-goods {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 64px 16px;

  @media (min-width: 768px) {
    padding-top: 73px;
    justify-content: space-between;
  }
  @media (min-width: 1140px) {
    padding: 65px 0 0;
  }
}
.b-wrapper-service {
  background: $black;
  color: white;
  padding: 48px 0;
  @media (min-width: 1140px) {
    padding: 103px 0;
  }
}
.b-service {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  @media (min-width: 1140px) {
    & {
      flex-direction: row;
      justify-content: space-between;
    }
  }
}
.b-service-box {
  margin-top: 27px;
  max-width: 330px;

  &__title {
    font-size: 19.96px;
    line-height: 24px;
    margin-top: 27px;
  }
  &__discription {
    margin-top: 15px;
    font-size: 13.972px;
    line-height: 17px;
  }
  @media (min-width: 1140px) {
    & {
      margin-top: 0;
    }
  }
}
.b-wrapper-feedback {
  background-image: url(./assets/img/subscribe.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 550px;
  padding: 109px 20px;
  box-sizing: border-box;
  @media (min-width: 1140px) {
    padding: 90px 0;
    min-height: 448px;
  }
}
.b-feedback {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1140px) {
    flex-direction: row;
    justify-content: space-between;
  }
}

.b-feedback-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 330px;

  &__text {
    margin-top: 27px;
    font-size: 19px;
    line-height: 22.8px;
    font-weight: 400;
  }
  &__text span {
    font-size: 18px;
    line-height: 21.6px;
    font-style: italic;
  }
}
.b-feedback-field {
  margin-top: 59px;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (min-width: 768px) {
    margin-top: 0;
  }
}
.b-feedback-form-text {
  display: flex;
  flex-direction: column;
  &__title {
    font-size: 24px;
    line-height: 36.77px;
    font-weight: 700;
  }
  &__text {
    font-size: 14px;
    line-height: 21.45px;
    font-weight: 400;
  }
}
.b-feedback-form {
  margin-top: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 16.8px;

  &__input {
    background-color: #e1e1e1;
    border: none;
    padding: 11px 20px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
  }
  &__btn {
    padding: 9.5px 20px;
    background: $darkPink;
    color: white;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
  }
}
.b-wrapper-footer {
  background: $black;
}
.b-footer {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  color: white;
  padding-top: 49px;
  padding-bottom: 9px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 30px 32px;
  }
  @media (min-width: 1140px) {
    padding: 30px 0;
  }
}
.b-network {
  display: flex;
  margin-bottom: 40px;

  &__link {
    width: 32px;
    height: 32px;
    background: white;
    border-radius: 0.4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__link:not(:last-child) {
    margin-right: 7px;
  }
  &__link:hover {
    background: $darkPink;
    transform: scale(1.2);
    transition: 0.5s;
  }
  &__link:hover path {
    fill: white;
  }
  @media (min-width: 768px) {
    & {
      margin-bottom: 0;
    }
  }
}
</style>