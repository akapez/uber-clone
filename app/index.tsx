import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import "react-native-get-random-values";

const Home = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (isLoaded && isSignedIn) {
    return <Redirect href="/(root)/(tabs)/home" />;
  }

  return <Redirect href="/(auth)/welcome" />;
};

export default Home;
