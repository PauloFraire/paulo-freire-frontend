import React, { useEffect, useState } from 'react';
import clientAxios from '../../../config/clientAxios';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import Spinner from '../../../components/Spinner';

const NewItemPage = () => {

  const { id } = useParams();

  const [newItem, setNewItem] = useState({})
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getNewItem = async () => {
      setLoading(true);
      try {
        const response = await clientAxios.get(`/blog/${id}`);
        setNewItem(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    getNewItem();
  }, [id])

  return (
    <section className='container mx-auto'>

      <div className='flex justify-center items-center '>
        {
          loading ? <Spinner /> :
            (
              <div className='max-w-5xl bg-white p-4'>
                <h1 className='text-2xl font-bold text-center'>{newItem.title}</h1>
                <p className='text-gray-500 text-center'>Fecha: {newItem.date}</p>

                <div className=''>
                  <img src={newItem.img} alt={newItem.title} className='w-full h-96 object-cover -center' />
                </div>

                <div className='my-4'>
                  {
                    parse(`${newItem.description}`)
                  }
                </div>
              </div>
            )
        }
      </div>

    </section>
  )
}

export default NewItemPage