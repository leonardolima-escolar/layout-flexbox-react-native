import { Text, View, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { StatusBar } from 'expo-status-bar';
import { Rectangle } from '../../components/Rectangle';

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header></Header>
      <View style={styles.main}>
        <View style={styles.section}>
          <View style={styles.article}>
            <Rectangle width={"25%"} height={"100%"}></Rectangle>
            <Rectangle width={"25%"} height={"100%"}></Rectangle>
            <Rectangle width={"25%"} height={"100%"}></Rectangle>
          </View>
          <View style={[styles.article, {flexDirection: "column"}]}>
            <Rectangle width={"100%"} height={"28%"}></Rectangle>
            <Rectangle width={"100%"} height={"28%"}></Rectangle>
            <Rectangle width={"100%"} height={"28%"}></Rectangle>
          </View>
          <View style={[styles.article, {flexWrap: "wrap", alignContent: "space-between"}]}>
            {Array(15).fill(null).map((_, index) => (
              <Rectangle key={index} width={"17%"} height={"28%"} />
            ))}
          </View>
        </View>
      </View>
      <Footer></Footer>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}
