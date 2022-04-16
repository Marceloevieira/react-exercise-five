import { Grid } from "../components/Grid"
import { Layout } from "../components/Layout"


export default function Home() {
    return (
        <Layout.Context>
            <Layout.Header />
            <Layout.Main>
                <Grid>
                    <h2>Bem-vindo(a) a nossa aplicação de filmes</h2>
                </Grid>
            </Layout.Main>
        </Layout.Context>
    );
};
