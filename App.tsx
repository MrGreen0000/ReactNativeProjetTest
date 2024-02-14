import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {PropsWithChildren, useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
    // <PreviewLayout
    //   label="direction"
    //   selectedValue={direction}
    //   values={['ltr', 'rtl']}
    //   setSelectedValue={setDirection}>
    //   <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
    //   <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
    //   <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
    // </PreviewLayout>
  );
};

const HomeScreen = ({navigation}: any) => {
  return (
    <View>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      />
      <Button
        title="Go to Test"
        onPress={() => navigation.navigate('Test', {name: 'test'})}
      />
    </View>
  );
};

const ProfileScreen = ({navigation, route}: any) => {
  const [direction, setDirection] = useState('ltr');
  return (
    <View>
      <Text>This is {route.params.name}'s profile</Text>
      <PreviewLayout
        label="direction"
        selectedValue={direction}
        values={['ltr', 'rtl']}
        setSelectedValue={setDirection}>
        <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
        <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
        <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
      </PreviewLayout>
    </View>
  );
};

const Test = ({route}: any) => {
  return <Text>Test {route.params.name}</Text>;
};

type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}>;

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}: PreviewLayoutProps) => (
  <View style={{padding: 10, flex: 1}}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map(value => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}>
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});

export default App;
