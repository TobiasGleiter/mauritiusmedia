export const EquipmentFilter = (
  data: any[],
  searchTerm: string,
  filterAttributes: string[],
  filterType: string | null
): any[] => {
  if (!searchTerm && filterType === null) {
    return data;
  }

  const searchTermLowerCase = searchTerm.toLowerCase();

  return data.filter((result) => {
    const matchesSearchTerm = searchTerm
      ? filterAttributes.some((attribute) =>
          result[attribute].toLowerCase().includes(searchTermLowerCase)
        )
      : true;

    const matchesFilterType = filterType
      ? result.category.toLowerCase() === filterType.toLowerCase()
      : true;

    return matchesSearchTerm && matchesFilterType;
  });
};
