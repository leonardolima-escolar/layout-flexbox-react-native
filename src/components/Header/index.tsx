import { View, Text } from 'react-native';
import { styles } from './styles';
import { Button } from '../Button';

export function Header() {
  return (
    <View style={styles.header}>
      <Button>Menu</Button>
      <Button>Logs</Button>
      <Button>Credits</Button>
    </View>
  );
}
