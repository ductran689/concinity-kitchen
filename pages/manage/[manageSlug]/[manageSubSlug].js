import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import SubLayout from '../../../components/SubLayout';
import UploadFile from '../../../components/UploadFile';
import data from '../../../utils/data';
import Projects from '../../../components/Projects';

export default function ManageSubService() {
  const router = useRouter();
  const { manageSubSlug, manageSlug } = router.query;

  const service = data.services.find((x) => x.slug === manageSlug);
  if (service) {
    const sub = service.subServices.find((x) => x.slug === manageSubSlug);
    if (!sub) {
      return <div>Service Not Found</div>;
    }
    if (sub) {
      if (!sub.slider) {
        return (
          <SubLayout topic={sub.name} btn="true">
            <UploadFile></UploadFile>
            <div className="service_gallery grid-flow-cols  gap-6  mx-[20px] grid-lg-cols grid-md-cols grid-sm-cols ">
              {sub.pics.map((subI, i) => (
                <div
                  className="sub_container h-[400px] max-[433px]:h-[300px] relative "
                  key={i}
                >
                  <h1>{subI.name}</h1>
                  <Image
                    className="rounded-lg brightness-90"
                    src={subI.image}
                    alt={subI.key}
                    fill={true}
                  />
                  <button className=" px-2 text-[25px] center-item font-poppinsbold text-white  border-[2px] border-solid border-slate-200 bg-gray-500 hover:bg-gray-200 hover:text-gray-600">
                    DELETE
                  </button>
                </div>
              ))}
            </div>
          </SubLayout>
        );
      } else {
        return (
          <SubLayout topic={sub.name} btn="true">
            <div className="grid lg:grid-cols-2 max-[768px]:grid-cols-1 gap-6 mb-8 ">
              {sub.slider.map((project) => {
                return (
                  <Projects project={project} key={project.key}></Projects>
                );
              })}
            </div>
          </SubLayout>
        );
      }
    }
  } else {
    <div>
      <h1>Cannot find the data</h1>
    </div>;
  }
}
