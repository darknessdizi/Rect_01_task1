import './App.css';
import { ShopItemFunc } from './components/ShopItemFunc/ShopItemFunc';

// -------------- с пропсами (когда данные надо передать в компонент)
function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }

  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc info={item} />
      </div>
    </div>
  )
}

export default App;

// <> React должен возвращать один DOM элемент. Одна сущность.
// данные скобки возвращают один элемент, но не создают его в DOM
// а добавляют содержимое к родителю.

// с использованием props надо создать новое свойство типо info или другое
// и передать ему нужный объект или данные
