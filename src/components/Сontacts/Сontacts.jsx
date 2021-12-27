import React from 'react';
import "./Сontacts.css"
import insta from '../../img/icon/icons8-instagram-48.png'
import fb from '../../img/icon/icons8-facebook-50.png'


const Contacts = () => {
    return (
        <div className="Contacts">
            <div className="Contacts__info">
                <div className="info">
                    <h6>Наш телефон</h6>
                    <span>+38(098)-932-13-05</span>
                </div>
                <div className="info">
                    <h6>Наша Адреса</h6>
                    <span>Словечне, Житомирська область, 11122</span>
                </div>
                <div className="info">
                    <h6>Приєднуйтесь:</h6>
                    <span>
                        <a href="https://www.instagram.com/express_sl/?hl=ru" target="_blank"><img src={insta}
                                                                                                   alt="Instagram"
                                                                                                   title={"Instagram"}/></a>
                        <a target="_blank"
                           href="https://www.facebook.com/%D0%9A%D0%B0%D1%84%D0%B5-%D0%A0%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD-%D0%AD%D0%BA%D1%81%D0%BF%D1%80%D0%B5%D1%81-106456251441342/">
                            <img src={fb} alt="Instagram" title={"Instagram"}/></a>
                    </span>
                </div>
                <div className="info">
                    <h6>Написати на почту</h6>
                    <span>expres@gmail.com</span>
                </div>
            </div>
            <div className="Contacts__map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d306.81818924468456!2d28.348043831296632!3d51.380770162901605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1a53bf8e9c8f506b!2zNTHCsDIyJzUwLjkiTiAyOMKwMjAnNTIuNyJF!5e1!3m2!1sru!2sua!4v1639655544445!5m2!1sru!2sua"
                    width="90%" height="350" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
    );
};

export default Contacts;