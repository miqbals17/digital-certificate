import Link from "next/link";
import { useEffect, useState } from "react";
import { DocumentPlusIcon } from "@heroicons/react/24/outline";

export default function Table() {
  const [dataMember, setDataMember] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/hello");
      const dataJson = await data.json();

      setDataMember(dataJson);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center content-center">
      {/* <h1 className="font-bold">Sertifikat Tanah Digital</h1> */}
      <div className="w-11/12 mt-5">
        <div className="flex justify-between">
          <p className="text-sm sm:text-lg">
            Daftar sertifikat tanah digital yang telah terdata dalam Blockchain
          </p>
          <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white font-bold py-1 px-2 rounded">
            <DocumentPlusIcon className="w-3 h-3 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-base">Tambah</span>
          </button>
        </div>
        <table className="mt-5 w-full table-fixed">
          <thead>
            <tr className="border-b border-slate-300 text-left">
              <th className="w-2/5 p-2 font-">Jenis Dokumen</th>
              <th className="w-2/5 p-2">Status</th>
              <th className="w-1/5 p-2"></th>
            </tr>
          </thead>
          <tbody>
            {dataMember.map((data) => {
              return (
                <tr className="border-b border-slate-300" key={data.key}>
                  <td className="p-2">{data.type}</td>
                  <td className="p-2">{data.status}</td>
                  <td className="p-2 text-right">
                    <Link
                      href={"/detail/" + data.key}
                      className="text-gray-800 hover:text-gray-500 font-bold"
                    >
                      Lihat Detail
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
