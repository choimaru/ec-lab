export const useZip = () => {
  const search = async (zip: string): Promise<string> => {
    const postcode = zip.replace(/[^0-9]/g, '');

    if (!postcode || postcode.length < 7) return '';

    const data = await fetch(`https://postcode.teraren.com/postcodes/${postcode}.json`);
    const info = data.json();

    return info;
  };

  return {
    search,
  };
};
