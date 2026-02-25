import "./App.css";
import { Card } from "./components/Card";
import { HoverCard } from "./components/hoverCard";
import { Header } from "./components/Header";
import StackedCards from "./components/StackedCard";

function App() {
  const buttonP1 = [
    { text: "Smart Contracts" },
    { text: "Decentralized Apps (dApps)" },
    { text: "Web3 Integeration" },
    { text: "DeFi Solutions" },
  ];
  const buttonP2 = [
    { text: "iOS Native" },
    { text: "Android Native" },
    { text: "React Native" },
    { text: "Flutter" },
    { text: "App Store Optimization" },
  ];
  const buttonP3 = [
    { text: "MVP Development" },
    { text: "Market Validation" },
    { text: "Agile Development" },
    { text: "Investor Ready Demos" },
  ];
  const buttonP4 = [
    { text: "Machine Learning" },
    { text: "AI Agents" },
    { text: "Computer Vision" },
    { text: "AI Chatbots" },
  ];
  const buttonP5 = [
    { text: "Threat Detection" },
    { text: "Data Protection" },
    { text: "Network Security" },
    { text: "Risk Management" },
  ];
  const buttonP6 = [
    { text: "React/Next.js" },
    { text: "SaaS Platform" },
    { text: "Progressive Web Apps" },
    { text: "E-commmerce Solutions" },
  ];

  const dPath1 =
    "M42.9854 19.2776V27.7146C42.9854 27.9202 42.9037 28.1174 42.7584 28.2628C42.613 28.4082 42.4158 28.4898 42.2102 28.4898C41.7435 28.4898 41.4188 28.1263 41.4188 27.7146V19.2776C41.4188 19.072 41.5004 18.8748 41.6458 18.7294C41.7912 18.584 41.9884 18.5023 42.194 18.5023C42.6606 18.5023 42.9854 18.8659 42.9854 19.2776ZM4.21042 19.2776V27.7146C4.21042 27.9202 4.12874 28.1174 3.98336 28.2628C3.83798 28.4082 3.64081 28.4898 3.43521 28.4898C2.96854 28.4898 2.64375 28.1263 2.64375 27.7146V19.2776C2.64375 19.1758 2.6638 19.0749 2.70276 18.9809C2.74172 18.8868 2.79882 18.8014 2.8708 18.7294C2.94279 18.6574 3.02825 18.6003 3.1223 18.5614C3.21635 18.5224 3.31715 18.5023 3.41896 18.5023C3.88563 18.5023 4.21042 18.8659 4.21042 19.2776ZM17.7449 6.94318L9.21836 11.3787C8.8125 11.5898 8.31254 11.4055 8.14246 10.9808C7.97845 10.5712 8.15959 10.1641 8.49691 9.98859L17.0234 5.55306C17.4293 5.34195 17.9292 5.52623 18.0993 5.95099C18.2633 6.36048 18.0822 6.76772 17.7449 6.94318ZM18.1052 41.0265C17.9172 41.4904 17.4116 41.6411 17.0233 41.4391L8.49682 37.0036C8.32587 36.9147 8.19421 36.7653 8.12756 36.5846C8.0609 36.4038 8.06405 36.2047 8.13639 36.0261C8.32439 35.5622 8.82993 35.4115 9.21827 35.6135L17.7448 40.049C17.9157 40.1378 18.0474 40.2873 18.1141 40.468C18.1807 40.6488 18.1776 40.8479 18.1052 41.0265ZM37.4927 10.9661C37.3047 11.43 36.7992 11.5807 36.4108 11.3787L27.8843 6.94318C27.7134 6.85432 27.5817 6.7049 27.5151 6.52414C27.4484 6.34337 27.4516 6.14425 27.5239 5.96568C27.7119 5.50175 28.2174 5.35106 28.6058 5.55306L37.1323 9.98859C37.3032 10.0774 37.4349 10.2268 37.5016 10.4076C37.5682 10.5884 37.5651 10.7875 37.4927 10.9661ZM37.1324 37.0036L28.6059 41.4391C28.2 41.6502 27.7 41.466 27.53 41.0412C27.3659 40.6316 27.5471 40.2245 27.8844 40.049L36.4109 35.6135C36.8168 35.4024 37.3167 35.5867 37.4868 36.0114C37.6508 36.4209 37.4697 36.8281 37.1324 37.0036ZM22.8224 8.41693C23.0281 8.41693 23.2253 8.49863 23.3708 8.64407C23.5162 8.7895 23.5979 8.98675 23.5979 9.19243V9.88568C23.5979 10.9224 22.0312 10.9221 22.0312 9.88568V9.19243C22.0312 8.78382 22.3529 8.41693 22.8224 8.41693ZM23.5979 37.1065V37.7998C23.5979 38.0054 23.5162 38.2027 23.3708 38.3481C23.2253 38.4936 23.0281 38.5753 22.8224 38.5753C22.3537 38.5753 22.0312 38.2091 22.0312 37.7998V37.1065C22.0312 36.0698 23.5979 36.0701 23.5979 37.1065ZM10.2117 17.9237L8.49662 17.0254C8.32632 16.9363 8.19524 16.7871 8.12888 16.6068C8.06251 16.4264 8.06561 16.2278 8.13756 16.0496C8.32585 15.5842 8.83287 15.433 9.22189 15.6367L10.9383 16.5352C11.859 17.0167 11.1273 18.4048 10.2117 17.9237ZM37.4916 16.0496C37.5636 16.2278 37.5667 16.4264 37.5003 16.6068C37.434 16.7871 37.3029 16.9363 37.1325 17.0254L35.4174 17.9237C34.5064 18.4024 33.764 17.0199 34.6909 16.5352L36.4073 15.6367C36.7957 15.4334 37.303 15.5835 37.4916 16.0496ZM10.9383 30.457L9.22189 31.3555C8.81534 31.5683 8.31381 31.3834 8.14344 30.9572C7.98031 30.5493 8.16008 30.1431 8.49662 29.9668L10.2117 29.0685C11.1293 28.5874 11.8578 29.9761 10.9383 30.457ZM37.4916 30.9426C37.3033 31.408 36.7963 31.5591 36.4073 31.3555L34.6909 30.457C33.7735 29.9773 34.4984 28.5867 35.4174 29.0685L37.1325 29.9668C37.3029 30.0559 37.434 30.2051 37.5003 30.3854C37.5667 30.5658 37.5636 30.7644 37.4916 30.9426ZM23.8917 40.1419H21.7375C20.4417 40.1419 19.3875 41.1962 19.3875 42.4919V44.6461C19.3875 45.9418 20.4417 46.9961 21.7375 46.9961H23.8917C25.1875 46.9961 26.2417 45.9418 26.2417 44.6461V42.4919C26.2417 41.1962 25.1875 40.1419 23.8917 40.1419ZM23.8917 -0.00390625H21.7375C20.4417 -0.00390625 19.3875 1.05036 19.3875 2.34609V4.50026C19.3875 5.79599 20.4417 6.85026 21.7375 6.85026H23.8917C25.1875 6.85026 26.2417 5.79599 26.2417 4.50026V2.34609C26.2417 1.05036 25.1875 -0.00390625 23.8917 -0.00390625ZM4.50417 30.0565H2.35C1.05417 30.0565 0 31.1108 0 32.4065V34.5607C0 35.8564 1.05417 36.9107 2.35 36.9107H4.50417C5.8 36.9107 6.85417 35.8564 6.85417 34.5607V32.4065C6.85417 31.1108 5.8 30.0565 4.50417 30.0565ZM43.2792 10.0815H41.125C39.8292 10.0815 38.775 11.1358 38.775 12.4315V14.5857C38.775 15.8814 39.8292 16.9357 41.125 16.9357H43.2792C44.575 16.9357 45.6292 15.8814 45.6292 14.5857V12.4315C45.6292 11.1358 44.575 10.0815 43.2792 10.0815ZM43.2792 30.0565H41.125C39.8292 30.0565 38.775 31.1108 38.775 32.4065V34.5607C38.775 35.8564 39.8292 36.9107 41.125 36.9107H43.2792C44.575 36.9107 45.6292 35.8564 45.6292 34.5607V32.4065C45.6292 31.1108 44.575 30.0565 43.2792 30.0565ZM4.50417 10.0815H2.35C1.05417 10.0815 0 11.1358 0 12.4315V14.5857C0 15.8814 1.05417 16.9357 2.35 16.9357H4.50417C5.8 16.9357 6.85417 15.8814 6.85417 14.5857V12.4315C6.85417 11.1358 5.8 10.0815 4.50417 10.0815ZM21.8269 23.4586L13.7977 19.0872C13.5368 18.9451 13.2188 19.134 13.2188 19.4312V28.7836C13.2188 28.9244 13.2567 29.0626 13.3287 29.1837C13.4006 29.3048 13.5039 29.4042 13.6276 29.4716L21.4524 33.7317C21.7133 33.8738 22.0313 33.6849 22.0313 33.3877V23.8026C22.0313 23.7322 22.0123 23.6631 21.9763 23.6025C21.9403 23.542 21.8887 23.4923 21.8269 23.4586ZM23.0019 22.1106L30.9953 17.7586C31.2678 17.6102 31.2678 17.219 30.9953 17.0706L23.1892 12.8206C23.0743 12.758 22.9455 12.7252 22.8147 12.7252C22.6838 12.7252 22.5551 12.758 22.4402 12.8206L14.634 17.0706C14.3615 17.219 14.3615 17.6102 14.634 17.7586L22.6275 22.1106C22.6849 22.1418 22.7493 22.1582 22.8147 22.1582C22.8801 22.1582 22.9445 22.1418 23.0019 22.1106ZM23.5979 23.8026V33.3877C23.5979 33.6849 23.9159 33.8738 24.1769 33.7317L32.0017 29.4716C32.1254 29.4042 32.2286 29.3048 32.3005 29.1837C32.3725 29.0626 32.4104 28.9244 32.4104 28.7836V19.4312C32.4104 19.134 32.0925 18.9451 31.8314 19.0872L23.8023 23.4586C23.7404 23.4923 23.6888 23.542 23.6529 23.6025C23.6169 23.6631 23.5979 23.7322 23.5979 23.8026Z";
  const dPath2 =
    "M23.5 -0.00390625H4.7C2.10876 -0.00390625 0 2.10485 0 4.69609V42.2961C0 44.8873 2.10876 46.9961 4.7 46.9961H23.5C26.0912 46.9961 28.2 44.8873 28.2 42.2961V4.69609C28.2 2.10485 26.0912 -0.00390625 23.5 -0.00390625ZM25.85 42.2961C25.85 43.5941 24.798 44.6461 23.5 44.6461H4.7C3.40199 44.6461 2.35 43.5941 2.35 42.2961V4.69609C2.35 3.39809 3.40199 2.34609 4.7 2.34609H23.5C24.798 2.34609 25.85 3.39809 25.85 4.69609V42.2961Z";
  const dPath3 =
    "M46.9448 3.50473C46.843 1.63777 45.3582 0.153146 43.4912 0.0512522C39.7241 -0.154556 32.3524 0.0456528 25.3036 3.69154C21.7102 5.55023 17.9098 8.70152 14.8769 12.3374C14.8396 12.3822 14.8032 12.4273 14.7661 12.4721L7.88323 13.0038C6.75028 13.0914 5.74116 13.6852 5.11456 14.6329L0.418799 21.7354C-0.056432 22.4542 -0.131981 23.3537 0.216571 24.1416C0.565214 24.9296 1.28159 25.4787 2.13301 25.6106L7.93189 26.5088C7.91142 26.6215 7.89085 26.7341 7.87204 26.8468C7.67899 28.0016 8.06159 29.1889 8.89566 30.0229L16.973 38.1004C17.6645 38.7919 18.5989 39.1731 19.5564 39.1731C19.755 39.1731 19.9533 39.1566 20.1492 39.1239C20.2619 39.1051 20.3745 39.0845 20.4873 39.064L21.3854 44.863C21.5173 45.7144 22.0664 46.4309 22.8542 46.7794C23.1754 46.9221 23.5229 46.9958 23.8743 46.9961C24.3675 46.9957 24.8496 46.85 25.2605 46.5773L32.363 41.8815C33.3108 41.2548 33.9045 40.2456 33.9919 39.1128L34.5236 32.23C34.5685 32.1929 34.6137 32.1565 34.6585 32.1192C38.2944 29.0863 41.4458 25.2859 43.3044 21.6925C46.9505 14.6433 47.1503 7.2716 46.9448 3.50473ZM30.8442 39.5842L24.0503 44.076L23.1749 38.4246C26.0463 37.5803 28.8867 36.2282 31.5928 34.4168L31.2465 38.9006C31.2363 39.0377 31.1947 39.1707 31.125 39.2892C31.0553 39.4078 30.9592 39.5087 30.8442 39.5842ZM18.9203 36.1531L10.8428 28.0756C10.6368 27.8695 10.5415 27.5798 10.5882 27.3009C10.8283 25.8649 11.2015 24.498 11.6634 23.2102L23.7831 35.3299C22.2365 35.8839 20.8512 36.2144 19.6951 36.4077C19.4156 36.4542 19.1264 36.3592 18.9203 36.1531ZM8.09538 15.7496L12.5791 15.4032C10.7676 18.1093 9.41541 20.9497 8.57116 23.8211L2.9198 22.9459L7.41177 16.1518C7.48725 16.0368 7.58816 15.9408 7.7067 15.871C7.82523 15.8013 7.95822 15.7597 8.09538 15.7496ZM32.8947 30.0043C30.6702 31.8598 28.5108 33.2018 26.5205 34.1729L12.8225 20.475C14.0946 17.8768 15.6472 15.7132 16.9917 14.1014C19.7983 10.7366 23.2891 7.83395 26.5689 6.13755C33.0381 2.79129 39.8541 2.61109 43.3413 2.80093C43.5639 2.8128 43.7743 2.90658 43.9319 3.06421C44.0895 3.22185 44.1833 3.43221 44.1951 3.65482C44.3852 7.14198 44.2046 13.9579 40.8584 20.4272C39.1621 23.7069 36.2594 27.1976 32.8947 30.0043Z";
  const dPath4 =
    "M14.9884 9.11978L16.3363 12.863C17.0759 14.9151 18.2591 16.7788 19.8015 18.3212C21.344 19.8637 23.2076 21.0468 25.2597 21.7864L29.003 23.1344C29.0769 23.1615 29.1407 23.2106 29.1858 23.2752C29.2309 23.3397 29.2551 23.4165 29.2551 23.4953C29.2551 23.574 29.2309 23.6508 29.1858 23.7154C29.1407 23.7799 29.0769 23.829 29.003 23.8562L25.2597 25.2041C23.2076 25.9437 21.344 27.1269 19.8015 28.6693C18.2591 30.2117 17.0759 32.0754 16.3363 34.1275L14.9884 37.8707C14.9613 37.9446 14.9122 38.0085 14.8476 38.0535C14.7831 38.0986 14.7063 38.1228 14.6275 38.1228C14.5488 38.1228 14.472 38.0986 14.4074 38.0535C14.3429 38.0085 14.2937 37.9446 14.2666 37.8707L12.9187 34.1275C12.1791 32.0754 10.9959 30.2117 9.45352 28.6693C7.9111 27.1269 6.04742 25.9437 3.99532 25.2041L0.252055 23.8562C0.17814 23.829 0.114331 23.7799 0.069252 23.7154C0.0241734 23.6508 0 23.574 0 23.4953C0 23.4165 0.0241734 23.3397 0.069252 23.2752C0.114331 23.2106 0.17814 23.1615 0.252055 23.1344L3.99532 21.7864C6.04742 21.0468 7.9111 19.8637 9.45352 18.3212C10.9959 16.7788 12.1791 14.9151 12.9187 12.863L14.2666 9.11978C14.293 9.04511 14.3419 8.98046 14.4065 8.93473C14.4711 8.889 14.5484 8.86444 14.6275 8.86444C14.7067 8.86444 14.7839 8.889 14.8486 8.93473C14.9132 8.98046 14.9621 9.04511 14.9884 9.11978ZM31.8382 0.124194L32.5213 2.01933C32.8962 3.05833 33.4954 4.00193 34.2765 4.78296C35.0575 5.564 36.0011 6.16326 37.0401 6.5381L38.9352 7.22129C38.9728 7.23496 39.0052 7.25985 39.0281 7.29258C39.0511 7.32531 39.0634 7.3643 39.0634 7.40426C39.0634 7.44421 39.0511 7.4832 39.0281 7.51593C39.0052 7.54866 38.9728 7.57355 38.9352 7.58722L37.0401 8.27041C36.0011 8.64525 35.0575 9.24452 34.2765 10.0255C33.4954 10.8066 32.8962 11.7502 32.5213 12.7892L31.8382 14.6843C31.8245 14.7219 31.7996 14.7543 31.7669 14.7772C31.7341 14.8001 31.6951 14.8124 31.6552 14.8124C31.6152 14.8124 31.5762 14.8001 31.5435 14.7772C31.5108 14.7543 31.4859 14.7219 31.4722 14.6843L30.789 12.7892C30.4142 11.7502 29.8149 10.8066 29.0339 10.0255C28.2529 9.24452 27.3093 8.64525 26.2703 8.27041L24.3751 7.58722C24.3376 7.57355 24.3052 7.54866 24.2822 7.51593C24.2593 7.4832 24.247 7.44421 24.247 7.40426C24.247 7.3643 24.2593 7.32531 24.2822 7.29258C24.3052 7.25985 24.3376 7.23496 24.3751 7.22129L26.2703 6.5381C27.3093 6.16326 28.2529 5.564 29.0339 4.78296C29.8149 4.00193 30.4142 3.05833 30.789 2.01933L31.4722 0.124194C31.4859 0.0866486 31.5108 0.0542181 31.5435 0.031302C31.5762 0.00838597 31.6152 -0.00390625 31.6552 -0.00390625C31.6951 -0.00390625 31.7341 0.00838597 31.7669 0.031302C31.7996 0.0542181 31.8245 0.0866486 31.8382 0.124194ZM31.8382 32.3079L32.5213 34.203C32.8962 35.242 33.4954 36.1856 34.2765 36.9666C35.0575 37.7477 36.0011 38.3469 37.0401 38.7218L38.9352 39.405C38.9728 39.4186 39.0052 39.4435 39.0281 39.4763C39.0511 39.509 39.0634 39.548 39.0634 39.5879C39.0634 39.6279 39.0511 39.6669 39.0281 39.6996C39.0052 39.7323 38.9728 39.7572 38.9352 39.7709L37.0401 40.4541C36.0011 40.8289 35.0575 41.4282 34.2765 42.2092C33.4954 42.9903 32.8962 43.9339 32.5213 44.9729L31.8382 46.868C31.8245 46.9055 31.7996 46.938 31.7669 46.9609C31.7341 46.9838 31.6951 46.9961 31.6552 46.9961C31.6152 46.9961 31.5762 46.9838 31.5435 46.9609C31.5108 46.938 31.4859 46.9055 31.4722 46.868L30.789 44.9729C30.4142 43.9339 29.8149 42.9903 29.0339 42.2092C28.2529 41.4282 27.3093 40.8289 26.2703 40.4541L24.3751 39.7709C24.3376 39.7572 24.3052 39.7323 24.2822 39.6996C24.2593 39.6669 24.247 39.6279 24.247 39.5879C24.247 39.548 24.2593 39.509 24.2822 39.4763C24.3052 39.4435 24.3376 39.4186 24.3751 39.405L26.2703 38.7218C27.3093 38.3469 28.2529 37.7477 29.0339 36.9666C29.8149 36.1856 30.4142 35.242 30.789 34.203L31.4722 32.3079C31.5343 32.1367 31.7777 32.1367 31.8382 32.3079Z";
  const dPath5 =
    "M26.2949 22.1105V18.6239C26.2949 16.48 24.5116 14.7419 22.3119 14.7419C20.1121 14.7419 18.3288 16.48 18.3288 18.6239V22.1105M33.0678 45.4113C29.9491 47.6812 26.2629 48.9961 22.3136 48.9961C11.0947 48.9961 2 37.9099 2 26.691V11.0575L22.214 1.99609L42.6271 11.0575V26.691C42.6271 30.8056 41.4037 34.9025 39.3009 38.441M27.6907 22.2087H16.9364C15.2866 22.2087 13.9492 23.5462 13.9492 25.196V35.1536H30.678V25.196C30.678 23.5462 29.3405 22.2087 27.6907 22.2087Z";
  const dPath6 =
    "M10.0333 26.5167C9.7507 26.5176 9.47072 26.4623 9.20964 26.354C8.94857 26.2457 8.71162 26.0866 8.51257 25.886L0.62995 18.0034C0.224317 17.5992 0 17.0588 0 16.4833C0 15.9079 0.224317 15.3675 0.630667 14.9626L8.51328 7.07995C8.71229 6.87949 8.94914 6.72058 9.21009 6.61243C9.47104 6.50429 9.75087 6.44908 10.0333 6.45C11.2187 6.45 12.1833 7.41464 12.1833 8.6C12.1833 9.17548 11.959 9.71585 11.5527 10.1208L5.1901 16.4833L11.5534 22.8466C11.9597 23.2508 12.1833 23.7912 12.1833 24.3667C12.1833 25.552 11.2187 26.5167 10.0333 26.5167ZM32.9667 27.2333C31.7813 27.2333 30.8167 26.2687 30.8167 25.0833C30.8167 24.5079 31.041 23.9675 31.4473 23.5626L37.8099 17.2L31.4466 10.8367C31.2464 10.6375 31.0876 10.4007 30.9795 10.1398C30.8714 9.87884 30.816 9.59909 30.8167 9.31667C30.8167 8.1313 31.7813 7.16667 32.9667 7.16667C33.5421 7.16667 34.0825 7.39098 34.4874 7.79733L42.37 15.68C42.7764 16.0856 43 16.626 43 17.2C43 17.7755 42.7757 18.3159 42.3693 18.7208L34.4867 26.6034C34.2878 26.804 34.051 26.963 33.79 27.0711C33.529 27.1793 33.2492 27.2344 32.9667 27.2333ZM15.05 32.9667C14.6962 32.9661 14.3479 32.8783 14.0361 32.7111C13.7242 32.5439 13.4584 32.3024 13.2621 32.008C13.0658 31.7136 12.9451 31.3753 12.9107 31.0232C12.8763 30.671 12.9293 30.3158 13.0648 29.9889L25.9655 1.32082C26.1289 0.929286 26.4046 0.5949 26.7577 0.359837C27.1109 0.124774 27.5258 -0.000435285 27.95 1.13699e-06C28.3038 0.000559986 28.6521 0.0883284 28.9639 0.25554C29.2758 0.422752 29.5416 0.664251 29.7379 0.95867C29.9342 1.25309 30.0549 1.59135 30.0893 1.94352C30.1237 2.29569 30.0707 2.65091 29.9352 2.97775L17.0344 31.6459C16.8711 32.0374 16.5954 32.3718 16.2423 32.6068C15.8891 32.8419 15.4742 32.9671 15.05 32.9667Z";
  return (
    <>
      <Header />

      <section className="p-40 ">
        <span className="my-10">
          <h1 className="-ml-0.5 text-4xl md:text-5xl lg:text-6xl font-medium font-s1-pro-display mb-4">
            Explore What We Do
          </h1>
          <p className="text-[#6F6F6F] text-[20px] font-s1-pro-display mb-10">
            Our team has expertise in almost every programming language
          </p>
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-12">
          <Card
            dPath={dPath1}
            hText="Web3 & Blockchain Solutions"
            pText="Empower your business with blockchain solutions from token creation to dApps built for transparency, trust, and efficiency."
            buttons={buttonP1}
          />
          <Card
            dPath={dPath2}
            hText="Mobile App Development"
            pText="Advance mobile applications that dominate app stores and deliver exceptional user engagement across iOS and Android."
            buttons={buttonP2}
          />
          <Card
            dPath={dPath3}
            hText="MVP & Startup Solutions"
            pText="Rapid development of Minimum Viable Products that validate market fit and accelerate startup growth."
            buttons={buttonP3}
          />
          <Card
            dPath={dPath4}
            hText="AI Powered Systems"
            pText="Revolutionizing industries with cutting-edge AI solutions and transformative insights."
            buttons={buttonP4}
          />
          <Card
            dPath={dPath5}
            hText="Cybersecurity Solutions"
            pText="Protect your digital assets with advanced security from threat detection to data protection ensuring privacy and trust."
            buttons={buttonP5}
          />
          <Card
            dPath={dPath6}
            hText="Web & SaaS Development"
            pText="High-performance Web Applications and SaaS platforms that scale with your business growth and market demands."
            buttons={buttonP6}
          />
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="px-40">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-4/9 py-20 lg:py-40 lg:mr-14">
              <h2 class="text-4xl lg:text-5xl font-bold mb-4">
                Translating technology into a positive impact
              </h2>
              <p class="lg:text-lg text-gray-400 mt-12 mb-6">
                Our approach allows us to deliver exceptional experiences that
                drive growth and success for all stakeholders. Let's rise to new
                heights with the power of digital transformation.
              </p>
            </div>
            <div className="lg:w-5/9 grid grid-cols-2 gap-8 lg:pl-20 border-t lg:border-t-0 lg:border-l py-20 lg:py-40">
              <div>
                <h3 class="text-4xl lg:text-5xl xl:text-6xl font-bold mb-3">
                  48+
                </h3>
                <p class="text-gray-400">Years of continual excellence</p>
              </div>
              <div>
                <h3 class="text-4xl lg:text-5xl xl:text-6xl font-bold mb-3">
                  7700+
                </h3>
                <p class="text-gray-400">Change makers driving revolution</p>
              </div>
              <div>
                <h3 class="text-4xl lg:text-5xl xl:text-6xl font-bold mb-3">
                  16+
                </h3>
                <p class="text-gray-400">
                  Countries with our presence and clientele
                </p>
              </div>
              <div>
                <h3 class="text-4xl lg:text-5xl xl:text-6xl font-bold mb-3">
                  300+
                </h3>
                <p class="text-gray-400">Active clients across the globe</p>
              </div>
            </div>
          </div>
          <div className="my-16 lg:max-w-7/9 mx-auto">
            <h2 class="text-3xl lg:text-4xl font-bold text-center mb-8 text-gray-200">
              We rethink business growth for you through our collective
              experience with strategic partner ecosystem.
            </h2>
            <div className="flex flex-row">
              <img
                src="Informatica.webp"
                alt="informatica.png"
                className="object-none scale-50"
              ></img>
              <img
                src="sales-force.webp"
                alt="sales-force.png"
                className="object-none scale-50"
              ></img>
              <img
                src="AWS.webp"
                alt="aws.png"
                className="object-none scale-50"
              ></img>
              <img
                src="SAP.webp"
                alt="sap.png"
                className="object-none scale-50"
              ></img>
              <img
                src="cloudera.webp"
                alt="cloudera.png"
                className="object-none scale-50"
              ></img>
            </div>
          </div>
        </div>
      </section>

      <section className="py-15 relative">
        <div className="absolute bottom-0 -z-30 left-0">
          <img
            src="/section3-bg.webp"
            alt="loading.png"
            width={600}
            height={600}
          ></img>
        </div>
        <div className="p-30">
          <div className="flex flex-col 2xl:flex-row gap-8 2xl:gap-12">
            <div className="2xl:w-[30%] 2xl:shrink-0  self-start">
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-black md:leading-18">
                Our
                <br />
                Fundamental
                <br />
                Process
              </h2>
              <div className="flex gap-1 mt-2">
                <button className="px-5 text-nowrap py-1.5 cursor-pointer font-inter rounded-[60px] text-sm font-medium flex items-center justify-center border border-black text-black bg-transparent hover:text-white hover:bg-black font-s1-pro-display">
                  Work With Us
                </button>
                <span className="w-10 h-10 rounded-full bg-white border border-black flex justify-center items-center hover:bg-white/80 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                  >
                    <path
                      d="M7.45001 14.0005L6.20314 12.7754L11.1031 7.87529H0.450012V6.12523H11.1031L6.20314 1.22504L7.45001 0L14.45 7.00025L7.45001 14.0005Z"
                      fill="black"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
              <HoverCard
                hText="Planning"
                pText="At the start of each project, we work with our customers to build a solid project plan. The initial Scope document can come from the client or a combined process of phone calls and in-person meetings."
                num="01"
              />
              <HoverCard
                hText="Wireframing"
                pText="Once the project plan and scope have been finalized, our wireframing team takes over to determine the placement of all objects on each page of the application, whether it is a consumer mobile app or a backend business application. This is an important stage where we come to a final agreement on what will be placed on each page for the User to access."
                num="02"
              />
              <HoverCard
                hText="Design"
                pText="After the wireframes for all pages have been finalized, our design team takes over to create the final appearance and functionality of the application. This is an exciting stage of the project where you can see the entire application come to life. We will provide you with clickable versions to fully experience everything the user goes through before we begin coding."
                num="03"
              />
              <HoverCard
                hText="Code"
                pText="With the wireframes and designs finalized, we begin coding the application to make it functional. As an Agile development shop, we break down the project into baskets of features called Sprints. This approach allows our customers to regularly review the progress of their software development process and provide feedback at the end of each Sprint. We value your input and involvement throughout the entire development process."
                num="04"
              />
              <HoverCard
                hText="Testing"
                pText="The testing process for mobile and software applications is a crucial step in ensuring that the product is functional, reliable, and user-friendly. Typically, the process involves several stages, where various techniques and tools are employed to identify defects, bugs, and usability issues. The goal is to detect and correct any issues before the application is released to the public, ultimately improving the user experience and ensuring the success of the product."
                num="05"
              />
              <HoverCard
                hText="Deployment"
                pText="After the application is completed, approved by our internal QA, project management and the client – we are ready to deploy the code to its final destination. Hosting options vary from client-owned servers to web or cloud hosting. We guide clients through the options and handle the entire process."
                num="06"
              />
            </div>
          </div>
        </div>
      </section>

      <section className=" overflow-x-clip bg-black relative py-16 sm:py-20 md:py-24 ">
        <div className="w-full px-42 max-w-480 justify-self-center mx-auto rounded-[30px] sm:rounded-[50px] text-white relative ">
          <div className="sticky top-18">
            <div className="relative w-full">
              <div className="flex w-full z-20 flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 ">
                <h1 className="text-3xl text-white 2xl:w-[50%] sm:text-4xl md:text-5xl lg:text-6xl font-medium font-sf-pro-display">
                  See How We Help Business Thrive
                </h1>
                <p className="flex items-center 2xl:w-[50%] text-[#CFCFCF] text-sm sm:text-base md:text-lg xl:text-[20px] font-sf-pro-display lg:w-125 xl:w-146">
                  We don't just talk about results—we deliver them. Here are
                  some of our most impactful case studies showcasing how our
                  digital marketing strategies drive success.
                </p>
              </div>
            </div>
          </div>

          <div>
            <StackedCards />
          </div>
        </div>
      </section>

      <section
        className="w-full py-12 sm:py-14 md:py-16 overflow-x-clip bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://nextsensesolution.com/_next/static/media/testimonial-bg.f1089b54.svg')",
        }}
      >
        <div className="px-30 w-full gap-6 sm:gap-8 lg:gap-10 my-8 lg:my-20">
          <h2 className="text-4xl md:text-5xl lg:text-[50px] font-semibold">
            Words of praise from others <br />
            about our presence
          </h2>
        </div>
      </section>
    </>
  );
}

export default App;
