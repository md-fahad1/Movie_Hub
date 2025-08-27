import { images } from "@/assets/constants/images";
import Searchbar from "@/components/Searchbar";
import { useRouter } from "expo-router";
import { Image, ScrollView, View } from "react-native";
export default function Index() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full h-full z-0" />
      <ScrollView
        className="flex-1 px-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image
          source={images.pathan}
          className="w-12 h-12 mt-24 mb-5 mx-auto z-1"
        />
        <View className="flex-1 mt-5">
          <Searchbar
            onPress={() => router.push("/search")}
            placeholder="Search for movies, TV shows..."
          />
        </View>
      </ScrollView>
    </View>
  );
}
