// Page.tsx
import Bubbles from '@/components/bubbles';
import { Testimonials } from '@/components/testimonials';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from 'react';

const text = `ASDC is place ideal for divers and people who wish to experience the underwater world.`;

const Page = () => {
  return (
    <div className="bg-[url('/img/background.png')] bg-center bg-cover min-h-screen relative overflow-hidden">
      <Bubbles />
      <Testimonials />
      <div className="flex items-start h-3/4 mt-72">
        <div className="container mx-auto">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-md">
            Welcome
          </h1>
          <TextGenerateEffect words={text} />
        </div>
      </div>
    </div>
  );
};

export default Page;