// import { Component } from 'react';

// import classes from './shopItemFunc.module.css'; // третий вариант стилизовать файлы
// Лучше стилизовать через модули. Для этого файлу shopItemFunc.css добавляем в имени
// shopItemFunc.module.css импортируем как объект и обращаемся по имени - как ключ

// ShopItemFunc - это функциональный компонент
// слово "class" зарезервировано (использовать нельзя) - используем className

export const ShopItemFunc = (props) => {
  // принимаем props для универсальности компонента
  // у него сейчас один ключ info
  // const { brand, title, description, descriptionFull, price, currency } = props.info;
  return (
    <div className="main-content">
      <h2>{props.info.brand}</h2>
      <h1>{props.info.title}</h1>
      <h3>{props.info.description}</h3>
      <div className="description">{props.info.descriptionFull}</div>
      <div className="highlight-window mobile">
        <div className="highlight-overlay"></div>
      </div>
      <div className="purchase-info">
        <div className="price">{props.info.currency}{props.info.price}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
}
