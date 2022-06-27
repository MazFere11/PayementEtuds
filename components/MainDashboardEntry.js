import Search from "../pages/Search"
import Statut from "../pages/Statut"
import InactivityTest from "./InactivityTest"

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator;

const MainDashboardEntry = () =>{

  /*  <InactivityTest >
    <Search />
    <Statut />
  </InactivityTest>*/
    return(
        <Tab.Navigator>
          <Tab.Screen name="InactivityTest" component={InactivityTest} />
      </Tab.Navigator>
    )
}
export default MainDashboardEntry