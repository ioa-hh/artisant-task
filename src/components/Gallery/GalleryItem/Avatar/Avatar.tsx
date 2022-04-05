import React, {ReactEventHandler, useState} from "react";
import { AvatarType } from "../../../../types/types";

type AvatarProps = {
    avatar: AvatarType;
    className: string;
}
export const Avatar: React.FC<AvatarProps> = ({avatar, className}) => {

    const previewPicture = `https://cdn.artisant.io/api/files/630x819/${avatar.original}`;
    const reservePreviewPicture = `https://cdn.artisant.io/api/files/630x819/${avatar.compressed}`;

    const [displayPicture, setDisplayPicture] = useState(previewPicture);

    const onError: ReactEventHandler<HTMLImageElement | HTMLVideoElement> = ({currentTarget}) => {
        // if picture isn't load
        // try to show reserve picture
        currentTarget.onerror = null;
        setDisplayPicture(reservePreviewPicture);
    }

    return (
        <React.Fragment>
            {
                displayPicture.includes("mp4")
                    ? <video className={className}
                             src={displayPicture}
                             autoPlay={true}
                             muted={true}
                             loop={true}
                             onError={onError}/>
                    : <img className={className}
                           src={displayPicture}
                           alt="item"
                           onError={onError}/>
            }
        </React.Fragment>
    );
}

