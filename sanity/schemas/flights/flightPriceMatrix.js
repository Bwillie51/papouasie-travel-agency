export default {
  name: 'flightPriceMatrix',
  title: 'Flight Month Price Matrix',
  type: 'document',
  fields: [
    {
      name: 'routeRef',
      title: 'Target Flight Route Reference Link',
      type: 'reference',
      to: [{ type: 'flightRoute' }],
      description: 'Bind this calendar layout grid directly to an active operational route line.'
    },
    {
      name: 'monthLabel',
      title: 'Target Operational Calendar Month',
      type: 'string',
      description: 'e.g., November 2026'
    },
    {
      name: 'daysInMonth',
      title: 'Total Active Calendar Days Count',
      type: 'number',
      initialValue: 30
    },
    {
      name: 'startDayOffset',
      title: 'Calendar Week Starting Position Offset',
      type: 'number',
      description: 'Grid layout alignment values: 0=Monday, 1=Tuesday, 2=Wednesday, 3=Thursday, 4=Friday, 5=Saturday, 6=Sunday.',
      options: {
        list: [
          { title: 'Monday', value: 0 },
          { title: 'Tuesday', value: 1 },
          { title: 'Wednesday', value: 2 },
          { title: 'Thursday', value: 3 },
          { title: 'Friday', value: 4 },
          { title: 'Saturday', value: 5 },
          { title: 'Sunday', value: 6 }
        ]
      }
    },
    {
      name: 'specialPrices',
      title: 'Promotional Daily Pricing Tariffs Array',
      type: 'array',
      description: 'Map specific daily prices that differ from your standard baseline route fares.',
      of: [
        {
          type: 'object',
          name: 'dailyTariffOverride',
          title: 'Daily Override Parameter Card',
          fields: [
            { name: 'dayNumber', title: 'Calendar Date Number', type: 'number', description: 'e.g., 3' },
            { name: 'customPrice', title: 'Promotional Override Fare Cost (Kina)', type: 'string', description: 'e.g., K580' }
          ],
          preview: {
            select: { day: 'dayNumber', price: 'customPrice' },
            prepare(selection) {
              return { title: `Date: ${selection.day}th ➔ Tariff Override: ${selection.price}` }
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      route: 'routeRef.routeName',
      month: 'monthLabel'
    },
    prepare(selection) {
      return {
        title: selection.route ? `${selection.route}` : 'Unlinked Price Matrix',
        subtitle: selection.month || 'No Month Designated'
      }
    }
  }
}
