'use client';

export const EquipmentFilter = (
  data: any[],
  searchTerm: string,
  filterAttributes: string[],
  filterType: string | null
): any[] => {
  if ((!searchTerm && filterType === null) || filterType === 'All') {
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

export const FilterEquipment = (
  data: any[],
  showCategory: string,
  filterLocation: string
) => {
  if (!data) {
    return [];
  }

  if (showCategory === 'All' && filterLocation !== 'Nothing') {
    return data.filter((item) => {
      // Check if the 'category' and 'location' match the provided values
      return item.location === filterLocation;
    });
  } else if (filterLocation === 'Nothing' && showCategory !== 'All') {
    return data.filter((item) => {
      // Check if the 'category' and 'location' match the provided values
      return item.category === showCategory;
    });
  } else if (filterLocation !== 'Nothing' && showCategory !== 'All') {
    return data.filter((item) => {
      // Check if the 'category' and 'location' match the provided values
      return item.category === showCategory && item.location === filterLocation;
    });
  } else {
    return data;
  }
};
