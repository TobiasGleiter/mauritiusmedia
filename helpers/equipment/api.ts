'use client';

import { mutate } from 'swr';

export const deleteEquipment = async (id: any) => {
  try {
    const res = await fetch(`/api/equipment/${id}`, {
      method: 'PATCH',
    });

    if (res.ok) {
      mutate('/api/equipment');
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateEquipment = async (id: string, body: any) => {
  try {
    const res = await fetch(`/api/equipment/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });

    if (res.ok) {
      return true;
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export const createEquipment = async (body: any) => {
  try {
    const res = await fetch(`/api/equipment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });
    if (res.ok) {
      return true;
    }
  } catch (error: any) {
    throw new Error(error);
  }
};
