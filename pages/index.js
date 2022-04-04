// import Hero from '@components/Hero/Hero';
import { getBlanksData } from '@lib/sheets';
import Layout from '@components/Layout/Layout';
import Products from '@components/Products/Products';

// <Hero className="tracking" title="Baseline Hero" variant="baseline" />
// <Hero className="tracing" title="Subscription Hero" variant="subscribe" />

const Index = ({ products }) => {
    return (
        <Layout>
           <Products products={products} />
        </Layout>
    );
}

export async function getStaticProps(context) {
    const data = await getBlanksData();
    return {
      props: {
        products: data, // remove sheet header
      },
      revalidate: 1, // In seconds
    };
}

export default Index;