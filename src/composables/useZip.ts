export const useZip = () => {
  type Info = {
    postcode_type: string;
    jis: string;
    old: string;
    new: string;
    prefecture_kana: string;
    city_kana: string;
    suburb_kana: string;
    prefecture: string;
    city: string;
    suburb: string;
    street_address: string | null;
    office: string | null;
    office_kana: string | null;
    office_roman: string | null;
    post_type: string | null;
    is_separated_suburb: number;
    is_koaza: number;
    is_chome: number;
    is_include_area: number;
    status: number;
    reason: number;
    prefecture_roman: string;
    city_roman: string;
    suburb_roman: string;
    handling_post_office: string | null;
    multiple_numbers: string | null;
    created_at: string;
    updated_at: string;
  };

  const search = async (zip: string): Promise<Info | null> => {
    const postcode = zip.replace(/[^0-9]/g, '');

    if (!postcode || postcode.length < 7) return null;

    const data = await fetch(`https://postcode.teraren.com/postcodes/${postcode}.json`);
    const info = data.json();

    return info;
  };

  return {
    search,
  };
};
