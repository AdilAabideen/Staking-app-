import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>TAKEOFF NFT STAKING</h1>

      <div
        className={styles.nftBoxGrid}
        role="button"
        onClick={() => router.push(`/mint`)}
      >
        

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          <img src={`/icons/token.png`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>Stake Your Energy</h2>
          <p className={styles.selectBoxDescription}>
            Use the custom staking contract deployed by <b>TAKEOFF ENERGY</b>{" "}
            to stake your NFTs, and earn $TKF token from the <b>Staking</b> contract.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
