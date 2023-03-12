import styles from './style'
import {Footer, Navbar,Account, Hero,Spend,Manage, 
  Premium, Plus, Abroad,Flex,Loan,Safe,Independent, Compare,Help, Explore, Join, Save} from "./components";


const App = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
            <Explore/>
          </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}m`}>
        <Hero/> 
        </div>
      </div>
      <div>
        <Join/>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Account/>
          <Save/>
          <Spend/>
          <Manage/>
          <Premium/>
          <Plus/>
          <Abroad/>
          <Flex/>
          <Loan/>
          <Safe/>
          <Independent/>
          <Compare/>
          <Help/>
          <Footer/> 
        </div>
      </div>
    </div>
  );

export default App