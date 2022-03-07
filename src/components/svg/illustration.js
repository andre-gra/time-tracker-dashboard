import React from 'react';

function Illustration({ className, width, height }) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 186 161" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M176.37 72.85C186.24 55.85 177.89 41.01 158.22 40.63C147.12 24.54 136.45 14.52 130.35 14.51C130.322 14.5035 130.293 14.5033 130.265 14.5096C130.237 14.5159 130.211 14.5283 130.189 14.5461C130.166 14.5639 130.148 14.5866 130.136 14.6123C130.123 14.6381 130.117 14.6664 130.117 14.695C130.117 14.7236 130.123 14.7519 130.136 14.7777C130.148 14.8035 130.166 14.8261 130.189 14.8439C130.211 14.8617 130.237 14.8742 130.265 14.8804C130.293 14.8867 130.322 14.8865 130.35 14.88H130.86C134.66 16.6 138.35 21.51 132.16 26.79C130.482 28.1136 128.583 29.1293 126.55 29.79C126.531 29.7501 126.498 29.7183 126.457 29.7001C126.417 29.6819 126.371 29.6784 126.328 29.6903C126.286 29.7022 126.248 29.7287 126.223 29.7651C126.198 29.8016 126.186 29.8458 126.19 29.89C131.69 57.39 159.97 103.35 176.55 111.25L124.5 101.17C124.14 101.02 123.76 100.84 123.35 100.62C123.325 100.609 123.298 100.602 123.271 100.602C123.244 100.601 123.217 100.606 123.191 100.617C123.166 100.627 123.143 100.642 123.124 100.662C123.105 100.681 123.09 100.705 123.08 100.73C122.89 101.23 122.7 101.73 122.49 102.29C122.478 102.327 122.478 102.367 122.489 102.404C122.501 102.441 122.523 102.473 122.554 102.497C122.584 102.521 122.621 102.535 122.66 102.538C122.698 102.54 122.737 102.53 122.77 102.51L124.48 101.51L178.63 112.06C179.947 112.499 181.384 112.402 182.63 111.79C188 108.82 185.49 93.16 176.37 72.85ZM156.71 91.34C146.8 77.9025 138.575 63.3001 132.22 47.86C141.38 42.99 151.14 40.6 159.73 41.11C177.55 42.18 185.07 55.5 176.73 71.31C172.4 79.56 164.85 86.49 156.71 91.34V91.34Z" fill="#21222D" />
      <path d="M127.74 147.44L114.17 123C114.145 122.956 114.103 122.924 114.055 122.911C114.006 122.898 113.954 122.905 113.91 122.93C113.866 122.955 113.834 122.997 113.821 123.046C113.808 123.094 113.815 123.146 113.84 123.19L127.41 147.58C127.93 148.512 128.083 149.604 127.841 150.643C127.599 151.682 126.978 152.594 126.1 153.2C122.563 155.657 118.791 157.757 114.84 159.47C113.862 159.896 112.76 159.942 111.75 159.598C110.74 159.254 109.894 158.545 109.38 157.61L89.18 121.31L107.01 111.31C107.044 111.295 107.074 111.271 107.094 111.24C107.115 111.209 107.126 111.172 107.126 111.135C107.126 111.098 107.115 111.061 107.094 111.03C107.074 110.999 107.044 110.975 107.01 110.96C108.83 104.3 111.31 95.09 111.61 93.86C110.96 90.58 109.48 83.09 108.82 79.8L107.14 79.63L106.52 81.25L105 81L99.12 93.09C98.1253 95.1354 96.378 96.7168 94.2439 97.5034C92.1098 98.2899 89.7542 98.2206 87.67 97.31L72.36 89.93C72.3772 89.894 72.3826 89.8534 72.3755 89.8142C72.3684 89.7749 72.349 89.7388 72.3203 89.7112C72.2915 89.6835 72.2547 89.6656 72.2152 89.66C72.1756 89.6544 72.1353 89.6614 72.1 89.68L62.33 95.18C52.07 100.96 51.33 111.6 55.03 119.18C45.023 118.593 35.492 114.71 27.9247 108.136C20.3573 101.561 15.1797 92.6667 13.2 82.84C15.863 82.5865 18.3444 81.3782 20.1861 79.438C22.0278 77.4979 23.1054 74.957 23.22 72.2844C23.3345 69.6117 22.4783 66.9879 20.8094 64.8973C19.1405 62.8067 16.7716 61.3904 14.14 60.91C16.0075 54.6114 19.2166 48.7919 23.5467 43.8512C27.8768 38.9105 33.2252 34.9659 39.2244 32.2884C45.2236 29.6109 51.7314 28.2639 58.3006 28.3402C64.8697 28.4164 71.3445 29.914 77.28 32.73C77.3027 32.7452 77.3285 32.7553 77.3555 32.7597C77.3825 32.764 77.4101 32.7624 77.4364 32.7551C77.4628 32.7478 77.4872 32.7349 77.5081 32.7173C77.529 32.6996 77.5459 32.6777 77.5575 32.653C77.5692 32.6282 77.5753 32.6013 77.5756 32.5739C77.5759 32.5466 77.5702 32.5195 77.5591 32.4945C77.5479 32.4696 77.5315 32.4473 77.5109 32.4293C77.4904 32.4112 77.4662 32.3978 77.44 32.39C71.4522 29.5489 64.9199 28.0388 58.2926 27.9637C51.6653 27.8885 45.1005 29.2501 39.0498 31.9548C32.999 34.6594 27.6061 38.6428 23.2421 43.631C18.8781 48.6191 15.6466 54.4935 13.77 60.85C12.229 60.6086 10.6544 60.6952 9.14923 61.1042C7.64404 61.5133 6.24217 62.2355 5.03534 63.2237C3.82851 64.2119 2.84392 65.4437 2.14598 66.8386C1.44805 68.2336 1.05249 69.7601 0.985201 71.3185C0.917909 72.8768 1.1804 74.4318 1.75549 75.8817C2.33058 77.3315 3.20532 78.6437 4.32247 79.7322C5.43962 80.8207 6.77402 81.6611 8.23835 82.1984C9.70268 82.7357 11.2639 82.9577 12.82 82.85C14.8299 92.7969 20.0885 101.794 27.769 108.426C35.4495 115.059 45.1165 118.951 55.25 119.49C58.01 124.84 63.51 129.29 70.45 129.29C73.0579 129.267 75.6313 128.691 78 127.6L88.83 121.53L109.03 157.84C109.594 158.852 110.515 159.618 111.614 159.988C112.712 160.358 113.908 160.305 114.97 159.84C118.948 158.125 122.744 156.014 126.3 153.54C127.256 152.884 127.932 151.896 128.199 150.768C128.465 149.64 128.301 148.454 127.74 147.44V147.44ZM14 61.28C16.5509 61.7348 18.85 63.0998 20.4707 65.1215C22.0913 67.1432 22.9232 69.6843 22.8121 72.273C22.7009 74.8617 21.6541 77.3221 19.8662 79.1974C18.0782 81.0727 15.6705 82.2356 13.09 82.47C11.7304 75.4328 12.0421 68.1747 14 61.28V61.28ZM77.84 127.28C57.48 136.36 43.22 106.37 62.51 95.51L64.37 94.46C63.46 103.29 69.96 119.77 81.15 125.46L77.84 127.28Z" fill="#21222D" />
      <path d="M95.44 26.36C95.17 26.49 94.87 26.63 94.55 26.76C83.23 31.47 73.27 34 53.75 37.81C54.17 37.71 54.65 38.02 55.13 38.63C57.74 41.93 58.83 50.86 56.79 51.32C69.44 49 83.24 45.78 95.06 40.56C97.12 43.62 101.12 47.23 101.57 50.99C106.81 52.18 113.14 51.99 116.39 49.86C117.89 39.94 117.39 35.36 116.15 32.57C120.38 31.9658 124.51 30.7988 128.43 29.1C129.777 28.5336 131.03 27.7684 132.15 26.83C139.46 20.6 133.01 14.88 128.85 14.32C122.05 13.41 114.15 12.47 114.15 12.47C115.68 12.68 116.5 15.93 115.97 19.71C115.44 23.49 113.78 26.4 112.25 26.19C111.25 26.05 110.57 24.65 110.35 22.65C109.4 22.85 108.43 23.03 107.45 23.2C107.45 23.2 112.21 30.56 107.87 32.2C104.09 33.65 95.44 26.36 95.44 26.36Z" fill="#EEB7A5" />
      <path d="M98.68 54C96.631 49.7449 93.932 45.8347 90.68 42.41C90.6455 42.3729 90.6272 42.3236 90.6291 42.2729C90.631 42.2223 90.6529 42.1745 90.69 42.14C90.7271 42.1055 90.7765 42.0872 90.8271 42.0891C90.8777 42.091 90.9255 42.1129 90.96 42.15C94.231 45.6203 96.9433 49.5774 99 53.88C98.9967 53.9155 98.9834 53.9493 98.9618 53.9776C98.9401 54.006 98.9109 54.0276 98.8776 54.0401C98.8442 54.0526 98.808 54.0555 98.773 54.0484C98.7381 54.0413 98.7059 54.0246 98.68 54V54Z" fill="#0063D2" />
      <path d="M117.05 42.21L121 31.51C121.005 31.4825 121.015 31.4563 121.031 31.4333C121.047 31.4104 121.068 31.3913 121.092 31.3773C121.117 31.3633 121.144 31.3549 121.171 31.3525C121.199 31.3502 121.227 31.354 121.253 31.3638C121.28 31.3735 121.303 31.3889 121.323 31.4088C121.343 31.4288 121.357 31.4528 121.367 31.4792C121.376 31.5056 121.379 31.5337 121.376 31.5615C121.373 31.5893 121.364 31.6161 121.35 31.64L117.42 42.34C117.403 42.3891 117.367 42.4293 117.32 42.4518C117.273 42.4743 117.219 42.4772 117.17 42.46C117.121 42.4428 117.081 42.4068 117.058 42.3599C117.036 42.313 117.033 42.2591 117.05 42.21V42.21Z" fill="#0063D2" />
      <path d="M54.36 47.15C52.7982 47.0219 51.2803 46.5699 49.9029 45.8227C48.5255 45.0754 47.3189 44.0494 46.36 42.81C46.3418 42.7906 46.3278 42.7677 46.319 42.7426C46.3102 42.7175 46.3067 42.6909 46.3088 42.6644C46.311 42.6379 46.3186 42.6121 46.3313 42.5888C46.3441 42.5654 46.3615 42.545 46.3826 42.5288C46.4037 42.5127 46.428 42.5011 46.4538 42.4949C46.4797 42.4887 46.5065 42.488 46.5327 42.4928C46.5588 42.4976 46.5837 42.5078 46.6056 42.5229C46.6275 42.5379 46.6461 42.5574 46.66 42.58C47.5916 43.7838 48.7653 44.7787 50.1055 45.5004C51.4456 46.2221 52.9223 46.6547 54.44 46.77C54.4904 46.7806 54.5345 46.8108 54.5626 46.8539C54.5908 46.8971 54.6006 46.9496 54.59 47C54.5794 47.0504 54.5492 47.0945 54.5061 47.1226C54.4629 47.1508 54.4104 47.1606 54.36 47.15V47.15Z" fill="#000001" />
      <path d="M41.17 124.74C40.719 125.02 40.3372 125.399 40.0532 125.847C39.7692 126.296 39.5904 126.803 39.53 127.33L38.73 127.11C38.3534 127 37.9586 126.966 37.5687 127.01C37.1788 127.055 36.8019 127.177 36.46 127.37C35.9501 127.662 35.5372 128.097 35.2725 128.622C35.0079 129.147 34.9031 129.738 34.9713 130.321C35.0394 130.905 35.2775 131.456 35.6559 131.905C36.0344 132.355 36.5365 132.683 37.1 132.85L43.47 134.65C43.4936 134.658 43.5186 134.66 43.5432 134.658C43.5679 134.655 43.5918 134.647 43.6134 134.635C43.635 134.623 43.6538 134.607 43.6687 134.587C43.6836 134.567 43.6943 134.544 43.7 134.52L45.5 128.16C45.6538 127.593 45.6377 126.993 45.4535 126.435C45.2693 125.877 44.9253 125.385 44.4641 125.021C44.0028 124.656 43.4448 124.435 42.8592 124.386C42.2735 124.336 41.6862 124.459 41.17 124.74V124.74ZM35.64 131.25C35.3882 130.799 35.2761 130.283 35.3179 129.767C35.3598 129.252 35.5536 128.761 35.875 128.356C36.1963 127.951 36.6307 127.651 37.1229 127.493C37.6152 127.335 38.1432 127.327 38.64 127.47L39.64 127.75C39.6876 127.76 39.7372 127.752 39.7795 127.728C39.8219 127.704 39.854 127.666 39.87 127.62L40.15 126.62C40.3847 126.013 40.8375 125.516 41.4197 125.226C42.0019 124.936 42.6715 124.873 43.2972 125.051C43.923 125.229 44.4599 125.634 44.8026 126.187C45.1453 126.74 45.2692 127.4 45.15 128.04L43.4 134.23L37.22 132.48C36.8884 132.39 36.578 132.234 36.3068 132.023C36.0356 131.812 35.809 131.549 35.64 131.25Z" fill="#21222D" />
      <path d="M165.46 29C165.15 28.598 164.727 28.297 164.246 28.135C163.764 27.973 163.245 27.9573 162.755 28.0898C162.265 28.2224 161.825 28.4973 161.491 28.8798C161.156 29.2623 160.943 29.7353 160.877 30.239C160.812 30.7427 160.897 31.2545 161.122 31.7098C161.347 32.1651 161.702 32.5435 162.142 32.7972C162.582 33.0509 163.088 33.1686 163.595 33.1352C164.101 33.1019 164.587 32.9191 164.99 32.61C165.53 32.1927 165.882 31.5786 165.97 30.902C166.058 30.2255 165.875 29.5416 165.46 29V29ZM164.76 32.31C164.415 32.5763 164 32.7343 163.565 32.7641C163.131 32.7939 162.697 32.6942 162.32 32.4774C161.942 32.2607 161.637 31.9368 161.444 31.5466C161.25 31.1565 161.177 30.7178 161.233 30.286C161.289 29.8541 161.472 29.4487 161.759 29.1209C162.045 28.7932 162.423 28.5578 162.843 28.4448C163.264 28.3317 163.708 28.346 164.121 28.4857C164.533 28.6255 164.895 28.8845 165.16 29.23C165.508 29.6905 165.661 30.2694 165.587 30.8419C165.512 31.4143 165.215 31.9344 164.76 32.29V32.31Z" fill="#21222D" />
      <path d="M98.85 57C98.7996 57 98.7513 56.98 98.7157 56.9444C98.68 56.9087 98.66 56.8604 98.66 56.81C98.66 56.7596 98.68 56.7113 98.7157 56.6757C98.7513 56.64 98.7996 56.62 98.85 56.62C102.92 56.62 104.49 54.19 104.51 54.16C104.539 54.1237 104.581 54.0994 104.626 54.0916C104.672 54.0839 104.719 54.0932 104.759 54.1178C104.798 54.1425 104.827 54.1808 104.84 54.2254C104.854 54.27 104.85 54.3179 104.83 54.36C104.76 54.48 103.14 57 98.85 57Z" fill="#000001" />
      <path d="M43.59 14.37L39.17 16.37L37.17 11.94C37.1488 11.8936 37.11 11.8575 37.0622 11.8397C37.0144 11.8219 36.9614 11.8238 36.915 11.845C36.8686 11.8662 36.8325 11.905 36.8147 11.9528C36.7969 12.0006 36.7988 12.0536 36.82 12.1L38.82 16.53L34.4 18.53C34.3738 18.5378 34.3496 18.5512 34.3291 18.5693C34.3085 18.5873 34.2921 18.6096 34.2809 18.6345C34.2698 18.6595 34.2641 18.6866 34.2644 18.7139C34.2647 18.7412 34.2708 18.7682 34.2825 18.7929C34.2941 18.8177 34.311 18.8396 34.3319 18.8572C34.3528 18.8749 34.3772 18.8878 34.4036 18.8951C34.4299 18.9024 34.4575 18.904 34.4845 18.8996C34.5115 18.8953 34.5373 18.8852 34.56 18.87L38.98 16.87L40.98 21.29C40.9858 21.3177 40.9977 21.3438 41.0148 21.3663C41.0319 21.3889 41.0539 21.4073 41.0791 21.4203C41.1043 21.4332 41.132 21.4404 41.1604 21.4412C41.1887 21.4421 41.2168 21.4366 41.2427 21.4251C41.2686 21.4137 41.2916 21.3966 41.3101 21.3752C41.3286 21.3537 41.342 21.3283 41.3494 21.301C41.3568 21.2737 41.358 21.245 41.3529 21.2172C41.3478 21.1893 41.3366 21.1629 41.32 21.14L39.32 16.71L43.75 14.71C43.7878 14.6847 43.8153 14.6467 43.8275 14.6029C43.8396 14.559 43.8357 14.5123 43.8163 14.4711C43.797 14.43 43.7635 14.3971 43.7219 14.3786C43.6804 14.36 43.6336 14.357 43.59 14.37Z" fill="#21222D" />
      <path d="M156.49 129.93C156.482 129.455 156.286 129.003 155.945 128.673C155.603 128.343 155.145 128.162 154.67 128.17C154.195 128.178 153.743 128.374 153.413 128.715C153.083 129.057 152.902 129.515 152.91 129.99L148.13 129.39C148.081 128.932 147.859 128.509 147.508 128.21C147.157 127.911 146.705 127.758 146.245 127.783C145.785 127.807 145.351 128.007 145.034 128.341C144.717 128.676 144.54 129.119 144.54 129.58C144.54 130.041 144.717 130.484 145.034 130.819C145.351 131.153 145.785 131.353 146.245 131.377C146.705 131.402 147.157 131.249 147.508 130.95C147.859 130.651 148.081 130.228 148.13 129.77L152.91 130.37C152.976 130.784 153.189 131.16 153.51 131.43L151.34 135.17C150.903 135.024 150.427 135.052 150.009 135.247C149.592 135.442 149.265 135.789 149.096 136.218C148.927 136.647 148.929 137.124 149.102 137.551C149.274 137.978 149.604 138.323 150.023 138.515C150.442 138.706 150.918 138.73 151.354 138.581C151.79 138.431 152.152 138.121 152.366 137.713C152.579 137.304 152.628 136.83 152.503 136.387C152.377 135.943 152.086 135.565 151.69 135.33L153.82 131.65C154.105 131.809 154.428 131.887 154.754 131.877C155.08 131.866 155.397 131.767 155.671 131.591C155.945 131.414 156.166 131.166 156.31 130.874C156.455 130.581 156.517 130.255 156.49 129.93ZM152.22 136.77C152.244 137.079 152.167 137.387 152 137.647C151.833 137.908 151.585 138.107 151.295 138.214C151.005 138.32 150.687 138.33 150.391 138.239C150.095 138.149 149.836 137.965 149.655 137.714C149.473 137.464 149.378 137.161 149.385 136.851C149.391 136.542 149.498 136.243 149.69 136C149.882 135.758 150.148 135.584 150.448 135.506C150.748 135.429 151.064 135.451 151.35 135.57C151.591 135.671 151.8 135.836 151.954 136.047C152.108 136.259 152.2 136.509 152.22 136.77ZM147.44 130.6C147.289 130.779 147.097 130.918 146.88 131.004C146.663 131.091 146.427 131.123 146.195 131.097C145.963 131.07 145.74 130.987 145.548 130.854C145.355 130.722 145.198 130.543 145.091 130.336C144.984 130.128 144.93 129.897 144.934 129.663C144.938 129.429 144.999 129.2 145.113 128.995C145.226 128.791 145.389 128.618 145.585 128.491C145.782 128.365 146.007 128.289 146.24 128.27C146.519 128.248 146.799 128.308 147.044 128.444C147.289 128.581 147.488 128.786 147.616 129.035C147.744 129.284 147.796 129.566 147.765 129.844C147.733 130.123 147.62 130.386 147.44 130.6ZM154.82 131.49C154.54 131.513 154.26 131.452 154.014 131.316C153.769 131.179 153.569 130.973 153.441 130.723C153.313 130.473 153.262 130.19 153.294 129.911C153.326 129.632 153.441 129.369 153.623 129.155C153.804 128.941 154.046 128.786 154.316 128.709C154.586 128.632 154.873 128.637 155.14 128.723C155.407 128.809 155.643 128.973 155.818 129.193C155.992 129.413 156.097 129.68 156.12 129.96C156.136 130.146 156.116 130.334 156.059 130.512C156.002 130.69 155.911 130.855 155.79 130.997C155.669 131.139 155.521 131.256 155.354 131.341C155.188 131.425 155.006 131.476 154.82 131.49Z" fill="#21222D" />
      <path d="M150.53 143.65C148.338 143.65 146.196 143 144.373 141.782C142.551 140.564 141.131 138.833 140.292 136.808C139.454 134.783 139.235 132.554 139.664 130.405C140.092 128.255 141.148 126.281 142.699 124.732C144.249 123.183 146.225 122.128 148.375 121.702C150.525 121.275 152.753 121.496 154.777 122.336C156.801 123.176 158.531 124.598 159.748 126.422C160.964 128.245 161.612 130.388 161.61 132.58C161.607 135.517 160.439 138.333 158.361 140.408C156.284 142.484 153.467 143.65 150.53 143.65V143.65ZM150.53 121.88C148.414 121.88 146.345 122.508 144.585 123.683C142.826 124.859 141.454 126.53 140.644 128.485C139.835 130.44 139.623 132.592 140.036 134.667C140.448 136.743 141.468 138.65 142.964 140.146C144.46 141.642 146.367 142.662 148.443 143.074C150.518 143.487 152.67 143.275 154.625 142.466C156.58 141.656 158.251 140.284 159.427 138.525C160.602 136.765 161.23 134.696 161.23 132.58C161.227 129.743 160.099 127.023 158.093 125.017C156.087 123.011 153.367 121.883 150.53 121.88Z" fill="#21222D" />
      <path d="M135.44 19.48C134.59 16.6 131.37 14.48 128.88 14.12C122.66 13.29 115.42 12.42 114.32 12.29C114.11 12.2349 113.89 12.2349 113.68 12.29C113.84 10.43 114.19 8.71 113.97 7.9C113.86 7.5 113.52 7.41 113.18 7.8C112.43 8.65 112.18 10.2 112.83 7.38C113.03 6.44 113.43 4.24 112.67 4.02C112.26 3.91 111.84 4.44 111.47 5.18C111.57 3.18 111.26 2.81 110.96 2.75C110.35 2.64 109.72 4.21 109.5 4.8C109.5 3.98 109.5 3.21 109.18 3.13C108.86 3.05 108.68 3.13 108.02 5.13C107.36 7.24363 106.934 9.42337 106.75 11.63C106.547 11.1487 106.263 10.7057 105.91 10.32C105.69 10.07 105.5 10.12 105.4 10.17C104.52 10.66 105.05 16.43 105.85 19.38C106.23 20.78 107.72 21.91 109.85 22.59C108.58 22.85 107.26 23.09 105.92 23.3C103.64 23.66 102.43 20.98 102.16 20.3C102.618 20.1843 103.047 19.9742 103.419 19.6832C103.791 19.3922 104.098 19.0266 104.32 18.61C105.05 17 104.07 14.61 101.41 11.61C101.47 9.08747 100.673 6.61911 99.1487 4.60832C97.6244 2.59753 95.4631 1.16322 93.0181 0.539774C90.5731 -0.0836698 87.9889 0.140629 85.6879 1.17602C83.3869 2.2114 81.5051 3.99665 80.35 6.24C79.5864 5.54077 78.6415 5.07039 77.6233 4.88259C76.6051 4.6948 75.5546 4.79716 74.5918 5.17798C73.629 5.55881 72.7927 6.20274 72.1785 7.03623C71.5642 7.86973 71.1968 8.85917 71.1181 9.89156C71.0394 10.9239 71.2527 11.9577 71.7335 12.8746C72.2144 13.7916 72.9434 14.5548 73.8374 15.0771C74.7314 15.5995 75.7542 15.8598 76.7891 15.8285C77.824 15.7972 78.8293 15.4754 79.69 14.9C80.2601 16.5729 81.2194 18.0865 82.4888 19.3161C83.7583 20.5458 85.3016 21.4563 86.9918 21.9729C88.682 22.4894 90.4707 22.5971 92.2107 22.2872C93.9507 21.9772 95.5922 21.2584 97 20.19C98.63 23.32 98.12 25.06 94.47 26.58C82.69 31.48 72.41 33.93 53.88 37.58C53.08 37.74 52.78 38.46 52.62 39.32L52.26 39.44C51.7105 39.6503 51.1104 39.6902 50.5379 39.5547C49.9654 39.4191 49.4469 39.1143 49.05 38.68C45.3 34.61 44.52 35.16 44.26 35.34C42.87 36.34 46.17 39.88 46.15 41.53C46.15 41.84 44.85 42.16 43.84 42.18L38.19 42.29C37.19 42.29 35.45 42.41 35.41 43.13C35.37 43.85 36.79 44.22 38.13 44.39L41.92 44.87L36.56 45.87C35.56 46.04 33.87 46.42 33.94 47.14C34.01 47.86 35.22 47.96 36.46 47.96C37.02 47.96 37.76 47.9 42.28 47.81C41.19 48.14 39.76 48.52 38.1 48.89C36.44 49.26 35.5 49.75 35.57 50.26C35.68 51.03 37.74 50.99 38.51 50.95C39.28 50.91 41.45 50.75 42.97 50.57C42.28 50.83 41.52 51.1 40.71 51.32C38.98 51.8 38.16 52.32 38.25 52.8C38.46 53.89 42.57 53.18 43.66 52.99C49.06 52.05 50.76 51.99 55.33 50.76C55.7 51.21 56.24 51.68 56.81 51.57C72.47 48.36 85.07 45.15 95 40.79C97 43.79 100.9 47.32 101.39 50.92C94.8566 57.3796 90.1771 65.4746 87.84 74.36C87.8257 74.4013 87.827 74.4465 87.8435 74.487C87.8601 74.5275 87.8908 74.5605 87.93 74.58L89.41 75.38C89.33 75.91 88.99 77.99 88.71 80.38C86.78 80 72.87 77 67 75.58C63.5723 74.8508 60.3422 73.391 57.53 71.3C57.4784 71.2809 57.4216 71.2809 57.37 71.3C48.3326 72.7914 39.7194 76.2012 32.11 81.3C32.079 81.3197 32.0548 81.3484 32.0406 81.3822C32.0263 81.416 32.0228 81.4534 32.0304 81.4893C32.038 81.5252 32.0564 81.5579 32.0832 81.5831C32.1099 81.6082 32.1437 81.6246 32.18 81.63C48.18 85.57 52.75 81.03 60.24 84.3C60.58 84.45 57.75 83.09 87.31 97.3C89.455 98.3337 91.9222 98.4752 94.1713 97.6936C96.4205 96.9121 98.2682 95.2711 99.31 93.13L105.13 81.13L106.44 81.41C106.464 81.4175 106.489 81.4198 106.513 81.4165C106.538 81.4133 106.562 81.4047 106.583 81.3914C106.604 81.378 106.621 81.3603 106.635 81.3393C106.648 81.3183 106.657 81.2947 106.66 81.27L107.23 79.8C107.69 79.84 108.15 79.87 108.61 79.89L111.38 93.83C110.9 95.74 105.77 114.72 104.96 117.53C103.79 121.53 101.1 126.19 100.72 127.07C100.68 127.144 100.659 127.226 100.66 127.31C102.307 136.191 105.51 144.712 110.12 152.48V152.48C110.136 152.512 110.16 152.538 110.19 152.557C110.22 152.575 110.255 152.585 110.29 152.585C110.325 152.585 110.36 152.575 110.39 152.557C110.42 152.538 110.444 152.512 110.46 152.48C115.15 138.93 110.81 132.48 113.06 125.68C113.17 125.44 123.83 101.5 125.47 94.61C125.894 88.8742 125.558 83.1076 124.47 77.46C125.15 77.22 125.82 76.96 126.47 76.69C126.514 76.6702 126.549 76.6344 126.567 76.5898C126.586 76.5452 126.587 76.4952 126.57 76.45C121.69 62.89 116.93 50.65 116.57 49.79C118.03 40.11 117.57 35.51 116.41 32.67C120.568 32.0594 124.627 30.8993 128.48 29.22C132.53 27.53 136.67 23.68 135.44 19.48ZM111.23 6.75C111.96 4.75 112.49 4.37 112.56 4.39C112.63 4.41 112.92 5.19 112.46 7.31C112.04 9.2 111.63 10.89 111.39 12.31C110.997 11.9143 110.549 11.5774 110.06 11.31C110.42 9.56 111 7.28 111.23 6.75ZM110.68 3.29C110.88 3.06 110.94 3.1 111.01 3.35C111.161 4.30404 111.161 5.27595 111.01 6.23C110.479 7.82643 110.041 9.45253 109.7 11.1C109.341 10.9265 108.966 10.7891 108.58 10.69C108.82 8.94 109.56 4.66 110.68 3.29ZM106.21 19.29C105.29 15.86 105.11 10.83 105.56 10.52C106.113 11.0949 106.497 11.8111 106.67 12.59C106.594 13.3748 106.594 14.1652 106.67 14.95C106.671 14.9771 106.679 15.0035 106.691 15.0276C106.704 15.0516 106.721 15.0727 106.742 15.0895C106.764 15.1062 106.788 15.1182 106.815 15.1246C106.841 15.1311 106.868 15.1318 106.895 15.1267C106.922 15.1217 106.947 15.111 106.969 15.0954C106.991 15.0798 107.01 15.0597 107.024 15.0363C107.037 15.0129 107.046 14.9869 107.049 14.9599C107.052 14.933 107.049 14.9057 107.04 14.88C106.925 11.6221 107.368 8.36844 108.35 5.26C108.513 4.68608 108.749 4.13507 109.05 3.62C109.138 4.69865 109.088 5.78414 108.9 6.85C108.58 8.22 108.35 9.47 108.19 10.66L107.86 10.6C107.811 10.5972 107.763 10.6132 107.726 10.6449C107.689 10.6766 107.665 10.7214 107.66 10.77C107.656 10.7944 107.657 10.8194 107.662 10.8435C107.668 10.8676 107.679 10.8902 107.694 10.9099C107.709 10.9296 107.728 10.946 107.75 10.9581C107.771 10.9702 107.795 10.9776 107.82 10.98C108.616 11.0878 109.378 11.3672 110.055 11.7989C110.732 12.2305 111.307 12.8042 111.74 13.48C111.86 13.69 112.2 13.48 112.07 13.3C111.953 13.0864 111.819 12.8824 111.67 12.69C111.76 12.14 111.9 11.48 112.05 10.8C112.415 9.90117 112.829 9.02316 113.29 8.17C113.51 7.84 113.62 7.94 113.66 8.31C113.664 9.06416 113.6 9.81714 113.47 10.56C113.181 13.023 113.027 15.5001 113.01 17.98C113.01 18.0304 113.03 18.0787 113.066 18.1143C113.101 18.15 113.15 18.17 113.2 18.17C113.25 18.17 113.299 18.15 113.334 18.1143C113.37 18.0787 113.39 18.0304 113.39 17.98C113.39 17.36 113.39 15.87 113.52 14.25C114.171 14.5482 114.874 14.718 115.59 14.75C116.152 17.4703 115.941 20.2937 114.98 22.9C110.52 23 106.81 21.44 106.21 19.24V19.29ZM98.11 21.95C97.766 20.729 97.2036 19.5804 96.45 18.56C96.305 18.4142 96.1144 18.3224 95.91 18.3C92.58 17.94 92.72 15.04 94.57 15.65C95.22 15.87 95.57 15.88 95.81 15.65C95.8884 15.5552 95.9392 15.4407 95.9568 15.319C95.9745 15.1973 95.9583 15.0731 95.91 14.96C94.91 12.49 95.76 6.76 100.07 10.74C101.75 12.3 104.99 16.18 103.98 18.42C103.15 20.24 99.98 20.26 99.92 20.26C99.86 20.26 99.58 20.47 99.81 20.6L102.9 22.29C103.243 22.7776 103.714 23.1609 104.261 23.3974C104.808 23.6339 105.41 23.7144 106 23.63L107.38 23.4C109.15 26.27 110.96 30.83 107.83 32.03C104.53 33.28 97.17 27.49 95.83 26.38C97.74 25.33 98.67 24 98.11 21.9V21.95ZM95.42 26.62C96.32 27.37 102.8 32.62 106.75 32.62C107.399 32.6568 108.043 32.4817 108.584 32.121C109.125 31.7602 109.534 31.2335 109.75 30.62C110.56 28.16 108.4 24.36 107.8 23.36C108.55 23.23 109.3 23.09 110.02 22.94C110.59 23.94 110.5 24.94 111.33 25.86C112.56 29.4 112.74 33.39 109.19 34.57C105.48 35.8 100 33.48 92.91 27.67C93.82 27.27 94.83 26.86 95.42 26.57V26.62ZM36.82 47.5C34.96 47.57 34.34 47.18 34.32 47.04C34.3 46.9 34.67 46.49 36.63 46.17L43.92 44.88C44.1096 45.6106 44.3708 46.3207 44.7 47C44.5 47.07 44.1 47.21 43.59 47.37C43.23 47.35 39.71 47.41 36.82 47.5ZM38.5 50.5C36.61 50.61 35.97 50.27 35.95 50.14C35.93 50.01 36.28 49.62 38.2 49.14C40.458 48.6437 42.6852 48.016 44.87 47.26C45.1951 47.894 45.5731 48.4995 46 49.07C45.72 49.23 45.09 49.57 44.21 49.97C43.51 50.1 41.14 50.36 38.5 50.5ZM49.25 51.64C44.95 52.26 43.72 52.64 41.31 52.87C39.31 53.1 38.66 52.8 38.63 52.66C38.6 52.52 38.94 52.14 40.82 51.66C42.7143 51.1231 44.5399 50.3681 46.26 49.41C46.7658 50.0306 47.3032 50.6247 47.87 51.19C47.9045 51.2245 47.9512 51.2438 48 51.2438C48.0488 51.2438 48.0955 51.2245 48.13 51.19C48.1645 51.1555 48.1839 51.1088 48.1839 51.06C48.1839 51.0112 48.1645 50.9645 48.13 50.93C46 48.66 44.57 46.74 44 43.53C43.9883 43.4816 43.9597 43.4389 43.9194 43.4096C43.8791 43.3802 43.8297 43.3662 43.78 43.37C43.7312 43.3797 43.6881 43.4082 43.66 43.4493C43.632 43.4905 43.6212 43.541 43.63 43.59C43.63 43.91 43.75 44.22 43.82 44.52L43.17 44.63L38.17 44C36.32 43.76 35.77 43.28 35.78 43.14C35.79 43 36.21 42.66 38.18 42.65L43.84 42.54C43.84 42.54 46.52 42.44 46.52 41.54C46.52 39.91 43.52 36.33 44.52 35.66C44.88 35.4 46.21 36.13 48.81 38.95C49.2585 39.4385 49.843 39.7815 50.4882 39.9348C51.1334 40.088 51.8097 40.0446 52.43 39.81L55.09 38.87C56.81 41.16 58.09 46.68 57.6 49.65C54.8709 50.5232 52.0796 51.1885 49.25 51.64V51.64ZM99 93C98.5095 94.0183 97.8229 94.9297 96.9795 95.6821C96.1362 96.4345 95.1526 97.0131 94.0852 97.3847C93.0178 97.7563 91.8876 97.9136 90.7593 97.8476C89.631 97.7816 88.5268 97.4935 87.51 97C58.07 82.8 60.83 84.13 60.51 84C53.93 81.12 49.64 84 38.87 82.55C45.3984 78.5633 52.4082 75.4247 59.73 73.21C62.0013 74.4536 64.4298 75.3853 66.95 75.98C72.87 77.43 86.95 80.42 88.71 80.8C88.4875 82.5987 88.3607 84.4079 88.33 86.22C88.33 86.2704 88.35 86.3187 88.3857 86.3543C88.4213 86.39 88.4696 86.41 88.52 86.41C88.5704 86.41 88.6187 86.39 88.6544 86.3543C88.69 86.3187 88.71 86.2704 88.71 86.22C88.8459 82.6599 89.2133 79.1124 89.81 75.6C94.5559 78.0753 99.5959 79.9401 104.81 81.15L99 93ZM125.12 94.6C123.51 101.43 112.86 125.34 112.74 125.6C110.74 131.6 113.64 136.84 111.74 146.6C111.04 145.2 108.74 140.6 102.57 124.48C103.7 122.325 104.634 120.073 105.36 117.75C106.08 115.26 111.78 94.08 111.8 93.97C111.82 93.86 111.8 93.97 109.04 79.97C114.165 80.1332 119.276 79.3397 124.11 77.63C125.186 83.215 125.516 88.9182 125.09 94.59L125.12 94.6ZM126.18 76.46C120.239 78.907 113.808 79.9342 107.4 79.46L113.62 63.23C113.634 63.2061 113.643 63.1792 113.646 63.1514C113.649 63.1236 113.646 63.0956 113.637 63.0692C113.627 63.0428 113.613 63.0188 113.593 62.9988C113.573 62.9789 113.55 62.9635 113.523 62.9537C113.497 62.944 113.469 62.9402 113.441 62.9425C113.414 62.9449 113.387 62.9533 113.362 62.9673C113.338 62.9812 113.317 63.0004 113.301 63.0233C113.285 63.0463 113.275 63.0724 113.27 63.1L106.39 81.04C100.038 79.7233 93.9237 77.4437 88.26 74.28C90.5936 65.5147 95.2226 57.5303 101.67 51.15C105.95 52.15 112.67 52.39 116.33 50.15C117 51.85 121.5 63.53 126.15 76.45L126.18 76.46ZM128.39 28.92C124.532 30.5938 120.471 31.7505 116.31 32.36C115.725 31.1374 114.986 29.9947 114.11 28.96C114.078 28.9258 114.034 28.9047 113.987 28.901C113.94 28.8972 113.894 28.911 113.856 28.9396C113.819 28.9682 113.793 29.0097 113.785 29.0559C113.776 29.1022 113.785 29.1499 113.81 29.19L114.03 29.48C116.2 32.28 118.44 35.18 116.25 49.75C112.86 51.96 106.41 51.86 101.77 50.83C101.41 48.27 99.44 45.77 97.62 43.53L98.87 39C98.87 38.89 98.87 38.57 98.62 38.72C88.33 43.78 74.87 47.81 57.49 51C59.12 48.5 57.01 39.42 54.56 37.82C71.62 34.48 81.65 32.1 92.47 27.82C98.53 32.82 103.32 35.27 107.01 35.27C111.26 35.27 113.73 32.27 111.83 26.27C112.22 26.45 111.29 26.39 125.09 26.39C125.14 26.39 125.189 26.37 125.224 26.3343C125.26 26.2987 125.28 26.2504 125.28 26.2C125.28 26.1496 125.26 26.1013 125.224 26.0656C125.189 26.03 125.14 26.01 125.09 26.01H113.45C114.67 25.11 115.75 22.72 116.16 19.75C116.294 18.7895 116.341 17.8189 116.3 16.85C116.24 15.62 115.97 13.71 115.1 12.78C117.41 13.06 123.49 13.78 128.83 14.52C131.2 14.83 134.27 16.87 135.08 19.61C136.25 23.58 132.16 27.28 128.36 28.91L128.39 28.92Z" fill="#000001" />
    </svg>

  );
}

export default Illustration;