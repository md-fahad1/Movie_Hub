import { images } from "@/assets/constants/images";
import MovieCard from "@/components/MovieCard";
import Searchbar from "@/components/Searchbar";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: movies,
    loading,
    error,
    reset,
    refetch: loadMovies,
  } = useFetch(() => fetchMovies({ query: searchQuery }), false);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim().length > 0) {
        await loadMovies();
      } else {
        reset();
      }
    }, 500); // Debounce for 500ms

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="flex-1 absolute w-full h-full z-0"
        resizeMode="cover"
      />

      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        className="px-4"
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 10,
          marginVertical: 10,
        }}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20">
              <Image
                source={images.pathan}
                className="w-48 h-16 mt-24 mb-5 mx-auto z-1"
              />
            </View>

            <View className="my-5">
              <Searchbar
                placeholder="Search for movies..."
                value={searchQuery}
                onChangeText={(text: string) => setSearchQuery(text)}
              />
            </View>

            {loading && (
              <ActivityIndicator
                size="large"
                color="#ffffff"
                className="mt-10"
              />
            )}

            {error && (
              <Text className="text-red-500 text-center mt-10">{error}</Text>
            )}

            {!loading && !error && searchQuery.trim() && movies?.length > 0 && (
              <Text className="text-white text-center mt-5">
                Search Results for{" "}
                <Text className="text-accent">{searchQuery}</Text>
              </Text>
            )}
          </>
        }
        ListEmptyComponent={
          !loading && !error ? (
            <View className="mt-20">
              <Text className="text-gray-400 text-center">
                {searchQuery.trim()
                  ? "No movies found. Try a different search."
                  : "Start typing to search for movies."}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default Search;
