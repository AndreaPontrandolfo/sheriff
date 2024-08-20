import { clsx } from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import CodeBlock from '@theme/CodeBlock';
import Layout from '@theme/Layout';
import SheriffLogo from '../../static/img/sheriff-logo.svg';
import styles from './index.module.css';

const Homepage = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
      wrapperClassName={styles.homepageWrapper}
    >
      <header className={styles.heroBanner}>
        <main className="container">
          <div className="margin--md">
            <SheriffLogo />
          </div>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className={'hero__subtitle margin-bottom--lg'}>
            {siteConfig.tagline}
          </p>
          <div className={styles.heroActionsBlock}>
            <div
              className={clsx(
                'margin-bottom--lg padding-top--md',
                styles.buttons,
              )}
            >
              <Link
                className="button button--primary button--lg"
                to="/docs/introduction"
              >
                Get Started
              </Link>
              <Link
                className="button button--outline button--secondary button--lg"
                to="/docs/rules"
              >
                Explore Rules
              </Link>
            </div>
            <CodeBlock className={styles.codeblock} language="bash">
              npx create-sheriff-config
            </CodeBlock>
          </div>
        </main>
      </header>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Homepage;
