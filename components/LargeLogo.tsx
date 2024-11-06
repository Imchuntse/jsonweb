import { FC } from "react";

interface LargeLogoProps {
    shapeClassName: string
    svgClassName: string
}

const LargeLogo: FC<LargeLogoProps> = ({ shapeClassName, svgClassName }) => {
    return <svg className={svgClassName} width="539px" height="130px" viewBox="0 0 539 130" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <title>Large Logo</title>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Desktop" transform="translate(-237.000000, -183.000000)">
            <g id="JSONClasses" transform="translate(388.512000, 192.280000)" fillRule="nonzero">
                <path d="M4.89592418,68.5429386 C10.0798439,68.5429386 13.9357842,67.1989594 16.463745,64.511001 C18.9917059,61.8230426 20.2556863,57.727106 20.2556863,52.2231913 L20.2556863,52.2231913 L20.2556863,0.959985134 L9.69584985,0.959985134 L9.69584985,52.5111868 C9.69584985,54.6871531 9.18385778,56.3031281 8.15987364,57.3591117 C7.13588949,58.4150954 5.56791378,58.9430872 3.45594648,58.9430872 C2.1759663,58.9430872 1.02398414,58.8150892 0,58.5590932 L0,58.5590932 L0,68.1589445 C1.34397919,68.4149405 2.97595391,68.5429386 4.89592418,68.5429386 Z M41.5673563,69.1189296 C46.751276,69.1189296 50.7032148,67.6469524 53.4231727,64.702998 C56.1431306,61.7590436 57.5031095,57.535109 57.5031095,52.0311943 C57.5031095,47.8072597 56.6711224,44.1273167 55.0071482,40.9913652 C53.3431739,37.8554138 50.303221,34.3674678 45.8872894,30.5275273 C42.4313429,27.5195738 40.0473798,24.9596135 38.7354001,22.8476462 C37.4234205,20.7356789 36.7674306,18.4637141 36.7674306,16.0317517 C36.7674306,11.7438181 38.5274034,9.59985134 42.0473489,9.59985134 C43.7753221,9.59985134 45.0873018,10.1278432 45.9832879,11.1838268 C46.879274,12.2398105 47.3272671,13.9197844 47.3272671,16.2237488 L47.3272671,16.2237488 L47.3272671,19.6796952 L57.3111125,19.6796952 L57.3111125,16.8957384 C57.3111125,11.4558226 56.0151326,7.27988726 53.4231727,4.36793236 C50.8312128,1.45597745 47.0072721,-8.52638079e-14 41.9513503,-8.52638079e-14 C36.8314296,-8.52638079e-14 32.9274901,1.45597745 30.2395317,4.36793236 C27.5515733,7.27988726 26.2075942,11.3918236 26.2075942,16.7037413 C26.2075942,20.6076809 27.0715808,24.1116266 28.799554,27.2155785 C30.5275273,30.3195305 33.5674802,33.7914767 37.9194128,37.6314172 C41.3753593,40.6393707 43.7433226,43.2153308 45.0233028,45.3592976 C46.303283,47.5032644 46.943273,49.983226 46.943273,52.7991824 C46.943273,55.1671457 46.4792802,56.8791192 45.5512946,57.9351028 C44.623309,58.9910865 43.26333,59.5190783 41.4713578,59.5190783 C37.8234143,59.5190783 35.9994425,57.343112 35.9994425,52.9911794 L35.9994425,52.9911794 L35.9994425,48.3832507 L26.0155971,48.3832507 L26.0155971,52.2231913 C26.0155971,57.663107 27.3275768,61.8390424 29.9515362,64.7509973 C32.5754955,67.6629522 36.4474356,69.1189296 41.5673563,69.1189296 Z M78.8147795,69.1189296 C83.9986992,69.1189296 87.9666378,67.6469524 90.7185951,64.702998 C93.4705525,61.7590436 94.8465312,57.599108 94.8465312,52.2231913 L94.8465312,52.2231913 L94.8465312,16.8957384 C94.8465312,11.5198216 93.4705525,7.35988603 90.7185951,4.41593162 C87.9666378,1.47197721 83.9986992,-8.52638079e-14 78.8147795,-8.52638079e-14 C73.6308598,-8.52638079e-14 69.6629212,1.47197721 66.9109638,4.41593162 C64.1590064,7.35988603 62.7830278,11.5198216 62.7830278,16.8957384 L62.7830278,16.8957384 L62.7830278,52.2231913 C62.7830278,57.599108 64.1590064,61.7590436 66.9109638,64.702998 C69.6629212,67.6469524 73.6308598,69.1189296 78.8147795,69.1189296 Z M78.8147795,59.5190783 C75.166836,59.5190783 73.3428642,57.3111125 73.3428642,52.8951809 L73.3428642,52.8951809 L73.3428642,16.2237488 C73.3428642,11.8078171 75.166836,9.59985134 78.8147795,9.59985134 C82.462723,9.59985134 84.2866947,11.8078171 84.2866947,16.2237488 L84.2866947,16.2237488 L84.2866947,52.8951809 C84.2866947,57.3111125 82.462723,59.5190783 78.8147795,59.5190783 Z M111.358276,68.1589445 L111.358276,19.1037042 L111.550273,19.1037042 L124.222076,68.1589445 L135.069908,68.1589445 L135.069908,0.959985134 L125.662054,0.959985134 L125.662054,41.1833622 L125.470057,41.1833622 L115.198216,0.959985134 L101.950421,0.959985134 L101.950421,68.1589445 L111.358276,68.1589445 Z" id="JSON" fill="#0894FF"></path>
                <path d="M157.821556,69.1189296 C162.877478,69.1189296 166.733418,67.6789519 169.389377,64.7989965 C172.045336,61.9190411 173.373315,57.8551041 173.373315,52.6071853 L173.373315,52.6071853 L173.373315,43.1033325 L163.38947,43.1033325 L163.38947,53.3751734 C163.38947,57.47111 161.629497,59.5190783 158.109552,59.5190783 C154.589606,59.5190783 152.829633,57.47111 152.829633,53.3751734 L152.829633,53.3751734 L152.829633,15.8397547 C152.829633,11.6798191 154.589606,9.59985134 158.109552,9.59985134 C161.629497,9.59985134 163.38947,11.6798191 163.38947,15.8397547 L163.38947,15.8397547 L163.38947,23.6156343 L173.373315,23.6156343 L173.373315,16.5117443 C173.373315,11.2638256 172.045336,7.1998885 169.389377,4.3199331 C166.733418,1.4399777 162.877478,-8.52638079e-14 157.821556,-8.52638079e-14 C152.765634,-8.52638079e-14 148.909694,1.4399777 146.253735,4.3199331 C143.597776,7.1998885 142.269797,11.2638256 142.269797,16.5117443 L142.269797,16.5117443 L142.269797,52.6071853 C142.269797,57.8551041 143.597776,61.9190411 146.253735,64.7989965 C148.909694,67.6789519 152.765634,69.1189296 157.821556,69.1189296 Z M207.644784,68.1589445 L207.644784,58.5590932 L190.269054,58.5590932 L190.269054,0.959985134 L179.709217,0.959985134 L179.709217,68.1589445 L207.644784,68.1589445 Z M220.124591,68.1589445 L222.044561,55.0071482 L234.044376,55.0071482 L234.044376,54.8151511 L235.964346,68.1589445 L246.524182,68.1589445 L235.580352,0.959985134 L221.276573,0.959985134 L210.332743,68.1589445 L220.124591,68.1589445 Z M232.796395,45.8872894 L223.292542,45.8872894 L227.900471,12.6718038 L228.092468,12.6718038 L232.796395,45.8872894 Z M265.051895,69.1189296 C270.235815,69.1189296 274.187754,67.6469524 276.907712,64.702998 C279.62767,61.7590436 280.987649,57.535109 280.987649,52.0311943 C280.987649,47.8072597 280.155662,44.1273167 278.491687,40.9913652 C276.827713,37.8554138 273.78776,34.3674678 269.371829,30.5275273 C265.915882,27.5195738 263.531919,24.9596135 262.219939,22.8476462 C260.90796,20.7356789 260.25197,18.4637141 260.25197,16.0317517 C260.25197,11.7438181 262.011943,9.59985134 265.531888,9.59985134 C267.259861,9.59985134 268.571841,10.1278432 269.467827,11.1838268 C270.363813,12.2398105 270.811806,13.9197844 270.811806,16.2237488 L270.811806,16.2237488 L270.811806,19.6796952 L280.795652,19.6796952 L280.795652,16.8957384 C280.795652,11.4558226 279.499672,7.27988726 276.907712,4.36793236 C274.315752,1.45597745 270.491811,-8.52638079e-14 265.435889,-8.52638079e-14 C260.315969,-8.52638079e-14 256.412029,1.45597745 253.724071,4.36793236 C251.036112,7.27988726 249.692133,11.3918236 249.692133,16.7037413 C249.692133,20.6076809 250.55612,24.1116266 252.284093,27.2155785 C254.012066,30.3195305 257.052019,33.7914767 261.403952,37.6314172 C264.859898,40.6393707 267.227862,43.2153308 268.507842,45.3592976 C269.787822,47.5032644 270.427812,49.983226 270.427812,52.7991824 C270.427812,55.1671457 269.963819,56.8791192 269.035834,57.9351028 C268.107848,58.9910865 266.747869,59.5190783 264.955897,59.5190783 C261.307953,59.5190783 259.483982,57.343112 259.483982,52.9911794 L259.483982,52.9911794 L259.483982,48.3832507 L249.500136,48.3832507 L249.500136,52.2231913 C249.500136,57.663107 250.812116,61.8390424 253.436075,64.7509973 C256.060035,67.6629522 259.931975,69.1189296 265.051895,69.1189296 Z M300.763342,69.1189296 C305.947262,69.1189296 309.899201,67.6469524 312.619159,64.702998 C315.339117,61.7590436 316.699096,57.535109 316.699096,52.0311943 C316.699096,47.8072597 315.867109,44.1273167 314.203134,40.9913652 C312.53916,37.8554138 309.499207,34.3674678 305.083276,30.5275273 C301.627329,27.5195738 299.243366,24.9596135 297.931386,22.8476462 C296.619407,20.7356789 295.963417,18.4637141 295.963417,16.0317517 C295.963417,11.7438181 297.723389,9.59985134 301.243335,9.59985134 C302.971308,9.59985134 304.283288,10.1278432 305.179274,11.1838268 C306.07526,12.2398105 306.523253,13.9197844 306.523253,16.2237488 L306.523253,16.2237488 L306.523253,19.6796952 L316.507099,19.6796952 L316.507099,16.8957384 C316.507099,11.4558226 315.211119,7.27988726 312.619159,4.36793236 C310.027199,1.45597745 306.203258,-8.52638079e-14 301.147336,-8.52638079e-14 C296.027416,-8.52638079e-14 292.123476,1.45597745 289.435518,4.36793236 C286.747559,7.27988726 285.40358,11.3918236 285.40358,16.7037413 C285.40358,20.6076809 286.267567,24.1116266 287.99554,27.2155785 C289.723513,30.3195305 292.763466,33.7914767 297.115399,37.6314172 C300.571345,40.6393707 302.939309,43.2153308 304.219289,45.3592976 C305.499269,47.5032644 306.139259,49.983226 306.139259,52.7991824 C306.139259,55.1671457 305.675266,56.8791192 304.747281,57.9351028 C303.819295,58.9910865 302.459316,59.5190783 300.667344,59.5190783 C297.0194,59.5190783 295.195429,57.343112 295.195429,52.9911794 L295.195429,52.9911794 L295.195429,48.3832507 L285.211583,48.3832507 L285.211583,52.2231913 C285.211583,57.663107 286.523563,61.8390424 289.147522,64.7509973 C291.771482,67.6629522 295.643422,69.1189296 300.763342,69.1189296 Z M351.546556,68.1589445 L351.546556,58.5590932 L333.306838,58.5590932 L333.306838,37.9194128 L347.802614,37.9194128 L347.802614,28.3195614 L333.306838,28.3195614 L333.306838,10.5598365 L351.546556,10.5598365 L351.546556,0.959985134 L322.747002,0.959985134 L322.747002,68.1589445 L351.546556,68.1589445 Z M371.514247,69.1189296 C376.698167,69.1189296 380.650105,67.6469524 383.370063,64.702998 C386.090021,61.7590436 387.45,57.535109 387.45,52.0311943 C387.45,47.8072597 386.618013,44.1273167 384.954039,40.9913652 C383.290064,37.8554138 380.250111,34.3674678 375.83418,30.5275273 C372.378233,27.5195738 369.99427,24.9596135 368.682291,22.8476462 C367.370311,20.7356789 366.714321,18.4637141 366.714321,16.0317517 C366.714321,11.7438181 368.474294,9.59985134 371.994239,9.59985134 C373.722213,9.59985134 375.034192,10.1278432 375.930178,11.1838268 C376.826165,12.2398105 377.274158,13.9197844 377.274158,16.2237488 L377.274158,16.2237488 L377.274158,19.6796952 L387.258003,19.6796952 L387.258003,16.8957384 C387.258003,11.4558226 385.962023,7.27988726 383.370063,4.36793236 C380.778103,1.45597745 376.954163,-8.52638079e-14 371.898241,-8.52638079e-14 C366.77832,-8.52638079e-14 362.874381,1.45597745 360.186422,4.36793236 C357.498464,7.27988726 356.154485,11.3918236 356.154485,16.7037413 C356.154485,20.6076809 357.018471,24.1116266 358.746444,27.2155785 C360.474418,30.3195305 363.514371,33.7914767 367.866303,37.6314172 C371.32225,40.6393707 373.690213,43.2153308 374.970193,45.3592976 C376.250173,47.5032644 376.890164,49.983226 376.890164,52.7991824 C376.890164,55.1671457 376.426171,56.8791192 375.498185,57.9351028 C374.570199,58.9910865 373.210221,59.5190783 371.418248,59.5190783 C367.770305,59.5190783 365.946333,57.343112 365.946333,52.9911794 L365.946333,52.9911794 L365.946333,48.3832507 L355.962488,48.3832507 L355.962488,52.2231913 C355.962488,57.663107 357.274467,61.8390424 359.898427,64.7509973 C362.522386,67.6629522 366.394326,69.1189296 371.514247,69.1189296 Z" id="Classes" className={shapeClassName}></path>
            </g>
            <path d="M394.524,299 C396.492,299 397.968,298.472 398.952,297.416 C399.936,296.36 400.428,294.812 400.428,292.772 L400.428,292.772 L400.428,280.028 C400.428,277.988 399.936,276.44 398.952,275.384 C397.968,274.328 396.492,273.8 394.524,273.8 L394.524,273.8 L388.476,273.8 L388.476,299 L394.524,299 Z M394.452,295.4 L392.436,295.4 L392.436,277.4 L394.452,277.4 C395.1,277.4 395.598,277.592 395.946,277.976 C396.294,278.36 396.468,278.984 396.468,279.848 L396.468,279.848 L396.468,292.952 C396.468,293.816 396.294,294.44 395.946,294.824 C395.598,295.208 395.1,295.4 394.452,295.4 L394.452,295.4 Z M413.892,299 L413.892,295.4 L407.052,295.4 L407.052,287.66 L412.488,287.66 L412.488,284.06 L407.052,284.06 L407.052,277.4 L413.892,277.4 L413.892,273.8 L403.092,273.8 L403.092,299 L413.892,299 Z M421.74,299.36 C423.636,299.36 425.082,298.82 426.078,297.74 C427.074,296.66 427.572,295.136 427.572,293.168 L427.572,293.168 L427.572,289.604 L423.828,289.604 L423.828,293.456 C423.828,294.992 423.168,295.76 421.848,295.76 C420.528,295.76 419.868,294.992 419.868,293.456 L419.868,293.456 L419.868,279.38 C419.868,277.82 420.528,277.04 421.848,277.04 C423.168,277.04 423.828,277.82 423.828,279.38 L423.828,279.38 L423.828,282.296 L427.572,282.296 L427.572,279.632 C427.572,277.664 427.074,276.14 426.078,275.06 C425.082,273.98 423.636,273.44 421.74,273.44 C419.844,273.44 418.398,273.98 417.402,275.06 C416.406,276.14 415.908,277.664 415.908,279.632 L415.908,279.632 L415.908,293.168 C415.908,295.136 416.406,296.66 417.402,297.74 C418.398,298.82 419.844,299.36 421.74,299.36 Z M440.424,299 L440.424,295.4 L433.908,295.4 L433.908,273.8 L429.948,273.8 L429.948,299 L440.424,299 Z M445.104,299 L445.824,294.068 L450.324,294.068 L450.324,293.996 L451.044,299 L455.004,299 L450.9,273.8 L445.536,273.8 L441.432,299 L445.104,299 Z M449.856,290.648 L446.292,290.648 L448.02,278.192 L448.092,278.192 L449.856,290.648 Z M460.872,299 L460.872,288.2 L462.24,288.2 C463.152,288.2 463.794,288.428 464.166,288.884 C464.538,289.34 464.724,290.144 464.724,291.296 L464.724,291.296 L464.724,295.904 C464.724,296.84 464.748,297.488 464.796,297.848 C464.844,298.208 464.94,298.592 465.084,299 L465.084,299 L469.116,299 C468.924,298.568 468.804,298.13 468.756,297.686 C468.708,297.242 468.684,296.66 468.684,295.94 L468.684,295.94 L468.684,291.512 C468.684,290.024 468.486,288.836 468.09,287.948 C467.694,287.06 467.016,286.472 466.056,286.184 L466.056,286.184 L466.056,286.112 C467.784,285.416 468.648,283.76 468.648,281.144 L468.648,281.144 L468.648,279.596 C468.648,277.628 468.18,276.17 467.244,275.222 C466.308,274.274 464.82,273.8 462.78,273.8 L462.78,273.8 L456.912,273.8 L456.912,299 L460.872,299 Z M462.312,284.6 L460.872,284.6 L460.872,277.4 L462.672,277.4 C463.368,277.4 463.878,277.604 464.202,278.012 C464.526,278.42 464.688,279.08 464.688,279.992 L464.688,279.992 L464.688,281.936 C464.688,282.896 464.49,283.58 464.094,283.988 C463.698,284.396 463.104,284.6 462.312,284.6 L462.312,284.6 Z M474.048,299 L474.768,294.068 L479.268,294.068 L479.268,293.996 L479.988,299 L483.948,299 L479.844,273.8 L474.48,273.8 L470.376,299 L474.048,299 Z M478.8,290.648 L475.236,290.648 L476.964,278.192 L477.036,278.192 L478.8,290.648 Z M491.256,299 L491.256,277.4 L495.396,277.4 L495.396,273.8 L483.156,273.8 L483.156,277.4 L487.296,277.4 L487.296,299 L491.256,299 Z M501.264,299 L501.264,273.8 L497.304,273.8 L497.304,299 L501.264,299 Z M512.244,299 L516.06,273.8 L512.424,273.8 L509.832,293.348 L509.76,293.348 L507.168,273.8 L503.172,273.8 L506.988,299 L512.244,299 Z M528.768,299 L528.768,295.4 L521.928,295.4 L521.928,287.66 L527.364,287.66 L527.364,284.06 L521.928,284.06 L521.928,277.4 L528.768,277.4 L528.768,273.8 L517.968,273.8 L517.968,299 L528.768,299 Z M542.844,299 C544.812,299 546.288,298.472 547.272,297.416 C548.256,296.36 548.748,294.812 548.748,292.772 L548.748,292.772 L548.748,280.028 C548.748,277.988 548.256,276.44 547.272,275.384 C546.288,274.328 544.812,273.8 542.844,273.8 L542.844,273.8 L536.796,273.8 L536.796,299 L542.844,299 Z M542.772,295.4 L540.756,295.4 L540.756,277.4 L542.772,277.4 C543.42,277.4 543.918,277.592 544.266,277.976 C544.614,278.36 544.788,278.984 544.788,279.848 L544.788,279.848 L544.788,292.952 C544.788,293.816 544.614,294.44 544.266,294.824 C543.918,295.208 543.42,295.4 542.772,295.4 L542.772,295.4 Z M553.968,299 L554.688,294.068 L559.188,294.068 L559.188,293.996 L559.908,299 L563.868,299 L559.764,273.8 L554.4,273.8 L550.296,299 L553.968,299 Z M558.72,290.648 L555.156,290.648 L556.884,278.192 L556.956,278.192 L558.72,290.648 Z M571.176,299 L571.176,277.4 L575.316,277.4 L575.316,273.8 L563.076,273.8 L563.076,277.4 L567.216,277.4 L567.216,299 L571.176,299 Z M578.196,299 L578.916,294.068 L583.416,294.068 L583.416,293.996 L584.136,299 L588.096,299 L583.992,273.8 L578.628,273.8 L574.524,299 L578.196,299 Z M582.948,290.648 L579.384,290.648 L581.112,278.192 L581.184,278.192 L582.948,290.648 Z M599.724,299 L599.724,288.02 L604.836,288.02 L604.836,284.42 L599.724,284.42 L599.724,277.4 L606.24,277.4 L606.24,273.8 L595.764,273.8 L595.764,299 L599.724,299 Z M618.624,299 L618.624,295.4 L612.108,295.4 L612.108,273.8 L608.148,273.8 L608.148,299 L618.624,299 Z M626.112,299.36 C628.056,299.36 629.544,298.808 630.576,297.704 C631.608,296.6 632.124,295.04 632.124,293.024 L632.124,293.024 L632.124,279.776 C632.124,277.76 631.608,276.2 630.576,275.096 C629.544,273.992 628.056,273.44 626.112,273.44 C624.168,273.44 622.68,273.992 621.648,275.096 C620.616,276.2 620.1,277.76 620.1,279.776 L620.1,279.776 L620.1,293.024 C620.1,295.04 620.616,296.6 621.648,297.704 C622.68,298.808 624.168,299.36 626.112,299.36 Z M626.112,295.76 C624.744,295.76 624.06,294.932 624.06,293.276 L624.06,293.276 L624.06,279.524 C624.06,277.868 624.744,277.04 626.112,277.04 C627.48,277.04 628.164,277.868 628.164,279.524 L628.164,279.524 L628.164,293.276 C628.164,294.932 627.48,295.76 626.112,295.76 Z M641.664,299 L643.464,282.008 L643.536,282.008 L645.336,299 L650.268,299 L652.824,273.8 L649.404,273.8 L647.64,293.168 L647.568,293.168 L645.696,273.8 L641.376,273.8 L639.504,293.168 L639.432,293.168 L637.668,273.8 L633.852,273.8 L636.408,299 L641.664,299 Z M664.56,299 L664.56,273.8 L660.6,273.8 L660.6,299 L664.56,299 Z M671.04,299 L671.04,280.604 L671.112,280.604 L675.864,299 L679.932,299 L679.932,273.8 L676.404,273.8 L676.404,288.884 L676.332,288.884 L672.48,273.8 L667.512,273.8 L667.512,299 L671.04,299 Z M692.604,299 L692.604,288.74 L694.476,288.74 C696.444,288.74 697.92,288.212 698.904,287.156 C699.888,286.1 700.38,284.552 700.38,282.512 L700.38,282.512 L700.38,280.028 C700.38,277.988 699.888,276.44 698.904,275.384 C697.92,274.328 696.444,273.8 694.476,273.8 L694.476,273.8 L688.644,273.8 L688.644,299 L692.604,299 Z M694.476,285.14 L692.604,285.14 L692.604,277.4 L694.476,277.4 C695.124,277.4 695.61,277.58 695.934,277.94 C696.258,278.3 696.42,278.912 696.42,279.776 L696.42,279.776 L696.42,282.764 C696.42,283.628 696.258,284.24 695.934,284.6 C695.61,284.96 695.124,285.14 694.476,285.14 L694.476,285.14 Z M709.956,299 L709.956,288.272 L714.744,273.8 L710.892,273.8 L708.192,283.052 L708.12,283.052 L705.42,273.8 L701.208,273.8 L705.996,288.272 L705.996,299 L709.956,299 Z M723.744,299 L723.744,277.4 L727.884,277.4 L727.884,273.8 L715.644,273.8 L715.644,277.4 L719.784,277.4 L719.784,299 L723.744,299 Z M733.752,299 L733.752,287.66 L738,287.66 L738,299 L741.96,299 L741.96,273.8 L738,273.8 L738,284.06 L733.752,284.06 L733.752,273.8 L729.792,273.8 L729.792,299 L733.752,299 Z M750.636,299.36 C752.58,299.36 754.068,298.808 755.1,297.704 C756.132,296.6 756.648,295.04 756.648,293.024 L756.648,293.024 L756.648,279.776 C756.648,277.76 756.132,276.2 755.1,275.096 C754.068,273.992 752.58,273.44 750.636,273.44 C748.692,273.44 747.204,273.992 746.172,275.096 C745.14,276.2 744.624,277.76 744.624,279.776 L744.624,279.776 L744.624,293.024 C744.624,295.04 745.14,296.6 746.172,297.704 C747.204,298.808 748.692,299.36 750.636,299.36 Z M750.636,295.76 C749.268,295.76 748.584,294.932 748.584,293.276 L748.584,293.276 L748.584,279.524 C748.584,277.868 749.268,277.04 750.636,277.04 C752.004,277.04 752.688,277.868 752.688,279.524 L752.688,279.524 L752.688,293.276 C752.688,294.932 752.004,295.76 750.636,295.76 Z M762.84,299 L762.84,280.604 L762.912,280.604 L767.664,299 L771.732,299 L771.732,273.8 L768.204,273.8 L768.204,288.884 L768.132,288.884 L764.28,273.8 L759.312,273.8 L759.312,299 L762.84,299 Z" id="DECLARATIVEDATAFLOWINPYTHON" className={shapeClassName} fillRule="nonzero"></path>
            <g id="earth" transform="translate(237.000000, 183.000000)" className={shapeClassName} fillRule="nonzero">
                <polygon id="Path" points="93.9037004 28.6753346 94.0084708 29.6416826 92.8024967 29.9414914 92.6419973 32 94.0864913 32 96.008025 31.7778203 97 30.3617591 95.9456086 29.8692161 95.3682568 29.0715105 94.5011146 27.385086 94.0864913 25 92.4569773 25.3988528 92 26.2393881 92 27.1869981 92.7846634 27.8321224"></polygon>
                <polygon id="Path" points="91.8941655 29.0273556 92 27.56231 90.8358209 27 89.2075984 27.4224924 88 29.5927052 88 31 89.4084125 31"></polygon>
                <path d="M59.3416856,35.2595 L58.9407745,36.2795 L57,36.2795 L57,37.2695 L57.4616553,37.2695 C57.4616553,37.2695 57.4889901,37.4795 57.5284738,37.7555 L58.7190585,37.6565 L59.4631739,37.2005 L59.657555,36.2795 L60.6203493,36.1985 L61,35.4245 L60.1161731,35.2445 L59.3416856,35.2595 Z" id="Path"></path>
                <polygon id="Path" points="54.8085 36.404 54.7335 37.373 56.1225 37.256 56.2665 36.284 55.4325 35.627"></polygon>
                <path d="M129.986011,64.3276093 C129.967296,62.4267352 129.871048,60.5392288 129.691919,58.6811311 C129.090367,52.486581 127.609213,46.5486889 125.390154,40.9824165 C125.224393,40.5680206 125.072,40.1482776 124.895545,39.7392288 C121.938583,32.7533162 117.786538,26.3930077 112.704093,20.9042674 C112.369897,20.5460154 112.030355,20.1931105 111.690812,19.8455527 C110.731003,18.848329 109.744458,17.8751671 108.723156,16.942108 C97.1680122,6.42179949 81.8217545,0 64.9996894,0 C48.0359255,0 32.5800516,6.53676093 20.992825,17.2174807 C18.2925253,19.7065296 15.8114579,22.4228278 13.5603169,25.3316195 C5.06907746,36.3144473 0,50.0723907 0,64.9986632 C0,100.842571 29.1605632,130 65.002363,130 C90.2140721,130 112.102541,115.562982 122.877004,94.5277121 C125.181616,90.0308483 126.975578,85.2372237 128.184029,80.2136761 C128.491489,78.9384062 128.756172,77.6577892 128.986098,76.3611311 C129.641121,72.6689974 129.99973,68.8725964 129.99973,64.9986632 C130.002052,64.7740874 129.988685,64.5521851 129.986011,64.3276093 Z M117.751782,38.3489974 L118.128754,37.926581 C118.623364,38.8863753 119.08589,39.8622108 119.527028,40.8514139 L118.912109,40.8273522 L117.751782,40.9877635 L117.751782,38.3489974 L117.751782,38.3489974 Z M108.359551,27.0079177 L108.370246,24.104473 C109.391547,25.1872494 110.375419,26.302108 111.316513,27.4570694 L110.145492,29.2002057 L106.052266,29.1627763 L105.795603,28.3099229 L108.359551,27.0079177 Z M29.9492646,19.7920823 L29.9492646,19.6824679 L31.2512903,19.6824679 L31.36358,19.2359897 L33.4944106,19.2359897 L33.4944106,20.1663753 L32.8821644,20.984473 L29.946591,20.984473 L29.9492646,19.7920823 L29.9492646,19.7920823 Z M32.0292974,22.6928535 C32.0292974,22.6928535 33.3313231,22.4709512 33.4436128,22.4709512 C33.5559025,22.4709512 33.4436128,23.7702828 33.4436128,23.7702828 L30.5080395,23.9547558 L29.9492646,23.2863753 L32.0292974,22.6928535 Z M121.893133,48.4950129 L117.136862,48.4950129 L114.238719,46.3374807 L111.188182,46.6342416 L111.188182,48.4950129 L110.223026,48.4950129 L109.180336,47.7517738 L103.897373,46.4123393 L103.897373,42.9902314 L97.2027686,43.5115681 L95.1280828,44.6264267 L92.4705602,44.6264267 L91.1685345,44.4954242 L87.9415426,46.2866838 L87.9415426,49.6579949 L81.3458601,54.4168638 L81.8939407,56.4487404 L83.2307228,56.4487404 L82.8804859,58.3843702 L81.9393913,58.7292545 L81.8885936,63.7875578 L87.5886322,70.2788689 L90.0696996,70.2788689 L90.2194192,69.8831877 L94.6789241,69.8831877 L95.9649084,68.6934704 L98.4941,68.6934704 L99.8816797,70.0837018 L103.651405,70.474036 L103.151449,75.4868895 L107.335576,82.8738303 L105.13256,87.0846272 L105.282279,89.0683805 L107.017422,90.7981491 L107.017422,95.5677121 L109.295299,98.6315681 L109.295299,102.593728 L111.263042,102.593728 C100.312124,116.038869 83.6451252,124.650283 64.9970159,124.650283 C32.1068308,124.652956 5.34712812,97.8910026 5.34712812,64.9986632 C5.34712812,56.7187661 7.04751486,48.8265296 10.1087457,41.6534704 L10.1087457,39.7926992 L12.2422498,37.2020566 C12.9828271,35.8038046 13.7768756,34.4403085 14.6243954,33.1115681 L14.7206437,34.1943445 L12.2449234,37.2020566 C11.4776105,38.6511054 10.7610953,40.1322365 10.1114193,41.6534704 L10.1114193,45.0488432 L12.5898132,46.2412339 L12.5898132,50.96 L14.9666116,55.0157326 L16.8995984,55.3124936 L17.1482399,53.9222622 L14.8676897,50.4039075 L14.4212045,46.984473 L15.7579866,46.984473 L16.3221086,50.5028278 L19.6186131,55.3124936 L18.7684197,56.8658098 L20.8644939,60.0713625 L26.0699232,61.36 L26.0699232,60.5178406 L28.1526296,60.8146015 L27.9547858,62.3010797 L29.591007,62.6005141 L32.1175251,63.2902828 L35.6867331,67.3567095 L40.2451598,67.7015938 L40.691645,71.4204627 L37.5715957,73.6020566 L37.4245497,76.9225707 L36.9780645,78.9544473 L41.4910407,84.603599 L41.8359304,86.5392288 C41.8359304,86.5392288 43.4721516,86.9830334 43.6726689,86.9830334 C43.8705127,86.9830334 47.3407988,89.6111054 47.3407988,89.6111054 L47.3407988,99.8212853 L48.578659,100.168843 L47.7364863,104.879589 L49.8191927,107.657378 L49.4341995,112.325347 L52.1852969,117.161748 L55.717075,120.246992 L59.2675681,120.311157 L59.6151314,119.169563 L57.0057329,116.971928 L57.1554525,115.881131 L57.6233262,114.54437 L57.7222481,113.180874 L55.9576958,113.127404 L55.067399,112.009871 L56.5325121,110.600925 L56.7303558,109.536864 L55.0941346,109.068997 L55.1903829,108.079794 L57.5217308,107.726889 L61.0668767,106.023856 L62.2566127,103.842262 L65.9755403,99.0833933 L65.1306941,95.3618509 L66.2723059,93.3807712 L69.6917944,93.4850386 L71.993733,91.6616967 L72.7369838,84.480617 L75.2902375,81.237635 L75.7367227,79.1549614 L73.4080484,78.4090488 L71.8707491,75.8879177 L66.6171957,75.8344473 L62.4517829,74.2463753 L62.2539392,71.2760925 L60.8636858,68.8458612 L57.0966341,68.7897172 L54.9203529,65.3729563 L52.9873661,64.4292031 L52.8884442,65.4718766 L49.3700339,65.6804113 L48.0813761,63.8864781 L44.4105726,63.1405656 L41.3867717,66.6348586 L36.6278276,65.827455 L36.2829379,60.4643702 L32.8099782,59.8708483 L34.202905,57.2401028 L33.804544,55.729563 L29.2407701,58.7800514 L26.3693623,58.4298201 L25.3453873,56.1867352 L25.9710013,53.8741388 L27.5537512,50.9573265 L31.197819,49.1125964 L38.2346396,49.1099229 L38.2159247,51.2567609 L40.7451163,52.4331105 L40.544599,48.7650386 L42.3679697,46.9310026 L46.0467938,44.5141388 L46.2981088,42.8137789 L49.9662387,38.9959897 L53.8669687,36.8357841 L53.5220789,36.5523907 L56.1635602,34.0660154 L57.1313904,34.3226735 L57.575202,34.8787661 L58.5777886,33.766581 L58.8237565,33.6569666 L57.7249216,33.5019023 L56.6100454,33.1302828 L56.6100454,32.060874 L57.2009031,31.5769666 L58.5029288,31.5769666 L59.0991336,31.8389717 L59.6151314,32.8816452 L60.2460925,32.7853985 L60.2460925,32.6944987 L60.4278949,32.7559897 L62.2566127,32.4752699 L62.5159484,31.5823136 L63.5586384,31.8443188 L63.5586384,32.8121337 L62.5908082,33.4778406 L62.5934818,33.4778406 L62.7351807,34.5392288 L66.0477266,35.5605141 C66.0477266,35.5605141 66.0504001,35.5738817 66.0557472,35.600617 L66.817713,35.5364524 L66.8685107,34.1007712 L64.2430708,32.9057069 L64.0933512,32.2159383 L66.2723059,31.4726992 L66.3685542,29.3873522 L64.0906777,27.9997943 L63.9409581,24.4841131 L60.8182353,26.0187147 L59.679297,26.0187147 L59.9787361,23.3425193 L55.7277693,22.3399486 L53.9685641,23.6686889 L53.9685641,27.7217481 L50.8057378,28.7243188 L49.5384685,31.3657584 L48.1642566,31.5876607 L48.1642566,28.208329 L45.1912533,27.7966067 L43.7047517,26.8287918 L43.1058733,24.6391774 L48.4235923,21.5271979 L51.0249701,20.7358355 L51.2869794,22.4843188 L52.7360511,22.4094602 L52.8483408,21.5298715 L54.3642516,21.3133162 L54.3909872,21.0058612 L53.7386376,20.7358355 L53.588918,19.8054499 L55.4523922,19.6477121 L56.5779627,18.4767095 L56.6394546,18.3911568 L56.6528224,18.3965039 L56.9950386,18.043599 L60.91181,17.5489974 L62.6442795,19.0194344 L58.1018942,21.4389717 L63.8821397,22.8024679 L64.6307376,20.8695116 L67.1572556,20.8695116 L68.050226,19.1851928 L66.2642852,18.7387147 L66.2642852,16.6079177 L60.6631685,14.1268895 L56.7971949,14.5733676 L54.6155666,15.7149614 L54.7652862,18.4900771 L52.4847361,18.1425193 L52.1344992,16.6079177 L54.318801,14.6241645 L50.3539055,14.4263239 L49.2149672,14.7712082 L48.7203579,16.1079692 L50.2068595,16.3592802 L49.9100939,17.8457584 L47.3835758,17.9954756 L46.9878884,18.9846787 L43.322432,19.0862725 C43.322432,19.0862725 43.2208366,17.0062725 43.0737906,17.0062725 C42.9267446,17.0062725 45.9478719,16.9554756 45.9478719,16.9554756 L48.1321738,14.8220051 L46.9397642,14.2258098 L45.3543407,15.7657584 L42.7235537,15.6160411 L41.1381302,13.4344473 L37.7667659,13.4344473 L34.2483556,16.0625193 L37.4726739,16.0625193 L37.7667659,17.0062725 L36.9299404,17.7842674 L40.4991484,17.8831877 L41.0445555,19.1718252 L37.0261887,19.022108 L36.8310185,18.0302314 L34.3045005,17.4848329 L32.9650449,16.7415938 L29.9572853,16.7656555 C39.8040217,9.5925964 51.9125934,5.3470437 64.9996894,5.3470437 C80.0839379,5.3470437 93.8661606,10.9855013 104.381288,20.2492545 L103.672794,21.5165039 L100.921696,22.5939332 L99.7613694,23.853162 L100.028726,25.3209254 L101.448388,25.5187661 L102.303929,27.6575835 L104.752913,26.671054 L105.156622,29.5317224 L104.418718,29.5317224 L102.408198,29.2349614 L100.178445,29.6092545 L98.0208792,32.6570694 L94.9355862,33.1409769 L94.489101,35.7824165 L95.7911267,36.0898715 L95.4141542,37.7875578 L92.3502498,37.1726478 L89.540334,37.7875578 L88.9441292,39.3515681 L89.4307178,42.634653 L91.0803069,43.4073008 L93.8474457,43.3912596 L95.7162669,43.2228278 L96.2857361,41.7363496 L99.205268,37.9426221 L101.127561,38.3356298 L103.020444,36.6245758 L103.373354,37.9613368 L108.030703,41.1027249 L107.461234,41.8673522 L105.362486,41.7550643 L106.169902,42.8993316 L107.461234,43.1827249 L108.974471,42.5517738 L108.942388,40.7284319 L109.613453,40.3915681 L109.073393,39.8194344 L105.966712,38.0869923 L105.148601,35.78509 L107.731264,35.78509 L108.557395,36.6031877 L110.7818,38.5201028 L110.875375,40.8380463 L113.179987,43.2923393 L114.038201,39.9290488 L115.634319,39.0574807 L115.933758,41.8085347 L117.492446,43.5195887 L120.601801,43.4661183 C121.203353,45.0140874 121.743413,46.5887918 122.216634,48.1955784 L121.893133,48.4950129 Z M35.454133,29.5317224 L37.0154944,28.7884833 L38.4271362,29.125347 L37.9405476,31.020874 L36.4166161,31.5047815 L35.454133,29.5317224 Z M43.739508,33.9938303 L43.739508,35.2209769 L40.1729736,35.2209769 L38.8361915,34.8493573 L39.1703871,33.9938303 L40.8841416,33.285347 L43.2261837,33.285347 L43.2261837,33.9938303 L43.739508,33.9938303 Z M45.3810764,35.7048843 L45.3810764,36.8946015 L44.488106,37.4694087 L43.3759033,37.6752699 C43.3759033,37.6752699 43.3759033,35.8920308 43.3759033,35.7048843 L45.3810764,35.7048843 Z M44.3758163,35.2209769 L44.3758163,33.8066838 L45.6029822,34.9242159 L44.3758163,35.2209769 Z M44.9345912,38.0816452 L44.9345912,39.2392802 L44.0817242,40.0948072 L42.1861673,40.0948072 L42.4829329,38.7954756 L43.3785769,38.7179434 L43.5630528,38.2714653 L44.9345912,38.0816452 Z M40.213077,35.7048843 L42.1834937,35.7048843 L39.6569757,39.2366067 L38.6142857,38.6778406 L38.8388651,37.1913625 L40.213077,35.7048843 Z M48.2818934,37.6752699 L48.2818934,38.8302314 L46.3863365,38.8302314 L45.867665,38.0816452 L45.867665,37.0068895 L46.0173846,37.0068895 L48.2818934,37.6752699 Z M46.5307089,36.0871979 L47.0707689,35.5204113 L47.9824542,36.0871979 L47.2525712,36.6887404 L46.5307089,36.0871979 Z M122.860963,51.5053985 L123.048112,51.2861697 C123.125646,51.6230334 123.208526,51.9598972 123.283386,52.302108 L122.860963,51.5053985 Z" id="Shape"></path>
                <path d="M9.303,38.3279279 L9.303,40 C10.032,38.6354354 10.836,37.3045045 11.697,36 L9.303,38.3279279 Z" id="Path"></path>
            </g>
        </g>
    </g>
</svg>
}

export default LargeLogo
