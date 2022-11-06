import classNames from "classnames"

import style from "./accept-style.module.sass";

interface PropsType {
    externalStyles?: typeof style,
    acceptMessage?: string,
}

const Accept = (props: PropsType) => {
    const { externalStyles, acceptMessage } = props;
    return (
        <div className={classNames(style.root, externalStyles?.["accept-block"])}>
            <svg
                className={classNames(style.accept, externalStyles?.["accept-img"])}
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                /* fill="#17daa3" */
                viewBox="0 0 28 28"
            >
                <path
                    d="M6.653 14.03a.922.922 0 111.304-1.304l3.703 3.704 7.778-7.778a.922.922 0 111.304 1.304l-8.375 8.375a1 1 0 01-1.415 0l-4.3-4.3z"
                ></path>
                <path
                    fillRule="evenodd"
                    d="M14 1C6.82 1 1 6.82 1 14s5.82 13 13 13 13-5.82 13-13S21.18 1 14 1zM3 14C3 7.925 7.925 3 14 3s11 4.925 11 11-4.925 11-11 11S3 20.075 3 14z"
                    clipRule="evenodd"
                ></path>
            </svg>
            {acceptMessage ? <div className={classNames(style.message, externalStyles?.["accept-message"])}>{acceptMessage}</div> : null} 
        </div>
    );
}

export default Accept;