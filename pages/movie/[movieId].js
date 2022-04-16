import { useRouter } from "next/router";
import useSWR from "swr";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Grid } from "../../components/Grid";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";
import { Nav } from "../../components/Nav";
import { NavItem } from "../../components/NavItem";
import { PlaylistAddons } from "../../components/PlaylistAddons";
import { usePlaylistStore } from "../../hooks/usePlaylistStore";


const fecther = (url) => fetch(url).then((res) => res.json())

export default function Movie() {

    const router = useRouter();
    const {handleAddToPlaylist } = usePlaylistStore();

    const { data, error } = useSWR(
        router.query.movieId ? `/api/movies/${router.query.movieId}` : null
        , fecther
    );

    const minutoToHour = (minutos) => {
        const horas = Math.floor(minutos / 60);
        const min = minutos % 60;
        const textoHoras = (`00${horas}`).slice(-2);
        const textoMinutos = (`00${min}`).slice(-2);

        return `${textoHoras}h ${textoMinutos}m`;
    }

    if (error) return <div>Failed to load movies</div>
    if (!data) return (<Loading.Context><Loading.Content /></Loading.Context>)


    console.log(data);
    const renderedMovie = (movie) => {

        return (
            <>
                <Card.Body key={`${movie.id}_1`} width='302px' heigth='450px' playlist={`.${movie.id}`} >
                    <Card.Image src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${(movie.poster_path || movie.backdrop_path)}`} />
                    <PlaylistAddons>
                        <Button onClick={() => handleAddToPlaylist(movie)} >Add to playlist</Button>
                    </PlaylistAddons>
                </Card.Body>
                <Card.Body key={`${movie.id}_2`} width='600px' heigth='450px' playlist={`.${movie.id}`} >
                    <span><h2>{movie.title}</h2></span>
                    <span><h5>{movie.overview}</h5></span>
                </Card.Body>
            </>
        )
    }


    return (
        <Layout.Context>
            <Layout.Header />
            <Layout.Main>
                <Grid>
                    {renderedMovie(data)}
                </Grid>
            </Layout.Main>
        </Layout.Context>
    );

}



