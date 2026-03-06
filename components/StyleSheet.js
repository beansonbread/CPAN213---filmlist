import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    list: {
      flex: 1,
    },
    screenPadding: {
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 16,
    },
    gridContainer: {
      paddingBottom: 24,
      flexGrow: 1,
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    title: {
      width: '100%',
      marginTop: 8,
      fontSize: 16,
      fontWeight: '600',
      color: '#111',
    },
    subtitle: {
      marginTop: 4,
      fontSize: 12,
      color: '#666',
    },
    card: {
      padding: 10,
      backgroundColor: '#f2f2f2',
      borderRadius: 10,
      maxHeight: 220,
      marginBottom: 10,
    },
    poster: {
      width: '100%',
      aspectRatio: 2/3,
      borderRadius: 8,
      backgroundColor: '#ddd',
    },
    ratingText: {
      marginTop: 4,
      color: '#444',
      fontSize: 12,
    },

    detailsPoster: {
      width: 200,
      height: 300,
      borderRadius: 10,
      backgroundColor: '#ddd',
    },
    detailsTitle: {
      marginTop: 14,
      fontSize: 20,
      fontWeight: '700',
      color: '#111',
    },
    detailsOverview: {
      marginTop: 10,
      fontSize: 14,
      color: '#333',
    },
    button: {
      marginTop: 12,
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderRadius: 8,
      backgroundColor: '#333',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: '600',
    },
  });