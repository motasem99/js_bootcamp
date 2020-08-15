const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );

  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error('unable to get puzzle');
  }
};

const getCurrentCountry = async () => {
  const location = await getLocation();
  return getCountry(location.country);
};

const getCountry = async (countryCode) => {
  const response = await fetch('https://restcountries.eu/rest/v2/all');

  if (response.status === 200) {
    const data = await response.json();
    return data.find((country) => country.alpha2Code === countryCode);
  } else {
    throw new Error('unable to fetch the country');
  }
};

const getLocation = async () => {
  const response = await fetch('http://ipinfo.io/json?token=deae2905cfe0e3');

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error('unable to get the current location');
  }
};
