import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    list: {
      flex: 1,
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
       fontSize: 16,
       width: '100%',
    },
    card: {
      padding: 8,
      backgroundColor: '#f5f5f5',
      borderRadius: 8,
    },
    Image: {
      width: '100%',
      aspectRatio: 2/3,
      borderRadius: 4,
      backgroundColor: '#ddd',
    },
  });