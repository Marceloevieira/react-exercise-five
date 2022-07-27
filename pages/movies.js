import useSWR from 'swr'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Grid } from '../components/Grid'
import { PlaylistAddons } from '../components/PlaylistAddons'
import { usePlaylistStore } from '../hooks/usePlaylistStore'
import { Layout } from '../components/Layout'
import { Loading } from '../components/Loading'
import Link from 'next/link'

const fecther = (url) => fetch(url).then((res) => res.json())

export default function Movies() {

    const { data, error } = useSWR('/api/movies', fecther);
    const { handleAddToPlaylist } = usePlaylistStore();

    if (error) return <div>Failed to load movies</div>
    if (!data) return  (<Loading.Context><Loading.Content/></Loading.Context>)

 
    const renderedMovies = data.results.map(movie => {
        return (

            <Card.Body key={movie.id} width='302px' heigth='450px' playlist={`.${movie.id}`} >
                <Card.Image src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${(movie.poster_path || movie.backdrop_path )}`} />
                <Card.Title>{movie.title}</Card.Title>
                <PlaylistAddons>
                    <Button onClick={() => handleAddToPlaylist(movie)} >Add to playlist</Button>
                    <Link href={`/movie/${movie.id}`} passHref><Button>View details</Button></Link>
                </PlaylistAddons>
            </Card.Body>
        )
    });

    return (
        <Layout.Context>
            <Layout.Header />
            <Layout.Main>
                <Grid>
                    {renderedMovies}
                </Grid>
            </Layout.Main>
        </Layout.Context>
    );
};


