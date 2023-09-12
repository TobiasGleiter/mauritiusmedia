'use client';

import BaseIcon from '@/components/icons/base/BaseIcon';
import { fetcher } from '@/helpers/fetcher';
import { updateSundayService } from '@/helpers/sundayservice/api';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function SundayServicePage({ params }: any) {
  const { id } = params;
  const { data } = useSWR(`/api/sunday-service/${id}`, fetcher);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [workflow, setWorkflow] = useState({ workflow: [] });

  const [isUpdateing, setIsUpdateing] = useState(false);
  const [isError, setIsError] = useState({ status: false, message: '' });

  // Use useEffect to update the description when equipment data changes
  useEffect(() => {
    if (data) {
      setName(data.name);
      setDescription(data.description);
      setDate(data.date);
      setLocation(data.location);
      setWorkflow(data.workflow);
    }
  }, [data]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !location || !date) {
      // some action
      console.log('Error');
      return;
    }

    setIsUpdateing(true);
    setIsError({ status: false, message: '' });

    const body = JSON.stringify({
      name,
      description,
      location,
      date,
      workflow,
    });
    const res = await updateSundayService(id, body);

    if (!res.ok) {
      setIsError({
        status: true,
        message: 'Error while updating this Sunday Service. Please try later.',
      });
    }
    setIsUpdateing(false);
  };

  return (
    <div className="w-fit mb-40">
      <Link
        href="/sunday-service"
        className="BACK flex items-center text-secondary-500 group"
      >
        <BaseIcon
          icon="arrowback"
          style="group-hover:text-secondary-800 duration-200"
        />
        <p className=" group-hover:text-secondary-800 duration-200">Back</p>
      </Link>
      <div
        className={`CREATE CARD mt-6 py-4 px-4 rounded-2xl shadow-md bg-white border ${
          isUpdateing && 'border-warning-500 animate-pulse'
        }`}
      >
        <h1 className="text-3xl font-bold">Create new Sunday-Service</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 w-full mt-6"
        >
          <div className="NAME flex flex-col w-full ">
            <label
              htmlFor="name"
              className=" antialiased text-base text-secondary-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="border border-secondary-500 text-black rounded-lg bg-transparent py-1 px-4"
            />
          </div>
          <div className="DESCRIPTION flex flex-col w-full ">
            <label
              htmlFor="description"
              className=" antialiased text-base text-secondary-600"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="h-20 border border-secondary-500 text-black rounded-lg bg-transparent py-1 px-4"
            />
          </div>
          <div className="DATE flex flex-col w-fit ">
            <label
              htmlFor="date"
              className=" antialiased text-base text-secondary-600"
            >
              Date
            </label>
            <input
              type="datetime-local"
              id="date"
              name="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              className="border border-secondary-500 text-black rounded-lg bg-transparent py-1 px-4"
            />
          </div>

          <div className="mt-6"></div>
          <div className="flex justify-center mt-6">
            <div className="w-64 border-b border-secondary-100" />
          </div>
          <button
            type="submit"
            className=" flex bg-primary-500 text-black justify-center rounded-full hover:bg-primary-600 duration-200"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
