export const getGifts = async (category)=> {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ofzHrsGPSHLmzX4X0STYskZAp7zl78ZH&q=${category}&limit=20&offset=0&rating=g&lang=en`
    const resp =  await fetch(url);
    // console.log(resp);
    const {data} = await resp.json();
    // console.log(data);
    const gifs = data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        img: gif.images.downsized_medium

    }));

    console.log(gifs);
    return gifs;
}