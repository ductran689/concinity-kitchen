import { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  dirs: string[];
}

const Home: NextPage<Props> = ({ dirs }) => {
  console.log(dirs);
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedFile, setSelectedFile] = useState<File>();

  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append('myImage', selectedFile);
      const { data } = await axios.post('/api/image', formData);
      console.log(data);
    } catch (error: any) {
      console.log(error.response?.data);
    }
    setUploading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-20 space-y-6">
      <label>
        <input
          type="file"
          hidden
          onChange={({ target }) => {
            if (target.files && target.files.length > 0) {
              const file = target.files[0];

              try {
                const objectURL = URL.createObjectURL(file);
                setSelectedImage(objectURL);
                setSelectedFile(file);
              } catch (error) {
                console.error('Error creating object URL:', error);
                // Handle the error gracefully, e.g., display an error message to the user.
              }
            }
          }}
        />
        <div className="w-40 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer">
          {selectedImage ? (
            <Image src={selectedImage} alt="" height={500} width={500} />
          ) : (
            <span>Select Image</span>
          )}
        </div>
      </label>
      <button
        onClick={handleUpload}
        disabled={uploading}
        style={{ opacity: uploading ? '.5' : '1' }}
        className="bg-red-600 p-3 w-32 text-center rounded text-white"
      >
        {uploading ? 'Uploading..' : 'Upload'}
      </button>
      {dirs && (
        <div className="mt-20 flex flex-col space-y-3">
          {dirs.map((item) => (
            <Link key={item} href={'/images/' + item}>
              <a className="text-blue-500 hover:underline">{item}</a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  const props = { dirs: [] };
  try {
    const dirs = await fs.readdir(
      path.join(process.cwd(), '/public/images'),
      (err, files) => {
        console.log(files);
      }
    );

    props.dirs = dirs as any;
    return { props };
  } catch (error) {
    return { props };
  }
};

export default Home;
