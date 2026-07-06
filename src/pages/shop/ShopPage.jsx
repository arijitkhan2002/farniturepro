
import bannerImg from '../../assets/banner.png';
import Products from './Products';
const ShopPage = () => {
  return (
    <div className="min-h-screen">
      {/* banner */}
      <div
        className="w-full h-100 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <h1 className="text-5xl font-bold">Shop Our Products</h1>
      </div>

      {/* product page */}
      <Products headline="What's Your Choice"/>
    </div>
  )
}

export default ShopPage;