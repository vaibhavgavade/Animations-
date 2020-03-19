import React from 'react';
import {View, Text, Button, ScrollView} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      <Button
        title="AutoScrolling "
        onPress={() => navigation.navigate('scrolling')}
      />
      <Button
        title="ProgressBar"
        onPress={() => navigation.navigate('progress')}
      />
      <Button title="bringP " onPress={() => navigation.navigate('bringP')} />
      <Button title="First" onPress={() => navigation.navigate('One')} />
      <Button title="Second" onPress={() => navigation.navigate('Two')} />
      <Button title="Third" onPress={() => navigation.navigate('Three')} />
      <Button title="Fourth" onPress={() => navigation.navigate('scale')} />
      <Button title="Fifth" onPress={() => navigation.navigate('width')} />
      <Button title="Absolute" onPress={() => navigation.navigate('Abs')} />
      <Button
        title="Intepolate"
        onPress={() => navigation.navigate('interpolate')}
      />
      <Button
        title="Rotation"
        onPress={() => navigation.navigate('rotation')}
      />
      <Button title="percentage" onPress={() => navigation.navigate('per')} />
      <Button title="Eeasing" onPress={() => navigation.navigate('ease')} />
      <Button title="Event" onPress={() => navigation.navigate('event')} />
      <Button title="Decay" onPress={() => navigation.navigate('decay')} />
      <Button title="Add" onPress={() => navigation.navigate('add')} />
      <Button title="paralle" onPress={() => navigation.navigate('parallel')} />
      <Button
        title="IntpInterP"
        onPress={() => navigation.navigate('interPInterP')}
      />
      <Button
        title="AnimatedComponent"
        onPress={() => navigation.navigate('CreateComp')}
      />
      <Button
        title="PointerEvents"
        onPress={() => navigation.navigate('pointerEvent')}
      />
      <Button title="Corners" onPress={() => navigation.navigate('corners')} />
      <Button
        title="Gradient"
        onPress={() => navigation.navigate('gradient')}
      />
      <Button title="All" onPress={() => navigation.navigate('all')} />
      <Button
        title="FillButton"
        onPress={() => navigation.navigate('FillButton')}
      />
      <Button
        title="HeartButton"
        onPress={() => navigation.navigate('heart')}
      />
    </ScrollView>
  );
};

export default HomeScreen;
