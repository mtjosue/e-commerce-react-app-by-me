import React, { useState } from 'react';
import SHOP_DATA from './ShopData';
import CollectionPreview from '../../components/preview-collection/CollectionPreview';

const Shop = () => {
  const [collections, setcollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default Shop;
