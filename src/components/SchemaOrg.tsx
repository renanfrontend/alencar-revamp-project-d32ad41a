
import { Helmet } from 'react-helmet';

interface SchemaOrgProps {
  type: 'LocalBusiness' | 'WebSite' | 'Service' | 'FAQPage' | 'Article';
  data: any;
}

const SchemaOrg = ({ type, data }: SchemaOrgProps) => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SchemaOrg;
