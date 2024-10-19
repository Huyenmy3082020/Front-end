import React from 'react';

export const IconStart = () => {
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0" // Sử dụng camelCase cho strokeWidth
            viewBox="0 0 24 24"
            size="16"
            color="#FFC400"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: 'rgb(255, 196, 0)' }} // Sử dụng đối tượng cho style
        >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
        </svg>
    );
};
export const Discount = () => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="coupon-icon"
        >
            <g clip-path="url(#clip0_1392_114948)">
                <path
                    d="M7.9165 9.16659C8.60686 9.16659 9.1665 8.60694 9.1665 7.91659C9.1665 7.22623 8.60686 6.66659 7.9165 6.66659C7.22615 6.66659 6.6665 7.22623 6.6665 7.91659C6.6665 8.60694 7.22615 9.16659 7.9165 9.16659Z"
                    fill="#0A68FF"
                ></path>
                <path
                    d="M13.3332 12.0833C13.3332 12.7736 12.7735 13.3333 12.0832 13.3333C11.3928 13.3333 10.8332 12.7736 10.8332 12.0833C10.8332 11.3929 11.3928 10.8333 12.0832 10.8333C12.7735 10.8333 13.3332 11.3929 13.3332 12.0833Z"
                    fill="#0A68FF"
                ></path>
                <path
                    d="M12.2558 8.92251C12.5812 8.59707 12.5812 8.06943 12.2558 7.744C11.9303 7.41856 11.4027 7.41856 11.0772 7.744L7.74392 11.0773C7.41848 11.4028 7.41848 11.9304 7.74392 12.2558C8.06935 12.5813 8.59699 12.5813 8.92243 12.2558L12.2558 8.92251Z"
                    fill="#0A68FF"
                ></path>
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.33317 3.33325C2.4127 3.33325 1.6665 4.07944 1.6665 4.99992V7.64295C1.6665 7.86396 1.7543 8.07592 1.91058 8.23221L2.49978 8.82141C3.15066 9.47228 3.15066 10.5276 2.49978 11.1784L1.91058 11.7676C1.7543 11.9239 1.6665 12.1359 1.6665 12.3569V14.9999C1.6665 15.9204 2.4127 16.6666 3.33317 16.6666L16.6665 16.6666C17.587 16.6666 18.3332 15.9204 18.3332 14.9999V12.3569C18.3332 12.127 18.2387 11.9125 18.0798 11.7584L17.4998 11.1784C16.8489 10.5276 16.8489 9.47228 17.4998 8.82141L18.0798 8.24143C18.2387 8.08737 18.3332 7.87288 18.3332 7.64295V4.99992C18.3332 4.07945 17.587 3.33325 16.6665 3.33325H3.33317ZM16.3213 12.3569L16.6665 12.7022V14.9999H3.33317V12.7021L3.6783 12.3569C4.98004 11.0552 4.98004 8.94464 3.6783 7.6429L3.33317 7.29777V4.99992L16.6665 4.99992V7.29766L16.3213 7.6429C15.0195 8.94464 15.0195 11.0552 16.3213 12.3569Z"
                    fill="#0A68FF"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_1392_114948">
                    <rect width="16.6667" height="16.6667" fill="white" transform="translate(1.6665 1.66663)"></rect>
                </clipPath>
            </defs>
        </svg>
    );
};
export const Laixe = () => {
    return (
        <svg
            className="fulfillment-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 4.5C3 4.08579 3.33579 3.75 3.75 3.75H10.5C10.9142 3.75 11.25 4.08579 11.25 4.5V6.75H16.5C16.8442 6.75 17.1441 6.98422 17.2276 7.3181L17.8939 9.98345L20.5854 11.3292C20.8395 11.4562 21 11.7159 21 12V16.5C21 16.9142 20.6642 17.25 20.25 17.25H17.25C17.25 18.9069 15.9069 20.25 14.25 20.25C12.5931 20.25 11.25 18.9069 11.25 17.25H10.5C10.0858 17.25 9.75 16.9142 9.75 16.5V5.25H3.75C3.33579 5.25 3 4.91421 3 4.5ZM12.8306 16.7635C12.834 16.7546 12.8372 16.7455 12.8402 16.7364C13.0499 16.1609 13.602 15.75 14.25 15.75C14.898 15.75 15.4501 16.1609 15.6598 16.7364C15.6628 16.7455 15.666 16.7546 15.6694 16.7635C15.7216 16.9161 15.75 17.0797 15.75 17.25C15.75 18.0784 15.0784 18.75 14.25 18.75C13.4216 18.75 12.75 18.0784 12.75 17.25C12.75 17.0797 12.7784 16.9161 12.8306 16.7635ZM16.8487 15.75C16.3299 14.8533 15.3604 14.25 14.25 14.25C13.1396 14.25 12.1701 14.8533 11.6513 15.75H11.25V8.25H15.9144L16.5224 10.6819C16.5755 10.8943 16.7188 11.0729 16.9146 11.1708L19.5 12.4635V15.75H16.8487ZM3 8.25C3 7.83579 3.33579 7.5 3.75 7.5H7.5C7.91421 7.5 8.25 7.83579 8.25 8.25C8.25 8.66421 7.91421 9 7.5 9H3.75C3.33579 9 3 8.66421 3 8.25ZM13.5 9C13.9142 9 14.25 9.33579 14.25 9.75V10.5H15C15.4142 10.5 15.75 10.8358 15.75 11.25C15.75 11.6642 15.4142 12 15 12H13.5C13.0858 12 12.75 11.6642 12.75 11.25V9.75C12.75 9.33579 13.0858 9 13.5 9ZM4.5 12C4.5 11.5858 4.83579 11.25 5.25 11.25H7.5C7.91421 11.25 8.25 11.5858 8.25 12C8.25 12.4142 7.91421 12.75 7.5 12.75H5.25C4.83579 12.75 4.5 12.4142 4.5 12ZM6 15.75C6 15.3358 6.33579 15 6.75 15H7.5C7.91421 15 8.25 15.3358 8.25 15.75C8.25 16.1642 7.91421 16.5 7.5 16.5H6.75C6.33579 16.5 6 16.1642 6 15.75Z"
                fill="#38383D"
            ></path>
        </svg>
    );
};

