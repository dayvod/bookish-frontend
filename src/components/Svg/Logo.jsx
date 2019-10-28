import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <svg className={className} viewBox="0 0 174 37" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path d="M39.8681 19.8504L36.7188 6.98521C36.3083 5.30724 35.2194 3.86644 33.7326 3.03382C32.2438 2.20333 30.4708 2.03482 28.8583 2.58565L27.7993 2.94532C27.2167 3.14286 26.9021 3.78502 27.0965 4.37833L27.4479 5.45308C27.6417 6.0464 28.2708 6.36712 28.8528 6.16959L29.7681 5.85877C30.5229 5.60247 31.3653 5.60601 32.0708 5.98126C32.7854 6.36146 33.291 7.01212 33.4854 7.80934L36.1563 18.6999C34.6153 18.2178 32.6986 17.8177 30.5174 17.8177C28.1028 17.8177 25.3799 18.3148 22.5417 19.7109H17.4597C14.6215 18.3133 11.8986 17.817 9.48333 17.817C7.30139 17.817 5.38472 18.217 3.84375 18.6992L6.51458 7.80792C6.70833 7.01141 7.21528 6.36004 7.92986 5.98055C8.63542 5.60531 9.47708 5.60177 10.2319 5.85807L11.1465 6.16888C11.7285 6.36641 12.3576 6.04569 12.5514 5.45238L12.9028 4.37762C13.0972 3.78431 12.7826 3.14215 12.2 2.94461L11.141 2.58495C9.52847 2.03412 7.75556 2.20191 6.26667 3.03311C4.77986 3.86644 3.69097 5.30653 3.28056 6.9838L0.131944 19.8504C0.0443958 20.2092 8.71722e-05 20.5774 0 20.9471L0 25.9209C0 30.3743 3.58194 33.9844 8 33.9844H10.5778C14.7639 33.9844 18.2424 30.7318 18.5556 26.5241L18.759 23.7891H21.2417L21.4451 26.5241C21.7576 30.7318 25.2361 33.9844 29.4222 33.9844H32C36.4181 33.9844 40 30.3743 40 25.9216V20.9478C40 20.5775 39.9556 20.2094 39.8681 19.8504ZM14.1236 26.1814C13.9868 28.0159 12.4292 29.4531 10.5778 29.4531H8C6.03958 29.4531 4.44444 27.8686 4.44444 25.9209V23.263C5.70278 22.8035 7.45972 22.3483 9.48472 22.3483C11.1417 22.3483 12.7667 22.6548 14.341 23.263L14.1236 26.1814ZM35.5556 25.9216C35.5556 27.8693 33.9604 29.4531 32 29.4531H29.4222C27.5701 29.4531 26.0125 28.0159 25.8764 26.1814L25.659 23.263C27.2333 22.6548 28.859 22.3483 30.5167 22.3483C32.5389 22.3483 34.2965 22.8042 35.5549 23.2637V25.9216H35.5556Z" fill="black" />
      </g>
      <path d="M60.1563 6.875H64.7813V16.3437H64.9375C65.1667 15.4271 65.6875 14.6771 66.5 14.0937C67.3333 13.5104 68.2813 13.2187 69.3438 13.2187C71.4271 13.2187 73 13.9479 74.0625 15.4062C75.125 16.8646 75.6562 18.9896 75.6562 21.7812C75.6562 24.5729 75.125 26.7083 74.0625 28.1875C73 29.6458 71.4271 30.375 69.3438 30.375C68.8021 30.375 68.2917 30.2917 67.8125 30.125C67.3333 29.9792 66.8958 29.7708 66.5 29.5C66.125 29.2083 65.8021 28.875 65.5313 28.5C65.2604 28.1042 65.0625 27.6875 64.9375 27.25H64.7813V30H60.1563V6.875ZM67.8125 26.625C68.6875 26.625 69.4063 26.3229 69.9688 25.7187C70.5521 25.0937 70.8438 24.2604 70.8438 23.2187V20.375C70.8438 19.3333 70.5521 18.5104 69.9688 17.9062C69.4063 17.2812 68.6875 16.9687 67.8125 16.9687C66.9375 16.9687 66.2083 17.1875 65.625 17.625C65.0625 18.0417 64.7813 18.625 64.7813 19.375V24.2187C64.7813 24.9687 65.0625 25.5625 65.625 26C66.2083 26.4167 66.9375 26.625 67.8125 26.625ZM85.825 30.375C84.6166 30.375 83.5333 30.1771 82.575 29.7812C81.6375 29.3854 80.8354 28.8125 80.1687 28.0625C79.5229 27.3125 79.0229 26.4062 78.6687 25.3437C78.3145 24.2812 78.1375 23.0937 78.1375 21.7812C78.1375 20.4687 78.3145 19.2812 78.6687 18.2187C79.0229 17.1562 79.5229 16.2604 80.1687 15.5312C80.8354 14.7812 81.6375 14.2083 82.575 13.8125C83.5333 13.4167 84.6166 13.2187 85.825 13.2187C87.0333 13.2187 88.1062 13.4167 89.0437 13.8125C90.002 14.2083 90.8041 14.7812 91.45 15.5312C92.1166 16.2604 92.627 17.1562 92.9812 18.2187C93.3354 19.2812 93.5125 20.4687 93.5125 21.7812C93.5125 23.0937 93.3354 24.2812 92.9812 25.3437C92.627 26.4062 92.1166 27.3125 91.45 28.0625C90.8041 28.8125 90.002 29.3854 89.0437 29.7812C88.1062 30.1771 87.0333 30.375 85.825 30.375ZM85.825 26.7187C86.7416 26.7187 87.45 26.4375 87.95 25.875C88.45 25.3125 88.7 24.5104 88.7 23.4687V20.125C88.7 19.0833 88.45 18.2812 87.95 17.7187C87.45 17.1562 86.7416 16.875 85.825 16.875C84.9083 16.875 84.2 17.1562 83.7 17.7187C83.2 18.2812 82.95 19.0833 82.95 20.125V23.4687C82.95 24.5104 83.2 25.3125 83.7 25.875C84.2 26.4375 84.9083 26.7187 85.825 26.7187ZM103.464 30.375C102.256 30.375 101.172 30.1771 100.214 29.7812C99.2766 29.3854 98.4745 28.8125 97.8079 28.0625C97.162 27.3125 96.662 26.4062 96.3079 25.3437C95.9537 24.2812 95.7766 23.0937 95.7766 21.7812C95.7766 20.4687 95.9537 19.2812 96.3079 18.2187C96.662 17.1562 97.162 16.2604 97.8079 15.5312C98.4745 14.7812 99.2766 14.2083 100.214 13.8125C101.172 13.4167 102.256 13.2187 103.464 13.2187C104.672 13.2187 105.745 13.4167 106.683 13.8125C107.641 14.2083 108.443 14.7812 109.089 15.5312C109.756 16.2604 110.266 17.1562 110.62 18.2187C110.975 19.2812 111.152 20.4687 111.152 21.7812C111.152 23.0937 110.975 24.2812 110.62 25.3437C110.266 26.4062 109.756 27.3125 109.089 28.0625C108.443 28.8125 107.641 29.3854 106.683 29.7812C105.745 30.1771 104.672 30.375 103.464 30.375ZM103.464 26.7187C104.381 26.7187 105.089 26.4375 105.589 25.875C106.089 25.3125 106.339 24.5104 106.339 23.4687V20.125C106.339 19.0833 106.089 18.2812 105.589 17.7187C105.089 17.1562 104.381 16.875 103.464 16.875C102.547 16.875 101.839 17.1562 101.339 17.7187C100.839 18.2812 100.589 19.0833 100.589 20.125V23.4687C100.589 24.5104 100.839 25.3125 101.339 25.875C101.839 26.4375 102.547 26.7187 103.464 26.7187ZM114.447 6.875H119.072V20.5312H119.26L121.291 17.5L124.572 13.5937H129.697L124.228 19.875L130.322 30H124.822L121.135 23.0625L119.072 25.375V30H114.447V6.875ZM135.139 5.78125C136.014 5.78125 136.702 6 137.202 6.4375C137.722 6.85417 137.983 7.4375 137.983 8.1875C137.983 8.9375 137.722 9.53125 137.202 9.96875C136.702 10.3854 136.014 10.5937 135.139 10.5937C134.264 10.5937 133.566 10.3854 133.045 9.96875C132.545 9.53125 132.295 8.9375 132.295 8.1875C132.295 7.4375 132.545 6.85417 133.045 6.4375C133.566 6 134.264 5.78125 135.139 5.78125ZM137.577 27.0937C137.577 27.9479 137.722 28.5417 138.014 28.875C138.327 29.1875 138.847 29.3437 139.577 29.3437V30C137.493 29.9167 136.108 29.875 135.42 29.875C134.775 29.875 133.327 29.9167 131.077 30V29.3437C131.827 29.3437 132.347 29.1875 132.639 28.875C132.931 28.5417 133.077 27.9479 133.077 27.0937V17.25C133.077 16.2917 132.931 15.5937 132.639 15.1562C132.347 14.7187 131.827 14.5 131.077 14.5V13.8437C131.743 13.9062 132.389 13.9375 133.014 13.9375C134.868 13.9375 136.389 13.7917 137.577 13.5V27.0937ZM147.121 13.4062C147.913 13.4062 148.642 13.5104 149.309 13.7187C149.976 13.9062 150.486 14.125 150.84 14.375C151.048 14.5208 151.236 14.5937 151.403 14.5937C151.59 14.5937 151.746 14.5 151.871 14.3125C152.017 14.1042 152.111 13.8125 152.153 13.4375H152.809C152.726 14.5 152.684 16.3333 152.684 18.9375H152.028C151.84 17.5625 151.423 16.4167 150.778 15.5C150.153 14.5625 149.236 14.0937 148.028 14.0937C147.403 14.0937 146.882 14.2708 146.465 14.625C146.069 14.9792 145.871 15.4687 145.871 16.0937C145.871 16.8021 146.111 17.4167 146.59 17.9375C147.069 18.4375 147.819 19.0521 148.84 19.7812L149.746 20.4375C151.017 21.3958 151.955 22.25 152.559 23C153.163 23.75 153.465 24.6875 153.465 25.8125C153.465 26.7292 153.194 27.5417 152.653 28.25C152.132 28.9583 151.423 29.5 150.528 29.875C149.632 30.25 148.642 30.4375 147.559 30.4375C146.413 30.4375 145.434 30.2188 144.621 29.7812C143.955 29.4479 143.476 29.2292 143.184 29.125C142.976 29.0625 142.788 29.1354 142.621 29.3437C142.476 29.5312 142.361 29.8229 142.278 30.2188H141.621C141.705 29.0312 141.746 26.9479 141.746 23.9687H142.403C142.819 27.8021 144.226 29.7187 146.621 29.7187C147.226 29.7187 147.736 29.5417 148.153 29.1875C148.59 28.8125 148.809 28.25 148.809 27.5C148.809 26.9167 148.673 26.3958 148.403 25.9375C148.153 25.4792 147.83 25.0729 147.434 24.7187C147.038 24.3646 146.444 23.875 145.653 23.25C144.715 22.5 143.996 21.8958 143.496 21.4375C143.017 20.9792 142.601 20.4375 142.246 19.8125C141.913 19.1875 141.746 18.4896 141.746 17.7187C141.746 16.3854 142.267 15.3333 143.309 14.5625C144.351 13.7917 145.621 13.4062 147.121 13.4062ZM161.712 16.3125C162.65 14.375 164.348 13.4062 166.806 13.4062C168.431 13.4062 169.577 13.8125 170.244 14.625C170.598 15.0208 170.848 15.5417 170.994 16.1875C171.16 16.8125 171.244 17.6458 171.244 18.6875V27.0937C171.244 27.9479 171.389 28.5417 171.681 28.875C171.973 29.1875 172.494 29.3437 173.244 29.3437V30C171.077 29.9167 169.702 29.875 169.119 29.875C168.41 29.875 167.056 29.9167 165.056 30V29.3437C165.681 29.3437 166.119 29.1875 166.369 28.875C166.619 28.5417 166.744 27.9479 166.744 27.0937V17.375C166.744 16.5208 166.598 15.875 166.306 15.4375C166.035 15 165.535 14.7812 164.806 14.7812C163.931 14.7812 163.192 15.125 162.587 15.8125C162.004 16.4792 161.712 17.3333 161.712 18.375V27.0937C161.712 27.9479 161.837 28.5417 162.087 28.875C162.337 29.1875 162.775 29.3437 163.4 29.3437V30C161.4 29.9167 160.108 29.875 159.525 29.875C158.817 29.875 157.379 29.9167 155.212 30V29.3437C155.942 29.3437 156.452 29.1875 156.744 28.875C157.056 28.5417 157.212 27.9479 157.212 27.0937V9.3125C157.212 8.35417 157.056 7.65625 156.744 7.21875C156.452 6.78125 155.942 6.5625 155.212 6.5625V5.90625C155.879 5.96875 156.525 6 157.15 6C158.962 6 160.483 5.85417 161.712 5.5625V16.3125Z" fill="black" />
      <defs>
        <clipPath id="clip0">
          <rect width="40" height="36.25" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
}

export default Logo;
