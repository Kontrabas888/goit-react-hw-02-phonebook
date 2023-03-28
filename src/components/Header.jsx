import React from 'react';
import { AiTwotonePhone } from 'react-icons/ai';
import { Title } from './Title';

export const Header = () => {
  return (
    <header className="bg-white py-5 shadow-md">
      <div className="container flex items-center gap-3">
        <AiTwotonePhone className="h-10 w-10 text-indigo-600 drop-shadow" />

        <Title className="drop-shadow" tag="h1">
          Phonebook
        </Title>
      </div>
    </header>
  );
};
