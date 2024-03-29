import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface ButtonProps {
  children: string;
}

export function Button({ children }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}
