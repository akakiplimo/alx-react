import React from "react";
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils';

export default function Header() {
    <div className='App-footer'>
        <p>Copyright {getFullYear} - {getFooterCopy(true)}</p>
    </div>
}