// user
const svgStyle = {
    width: '24px',
    height: '24px',
    margin: '0px 22px 0px 0px',
    fontSize: '24px',
    color: 'rgb(155, 155, 155)',
};

export const User = ({ size = 24, color = 'rgb(155, 155, 155)' }) => {
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            style={{
                ...svgStyle,
                width: `${size}px`,
                height: `${size}px`,
                color: color,
            }}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
        </svg>
    );
};

export const Bell = () => {
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            style={svgStyle}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
        </svg>
    );
};

export const QuanLiDonHang = () => {
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            style={svgStyle}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path>
        </svg>
    );
};

export const SoDiaChi = () => {
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            style={svgStyle}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
        </svg>
    );
};

export const ThongTinThanhToan = () => {
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            style={svgStyle}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
        </svg>
    );
};

export const SanPhamDaXem = () => {
    return (
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            style={svgStyle}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
        </svg>
    );
};

export const QuanLiTiKi = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.4502 1.04387C12.7301 0.179997 10.7547 -0.155053 8.8445 0.0662299C5.15543 0.450037 1.83253 3.08668 0.598636 6.58095C-0.25034 8.90254 -0.195333 11.5417 0.757405 13.8245C1.64114 15.9761 3.30758 17.7926 5.37158 18.8665C7.23943 19.8479 9.42581 20.208 11.5098 19.8842C13.3552 19.6116 15.1115 18.7965 16.5205 17.5776C18.1307 16.2011 19.2832 14.2983 19.7495 12.2305C20.256 10.0265 19.9897 7.65236 18.9932 5.62205C18.037 3.65176 16.4118 2.01652 14.4502 1.04387Z"
                fill="#FDD835"
            ></path>
            <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.9817 1.98661C12.4427 1.21366 10.6753 0.913881 8.96611 1.11187C5.66537 1.45528 2.69225 3.81438 1.58823 6.94083C0.828624 9.01805 0.87784 11.3794 1.73029 13.4219C2.521 15.347 4.01203 16.9723 5.85876 17.9332C7.62825 18.8268 9.69627 19.1703 11.6821 18.8171C13.1771 18.5389 14.6988 17.755 15.8419 16.5868C17.3501 15.0914 18.3397 12.9915 18.7526 10.7893C19.2445 8.65957 18.8315 6.5591 17.8414 4.79677C16.8183 3.05937 15.1288 1.68235 13.9817 1.98661Z"
                fill="#FBC02D"
            ></path>
            <path
                d="M13.5605 10.3046C13.2586 10.3046 12.9636 10.5307 12.9636 10.8043V14.3743C12.9636 14.6478 13.2586 14.873 13.5605 14.873C13.8624 14.873 14.1574 14.6478 14.1574 14.3743V10.8043C14.1574 10.5307 13.8624 10.3046 13.5605 10.3046Z"
                fill="white"
            ></path>
            <path
                d="M13.5605 16.3331C13.2586 16.3331 12.9636 16.5592 12.9636 16.8328C12.9636 17.1064 13.2586 17.3325 13.5605 17.3325C13.8624 17.3325 14.1574 17.1064 14.1574 16.8328C14.1574 16.5592 13.8624 16.3331 13.5605 16.3331Z"
                fill="white"
            ></path>
            <path
                d="M6.44088 10.8043C6.44088 10.5307 6.14591 10.3046 5.84397 10.3046C5.54204 10.3046 5.24707 10.5307 5.24707 10.8043V14.3743C5.24707 14.6478 5.54204 14.873 5.84397 14.873C6.14591 14.873 6.44088 14.6478 6.44088 14.3743V10.8043Z"
                fill="white"
            ></path>
            <path
                d="M5.84397 16.3331C5.54204 16.3331 5.24707 16.5592 5.24707 16.8328C5.24707 17.1064 5.54204 17.3325 5.84397 17.3325C6.14591 17.3325 6.44088 17.1064 6.44088 16.8328C6.44088 16.5592 6.14591 16.3331 5.84397 16.3331Z"
                fill="white"
            ></path>
        </svg>
    );
};
export const Facebook = () => {
    return (
        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 16.6665C0 7.82995 7.16344 0.666504 16 0.666504C24.8366 0.666504 32 7.82995 32 16.6665C32 25.5031 24.8366 32.6665 16 32.6665C7.16344 32.6665 0 25.5031 0 16.6665Z"
                fill="#3B5998"
            ></path>
            <path
                d="M17.6676 26.0742V17.3693H20.0706L20.389 14.3696H17.6676L17.6717 12.8682C17.6717 12.0858 17.7461 11.6666 18.8698 11.6666H20.372V8.6665H17.9687C15.082 8.6665 14.066 10.1217 14.066 12.5689V14.3699H12.2666V17.3696H14.066V26.0742H17.6676Z"
                fill="white"
            ></path>
        </svg>
    );
};
export const Youtube = () => {
    return (
        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 16.6665C0 7.82995 7.16344 0.666504 16 0.666504C24.8366 0.666504 32 7.82995 32 16.6665C32 25.5031 24.8366 32.6665 16 32.6665C7.16344 32.6665 0 25.5031 0 16.6665Z"
                fill="#FF0000"
            ></path>
            <path
                d="M24.1768 12.7153C23.9805 11.9613 23.4022 11.3675 22.6679 11.166C21.3371 10.7998 16.0001 10.7998 16.0001 10.7998C16.0001 10.7998 10.6632 10.7998 9.3323 11.166C8.59795 11.3675 8.01962 11.9613 7.82335 12.7153C7.4668 14.0818 7.4668 16.9331 7.4668 16.9331C7.4668 16.9331 7.4668 19.7843 7.82335 21.151C8.01962 21.905 8.59795 22.4987 9.3323 22.7003C10.6632 23.0665 16.0001 23.0665 16.0001 23.0665C16.0001 23.0665 21.3371 23.0665 22.6679 22.7003C23.4022 22.4987 23.9805 21.905 24.1768 21.151C24.5335 19.7843 24.5335 16.9331 24.5335 16.9331C24.5335 16.9331 24.5335 14.0818 24.1768 12.7153Z"
                fill="white"
            ></path>
            <path d="M14.3999 19.8665V14.5332L18.6666 17.2L14.3999 19.8665Z" fill="#FF0000"></path>
        </svg>
    );
};
export const Zalo = () => {
    return (
        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 16.6665C0 7.82995 7.16344 0.666504 16 0.666504C24.8366 0.666504 32 7.82995 32 16.6665C32 25.5031 24.8366 32.6665 16 32.6665C7.16344 32.6665 0 25.5031 0 16.6665Z"
                fill="#3171F6"
            ></path>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.0002 5.99984C10.1091 5.99984 5.3335 10.4556 5.3335 15.9522C5.3335 19.0351 6.83597 21.7903 9.19473 23.6158V27.3332L12.8261 25.4565C13.8287 25.7477 14.8948 25.9046 16.0002 25.9046C21.8912 25.9046 26.6668 21.4488 26.6668 15.9522C26.6668 10.4556 21.8912 5.99984 16.0002 5.99984ZM9.87701 18.0804C10.6612 18.0804 11.3932 18.0759 12.125 18.0821C12.5362 18.0856 12.7584 18.2607 12.7962 18.5845C12.8442 18.9944 12.605 19.2664 12.1609 19.2714C11.3233 19.2809 10.4855 19.275 9.64768 19.275C9.40587 19.275 9.16349 19.2835 8.92244 19.2696C8.62187 19.2523 8.32787 19.1928 8.18415 18.8827C8.04006 18.5719 8.14015 18.293 8.33911 18.04C9.13968 17.0219 9.9412 16.0047 10.7422 14.9869C10.7898 14.9265 10.8357 14.8648 10.882 14.8043C10.833 14.7159 10.7554 14.7555 10.6949 14.7551C10.1336 14.7516 9.57215 14.7556 9.01082 14.7511C8.88254 14.7501 8.75044 14.7398 8.62701 14.7074C8.36663 14.6391 8.20854 14.4307 8.20644 14.182C8.20434 13.9329 8.35768 13.722 8.61749 13.6487C8.74025 13.6141 8.87282 13.6021 9.00111 13.6016C9.9252 13.5978 10.8493 13.5981 11.7734 13.6011C11.9367 13.6016 12.1011 13.6058 12.2597 13.6606C12.6101 13.7815 12.7643 14.1045 12.6219 14.4465C12.4978 14.7442 12.3001 14.9973 12.1027 15.2486C11.4252 16.1108 10.7452 16.9709 10.0663 17.8322C10.0136 17.899 9.96292 17.9676 9.87701 18.0804ZM14.0567 17.2472C14.0617 17.4255 14.1205 17.6652 14.2747 17.8732C14.6102 18.3257 15.2984 18.3243 15.6337 17.8723C15.9242 17.4805 15.9227 16.8304 15.6319 16.4389C15.4782 16.2321 15.273 16.1238 15.0169 16.1087C14.4487 16.0753 14.0509 16.5148 14.0567 17.2472ZM15.8889 15.3525C16.0151 15.1936 16.1404 15.0439 16.3538 15.0005C16.7609 14.9174 17.147 15.182 17.1525 15.596C17.1661 16.6319 17.161 17.668 17.1549 18.7041C17.1532 18.987 16.9789 19.2039 16.7239 19.2906C16.4567 19.3814 16.1783 19.3152 15.9998 19.09C15.9124 18.9797 15.875 18.9607 15.7531 19.0596C15.2812 19.4422 14.7489 19.5091 14.1735 19.3225C13.2505 19.023 12.8705 18.3038 12.7703 17.4228C12.6626 16.4766 12.9776 15.6645 13.8246 15.1666C14.5277 14.7532 15.2421 14.788 15.8889 15.3525ZM20.7838 17.1508C20.7824 17.416 20.8448 17.6634 21.0047 17.8783C21.3324 18.3189 22.0136 18.3224 22.348 17.8879C22.6494 17.4962 22.6504 16.8305 22.353 16.4346C22.1979 16.2282 21.9918 16.1217 21.7364 16.1082C21.1766 16.0785 20.7862 16.5065 20.7838 17.1508ZM19.4806 17.276C19.4411 15.9452 20.3142 14.9509 21.556 14.9127C22.8756 14.8721 23.8436 15.7594 23.883 17.0529C23.9229 18.3626 23.1194 19.2917 21.8803 19.416C20.5341 19.5509 19.4614 18.57 19.4806 17.276ZM19.0266 16.2455C19.0266 17.0484 19.0306 17.8513 19.025 18.6542C19.0218 19.1134 18.6166 19.4239 18.1809 19.3139C17.9192 19.2479 17.7236 18.9703 17.7231 18.6468C17.7211 17.2741 17.7223 15.9014 17.7223 14.5287C17.7223 14.287 17.7189 14.0451 17.7231 13.8035C17.7301 13.4051 17.9837 13.1465 18.3649 13.1428C18.7586 13.1389 19.0226 13.3985 19.0252 13.811C19.0302 14.6225 19.0266 15.434 19.0266 16.2455Z"
                fill="white"
            ></path>
        </svg>
    );
};
