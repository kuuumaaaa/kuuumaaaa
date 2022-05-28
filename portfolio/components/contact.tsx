import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FacebookShareButton,LinkedinShareButton,EmailShareButton } from 'react-share';
import { FacebookIcon,LinkedinIcon,EmailIcon } from 'react-share';

import styles from '../styles/icon.css';


export const Contact = () => {
    return(
        <div className="flex justify-center list-none">
          <h2 className="text-center">Contact</h2>
        <div className="mr-8">
          <FacebookShareButton url="https://m.facebook.com/takuma.waki.9" title="Facebook">
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <LinkedinShareButton url="https://www.linkedin.com/in/takuma-waki-5349251b1/" title="Linkedin">
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
          <Link href="https://github.com/kuuumaaaa">
            <Image src="/GitHub-Mark.png" width={32} height={32}/>
          </Link>
          <EmailShareButton url="kuuumaaaa520@gmail.com" title="Email">
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
        </div>
      </div>
    )
}

