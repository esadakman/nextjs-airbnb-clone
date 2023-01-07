import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ exploreData, cardsData }) {
  // let slider = document.getElementById("slider");
  // slider.scrollLeft = slider.scrollLeft - 500;
  return (
    <>
      <div className="">
        <Head>
          <title>Airbnb</title>
          {/* <meta name="description" content="Generated by create next app" /> */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <Banner />
        <main className="max-w-7xl mx-auto px-8 sm:px-16 mb-10">
          <section className="pt-6">
            <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
            {/* Pull some data from a server - API endpoints - Static Rendering */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {exploreData?.map(({ img, distance, location }, ind) => (
                <SmallCard
                  key={ind}
                  img={img}
                  distance={distance}
                  location={location}
                />
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-4xl font-semibold pb-5">Live Anywhere</h2>
            <div
              id="slider"
              className="w-full flex space-x-3 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide p-5 -ml-3 "
            >
              {cardsData.map(({ img, title }, ind) => (
                <MediumCard key={ind} img={img} title={title} />
              ))}
            </div>
          </section>

          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Whishlist curated by Airbnb."
            buttonText="Get Inspired"
          />
        </main>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );
  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
