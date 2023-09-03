export interface IEquipmentFilter {
  data: any;
  searchTerm: string;
  filterAttributes: string[];
}

export const EquipmentFilter = (
  data: any,
  searchTerm: any,
  filterAttributes: any
): IEquipmentFilter[] => {
  if (!searchTerm || !filterAttributes.length) {
    return data;
  }

  return data.filter((result: any) => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    return filterAttributes.some((attribute: any) =>
      result[attribute].toLowerCase().includes(searchTermLowerCase)
    );
  });
};
