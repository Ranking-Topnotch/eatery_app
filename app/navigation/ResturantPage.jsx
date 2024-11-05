import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Menu from '../screens/resturant/Menu'
import Direction from '../screens/resturant/Direction'
import New from '../screens/resturant/New'


const renderScene = SceneMap({
  first: Menu,
  second: Direction,
  third: New
});

const ResturantPage = () =>   {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Menu' },
    { key: 'second', title: 'Directions' },
    { key: 'third', title: 'New' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

export default ResturantPage;