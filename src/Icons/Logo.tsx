import { Icon, IconProps } from '@chakra-ui/icons';
import React from 'react';

export const Logo = (props: IconProps) => (
  <Icon viewBox="0 0 73 61" fill="none" {...props}>
    <path
      d="M168.049 61.1417C181.429 61.1417 193.294 52.4646 193.294 37.7054C193.294 22.9462 181.429 14.269 168.049 14.269C154.669 14.269 142.804 22.9462 142.804 37.7054C142.804 52.4646 154.669 61.1417 168.049 61.1417ZM81.6263 60.1686H91.3877L68.9195 15.1611H59.5788L38.7935 60.1686H47.461L52.0052 50.0318H76.8297L81.6263 60.1686ZM323.98 15.1611H288.553V60.1686H324.738V52.9512H296.884V41.2736H320.614V34.0561H296.884V22.3785H324.065V15.1611H323.98ZM199.69 55.7084C201.625 57.1681 207.263 61.0606 217.277 61.0606C227.375 61.0606 235.538 55.7895 235.538 47.5989C235.538 30.488 209.788 35.9213 209.788 26.5954C209.788 24.0004 212.06 21.8108 217.951 21.8108C225.103 21.8108 229.732 24.8924 231.499 26.271L234.949 19.6213C232.845 17.675 226.281 14.269 217.951 14.269C205.496 14.269 200.363 20.9999 200.363 27.6497C200.363 43.2198 226.113 38.7596 226.113 48.0044C226.113 51.897 222.074 53.5999 217.446 53.5999C210.461 53.5999 204.907 50.5994 202.467 48.8965L199.69 55.7084ZM118.4 22.2974C125.385 22.2974 129.34 25.9467 131.528 27.8929L137.334 22.3785C135.399 20.3511 129.845 14.269 118.232 14.269C104.852 14.269 92.9866 22.9462 92.9866 37.7054C92.9866 52.4646 104.768 61.1417 118.148 61.1417C128.498 61.1417 135.483 55.7895 137.755 53.8432L133.127 47.5178C129.424 50.5183 123.617 53.1134 118.316 53.1134C109.059 53.1134 102.075 46.3825 102.075 37.7054C101.991 29.0283 108.975 22.2974 118.4 22.2974ZM168.049 53.1134C158.793 53.1134 151.808 46.3825 151.808 37.7054C151.808 29.0283 158.793 22.2974 168.049 22.2974C177.306 22.2974 184.29 29.0283 184.29 37.7054C184.29 46.3825 177.306 53.1134 168.049 53.1134ZM256.492 22.3785V60.1686H264.822V22.3785H281.148V15.1611H240.587V22.3785H256.492ZM8.33093 15.1611H0V60.1686H33.1554V52.9512H8.33093V15.1611ZM63.9546 23.0273L73.4636 43.0576H55.1188L63.9546 23.0273Z"
      fill="black"
    />
    <path
      d="M486.895 50.6807C485.886 50.032 485.044 50.032 484.118 49.7076C482.856 49.3832 482.435 47.8424 482.015 47.6802C481.089 47.3558 480.247 48.7344 479.658 48.4912C479.069 48.329 478.901 46.5449 478.396 46.3827C477.47 46.0583 476.545 47.4369 475.956 47.2747C475.367 47.1126 475.114 45.3285 474.609 45.1663C473.684 44.8419 472.674 46.3016 472.169 46.0583C471.58 45.8961 471.412 44.031 470.991 43.8688C469.981 43.5444 469.055 45.0041 468.214 44.8419C467.625 44.7608 466.447 44.5175 464.764 43.5444C464.343 43.22 463.333 42.4902 463.249 42.4902C463.081 42.4091 462.66 42.328 462.744 43.1389C462.997 45.0041 466.363 46.3827 470.233 47.4369C474.104 48.4912 477.975 49.5454 480.332 50.5996C481.762 51.2484 482.435 51.9782 481.846 52.7892C481.426 53.3568 480.416 53.4379 479.406 52.9514C478.228 52.3837 478.144 51.5728 477.386 51.4106C476.461 51.2484 475.367 52.8703 474.693 52.7081C473.768 52.4648 473.684 50.5996 472.842 50.4374C471.748 50.1942 470.57 51.735 469.897 51.5728C469.224 51.4106 468.971 49.4643 468.298 49.3021C467.204 49.0588 466.026 50.6807 465.353 50.5185C464.68 50.3563 464.259 48.4101 463.67 48.1668C462.576 47.7613 461.061 49.3832 459.546 48.5723C454.581 45.3285 455.507 43.6255 451.72 42.5713C449.785 42.0036 447.26 42.6524 445.83 42.8145C442.464 43.1389 442.548 40.3006 442.548 40.3006C443.558 40.5439 444.904 41.1116 447.429 40.2195C450.121 39.2464 451.72 39.0842 455.255 40.2195C458.284 41.1926 460.051 40.3006 461.061 40.0573C461.566 39.8951 461.987 39.6519 462.912 40.2195C463.922 40.7872 464.848 41.4359 465.269 41.2737C466.026 40.9494 465.773 39.0031 467.036 38.5976C467.625 38.4354 469.224 39.9762 469.897 39.6518C470.57 39.4086 470.402 37.3812 471.664 36.9757C472.253 36.8135 473.852 38.3543 474.525 38.03C475.198 37.7867 475.03 35.7593 476.292 35.3538C476.881 35.1916 478.48 36.7324 479.154 36.4081C479.827 36.1648 479.658 34.1374 480.921 33.7319C481.51 33.5698 483.109 35.1105 483.782 34.7862C484.455 34.5429 484.371 34.0563 484.96 32.6777C485.044 32.4344 485.296 32.11 485.549 31.9479C486.306 31.2991 487.484 30.0016 486.811 28.5419C486.222 27.2444 484.876 27.2444 482.099 27.812C479.743 28.2986 464.932 31.4613 464.932 31.4613C462.66 27.3255 461.061 30.0827 457.611 29.6772C455.423 29.4339 451.889 27.3255 446.335 32.2722C443.305 31.4613 440.697 32.1911 438.761 33.2454C435.395 31.9479 429.084 28.7852 416.966 28.7852C413.516 28.7852 405.353 29.4339 392.394 32.7588C389.112 33.5697 385.999 33.4076 385.325 31.5424C384.568 29.515 387.261 27.4877 392.226 25.1359C404.68 19.3782 413.011 20.7568 429.757 12.1608C438.761 7.61946 439.35 2.18612 439.35 0.888608C439.35 -0.00343351 438.424 -0.327814 437.835 0.402038C434.806 4.45677 434.049 4.13239 433.123 3.24035C431.861 2.02393 431.019 3.9702 429.673 4.94334C428.663 5.67319 428.411 4.78115 427.653 4.29458C426.223 3.40254 425.045 5.99757 423.866 6.56523C422.436 7.21399 422.183 6.48414 421.763 5.99757C421.426 5.67319 420.837 5.67319 420.416 6.07866C417.555 8.67369 417.134 8.43041 416.293 7.53837C415.62 6.88961 415.283 6.40304 413.432 8.26822C412.338 9.32245 410.571 10.5389 410.066 9.24136C409.561 7.94384 409.056 7.21399 406.447 9.48464C404.932 10.8632 403.839 10.9443 403.334 10.2956C402.829 9.64683 402.913 7.86275 400.473 9.72792C398.285 11.4309 397.191 12.404 396.433 10.7822C395.76 9.24135 394.077 10.5389 392.899 11.6742C392.226 12.2419 391.216 13.7016 390.29 12.2419C389.449 10.8632 388.018 12.323 386.335 14.107C385.325 15.0802 384.652 14.6747 383.726 14.0259C382.633 13.215 381.37 16.0533 379.771 17.6752C379.435 17.9185 379.014 18.1618 378.004 17.513C376.742 16.7021 374.722 21.0001 374.133 22.0543C373.208 23.7573 372.114 21.5677 371.02 23.1896C368.495 26.8389 365.718 30.8125 364.961 37.8678C364.035 46.3827 367.317 53.2757 370.599 55.7897C370.599 55.7897 370.178 56.7628 369.757 57.8981C368.832 60.331 368.411 63.4126 369.673 65.6021C370.851 67.7106 373.544 71.1977 374.554 67.8728C375.059 66.2509 375.48 66.332 377.079 67.4673C379.519 69.0892 378.93 66.0887 379.435 65.1967C379.771 64.5479 380.192 64.3046 382.212 65.6021C383.39 66.332 383.726 65.3588 384.063 63.9802C385.157 59.7633 383.053 58.7091 381.034 58.3036C379.519 57.9792 378.004 58.2225 378.004 58.2225C381.286 53.4379 381.707 50.8429 378.004 48.4101C378.509 48.1668 379.014 48.329 379.435 48.4912C380.36 48.8966 381.118 49.5454 381.539 50.3563C382.043 51.2484 382.885 53.1136 381.202 56.5195C381.875 56.5195 384.652 56.6817 385.83 59.3578C387.429 59.8444 397.78 60.6554 402.324 59.9255C404.007 59.6822 404.68 58.2225 406.363 56.7628C408.13 55.1409 410.234 53.4379 412.085 54.7355C408.888 55.9519 406.7 58.3847 406.7 61.3852C406.7 63.6559 407.625 64.5479 409.308 65.9265C410.823 67.1429 411.328 69.0892 411.833 70.5489C412.506 72.4141 414.021 72.4952 414.357 70.7111C414.778 68.1972 415.62 68.6837 416.629 69.738C417.892 71.0355 418.817 70.8733 418.817 69.0081C418.817 67.224 419.406 66.332 421.426 68.4404C422.268 69.2514 423.277 69.2514 423.277 67.4673C423.277 65.2778 424.287 65.4399 425.549 66.4131C425.97 66.7375 426.307 66.9808 426.559 66.9808C427.569 66.8997 428.242 65.0345 427.485 63.5748C427.064 62.8449 426.559 61.7096 421.342 60.6554C419.659 60.331 419.911 59.1957 419.911 59.1957C432.702 59.7633 443.474 58.2225 450.626 54.0867C459.378 56.1141 472.169 56.2762 476.376 56.2762C480.584 56.1952 483.782 56.033 486.39 54.8166C488.663 53.4379 488.242 51.4917 486.895 50.6807ZM460.556 31.5424C460.809 30.8936 461.314 30.4882 461.903 30.4882C462.912 30.4882 463.333 31.5424 463.333 31.7857L460.977 32.2722C460.304 32.5155 460.304 32.11 460.556 31.5424ZM454.497 31.3802C456.096 31.3802 457.106 32.5966 457.274 33.1643C457.274 33.1643 454.834 33.6508 453.74 33.8941C453.067 34.0563 452.562 33.7319 452.478 33.2454C452.478 32.5966 453.151 31.3802 454.497 31.3802ZM386.84 16.9453C387.934 16.4588 389.112 16.0533 390.374 15.81C390.627 15.81 390.795 15.8911 390.711 16.0533C390.543 16.7832 390.29 17.5941 390.122 18.4051C390.038 18.5672 389.869 18.7294 389.701 18.5672C388.776 18.1618 387.85 17.6752 386.84 17.1886C386.588 17.1886 386.588 17.0264 386.84 16.9453ZM381.454 19.3782C382.548 18.8916 383.726 18.4861 384.989 18.2429C385.241 18.2429 385.41 18.324 385.325 18.4861C385.157 19.2971 384.905 20.0269 384.736 20.8379C384.736 21.0001 384.484 21.1623 384.316 21.0001C383.39 20.5946 382.464 20.108 381.454 19.6215C381.286 19.6215 381.286 19.4593 381.454 19.3782ZM383.811 24.7304C384.063 24.6493 384.231 24.8115 384.147 24.9737C383.979 25.7847 383.726 26.5145 383.558 27.3255C383.558 27.4877 383.306 27.6498 383.137 27.4876C382.212 27.0822 381.286 26.5956 380.276 26.109C380.024 26.0279 380.024 25.8658 380.276 25.7036C381.37 25.2981 382.548 24.9737 383.811 24.7304ZM381.539 29.1906C381.37 29.9205 381.118 30.7314 380.95 31.5424C380.865 31.7046 380.697 31.8668 380.529 31.7046C379.603 31.2991 378.677 30.8125 377.668 30.326C377.415 30.2449 377.415 30.0827 377.668 29.9205C378.762 29.4339 379.94 29.0285 381.202 28.7852C381.454 28.9474 381.623 29.0285 381.539 29.1906ZM376.658 22.4598C377.752 21.9732 378.93 21.5677 380.192 21.3245C380.445 21.2434 380.613 21.4056 380.529 21.5677C380.36 22.2976 380.108 23.1085 379.94 23.9195C379.856 24.0817 379.687 24.2439 379.519 24.0817C378.593 23.6762 377.668 23.1896 376.658 22.7031C376.49 22.7842 376.49 22.622 376.658 22.4598ZM373.039 26.5145C374.133 26.0279 375.311 25.6225 376.574 25.3792C376.826 25.2981 376.994 25.4603 376.91 25.6225C376.742 26.4334 376.49 27.1633 376.321 27.9742C376.237 28.1364 376.069 28.2986 375.9 28.1364C374.975 27.7309 374.049 27.2444 373.039 26.7578C372.787 26.8389 372.787 26.6767 373.039 26.5145ZM371.609 31.218C372.703 30.7314 373.881 30.326 375.143 30.0827C375.396 30.0016 375.564 30.1638 375.48 30.326C375.311 31.1369 375.059 31.8668 374.891 32.6777C374.806 32.8399 374.638 33.0021 374.47 32.8399C373.544 32.4344 372.619 31.9479 371.609 31.4613C371.44 31.5424 371.44 31.2991 371.609 31.218ZM372.282 36.327C372.03 36.2459 372.03 36.0837 372.282 35.9215C373.376 35.4349 374.554 35.0294 375.816 34.7862C376.069 34.7862 376.237 34.8673 376.153 35.0295C375.985 35.8404 375.732 36.5703 375.564 37.3812C375.48 37.5434 375.311 37.7056 375.143 37.5434C374.217 37.219 373.292 36.8135 372.282 36.327ZM378.509 42.0036C378.425 42.1658 378.257 42.328 378.088 42.1658C377.163 41.7603 376.237 41.2737 375.227 40.7872C374.975 40.7061 374.975 40.5439 375.227 40.3817C376.321 39.8951 377.499 39.4897 378.762 39.2464C379.014 39.1653 379.182 39.3275 379.098 39.4897C378.93 40.3817 378.677 41.1926 378.509 42.0036ZM378.257 35.0295C378.004 34.9484 378.004 34.7862 378.257 34.624C379.351 34.1374 380.529 33.7319 381.791 33.4887C382.043 33.4076 382.212 33.5698 382.128 33.7319C381.959 34.4618 381.707 35.2727 381.539 36.0837C381.539 36.2459 381.286 36.4081 381.118 36.2459C380.192 36.0026 379.266 35.516 378.257 35.0295ZM383.811 44.5986C383.726 44.7608 383.558 44.923 383.39 44.7608C382.464 44.3553 381.539 43.8688 380.529 43.3822C380.276 43.3011 380.276 43.1389 380.529 42.9767C381.623 42.4902 382.801 42.0847 384.063 41.8414C384.316 41.8414 384.484 41.9225 384.4 42.0847C384.147 43.0578 383.979 43.7877 383.811 44.5986ZM384.905 39.6518C384.82 39.814 384.652 39.9762 384.484 39.814C383.558 39.4086 382.633 38.922 381.623 38.4354C381.37 38.3543 381.37 38.1921 381.623 38.03C382.717 37.5434 383.895 37.1379 385.157 36.8946C385.41 36.8135 385.578 36.9757 385.494 37.1379C385.325 38.03 385.157 38.8409 384.905 39.6518ZM390.206 42.0847C390.038 42.8956 389.785 43.6255 389.617 44.4364C389.533 44.5986 389.365 44.7608 389.196 44.5986C388.271 44.1932 387.345 43.7066 386.335 43.22C386.083 43.1389 386.083 42.9767 386.335 42.8145C387.429 42.328 388.607 41.9225 389.869 41.6792C390.038 41.7603 390.206 41.9225 390.206 42.0847ZM390.374 39.4086C389.449 39.0031 388.523 38.5165 387.513 38.03C387.261 37.9489 387.261 37.7867 387.513 37.6245C388.607 37.1379 389.785 36.7324 391.048 36.4892C391.3 36.4892 391.468 36.5703 391.384 36.7324C391.216 37.5434 390.963 38.2732 390.795 39.0842C390.795 39.4086 390.627 39.5708 390.374 39.4086ZM394.919 45.815C394.75 46.5449 394.498 47.3558 394.329 48.1668C394.245 48.329 394.077 48.4912 393.909 48.329C392.983 47.9235 392.057 47.4369 391.048 46.9504C390.795 46.8693 390.795 46.7071 391.048 46.5449C392.142 46.0583 393.32 45.6529 394.582 45.4096C394.834 45.4907 395.003 45.6529 394.919 45.815ZM396.097 40.7061C395.928 41.4359 395.676 42.2469 395.508 43.0578C395.423 43.22 395.255 43.3822 395.087 43.22C394.161 42.8145 393.235 42.328 392.226 41.8414C391.973 41.7603 391.973 41.5981 392.226 41.4359C393.32 40.9494 394.498 40.5439 395.76 40.3006C396.012 40.3817 396.181 40.4628 396.097 40.7061ZM396.854 37.6245C396.77 37.7867 396.602 37.9489 396.433 37.7867C395.508 37.3812 394.582 36.8946 393.572 36.4081C393.32 36.327 393.32 36.1648 393.572 36.0026C394.666 35.516 395.844 35.1105 397.106 34.8673C397.359 34.7862 397.527 34.9484 397.443 35.1105C397.191 36.0837 397.022 36.8135 396.854 37.6245ZM400.473 46.4638C400.473 46.626 400.22 46.7882 400.052 46.626C399.126 46.2205 398.2 45.7339 397.191 45.2474C396.938 45.1663 396.938 45.0041 397.191 44.8419C398.285 44.3553 399.463 43.9499 400.725 43.7066C400.977 43.7066 401.146 43.7877 401.062 43.9499C400.809 44.8419 400.641 45.6529 400.473 46.4638ZM401.566 41.517C401.566 41.6792 401.314 41.8414 401.146 41.6792C400.22 41.2737 399.294 40.7872 398.285 40.3006C398.032 40.2195 398.032 40.0573 398.285 39.8951C399.379 39.4086 400.557 39.0031 401.819 38.7598C402.071 38.7598 402.24 38.8409 402.156 39.0031C401.987 39.8951 401.735 40.7061 401.566 41.517ZM402.408 36.4892C401.482 36.0837 400.557 35.5971 399.547 35.1105C399.294 35.0295 399.294 34.8673 399.547 34.7051C400.641 34.2185 401.819 33.813 403.081 33.5697C403.334 33.5697 403.502 33.6508 403.418 33.813C403.249 34.5429 402.997 35.3538 402.829 36.1648C402.745 36.4892 402.576 36.5703 402.408 36.4892ZM407.205 42.8145C407.036 43.5444 406.784 44.3553 406.616 45.1663C406.531 45.3285 406.363 45.4907 406.195 45.3285C405.269 44.923 404.343 44.4364 403.334 43.9499C403.081 43.8688 403.081 43.7066 403.334 43.5444C404.428 43.0578 405.606 42.6524 406.868 42.4091C407.036 42.5713 407.205 42.6524 407.205 42.8145ZM408.299 37.8678C408.13 38.5976 407.878 39.4086 407.709 40.2195C407.625 40.3817 407.457 40.5439 407.289 40.3817C406.363 39.9762 405.437 39.4897 404.428 39.0031C404.175 38.922 404.175 38.7598 404.428 38.5976C405.522 38.1111 406.7 37.7056 407.962 37.4623C408.214 37.5434 408.383 37.7056 408.299 37.8678ZM408.467 35.516C407.541 35.1105 406.615 34.624 405.606 34.1374C405.353 34.0563 405.353 33.8941 405.606 33.7319C406.7 33.2454 407.878 32.8399 409.14 32.5966C409.392 32.5155 409.561 32.6777 409.477 32.8399C409.308 33.5698 409.056 34.3807 408.888 35.1916C408.888 35.516 408.635 35.5971 408.467 35.516ZM413.179 42.2469C413.011 43.0578 412.758 43.7877 412.59 44.5986C412.59 44.7608 412.338 44.923 412.169 44.7608C411.244 44.3553 410.318 43.8688 409.308 43.3822C409.056 43.3011 409.056 43.1389 409.308 42.9767C410.402 42.4902 411.58 42.0847 412.843 41.8414C413.011 41.9225 413.179 42.0847 413.179 42.2469ZM414.273 37.3001C414.105 38.1111 413.852 38.8409 413.684 39.6518C413.6 39.814 413.432 39.9762 413.263 39.814C412.338 39.4086 411.412 38.922 410.402 38.4354C410.15 38.3543 410.15 38.1921 410.402 38.03C411.496 37.5434 412.674 37.1379 413.937 36.8946C414.189 36.9757 414.357 37.1379 414.273 37.3001ZM414.862 34.8673C414.862 35.0295 414.61 35.1916 414.442 35.0295C413.516 34.624 412.59 34.1374 411.58 33.6508C411.328 33.5698 411.328 33.4076 411.58 33.2454C412.674 32.7588 413.852 32.3533 415.115 32.11C415.367 32.11 415.535 32.1911 415.451 32.3533C415.199 33.2454 415.031 34.0563 414.862 34.8673ZM419.07 42.4902C418.902 43.22 418.649 44.031 418.481 44.8419C418.397 45.0041 418.228 45.1663 418.06 45.0041C417.134 44.5986 416.209 44.1121 415.199 43.6255C414.946 43.5444 414.946 43.3822 415.199 43.22C416.293 42.7334 417.471 42.328 418.733 42.0847C418.986 42.1658 419.154 42.2469 419.07 42.4902ZM420.248 37.4623C420.08 38.1921 419.827 39.0031 419.659 39.814C419.575 39.9762 419.406 40.1384 419.238 39.9762C418.312 39.5708 417.387 39.0842 416.377 38.5976C416.125 38.5165 416.125 38.3543 416.377 38.1921C417.471 37.7056 418.649 37.3001 419.911 37.0568C420.08 37.1379 420.248 37.3001 420.248 37.4623ZM421.342 32.5966C421.174 33.3265 420.921 34.1374 420.753 34.9484C420.669 35.1105 420.5 35.2727 420.332 35.1105C419.406 34.7051 418.481 34.2185 417.471 33.7319C417.218 33.6508 417.218 33.4887 417.471 33.3265C418.565 32.8399 419.743 32.4344 421.005 32.1911C421.258 32.2722 421.426 32.4344 421.342 32.5966ZM425.381 40.8683C425.381 41.0305 425.129 41.1116 424.96 41.0305C424.035 40.625 423.109 40.1384 422.099 39.6518C421.847 39.5708 421.847 39.4086 422.099 39.2464C423.193 38.7598 424.371 38.3543 425.634 38.1111C425.886 38.1111 426.054 38.1921 425.97 38.3543C425.802 39.3275 425.549 40.1384 425.381 40.8683ZM427.148 33.4887C426.98 34.2996 426.728 35.0295 426.559 35.8404C426.475 36.0026 426.307 36.1648 426.138 36.0026C425.213 35.5971 424.287 35.1105 423.277 34.624C423.025 34.5429 423.025 34.3807 423.277 34.2185C424.371 33.7319 425.549 33.3265 426.812 33.0832C426.98 33.1643 427.148 33.3265 427.148 33.4887ZM432.618 35.3538C432.45 36.1648 432.197 36.8946 432.029 37.7056C431.945 37.8678 431.777 38.03 431.608 37.8678C430.683 37.4623 429.757 36.9757 428.747 36.4892C428.495 36.4081 428.495 36.2459 428.747 36.0837C429.841 35.5971 431.019 35.1916 432.281 34.9484C432.45 35.0295 432.618 35.1916 432.618 35.3538Z"
      fill="#00552D"
    />
    <path
      d="M455.256 40.1395C451.722 39.0042 450.207 39.1664 447.43 40.1395C444.906 41.0315 443.559 40.4639 442.549 40.2206C442.549 40.2206 442.381 43.0589 445.831 42.7345C447.262 42.5723 449.702 41.9236 451.722 42.4912C455.509 43.5455 454.583 45.2485 459.548 48.4922C461.063 49.3032 462.577 47.6813 463.671 48.0868C464.26 48.3301 464.681 50.2763 465.354 50.4385C466.027 50.6007 467.206 48.8977 468.3 49.2221C468.973 49.3843 469.225 51.4117 469.898 51.4927C470.572 51.6549 471.75 50.033 472.844 50.3574C473.685 50.6007 473.769 52.4659 474.695 52.6281C475.368 52.7903 476.546 51.1684 477.388 51.3306C478.145 51.4927 478.229 52.3848 479.407 52.8714C480.501 53.3579 481.511 53.3579 481.848 52.7092C482.353 51.9793 481.764 51.1684 480.333 50.5196C477.977 49.4654 474.106 48.4111 470.235 47.3569C466.364 46.3027 462.998 44.9241 462.746 43.0589C462.661 42.248 463.082 42.329 463.25 42.4101C461.736 41.3559 461.483 40.3017 461.567 39.8151C461.399 39.8151 461.315 39.8962 461.147 39.8962C460.053 40.2206 458.286 41.1126 455.256 40.1395Z"
      fill="#E10041"
    />
  </Icon>
);