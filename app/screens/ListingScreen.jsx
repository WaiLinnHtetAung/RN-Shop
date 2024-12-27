import React, { useEffect, useState } from "react";
import {  FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActiveIndicator";

import colors from "../configs/colors";
import routes from "../navigation/routes";
import listingApi from '../api/listings';
import useApi from "../../hooks/useApi";

function ListingsScreen() {

  const navigation = useNavigation();
  const getListingApi = useApi(listingApi.getListings)

  useEffect(() => {
    getListingApi.request();
  }, [])

  return (
    <Screen style={styles.screen}>
      {getListingApi.error && (
        <>
          <AppText>Could not retrieve the listings</AppText>
          <AppButton title="Retry" onPress={getListingApi.request} />
        </>
      )}
      <ActivityIndicator visible={getListingApi.loading} />
      {(!getListingApi.error && !getListingApi.loading) && (
        <FlatList
          data={getListingApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUri={item.image}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
