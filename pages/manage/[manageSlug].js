import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import BtnCard from '../../components/BtnCard';
import SubLayout from '../../components/SubLayout';
import UploadFile from '../../components/UploadFile';
import data from '../../utils/data';
import BtnManage from '../../components/BtnManage';
import ChangeContent from '../../components/ChangeContent';

export default function ManageServiceScreen() {
  /*   const [selectedImage, setSelectedImage] = useState(null);
   */
  /* const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  }; */
  const { query } = useRouter();

  const { manageSlug } = query;
  const service = data.services.find((x) => x.slug === manageSlug);

  if (!service) {
    return <div>Service Not Found</div>;
  }
  if (service && service.sub_images) {
    /*     const extend = service.sub_images.find((x) => x.image === selectedImage);
     */ return (
      <SubLayout topic={`Manage ${service.name}`} key={service.key}>
        <div>
          <UploadFile></UploadFile>
          <ChangeContent></ChangeContent>
          <div className="service_gallery grid-flow-cols  gap-6 mb-[100px] mx-[20px] grid-lg-cols grid-md-cols grid-sm-cols ">
            {service.sub_images.map((sub, i) => (
              <div
                className="service_card lg:w-[90%] md:w-[70%] sm:w-[60%] w-[80%] border-solid border-transparent  border-2 bg-white  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative hover:overflow-hidden  overflow-hidden"
                key={i}
              >
                <div className="image_container relative w-full lg:min-h-[350px] md:min-h[250] min-h-[250px] hover:scale-105  ease-in duration-100 overflow-hidden">
                  <Link href={sub.image}>
                    <Image
                      className="rounded-lg brightness-90 "
                      src={sub.image}
                      alt={sub.name}
                      fill={true}
                      /*   onClick={() => handleImageClick(sub.image)} */
                    />
                  </Link>
                </div>
                {/* <div className="image_overlay overlay  "></div> */}
                <BtnManage></BtnManage>
              </div>
            ))}
          </div>
        </div>
      </SubLayout>
    );
  } else {
    return (
      <SubLayout topic={`Manage ${service.name}`} key={service.key}>
        <div className="service_gallery grid-flow-cols  gap-6  mx-[20px] grid-lg-cols grid-md-cols grid-sm-cols ">
          {service.subServices.map((sub, j) => (
            <div
              className="sub_container h-[400px] max-[433px]:h-[300px] relative "
              key={j + 0.1}
            >
              <Link href={`/manage/${service.slug}/${sub.slug}`}>
                <Image
                  className="rounded-lg brightness-75"
                  src={sub.image}
                  alt={sub.name}
                  fill={true}
                />
              </Link>

              <div className="service_content center-item flex flex-col justify-center items-center">
                <div className="describtion ">
                  <h2 className="h2-primary text-white font-[400] cursor-pointer font-poppinsbold">
                    {sub.name}
                  </h2>
                </div>

                <div className=" mt-6 items-center justify-center  w-[150px]  flex flex-col ">
                  <button className="btn-service text-center btn-primary border-solid border-slate-200 border-2 mb-4 px-2 ">
                    <p className="text-slate-200 font-medium space text-btn font-poppinsbold">
                      DELETE
                    </p>
                  </button>

                  <button className="btn-service text-center btn-primary border-solid border-slate-200 border-2 px-2">
                    <p className="text-slate-200 font-medium space text-btn font-poppinsbold">
                      MANAGE
                    </p>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SubLayout>
    );
  }
}
