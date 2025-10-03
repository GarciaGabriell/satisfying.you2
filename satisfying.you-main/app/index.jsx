import { Redirect } from 'expo-router';

export default function Index() {
  // redireciona explicitamente para o login (grupos com parênteses usam esse path)
  return <Redirect href="/(auth)/login" />;
  // return <Redirect href="/(tabs)/home" />;
}