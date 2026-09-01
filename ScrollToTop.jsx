import {useLocation} from 'react-router-dom';
import {useLayoutEffect} from 'react';
export default function ScrollToTop(){const {pathname,hash}=useLocation();useLayoutEffect(()=>{if(hash){const t=document.getElementById(hash.slice(1));if(t){t.scrollIntoView({behavior:'smooth',block:'start'});return;}}window.scrollTo({top:0,left:0,behavior:'instant'});},[pathname,hash]);return null;}
