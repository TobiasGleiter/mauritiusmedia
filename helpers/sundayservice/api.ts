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
