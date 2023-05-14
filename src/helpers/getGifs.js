
export const getGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/trending?api_key=e9961wPmF8XQcBLF1QsForTsW0lBNZLI&q=${category}&limit=20`;
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => ({
            id: img.id,
            title: img.title,
            img: img.images.downsized_medium.url,
        }))

        console.log(gifs);
        return gifs;

    }
    