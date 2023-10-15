import React from "react";
import { IconSvgProps } from "@/types";

export const Adjust: React.FC<IconSvgProps> = ({size = 30, height, width, ...props }) => {
  return (
    <svg
      id="settings2"
      viewBox="0 0 24 24"
      height={size || height}
		width={size || width}
		{...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="9"
        cy="8"
        r="2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="15"
        cy="16"
        r="2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11 8L20 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 8H7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M17 16H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 16H13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};


export const Pulse: React.FC<IconSvgProps> = ({size = 30, height, width, ...props }) => {
  return (
    <svg id="plus" width={"24" || width || size} height={"24"|| height || size } {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M11 18.9999C11 19.5522 11.4477 19.9999 12 19.9999C12.5523 19.9999 13 19.5522 13 18.9999V12.9999H19C19.5523 12.9999 20 12.5522 20 11.9999C20 11.4476 19.5523 10.9999 19 10.9999H13V4.99988C13 4.44759 12.5523 3.99988 12 3.99988C11.4477 3.99988 11 4.44759 11 4.99988V10.9999H5C4.44772 10.9999 4 11.4476 4 11.9999C4 12.5522 4.44772 12.9999 5 12.9999H11V18.9999Z" fill="currentColor"/>
</svg>
  )
}

export const Wallet: React.FC<IconSvgProps> = ({size = 30, height, width, ...props }) => {
  return (
    <svg width={"24" || width || size} height={"24"|| height || size } {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd"
          d="M6 2C3.79086 2 2 3.79086 2 6V8V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10C22 7.79086 20.2091 6 18 6C18 3.79086 16.2091 2 14 2H6ZM16 6H4C4 4.89543 4.89543 4 6 4H14C15.1046 4 16 4.89543 16 6ZM4 18V8H18C19.1046 8 20 8.89543 20 10V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18ZM14 13C13.4477 13 13 13.4477 13 14C13 14.5523 13.4477 15 14 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H14Z"
          fill="#5599FF"/>
</svg>

  )
}

export const Logo: React.FC<IconSvgProps> = ({size = 30, height, width, ...props }) => {

  return (
    <svg id="logo"  width={ width || size} height={ height || size } {...props} viewBox="0 0 150 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 13H66V37H72V7H66C62.7 7 60 9.7 60 13Z" fill="currentColor"/>
    <path d="M78 37H84V25C84 21.7 81.3 19 78 19V37Z" fill="currentColor"/>
    <path d="M90 19V37H96V25H102V31C102 34.3 104.7 37 108 37V25C108 21.7 105.3 19 102 19H90Z" fill="currentColor"/>
    <path d="M144 19H138V13C138 9.7 135.3 7 132 7V31H120V25H126V19H120C116.7 19 114 21.7 114 25V31C114 34.3 116.7 37 120 37H138V25H144V31C144 34.3 146.7 37 150 37V25C150 21.7 147.3 19 144 19Z"
          fill="currentColor"/>
    <path d="M78 13H84C84 9.7 81.3 7 78 7V13Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd"
          d="M69.3544 43V46.8781H68.8047L66.6451 44.1911V46.8781H66V43H66.5497L68.7093 45.6981V43H69.3544ZM81.5594 46.8781H79.2315V43H81.5033V43.6371H79.9215V44.6011H81.335V45.2382H79.9215V46.241H81.5594V46.8781ZM91.4365 43.6371H92.7099V46.8781H93.3998V43.6371H94.6732V43H91.4365V43.6371ZM109.357 43H110.019L108.897 46.8781H108.252L107.304 44.0748L106.373 46.8781H105.723L104.55 43H105.324L106.115 45.7645L106.99 43H107.675L108.572 45.7701L109.357 43ZM120.469 43.5762C120.087 43.9603 119.897 44.4349 119.897 45C119.897 45.5946 120.089 46.0766 120.474 46.446C120.859 46.8153 121.347 47 121.938 47C122.525 47 123.013 46.8116 123.402 46.4349C123.791 46.0582 123.986 45.5799 123.986 45C123.986 44.409 123.791 43.9271 123.402 43.554C123.017 43.1847 122.529 43 121.938 43C121.347 43 120.858 43.1921 120.469 43.5762ZM121.002 45.9751C120.751 45.7165 120.626 45.3915 120.626 45C120.626 44.6011 120.749 44.2742 120.996 44.0194C121.247 43.7645 121.561 43.6371 121.938 43.6371C122.309 43.6371 122.621 43.7645 122.875 44.0194C123.129 44.2779 123.257 44.6048 123.257 45C123.257 45.3915 123.137 45.7165 122.898 45.9751C122.662 46.2336 122.342 46.3629 121.938 46.3629C121.564 46.3629 121.252 46.2336 121.002 45.9751ZM134.553 45.4377V46.8892H133.863V43.0111C134.057 43.0111 134.269 43.0092 134.497 43.0055C134.725 43.0018 134.912 43 135.058 43C136.007 43 136.482 43.3989 136.482 44.1967C136.482 44.4922 136.406 44.7359 136.252 44.928C136.099 45.1127 135.923 45.2382 135.725 45.3047L136.954 46.8892H136.118L135.035 45.4377H134.553ZM135.024 43.6371C135.005 43.6371 134.975 43.639 134.934 43.6427C134.893 43.6427 134.835 43.6445 134.76 43.6482H134.553V44.8006H135.001C135.222 44.8006 135.402 44.747 135.54 44.6399C135.682 44.5328 135.753 44.3869 135.753 44.2022C135.753 43.8255 135.51 43.6371 135.024 43.6371ZM146.831 46.8781H147.521V44.8781L149.125 46.8781H150L148.284 44.8061L149.899 43H149.069L147.521 44.8393V43H146.831V46.8781Z"
          fill="#2F7AEA"/>
    <path d="M13.9266 30.5525L15.3266 20.0088L3.16406 11.565L14.2766 15.3275L16.9016 11.3025L26.4828 5.35254L47.6141 16.99L48.7078 34.7525L39.3016 47.8338L31.8641 48.9713L35.7141 41.9275V35.1463L32.9141 29.8525L30.0703 27.9713L25.6953 32.4775V37.2463L22.2828 40.44L17.9516 40.965L16.0266 42.0588L12.8766 41.0525L11.5641 36.3275L13.9266 33.0025V30.5525Z"
          fill="white"/>
    <path d="M33.3508 11.4777C31.0321 10.9964 28.4946 11.1277 28.4946 11.1277C28.4946 11.1277 27.6633 14.9777 22.5008 15.9839C22.5446 15.9839 29.3258 18.3027 33.3508 11.4777Z"
          fill="#94A6C3"/>
    <path d="M35.4508 46.3902C38.2508 44.2027 40.3508 41.184 41.3133 37.7715C41.357 37.6402 41.7508 37.4215 42.0133 37.2465C42.4508 36.984 42.8883 36.7652 42.9758 36.4152C43.1508 35.409 43.2383 34.359 43.2383 33.309C43.2383 32.9152 42.8445 32.5215 42.4508 32.1277C42.1445 31.8652 41.8383 31.559 41.8383 31.3402C41.4008 27.359 39.5633 23.6402 36.632 20.9277L36.3258 21.234C39.1695 23.9027 41.007 27.534 41.4008 31.384C41.4445 31.734 41.7945 32.084 42.1445 32.434C42.4508 32.6965 42.8008 33.0902 42.8008 33.2652C42.8008 34.2715 42.7133 35.2777 42.5383 36.284C42.4945 36.459 42.1008 36.634 41.7945 36.809C41.357 37.0277 40.9633 37.2465 40.8758 37.5965C39.8258 41.3152 37.4195 44.5527 34.2258 46.6527C34.7945 45.4277 36.5883 41.4465 37.5508 39.434L37.3758 32.959L31.8195 27.5777L28.6695 28.0152L25.2133 33.6152C25.2133 33.6152 26.832 35.6715 24.557 38.0777C22.3258 40.4402 20.5758 40.9652 20.5758 40.9652L18.957 40.0902C19.4383 39.4777 20.4008 38.559 21.1445 37.9465C22.4133 36.8965 23.682 36.809 23.682 35.6715C23.7258 33.309 21.1883 33.9652 21.1883 33.9652L20.2695 34.8402L19.8758 38.0777L17.9508 40.484L17.732 40.4402L14.582 39.7402C14.582 39.7402 16.507 38.734 16.8133 37.5965C17.1195 36.5027 16.2008 32.8715 16.157 32.6527C16.2008 32.6965 17.0758 33.4402 17.4695 34.6652C18.1695 32.7402 19.0883 30.9027 19.3508 30.7277C19.6133 30.5527 23.157 28.6715 23.157 28.6715L21.9758 31.7777L22.8508 31.2965L24.9508 26.134C24.9508 26.134 27.007 25.1277 28.5383 25.1277C31.2945 25.084 35.3633 21.7152 33.5258 15.6777C34.0508 15.8965 43.1508 20.4465 44.7258 29.3715C45.907 36.2402 42.0133 42.6715 35.4508 46.3902Z"
          fill="#94A6C3"/>
    <path d="M25.039 12.4405C26.0453 11.2592 25.6515 9.50923 25.6515 9.50923L22.7203 13.8405C22.6765 13.8405 23.7703 13.8842 25.039 12.4405Z"
          fill="#1B314F"/>
    <path d="M15.1953 36.1093L15.5453 34.3593C15.5453 34.3593 14.1015 36.8968 13.9703 37.2468C13.839 37.6406 14.0578 38.3406 14.6265 38.2968C15.1953 38.2531 15.8953 37.4218 15.8953 36.8093C15.8953 36.0218 15.1953 36.1093 15.1953 36.1093Z"
          fill="#1B314F"/>
    <path d="M41.1827 8.28428C41.1827 8.28428 43.3703 8.37178 45.6452 8.63428C40.5265 4.60928 35.6702 3.42803 31.7327 3.42803C26.3077 3.42803 22.6328 5.65928 22.414 5.79053L24.1203 3.07803C24.1203 3.07803 17.2952 2.42178 14.889 9.64053C14.2765 8.10928 13.7077 5.87803 13.7077 5.87803C13.7077 5.87803 10.164 8.98428 11.8265 14.1468C7.75775 12.6593 1.939 10.603 1.72025 10.5593C1.414 10.5155 1.3265 10.6468 1.3265 10.6468C1.3265 10.6468 1.239 10.778 1.5015 10.9968C1.98275 11.3905 11.1702 18.1718 13.1827 19.4843C12.7452 21.0593 12.7452 21.803 13.1827 22.5468C13.7952 23.553 13.839 24.078 13.7515 24.8218C13.664 25.5655 12.8765 31.9968 12.7015 32.7843C12.5265 33.5718 10.689 36.3718 10.7765 37.203C10.864 38.0343 12.0015 41.578 13.0078 41.9718C13.7515 42.2343 15.589 42.803 16.814 42.803C17.2515 42.803 17.6453 42.7155 17.8203 42.5405C18.564 41.8843 18.7827 41.753 19.3078 41.753C19.3515 41.753 19.3953 41.753 19.439 41.753C19.6578 41.753 19.9203 41.7968 20.2265 41.7968C20.9265 41.7968 21.8453 41.6655 22.5015 41.053C23.464 40.0905 25.1265 38.778 25.6515 38.1655C26.3078 37.3343 26.6578 36.1968 26.4827 35.0593C26.3515 34.0093 26.9202 33.0905 27.5765 32.1718C28.4078 31.078 29.939 29.1093 29.939 29.1093C32.9578 31.3843 34.839 34.8405 34.839 38.6905C34.839 45.5155 28.889 51.028 21.539 51.028C20.4015 51.028 19.3078 50.8968 18.214 50.6343C21.5828 51.8155 24.4265 52.2093 26.7453 52.2093C31.689 52.2093 34.314 50.4155 34.314 50.4155C34.314 50.4155 33.3952 51.5968 31.9077 52.953C31.9515 52.953 31.9515 52.953 31.9515 52.953C40.1327 51.8155 44.114 45.078 44.114 45.078C44.114 45.078 43.8077 47.2655 43.414 48.753C54.3077 40.5718 52.4702 30.3343 52.4265 29.9843C52.514 30.1155 53.6077 31.428 54.1765 32.128C55.9265 14.103 41.1827 8.28428 41.1827 8.28428ZM24.4265 37.0718C24.2515 37.2905 23.5078 37.9468 22.9827 38.428C22.4578 38.9093 21.889 39.3905 21.4515 39.828C21.2765 40.003 20.9265 40.0905 20.4015 40.0905C20.2265 40.0905 20.0515 40.0905 19.9202 40.0905C19.8328 40.0905 19.7453 40.0905 19.6578 40.0905C19.5703 40.0905 19.5265 40.0905 19.4827 40.0905C19.3515 40.0905 19.2202 40.0905 19.089 40.0905C19.7453 39.2155 21.6702 37.203 22.3265 36.7655C23.114 36.2405 23.5077 35.7155 23.0265 34.7968C22.5452 33.878 21.2765 34.0968 21.2765 34.0968C21.2765 34.0968 22.0203 33.7905 22.6765 33.7905C21.8453 33.5718 20.7953 33.7905 20.314 34.2718C19.789 34.753 19.8765 36.4593 19.6578 37.553C19.439 38.6905 18.6952 39.2593 17.5578 40.3093C16.9452 40.878 16.5078 41.053 16.1578 41.053C15.414 40.9218 14.539 40.703 13.9265 40.4843C13.489 39.9155 12.8327 38.0343 12.6577 37.2468C12.789 36.8093 13.314 35.8905 13.5765 35.3655C14.1015 34.3593 14.4078 33.7905 14.4952 33.2655C14.6702 32.5218 15.239 27.928 15.4578 26.003C16.0265 26.7468 16.814 27.9718 16.639 28.7593C17.9078 26.9655 16.989 25.2155 16.5515 24.5155C16.1578 23.8155 15.6328 22.4155 16.0703 20.928C16.5078 19.4405 18.0828 15.328 18.0828 15.328C18.0828 15.328 18.6078 16.2468 19.3515 16.0718C20.0953 15.8968 26.089 6.88428 26.089 6.88428C26.089 6.88428 27.7078 10.428 26.0015 13.0093C24.2515 15.5905 22.5452 16.0718 22.5452 16.0718C22.5452 16.0718 24.9515 16.5093 27.1828 14.8905C28.1015 17.0343 28.9765 19.2655 29.0203 19.5718C28.889 19.878 27.139 24.078 26.964 24.3405C26.8765 24.428 26.264 24.603 25.8265 24.6905C25.0828 24.9093 24.6453 25.0405 24.4703 25.1718C24.164 25.4343 22.764 29.2843 22.1077 31.1655C21.3203 31.3843 20.5327 31.8218 19.964 32.6968C20.2703 32.478 21.2327 32.3468 21.9328 32.2593C22.5452 32.2155 24.4265 33.2218 24.9078 35.103C24.9078 35.1468 24.9078 35.1468 24.9078 35.1905C24.9953 35.8905 24.7765 36.5468 24.4265 37.0718ZM20.314 37.5968C20.7078 37.028 20.664 36.0655 20.7078 35.7593C20.7515 35.453 20.839 34.8843 21.189 34.7968C21.539 34.7093 22.3703 34.8405 22.3703 35.453C22.3703 36.0218 21.7578 36.153 21.3203 36.5468C21.014 36.853 20.4015 37.5093 20.314 37.5968ZM37.7702 29.2405C38.2077 27.0093 38.2515 25.0843 38.1202 23.5093C39.8265 25.7843 40.8765 28.5405 41.1827 31.3843C41.2265 31.7343 41.5765 32.0843 41.9265 32.4343C42.2327 32.6968 42.5827 33.0468 42.5827 33.2655C42.5827 34.2718 42.4952 35.278 42.3202 36.2843C42.2765 36.4155 41.8827 36.6343 41.5765 36.8093C41.139 37.028 40.7453 37.2468 40.6577 37.5968C39.6953 40.9655 37.639 43.9405 34.8827 46.0405C38.9515 41.7968 40.9202 34.7968 37.7702 29.2405ZM35.014 46.4343C37.8577 44.2468 40.0452 41.1843 41.0077 37.728C41.0515 37.5968 41.4453 37.378 41.7077 37.203C42.1452 36.9843 42.5827 36.7218 42.6702 36.3718C42.8452 35.3655 42.9327 34.3155 42.9327 33.2655C42.9327 32.8718 42.539 32.478 42.1452 32.0843C41.9265 31.8218 41.5765 31.5155 41.5765 31.2968C41.2265 28.103 39.9577 25.0843 37.989 22.5905C37.114 17.3405 33.614 15.7218 33.5265 15.678C33.614 15.8093 35.889 19.0905 34.314 22.9405C32.6952 26.8343 28.539 26.2218 28.189 26.2655C27.839 26.2655 26.4827 28.0155 24.7765 31.253C24.5578 31.1655 23.639 30.9468 22.589 31.1218C23.3765 28.9343 24.5578 25.828 24.7765 25.5655C24.864 25.478 25.5203 25.303 25.9578 25.1718C26.789 24.953 27.1828 24.8218 27.314 24.6468C27.4015 24.5155 27.839 23.5093 28.2765 22.4593C28.6702 22.4593 29.6765 22.3718 29.764 22.328C29.8515 22.2405 30.6827 20.0968 30.6827 19.8343C30.6827 19.6155 28.9765 15.3718 28.3203 13.753C28.6265 13.403 28.9328 12.9655 29.239 12.4843C38.2077 13.4468 45.2077 21.0593 45.2077 30.2905C45.2077 37.378 41.0515 43.5468 35.014 46.4343Z"
          fill="#1B314F"/>
    <path d="M23.3765 22.8093C24.2078 21.8468 23.7703 20.053 22.239 19.7468C22.6328 18.828 23.2015 16.9905 23.2015 16.9905C23.2015 16.9905 18.739 23.9905 18.3453 24.1218C17.9515 24.253 17.5578 22.7218 17.5578 22.7218C16.7265 25.9155 18.9578 26.353 19.2203 25.3468C20.4453 25.0405 22.5453 23.728 23.3765 22.8093Z"
          fill="#1B314F"/>
    <path d="M19.5703 24.5158L21.8453 20.6221C21.8453 20.6221 23.1578 21.2783 22.5016 22.3283C21.6703 23.5533 19.5703 24.5158 19.5703 24.5158Z"
          fill="#FFD923"/>
    <path d="M47.7006 42.5406C47.0443 43.4156 46.3006 44.3343 45.4256 45.2093C51.0693 34.3593 45.6881 24.4281 45.4693 24.0343C45.8631 24.4281 46.2568 24.8656 46.6068 25.2593C50.9381 30.0718 51.4631 37.2906 47.7006 42.5406Z"
          fill="#D82122"/>
    <path d="M52.9506 28.5843C50.9818 23.2906 48.1818 18.7843 42.0131 14.7156C36.0631 10.7781 29.6756 11.0843 29.3256 11.1281C29.2818 11.1281 29.2381 11.1281 29.2381 11.1281C29.4568 11.0406 29.6756 10.9968 29.8943 10.9531C31.2506 10.5156 33.0006 10.1656 34.7506 9.94683C39.3881 9.29058 44.0693 10.8656 47.2631 14.2343C47.3068 14.2781 47.3068 14.2781 47.3506 14.3218C50.9818 18.1718 52.8631 22.9843 52.9506 28.5843Z"
          fill="#D82122"/>
    <path d="M40.6131 6.92819C34.0943 5.70319 29.8943 6.31569 26.8756 7.45319C26.7881 7.10319 26.4818 6.40319 26.2193 5.83444C25.3006 6.92819 24.3381 8.24069 23.7256 9.07194C22.0631 10.2094 21.3631 11.3032 21.3631 11.3032C22.3256 8.02194 25.1256 5.57194 28.5381 4.95944C29.5006 4.78444 30.5506 4.69694 31.6881 4.69694C34.7068 4.74069 37.7256 5.48444 40.6131 6.92819Z"
          fill="#D82122"/>
    <path d="M16.5069 15.3282C11.3881 15.1532 13.0944 9.20319 13.1819 8.85319C13.1819 8.89694 13.5319 13.5344 16.5069 15.3282Z"
          fill="#D82122"/>
    <path d="M21.5381 4.60938C17.6006 6.97187 18.3881 12.6156 18.3881 12.6156C14.6256 6.88437 21.2319 4.74063 21.5381 4.60938Z"
          fill="#D82122"/>
    <path d="M15.0648 16.9029C15.3273 17.1217 15.5898 17.5154 15.2836 18.0842C15.1086 18.3904 14.8461 18.3467 14.4523 18.1717C13.9273 17.9092 10.7773 16.0717 7.93359 14.1904C11.1711 15.3279 14.4523 16.5529 14.9773 16.8154C14.9773 16.8154 15.0211 16.8592 15.0648 16.9029Z"
          fill="white"/>
</svg>

  )

}