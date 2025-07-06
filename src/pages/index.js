import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import {gql, useQuery} from '@apollo/client';
import React, {useEffect, useState} from "react"
import Loading from "@/components/Loading";
import Projects from "@/components/Projects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const HOME_QUERY = gql`
  query Home {
    homeCollection {
      items {
        aboutme
      }
    }
  }
`;

export default function Home() {
  // const {data, loading, error} = useQuery(HOME_QUERY);
  //
  // const [isInitialLoad, setIsInitialLoad] = useState(true);
  //
  // useEffect(() => {
  //   if (!loading) {
  //     // Once the loading is complete, set isInitialLoad to false
  //     setTimeout(() => {
  //           setIsInitialLoad(false);
  //         }
  //         , 2000);
  //   }
  // }, [loading]);
  //
  // if (isInitialLoad) {
  //   // Show a custom loading animation while isInitialLoad is true
  //   return <Loading />;
  // }
  //
  // if (error) return <p></p>;
  //
  // const firstItem = data?.homeCollection?.items[0]
  //
  // console.log(firstItem)

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/*<Image*/}
        {/*  className="dark:invert"*/}
        {/*  src="/next.svg"*/}
        {/*  alt="Next.js logo"*/}
        {/*  width={180}*/}
        {/*  height={38}*/}
        {/*  priority*/}
        {/*/>*/}
        <div>
          <p>
            {/*{firstItem.aboutme}*/}
              Goldsmiths Computational Arts MA Show 2025
          </p>
          <br/>
          <h1 className="text-2xl">
            Coming Soon!
            {/*Projects*/}
            {/*<Projects/>*/}
          </h1>
        </div>
      </main>
    </div>
  )
}
