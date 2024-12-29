import * as React from 'react';
import { View } from 'react-native';

const Keyboard = () => {

    const [firstNumber, setFirstNumber] = React.useState('');
    const [secondNumber, setSecondNumber] = React.useState('');
    const [operation, setOperation] = React.useState('');
    const [result, setResult] = React.useState<Number | null>(null);

  return (
    <View>
        
    </View>
  )
}

export default Keyboard;
