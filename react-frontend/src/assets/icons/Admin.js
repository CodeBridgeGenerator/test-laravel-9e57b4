import * as React from 'react';
const Admin = (props) => (
	<svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props} >
		<path d="M2.93638 17.9639C2.91123 18.0304 2.88439 18.1014 2.85177 18.1775C2.88842 18.2412 2.92209 18.3084 2.95587 18.3759C3.03055 18.5249 3.10578 18.6751 3.21496 18.7913C3.89531 19.4972 4.591 20.1878 5.29181 20.8733C5.64989 21.2211 6.14608 21.2416 6.55019 20.9449C6.62969 20.886 6.70918 20.8278 6.78848 20.7697C7.00514 20.6111 7.22033 20.4535 7.43004 20.285C7.55281 20.1827 7.65 20.1776 7.79323 20.2492C8.20758 20.4487 8.62704 20.638 9.05162 20.8119C9.21019 20.8784 9.27158 20.9654 9.28693 21.129C9.32273 21.4871 9.36366 21.8401 9.42504 22.193C9.512 22.7148 9.82916 22.991 10.3509 22.9962C11.3587 23.0013 12.3613 23.0013 13.369 22.9962C13.8601 22.9962 14.2437 22.633 14.3102 22.1521C14.3273 22.0311 14.3432 21.91 14.3591 21.7889C14.3909 21.5468 14.4228 21.3047 14.4637 21.0625C14.4739 20.9858 14.5507 20.8835 14.6223 20.8528C15.0929 20.6431 15.5737 20.4385 16.0546 20.2492C16.1415 20.2185 16.2848 20.2236 16.3666 20.2748C16.6069 20.424 16.8419 20.5888 17.0755 20.7525C17.1702 20.8189 17.2646 20.8851 17.359 20.95C17.804 21.2569 18.2747 21.2211 18.6583 20.8375C19.3233 20.1776 19.9883 19.5126 20.6482 18.8476C21.0267 18.4639 21.0728 17.9933 20.7761 17.5483C20.5612 17.2209 20.3413 16.8935 20.106 16.5815C20.0037 16.4434 20.0088 16.3359 20.0804 16.1876C20.1827 15.9727 20.2799 15.7553 20.3771 15.5379C20.4743 15.3205 20.5715 15.1031 20.6738 14.8883C20.7096 14.8115 20.8068 14.7399 20.8886 14.7195C21.1412 14.6641 21.3961 14.6181 21.6518 14.572C21.7741 14.5499 21.8966 14.5278 22.0191 14.5046C22.6841 14.3767 22.9143 14.0954 22.9143 13.415C22.9143 13.1757 22.914 12.9368 22.9137 12.6979C22.9127 11.9821 22.9118 11.2677 22.9194 10.5504C22.9245 9.99796 22.6944 9.69104 22.147 9.58873C21.9577 9.55548 21.7697 9.51968 21.5818 9.48387C21.3938 9.44806 21.2058 9.41225 21.0165 9.379C20.8682 9.35343 20.7965 9.28693 20.7352 9.13858C20.6413 8.89828 20.5354 8.66394 20.4297 8.42994C20.3397 8.23056 20.2497 8.03143 20.1674 7.82904C20.1367 7.75231 20.1469 7.6142 20.1929 7.5477C20.3585 7.31068 20.5351 7.08472 20.7126 6.85763C20.7764 6.77595 20.8404 6.69412 20.904 6.61158C21.2569 6.16143 21.2569 5.67546 20.863 5.27135C20.1878 4.57566 19.4972 3.89019 18.8015 3.20985C18.4537 2.87223 17.9831 2.84665 17.5841 3.11777C17.5317 3.15322 17.4793 3.18855 17.427 3.22385C17.1471 3.41265 16.8683 3.60068 16.5968 3.80323C16.4587 3.90042 16.3564 3.90554 16.2029 3.83904C15.9557 3.7312 15.7044 3.63147 15.4525 3.53151C15.2145 3.43707 14.976 3.34243 14.7399 3.24054C14.6581 3.20473 14.5711 3.10754 14.5507 3.02058C14.4752 2.71043 14.4169 2.39342 14.359 2.07798C14.3462 2.00842 14.3334 1.93894 14.3205 1.86962C14.2028 1.25577 13.9061 1 13.2872 1H10.4993C9.82916 1 9.46085 1.33762 9.39435 2.01285C9.38797 2.07114 9.38176 2.12961 9.37553 2.18817C9.3468 2.45849 9.31783 2.73103 9.27158 3.00012C9.26135 3.08708 9.17439 3.18939 9.09254 3.22519C8.89165 3.31472 8.68889 3.39959 8.48587 3.48457C8.21327 3.59867 7.94019 3.71297 7.67046 3.83904C7.53746 3.90042 7.46073 3.90554 7.35331 3.81858C7.06173 3.5935 6.77016 3.37354 6.47346 3.15869C5.98239 2.80062 5.60896 2.81596 5.17927 3.24054C4.49381 3.91577 3.81346 4.59612 3.13312 5.28158C2.76992 5.64989 2.74435 6.14608 3.05639 6.56043C3.11943 6.64496 3.18288 6.7291 3.24627 6.81317C3.40921 7.02925 3.57183 7.2449 3.7265 7.46585C3.77254 7.52723 3.793 7.63977 3.76742 7.70627C3.66385 7.98899 3.55262 8.26865 3.44128 8.54859C3.34915 8.78023 3.25694 9.01207 3.16892 9.246C3.11777 9.37389 3.07173 9.44039 2.9285 9.45573C2.74769 9.47243 2.56838 9.49971 2.38977 9.52688C2.23993 9.54968 2.09058 9.5724 1.94123 9.58873C1.29158 9.66035 1 9.97239 1 10.6272V13.4662C1.00512 14.0545 1.35808 14.4381 1.94123 14.5046C2.27885 14.5404 2.62158 14.5865 2.95408 14.6479C3.02569 14.6632 3.11777 14.7348 3.14846 14.8013C3.36331 15.3026 3.56792 15.8039 3.75719 16.3155C3.793 16.4127 3.77765 16.561 3.72139 16.6531C3.61222 16.8378 3.49233 17.0164 3.37261 17.1948C3.27355 17.3424 3.17461 17.4898 3.08196 17.6404C3.0225 17.7361 2.98224 17.8426 2.93638 17.9639ZM17.3749 16.2239C17.3546 16.2485 17.3338 16.2738 17.313 16.3001C16.5968 15.4407 15.7579 14.7911 14.7655 14.3256C14.2744 14.0954 13.8243 14.0238 13.3025 14.2335C12.5812 14.52 11.8242 14.5302 11.0671 14.346C11.048 14.3418 11.0286 14.338 11.009 14.3342C10.934 14.3196 10.8579 14.3048 10.8011 14.2642C10.3458 13.9368 9.92123 14.0954 9.47108 14.3C8.51962 14.7348 7.66535 15.2975 7.00546 16.1211C6.98448 16.1473 6.96082 16.1722 6.93515 16.1992C6.91075 16.2248 6.88454 16.2524 6.85712 16.2848C6.26373 15.5072 5.84427 14.6632 5.60896 13.7271C4.61146 9.778 7.28681 5.83916 11.3382 5.28669C15.2208 4.75981 18.6839 7.54258 19.0317 11.4456C19.1136 12.392 18.8322 13.2565 18.5049 14.1005C18.3185 14.5792 18.0669 15.0317 17.8153 15.4843C17.7147 15.6653 17.614 15.8463 17.5176 16.029C17.4803 16.0961 17.4294 16.1578 17.3749 16.2239ZM14.7502 10.2742C14.7656 8.72934 13.5635 7.51187 12.0135 7.50676C10.5044 7.50164 9.26653 8.72934 9.25118 10.2435C9.23583 11.7883 10.4328 13.0007 11.9879 13.0109C13.4867 13.0211 14.7349 11.7883 14.7502 10.2742Z"/>
</svg>

    
);
export default Admin;