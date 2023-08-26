import ConnectWallet from "@/components/ConnectWallet";
import Navbar from "@/components/Navbar";
import Table from "@/components/Table";
import { ethers } from "ethers";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Land Certificate</title>
      </Head>
      <Navbar />
      <div className="flex flex-col items-center sm:items-start max-w-5xl mt-0 mx-auto w-11/12">
        <h1 className="mt-5 sm:mt-10 text-2xl sm:text-3xl font-bold text-gray-800">
          Sertifikat Tanah Digital
        </h1>
        <div className="mt-5 w-full">
          <Table />
        </div>
      </div>
    </>
  );
}
