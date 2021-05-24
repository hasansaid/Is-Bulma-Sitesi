import './style.css';
import { useState } from 'react';
import update from 'immutability-helper';

import Input from '../Elements/Input';
import Button from '../Elements/Button';

export default function Search() {
  const [data, setData] = useState({
    title: '',
    provinces: '',
    categories: ''
  });

  const handleUpdateInputsData = (name, value) => {
    switch (name) {
      case 'title':
        return setData(update(data, { title: { $set: value } }));
      case 'provinces':
        return setData(update(data, { provinces: { $set: value } }));
      case 'categories':
        return setData(update(data, { categories: { $set: value } }));
      default:
        return name;
    }
  };

  return (
    <form className="search-box">
      <div className="search__inputs">
        <Input
          placeholder="Job title"
          onChange={value => handleUpdateInputsData('title', value)}
        />
        <Input
          placeholder="All provinces"
          onChange={value => handleUpdateInputsData('provinces', value)}
        />
        <Input
          placeholder="All categories"
          onChange={value => handleUpdateInputsData('categories', value)}
        />
      </div>
      <div className="search__button">
        <Button>Search</Button>
      </div>
    </form>
  );
}
