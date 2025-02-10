import Header from './header';
import './App.css';
import Image from './image';
import { Theme } from '@radix-ui/themes';
import Itemlist from './Itemlist';
import Cardlist from './Cardlist';
import Subscribe from './subscribe';
import Footer from './footer';

function App() {
  return (
    <div>
      <Theme accentColor="gray" grayColor="sage" scaling="100%" appearance='dark'>
        <div><Header /></div>
        <Image />
        <Cardlist />
        <Itemlist />
        <Subscribe />
        <Footer />
      </Theme>
    </div>
  );
}

export default App;
