import React from 'react'
import { ImageInput, ImageField } from 'react-admin';

const Test = () => {
   return (
      <div className='pt-[120px]'>
         <ImageInput source="pictures" label="Related pictures">
            <ImageField source="src" title="title" />
         </ImageInput>
      </div>
   )
}

export default Test;