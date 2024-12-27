
export const getGifs = async (category) => {
  // const api_key = 'TiInHRYT2Edh3IBfvPCVV8S2ERwzr7qi'; // christian.mk
  const api_key = 'ezet1rPwbLKkPYXtSbJzd3TUxSpCBREp'; //monochristian
  const api = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=5`;
  const res = await fetch(api);
  const { data } = await res.json();

  const gift = data.map( (image) => ({
    id: image.id,
    title: image.title,
    url: image.images.downsized_medium.url
  }));
    
  return gift;
}
