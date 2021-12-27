import React from 'react';
import insta from '../../img/icon/icons8-instagram-48.png'
import fb from '../../img/icon/icons8-facebook-50.png'
import "./Footer.css"

const Footer = () => {
    return (
        <div className={'Footer'}>
            <div className="Footer__copyright">©Express</div>
            <div className="Footer__developer">developed by: <a href="https://t.me/Grib_Denis" target="_blank">Grib_Denis</a></div>
            <div className="Footer__icon">
                <a href="https://www.instagram.com/express_sl/?hl=ru" target="_blank"><img src={insta} alt="Instagram" title={"Instagram"}/></a>
                <a target="_blank" href="https://www.facebook.com/%D0%9A%D0%B0%D1%84%D0%B5-%D0%A0%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD-%D0%AD%D0%BA%D1%81%D0%BF%D1%80%D0%B5%D1%81-106456251441342/">
                    <img src={fb} alt="Instagram" title={"Facebook"}/></a>
            </div>
        </div>
    );
};

export default Footer;