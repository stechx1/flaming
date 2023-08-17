import BBQSmokerSigns from '@/components/Products/BBQSmokerSigns';
import GarageSigns from '@/components/Products/GarageSigns';
import GerdenSigns from '@/components/Products/GerdenSigns';
import HomeHouseSign from '@/components/Products/HomeHouseSign';
import MemorialPlaques from '@/components/Products/MemorialPlaques';
import ProductBox from '@/components/Products/ProductBox';
import PropertyFarmSigns from '@/components/Products/PropertyFarmSigns';
import WeddingSigns from '@/components/Products/WeddingSigns';
import { Tabs, Breadcrumb } from 'antd';
import { useRouter } from 'next/router';
const ProductsPage = () => {
  const router = useRouter();
  const onChange = (key) => {
    console.log(key);
  };
  // Change this
  const items = [
    {
      key: '1',
      label: `Home/House Signs`,
      children: <HomeHouseSign /> // this can be a component like <TabProduct/>
    },
    {
      key: '2',
      label: `Garage Signs`,
      children: <GarageSigns /> ,
    },
    {
      key: '3',
      label: `BBQ / Smoker Signs`,
      children: <BBQSmokerSigns />
    },
    {
      key: '4',
      label: `Property / Farm Signs`,
      children: <PropertyFarmSigns />
    },
    {
      key: '5',
      label: `Garden Signs`,
      children: <GerdenSigns />
    },
    {
      key: '6',
      label: `Memorial Plaques`,
      children: <MemorialPlaques />
    },
    {
      key: '7',
      label: `Wedding Signs`,
      children: <WeddingSigns />
    },
    
  ];
  return (
    <div className='bg-[#f0eeef]'>
      <div className='p-5'>
      <Breadcrumb
    items={[
      {
        title: 'Home',
        className:" cursor-pointer",
        onClick: () => router.push('/')
      },
      {
        title: 'Products',
        onClick: () => router.push('/products')
      },
    ]}
  />
      </div>
      <div className=' max-w-7xl m-auto p-5'>
      <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
    </div>
    </div>
  );
};

export default ProductsPage;
