const GIthubInfo = async () => {
  try {
    const url = 'https://api.github.com/users/aminur-islam-sojib';
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return data;
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
  }
};

export default GIthubInfo;
