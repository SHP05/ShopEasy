import Heading from '../components/home/Heading';
import { Services } from '../components/home/Services';
function Home() {
  return (
    <>
      <Heading ShopName={`My Shop`} />
      <Services />
    </>
  );
}

export default Home;
