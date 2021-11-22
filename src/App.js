import HomePage from "./Pages/HomePage";
import Class from './Pages/Class'
import Footer from "./Components/Footer";
import Heroes from './Pages/Heroes'
import {
  HashRouter as Router,
  Route, Switch
} from 'react-router-dom'
import Hero from "./Pages/Hero";
import Search from "./Pages/Search";
import NavBarV2 from "./Components/NavBarV2";
import AddDataV2 from "./Pages/AddDataV2";
import Error404 from "./Pages/Error404";
import ScrollToTop from "./Components/ScrollToTop";
import Tanks from "./Pages/Tanks";
import Mage from "./Pages/Mage"
import Marksman from "./Pages/Marksman";
import Assassin from "./Pages/Assassin";
import Fighter from "./Pages/Fighter";
import Support from "./Pages/Support";
import Test from "./Pages/Test";


function App() {
  return (
    <div className=''>
      <Router >
        <ScrollToTop />
        <div className='bg-hero-pattern  bg-fixed bg-cover font-Gidole  '>
          <NavBarV2 />
          <div className='bg-blue-500 bg-opacity-0  mx-auto mt-16  h-full '>
            <div className=' mx-auto md:p-0 bg-green-300 sm:bg-transparent bg-opacity-90 sm:backdrop-filter sm:backdrop-blur-md '>
              {/*backdrop-filter backdrop-blur-md*/}
              <Switch>
                <Route path='/' exact>
                  <HomePage />
                </Route>
                <Route path='/heroes' exact>
                  <Heroes />
                </Route>
                <Route path='/class' exact>
                  <Class />
                </Route>
                <Route path='/hero-profile/:hero' exact>
                  <Hero />
                </Route>
                <Route path='/search' exact>
                  <Search />
                </Route>
                <Route path='/requireAdminAccess' exact>
                  <AddDataV2 />
                </Route>
                <Route path='/tank' exact component={Tanks} />
                <Route path='/mage' exact component={Mage} />
                <Route path='/marksman' exact component={Marksman} />
                <Route path='/assassin' exact component={Assassin} />
                <Route path='/fighter' exact component={Fighter} />
                <Route path='/support' exact component={Support} />
                <Route path='/test' exact component={Test} />
                <Route component={Error404} />
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
