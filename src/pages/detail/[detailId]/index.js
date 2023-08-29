import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Detail() {
  const router = useRouter();
  const key = router.query.detailId;

  const [dataDetail, setDataDetail] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/hello");
      const dataJson = await data.json();

      const index = dataJson.findIndex((_data) => {
        return _data.key == key;
      });

      setDataDetail(dataJson[index]);
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Detail | {dataDetail.type}</title>
      </Head>
      <div className="border mt-10 max-w-5xl w-11/12 mx-auto flex flex-col sm:flex-row">
        <Image
          src="https://loremflickr.com/320/240/dog"
          alt="image"
          width={500}
          height={500}
          className="rounded-lg w-full sm:w-"
        />
        <div>
          <h1 className="text-4xl font-bold mt-5 text-center">
            {dataDetail.type}
          </h1>
          <p>{dataDetail.status}</p>
        </div>
      </div>
    </>
  );
}
