import { Tabs } from 'antd';
const ProductsPage = () => {
  const onChange = (key) => {
    console.log(key);
  };
  // Change this
  const items = [
    {
      key: '1',
      label: `Tab 1`,
      children: `Content of Tab Pane 1`, // this can be a component like <TabProduct/>
    },
    {
      key: '2',
      label: `Tab 2`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `Tab 3`,
      children: `Content of Tab Pane 3`,
    },
  ];
  return (
    <div>
      <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
    </div>
  );
};

export default ProductsPage;
