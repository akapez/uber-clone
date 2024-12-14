import { useAuth, useUser } from "@clerk/clerk-expo";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const { user } = useUser();
  return (
    <SafeAreaView>
      <Text>{user?.emailAddresses[0].emailAddress}</Text>
    </SafeAreaView>
  );
};

export default Home;
