'use client';

import { mutate } from 'swr';

export const deleteSundayService = async (id: any) => {
  try {
    const res = await fetch(`/api/sunday-service/${id}`, {
      method: 'PATCH',
    });

    if (res.ok) {
      mutate('/api/sunday-service');
      return res;
    }
    return res;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const createSundayService = async (body: any) => {
  try {
    const res = await fetch(`/api/sunday-service`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });

    return res;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateSundayService = async (id: string, body: any) => {
  try {
    const res = await fetch(`/api/sunday-service/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });

    return res;
  } catch (error: any) {
    throw new Error(error);
  }
};
