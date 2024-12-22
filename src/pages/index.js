import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css'; 

export default function Home() {
  return (
    <Layout
      title="OpenPathfinder"
      description="Guiding Open Innovation with Security and Clarity"
    >
      <header className={clsx('hero hero--dark', styles.heroBanner)}>
        <div className="container">
          <img
            className={styles.mainLogo}
            src="/img/openPathfinder_profile.png"
            alt="OpenPathfinder Logo"
          />
          <h1 className="hero__title">OpenPathfinder</h1>
          <p className="hero__subtitle">
            Guiding Open Innovation with Security and Clarity
          </p>
          <div className={styles.buttons}>
            <a
              className="button button--primary button--lg"
              href="/docs/getting-started"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.logosSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Our Projects</h2>
            <div className={styles.logosGrid}>
              <div className={styles.logoCard}>
                <a href="/docs/visionBoard/">
                  <img
                    src="/img/visionBoard_profile.png"
                    alt="VisionBoard Logo"
                    className={styles.productLogo}
                  />
                </a>
                <a href="/docs/visionBoard/">
                  <h3>VisionBoard</h3>
                </a>
                <p>Transforming Data into Actionable Insights</p>
              </div>
              <div className={styles.logoCard}>
                <a href="/docs/fortSphere">
                  <img
                    src="/img/fortSphere_profile.png"
                    alt="FortSphere Logo"
                    className={styles.productLogo}
                  />
                </a>
                <a href="/docs/fortSphere">
                  <h3>FortSphere</h3>
                </a>
                <p>Fortify Your Digital Sphere, One Command at a Time</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.callToActionSection}>
          <div className="container">
            <h2>Ready to Explore?</h2>
            <p>
              Dive deeper into our documentation to learn how to get the most
              out of our tools.
            </p>
            <a 
              className="button button--primary button--lg"
              href="/docs/getting-started"
            >
              Read the Docs
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
