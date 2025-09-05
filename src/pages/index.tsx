import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HeroSection from "@site/src/components/HeroSection";
import AppSection from "@site/src/components/AppSection";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome from ${siteConfig.title}`}
      description="Coding for fun :)"
    >
      <div className="tailwind">
        <HeroSection />
        <AppSection />
      </div>
    </Layout>
  );
}
