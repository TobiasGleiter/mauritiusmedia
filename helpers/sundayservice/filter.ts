import { SundayService } from '@/types/sundayservice/base';

export const SortSundayService = (data: SundayService[]) => {
  if (!data) {
    return [];
  }

  if (data) {
    return data.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime(); // Newest dates first
    });
  } else {
    return data;
  }
};
