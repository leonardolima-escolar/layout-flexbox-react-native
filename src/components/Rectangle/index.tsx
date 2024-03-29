import { View } from 'react-native';
import { styles } from './styles';

type Dimension = number | `${number}%`;

interface RectangleProps {
  width?: Dimension;
  height?: Dimension;
}


export function Rectangle({ width, height }: RectangleProps) {
  return (
    <View style={[styles.rectangle, { width, height }]}></View>
  );
}
