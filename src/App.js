import Header from './components/Header'
import MenuContainer from './components/MenuContainer'
import './App.css';
import { HomeRounded, Chat, AccountBalanceWalletRounded, Favorite, SummarizeRounded, Settings } from '@mui/icons-material';

function App() {
  return (
    <div className="App">
      {/* header section  */}
      <Header />
      {/* main section  */}
      <main>
        <div className="mainContainer"></div>
        <div className="righ-menu"></div>
      </main>
      {/* bottom menu  */}
      <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer link={'#'} icon={ <HomeRounded/>} />
          <MenuContainer link={'#'} icon={ <Chat />} />
          <MenuContainer link={'#'} icon={ <AccountBalanceWalletRounded/>} />
          <MenuContainer link={'#'} icon={ <Favorite/>} />
          <MenuContainer link={'#'} icon={ <SummarizeRounded/>} />
          <MenuContainer link={'#'} icon={ <Settings/>} />

          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
