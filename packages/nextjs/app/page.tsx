"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Zinneke OnChain Rescue Mission</span>
          </h1>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">Your Ethereal ID</p>
            <Address address={connectedAddress} /> has been verified by a{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              humanitarian bot
            </code>
            .
          </div>
          <p className="text-center text-lg">
            In the early 16th century,{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              Brussels
            </code>{" "}
            was invaded by rats because of the{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              Senne River
            </code>
            , which flowed through the city and served as an open sewer. To combat this{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              rat invasion
            </code>
            , the people of Brussels began{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              adopting dogs
            </code>
            .
          </p>
          <p className="text-center text-lg">
            These dogs, left free, began to{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              mix and reproduce
            </code>{" "}
            wildly, which very quickly gave rise to an enormous number of{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              mongrel
            </code>{" "}
            dogs. To get rid of these{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              breedless
            </code>{" "}
            dogs, which in turn became{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              invasive
            </code>
            , the inhabitants{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              drowned
            </code>{" "}
            them in the{" "}
            <Link href="https://en.wikipedia.org/wiki/Senne_(river)" passHref className="link">
              Senne
            </Link>
            .
          </p>
          <p className="text-center text-lg italic bg-base-300 text-base font-bold">
            The{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              Zinneke
            </code>{" "}
            were therefore originally these small mongrel dogs, without breed, intended to be thrown into the Senne. By
            extension, we call{" "}
            <Link href="https://fr.wiktionary.org/wiki/zinneke" passHref className="link">
              Zinneke
            </Link>{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              {" "}
              any animal or even person of mixed origins
            </code>
            .
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>Save the Zinneke from river flooding caused by an Ethereum-themed week in Brussels.</p>
              <p>
                Help them migrate across blockchains by smuggling{" "}
                <Link href="https://www.zinneke.org/nl/album-photo/zinneke-parade-2024-2/" passHref className="link">
                  photographs
                </Link>{" "}
                from the{" "}
                <Link href="https://www.brussels.be/zinneke-parade" passHref className="link">
                  2024 Zinneke Parade
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Double-check the success of your lifesaving contributions at the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Transaction Tracker
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
