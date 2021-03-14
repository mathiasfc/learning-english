/* eslint-disable react/react-in-jsx-scope */
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { routes } from './routes';

const MENU_ITEMS = [
  {
    id: 0,
    title: 'Home',
    href: routes.home.path,
    icon: <HomeOutlinedIcon />
  },
  {
    id: 1,
    title: 'Portfólio',
    href: routes.projects.path,
    icon: <WorkOutlineOutlinedIcon />
  },
  {
    id: 2,
    title: 'Contato',
    href: routes.contact.path,
    icon: <EmailOutlinedIcon />
  },
  {
    id: 3,
    title: 'Sobre',
    href: routes.about.path,
    icon: <InfoOutlinedIcon />
  }
];

export default MENU_ITEMS;
