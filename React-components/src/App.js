import Card from './components/Card';
import Item from './components/Item';

export default function App() {
  return (
    <>
      <h1>Primeira apk com react DIO</h1>
      <ul>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Card />
      </ul>
    </>
  );
}
