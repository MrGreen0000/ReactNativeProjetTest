import React, {PropsWithChildren, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  const [flexDirection, setFlexDirection] = useState('column');

  return (
    // <ScrollView>
    //   <View style={styles.container}>
    //     <Text style={styles.textBlue}>Hello world !!!{'\n'}</Text>
    //     <Text style={styles.textRed}>Hello world !!! {'\n'}</Text>
    //     <Text style={styles.textPurple}>Hello world !!!{'\n'}</Text>
    //     <Text style={styles.textBlack}>Hello world !!! {'\n'}</Text>
    //   </View>
    //   <View
    //     style={{
    //       width: 50,
    //       height: 50,
    //       backgroundColor: 'powderblue',
    //     }}></View>
    //   <View
    //     style={{
    //       width: 100,
    //       height: 100,
    //       backgroundColor: 'skyblue',
    //     }}></View>
    //   <View
    //     style={{
    //       width: 150,
    //       height: 150,
    //       backgroundColor: 'steelblue',
    //     }}></View>
    // </ScrollView>
    // <View style={{flex: 1}}>
    //   <View style={{flex: 1, backgroundColor: 'powderblue'}} />
    //   <View style={{flex: 2, backgroundColor: 'skyblue'}} />
    //   <View style={{flex: 3, backgroundColor: 'steelblue'}} />
    // </View>
    // <View style={{height: '100%'}}>
    //   <View style={{height: '20%', backgroundColor: 'red'}} />
    //   <View style={{height: '30%', width: '66%', backgroundColor: 'yellow'}} />
    //   <View style={{height: '50%', width: '33%', backgroundColor: 'green'}} />
    // </View>

    // <View
    //   style={[
    //     styles.container,
    //     {
    //       flexDirection: 'column',
    //     },
    //   ]}>
    //   <View style={{flex: 1, backgroundColor: 'red'}} />
    //   <View style={{flex: 2, backgroundColor: 'darkorange'}} />
    //   <View style={{flex: 3, backgroundColor: 'green'}} />
    // </View>
    <PreviewLayout
      label="flexDirection"
      values={['column', 'row', 'row-reverse', 'column-verse']}
      selectedValue={flexDirection}
      setSelectedValue={setFlexDirection}>
      <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
      <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
    </PreviewLayout>
  );
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
// });

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 50,
//   },
//   textBlue: {
//     color: 'blue',
//     fontSize: 10,
//     fontWeight: 'bold',
//   },
//   textRed: {
//     color: 'red',
//     fontSize: 20,
//   },
//   textPurple: {
//     color: 'purple',
//     fontSize: 30,
//   },
//   textBlack: {
//     color: 'black',
//     fontSize: 40,
//   },
// });

export default App;
