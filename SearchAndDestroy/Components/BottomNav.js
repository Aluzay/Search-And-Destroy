import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import FuseBomb from '../Screens/fuseBomb';
import StartGame from '../Screens/startGame';
import DefuseBomb from '../Screens/defuseBomb';
import { StyleSheet } from 'react-native';

const PlayRoute = () => <StartGame/>;

const AlbumsRoute = () => <FuseBomb/>;

const StatsRoute = () => <DefuseBomb/>;

const RulesRoute = () => <Text>Notifications</Text>;

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'play', title: 'Play', focusedIcon: 'play', unfocusedIcon: 'play-outline' },
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'stats', title: 'Stats', focusedIcon: 'align-vertical-bottom' },
    { key: 'rules', title: 'Rules', focusedIcon: 'book-open-page-variant', unfocusedIcon: 'book-open-page-variant-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    play: PlayRoute,
    albums: AlbumsRoute,
    stats: StatsRoute,
    rules: RulesRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={styles.bottomNav}
      activeColor='#5f8467'
      inactiveColor='#fff'
      activeIndicatorStyle={{ backgroundColor: '#94b29a' }}
    />
  );
};

const styles = StyleSheet.create(
  {
    bottomNav: {
      backgroundColor: '#222',
    },
  }
);

export default BottomNav;