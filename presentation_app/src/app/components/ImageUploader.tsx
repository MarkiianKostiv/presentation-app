"use client";
import { ChangeEvent } from "react";
import TextRecognition from "./TextRecognition";
import { textRecognizeStore } from "../stores/textRecognizeStore";
import Image from "next/image";

const ImageUploader = () => {
  const { setImage, setRecognizedText, image } = textRecognizeStore();

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files?.[0];

    if (image) {
      const imageUrl = URL.createObjectURL(image);
      setImage(imageUrl);
      setRecognizedText();
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100'>
      <div className='bg-white rounded-2xl shadow-md p-6 w-full max-w-[50%]'>
        <h2 className='text-2xl font-semibold text-center mb-4 text-gray-800'>
          Upload img
        </h2>

        <input
          type='file'
          accept='image/*'
          onChange={handleImageUpload}
          className='block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100 cursor-pointer'
        />

        {image && (
          <div className='mt-6'>
            <Image
              src={image}
              alt='Selected'
              width={600}
              height={400}
              priority
              className='rounded-lg shadow w-full h-auto'
            />
          </div>
        )}
      </div>

      <div className='mt-8 w-full flex items-center justify-center'>
        <TextRecognition />
      </div>
    </div>
  );
};

export default ImageUploader;
