export default {
  name: 'flightRoute',
  title: 'Flight Route Configuration',
  type: 'document',
  fields: [
    {
      name: 'routeId',
      title: 'Unique Route Slug Identifier',
      type: 'slug',
      description: 'e.g., pom-goroka or pom-hagen',
      options: { source: 'routeName', maxLength: 96 }
    },
    {
      name: 'routeName',
      title: 'Full Route Display Designation',
      type: 'string',
      description: 'e.g., Port Moresby (POM) ➔ Goroka (GKA)'
    },
    {
      name: 'routeShort',
      title: 'Shorthand Label (For WhatsApp Dispatches)',
      type: 'string',
      description: 'e.g., Pom - Goroka'
    },
    {
      name: 'carrier',
      title: 'Operating Air Carrier Line',
      type: 'string',
      initialValue: 'Air Niugini'
    },
    {
      name: 'defaultPrice',
      title: 'Standard Flight Fare Tariff (Kina)',
      type: 'string',
      description: 'e.g., K1,140'
    }
  ],
  preview: {
    select: { title: 'routeName', subtitle: 'defaultPrice' }
  }
}
