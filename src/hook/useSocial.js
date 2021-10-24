import { useContext } from 'react';
import SocialContext from '../context/SocialContext';

const useSocial = () => useContext(SocialContext);

export default useSocial;