import React from 'react';

export default function About() {
  return (
    <section className="flex justify-between h-full m-auto max-w-6xl items-center">
      <div className="ml-10 p-3">
        <p className="text-3xl p-3 m-3 font-extrabold">Dailymag</p>
        <p className="text-lg p-3 m-3 font-medium border-b-2 border-gray-400">
          문의: 000@naver.com
        </p>
      </div>
      <div className="m-3 p-4">
        <h1 className="text-xl font-semibold p-2">
          1. Dailymag은 Fashion & Event & Interior의 contents를 주로 다루는
          메거진입니다.
        </h1>
        <p className="font-medium mb-2 mx-2 text-gray-500">
          모든 사용자가 포스트 업로드가 가능하며 많은 사람들이 유익한 정보를
          공유합니다.
        </p>
        <div className="my-6">
          <h1 className="text-xl font-semibold p-2">
            2. 트렌디한 최근 이슈와 유용한 정보를 제공하기 위해 노력합니다.
          </h1>
          <p className="font-medium mb-2 mx-2 text-gray-500">
            국내외 최근 이슈를 정성스러운 포스팅을 통해 소비자들에게 유용한
            정보를 제공합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
