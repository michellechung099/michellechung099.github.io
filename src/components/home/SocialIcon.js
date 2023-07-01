import React from 'react';

function SocialIcon(props) {
    const {link, icon, label, size, marginTop} = props;

    const isReactComponent = typeof icon === 'function' || (typeof icon === 'object' && icon !== null);

    const iconStyle = {...(size ? { fontSize: size } : {}), ...(marginTop ? { marginTop: marginTop } : {})};

    return (
        <a target="_blank" aria-label={label}
           rel="noopener noreferrer" href={link}>
           {isReactComponent
              ? React.createElement(icon, { style: iconStyle })
              : <i className={icon} aria-hidden="true"/>
           }
        </a>
    );
}

export default SocialIcon;
