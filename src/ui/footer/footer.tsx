import styles from "./footer.module.css";

import Icon from "../icon/icon";

import IconFacebook from "./../../assets/Icon_Facebook.png";
import IconInstagram from "./../../assets/Icon_Instagram.png";
import IconLinkedin from "./../../assets/Icon_LinkedIn.png";
import IconTwitter from "./../../assets/Icon_Twitter.png";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.icons}>
                <Icon title="Facebook" link="#" icon={IconFacebook} />
                <Icon title="Instagram" link="#" icon={IconInstagram} />
                <Icon title="Twitter" link="#" icon={IconTwitter} />
                <Icon title="Linkedin" link="#" icon={IconLinkedin} />
            </div>
            <p className={styles.text}>Copyright ©2020 All rights reserved</p>
        </footer>
    );
}
