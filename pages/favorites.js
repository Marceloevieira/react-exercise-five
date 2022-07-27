import Link from 'next/link'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Grid } from '../components/Grid'
import { Layout } from '../components/Layout'
import { PlaylistAddons } from '../components/PlaylistAddons'
import { usePlaylistStore } from '../hooks/usePlaylistStore'

export default function Favorites() {


    const { playlist: { items }, handleRemoveItem } = usePlaylistStore();



    const renderedPlaylist = items.map((movie) => {

        return (
            <Card.Body key={movie.id} width='300px' heigth='450px' playlist={`.${movie.id}`} >
                <Card.Image src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} />
                <Card.Title>{movie.title}</Card.Title>
                <PlaylistAddons>
                    <Button onClick={() => handleRemoveItem(movie.id)} >to remove</Button>
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
                    {renderedPlaylist.length === 0 ? 'No movies added.' : renderedPlaylist}
                </Grid>
            </Layout.Main>
        </Layout.Context>
    )
}
