import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

function ProductDetail() {
  const { brand, id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const collectionName = brand === 'geotek' ? 'geotek-products' : 'rz-products';
        const docRef = doc(db, collectionName, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct(docSnap.data());
        } else {
          console.error("Product not found.");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [brand, id]);

  if (loading) return <div className="p-6 text-gray-600">Loading...</div>;
  if (!product) return <div className="p-6 text-red-600">Product not found.</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Optional product image */}
      {product.imageURL && (
        <img
          src={product.imageURL}
          alt={product.name}
          className="w-full h-auto mb-6 rounded shadow"
        />
      )}

      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

      <div className="space-y-2 text-gray-800">
        <p><strong>Code:</strong> {product.code}</p>
        <p><strong>Section:</strong> {product.section}</p>
        <p><strong>Packaging:</strong> {product.packaging}</p>
        <p><strong>Description:</strong> {product.description}</p>
      </div>

      {product.variations?.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Variations</h2>
          <ul className="list-disc ml-6 space-y-1">
            {product.variations.map((v, index) => (
              <li key={index}>
                <strong>Code:</strong> {v.code}, <strong>Size:</strong> {v.size}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
