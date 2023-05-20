import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Header from './components/Header';
import SearchBar from './components/Search';
import ExploreSection from './components/Explore';
import BestSelling from './components/BestSelling';
const productsData = [
  {
    id: '1',
    image: "https://c4.wallpaperflare.com/wallpaper/973/1004/995/interior-design-room-carpets-couch-wallpaper-preview.jpg",
    title: 'Elegant Chair',
    description: 'A comfortable and stylish chair for your home or office',
    price: '$249.99'
  },
  {
    id: '2',
    image: "https://c4.wallpaperflare.com/wallpaper/582/443/760/white-design-room-sofa-wallpaper-preview.jpg",
    title: 'Modern Sofa',
    description: 'A sleek and modern sofa for your living room',
    price: '$599.99'
  },
  {
    id: '3',
    image: "https://c0.wallpaperflare.com/preview/410/960/1014/apartment-bed-bedroom-book-shelves.jpg",
    title: 'Rustic Bed',
    description: 'A rustic bed frame made from reclaimed wood',
    price: '$899.99'
  },
  {
    id: '4',
    image: "https://c4.wallpaperflare.com/wallpaper/310/368/899/sofa-interior-pillow-library-wallpaper-preview.jpg",
    title: 'Vintage Desk',
    description: 'A beautiful vintage desk made from solid wood',
    price: '$349.99'
  },
  {
    id: '5',
    image: "https://c4.wallpaperflare.com/wallpaper/358/102/370/star-wars-lego-star-wars-stormtrooper-couch-wallpaper-preview.jpg",
    title: 'Leather Armchair',
    description: 'A luxurious leather armchair for your home or office',
    price: '$499.99'
  },
  {
    id: '6',
    image: "https://c4.wallpaperflare.com/wallpaper/369/719/796/living-room-fireplace-brown-3-seat-sofa-with-throw-pillows-wallpaper-preview.jpg",
    title: 'Ergonomic Sofa',
    description: 'comfortable and ergonomic office chair for long days',
    price: '$299.99'
  },
  {
    id: '7',
    image: "https://c4.wallpaperflare.com/wallpaper/488/747/592/design-sofa-interior-pillow-living-room-hd-wallpaper-preview.jpg",
    title: 'Sofa',
    description: 'A stylish and modern dining table for your home',
    price: '$799.99'
  },
  {
    id: '8',
    image: "https://c1.wallpaperflare.com/preview/664/450/480/bookcase-chairs-clean-decor.jpg",
    title: 'Classic Bookcase',
    description: 'A classic bookcase made from solid wood',
    price: '$399.99'
  },
  {
    id: '9',
    image: "https://c4.wallpaperflare.com/wallpaper/878/845/208/sofa-skyscraper-interior-skyscraper-wallpaper-preview.jpg",
    title: 'Coffee Table',
    description: 'An industrial style coffee table made from metal and wood',
    price: '$249.99'
  },
  {
    id: '10',
    image: "https://c4.wallpaperflare.com/wallpaper/878/845/208/sofa-skyscraper-interior-skyscraper-wallpaper-preview.jpg",
    title: 'Mid-Century Sofa',
    description: 'A beautiful mid-century sofa for your living room',
    price: '$899.99'
  },
];
const Bestselling = [
  {
    id: '1',
    image: 'https://c4.wallpaperflare.com/wallpaper/864/0/42/balcony-sofas-interior-design-apartment-wallpaper-preview.jpg',
    title: 'Product 1',
    description: 'This is a description for Product 1',
    price: '$100',
  },
  {
    id: '2',
    image: 'https://c1.wallpaperflare.com/preview/424/703/808/architecture-interior-room-modern.jpg',
    title: 'Product 2',
    description: 'This is a description for Product 2',
    price: '$200',
  },
  {
    id: '3',
    image: 'https://c0.wallpaperflare.com/preview/677/401/219/indoors-furniture-room-window.jpg',
    title: 'Product 3',
    description: 'This is a description for Product 3',
    price: '$300',
  },
];
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>

      <Header/>
      <SearchBar/>
      <ExploreSection productsData={productsData} />
        <BestSelling Bestselling={Bestselling}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
