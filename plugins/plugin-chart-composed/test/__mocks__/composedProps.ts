const queriesDataMetrics2 = {
  cache_key: 'bb08409c3c01818c025db286402da2ae',
  cached_dttm: null,
  cache_timeout: 86400,
  error: null,
  is_cached: true,
  status: 'success',
  stacktrace: null,
  rowcount: 4,
  annotation_data: [],
  data: [
    {
      group_type: 'Direct Due To Group',
      'COUNT_DISTINCT(period)': 5,
      'COUNT_DISTINCT(group_name)': 7,
    },
    {
      group_type: 'Due To Group',
      'COUNT_DISTINCT(period)': 5,
      'COUNT_DISTINCT(group_name)': 7,
    },
    {
      group_type: 'Summary Group',
      'COUNT_DISTINCT(period)': 5,
      'COUNT_DISTINCT(group_name)': 3,
    },
    { group_type: 'Variable', 'COUNT_DISTINCT(period)': 5, 'COUNT_DISTINCT(group_name)': 31 },
  ],
};
const queriesDataSortedBars = {
  cache_key: 'bb08409c3c01818c025db286402da2ae',
  cached_dttm: null,
  cache_timeout: 86400,
  error: null,
  is_cached: true,
  status: 'success',
  stacktrace: null,
  rowcount: 4,
  annotation_data: [],
  data: [
    { country_name: 'United States', clinical_stage: '2. Phase II or Combined I/II', 'COUNT(country_name)': 1 },
    { country_name: 'United States', clinical_stage: '4. Authorized', 'COUNT(country_name)': 1 },
    { country_name: 'United States', clinical_stage: '3. Phase III', 'COUNT(country_name)': 2 },
    { country_name: 'United States', clinical_stage: '1. Phase I', 'COUNT(country_name)': 5 },
    { country_name: 'United States', clinical_stage: '0. Fills Good', 'COUNT(country_name)': 54 },
    { country_name: 'Russia', clinical_stage: '2. Phase II or Combined I/II', 'COUNT(country_name)': 23 },
    { country_name: 'Russia', clinical_stage: '4. Authorized', 'COUNT(country_name)': 50 },
    { country_name: 'Russia', clinical_stage: '3. Phase III', 'COUNT(country_name)': 45 },
    { country_name: 'Russia', clinical_stage: '1. Phase I', 'COUNT(country_name)': 21 },
    { country_name: 'Russia', clinical_stage: '0. Fills Good', 'COUNT(country_name)': 1 },
  ],
};
const queriesDataMetrics2Breakdowns = {
  cache_key: 'd2cb05cdf3e072a803c4d04040b12fd2',
  cached_dttm: null,
  cache_timeout: 86400,
  error: null,
  is_cached: true,
  status: 'success',
  stacktrace: null,
  rowcount: 8,
  annotation_data: [],
  data: [
    {
      group_type: 'Variable',
      period_type: 'Standard',
      'COUNT_DISTINCT(period)': 5,
      'COUNT_DISTINCT(group_name)': 31,
      'COUNT(willing_to_relocate)': 153,
    },
    {
      group_type: 'Variable',
      period_type: 'Custom',
      'COUNT_DISTINCT(period)': 5,
      'COUNT_DISTINCT(group_name)': 31,
      'COUNT(willing_to_relocate)': 455,
    },
    {
      group_type: 'Direct Due To Group',
      period_type: 'Custom',
      'COUNT_DISTINCT(period)': 5,
      'COUNT_DISTINCT(group_name)': 7,
      'COUNT(willing_to_relocate)': 231,
    },
    {
      group_type: 'Due To Group',
      period_type: 'Custom',
      'COUNT_DISTINCT(period)': 5,
      'COUNT_DISTINCT(group_name)': 7,
      'COUNT(willing_to_relocate)': 1212,
    },
    {
      group_type: 'Summary Group',
      period_type: 'Custom',
      'COUNT_DISTINCT(period)': 5,
      'COUNT_DISTINCT(group_name)': 3,
      'COUNT(willing_to_relocate)': 2,
    },
    {
      group_type: 'Summary Group',
      period_type: 'Standard',
      'COUNT_DISTINCT(period)': 5,
      'COUNT_DISTINCT(group_name)': 3,
      'COUNT(willing_to_relocate)': 2342,
    },
    {
      group_type: 'Direct Due To Group',
      period_type: 'Standard',
      'COUNT_DISTINCT(period)': 3,
      'COUNT_DISTINCT(group_name)': 6,
      'COUNT(willing_to_relocate)': 144,
    },
    {
      group_type: 'Due To Group',
      period_type: 'Standard',
      'COUNT_DISTINCT(period)': 3,
      'COUNT_DISTINCT(group_name)': 6,
      'COUNT(willing_to_relocate)': 900,
    },
  ],
};
const queriesDataForAllCharts = {
  cache_key: '8255e4b82cdfa2332d133f35bae05ca1',
  cached_dttm: null,
  cache_timeout: 86400,
  error: null,
  is_cached: true,
  status: 'success',
  stacktrace: null,
  rowcount: 8,
  annotation_data: [],
  data: [
    {
      group_type: 'Variable',
      period_type: 'Standard',
      'COUNT_DISTINCT(period)': 5,
      'COUNT_DISTINCT(group_name)': 31,
      'COUNT_DISTINCT(due_to_group)': 12,
      'COUNT_DISTINCT(efficiency)': 3,
    },
    {
      group_type: 'Variable',
      period_type: 'Custom',
      'COUNT_DISTINCT(period)': 5,
      'COUNT_DISTINCT(group_name)': 31,
      'COUNT_DISTINCT(due_to_group)': 12,
      'COUNT_DISTINCT(efficiency)': 3,
    },
    {
      group_type: 'Direct Due To Group',
      period_type: 'Custom',
      'COUNT_DISTINCT(period)': 5,
      'COUNT_DISTINCT(group_name)': 7,
      'COUNT_DISTINCT(due_to_group)': 7,
      'COUNT_DISTINCT(efficiency)': 2,
    },
    {
      group_type: 'Due To Group',
      period_type: 'Custom',
      'COUNT_DISTINCT(period)': 5,
      'COUNT_DISTINCT(group_name)': 7,
      'COUNT_DISTINCT(due_to_group)': 7,
      'COUNT_DISTINCT(efficiency)': 2,
    },
    {
      group_type: 'Summary Group',
      period_type: 'Custom',
      'COUNT_DISTINCT(period)': 5,
      'COUNT_DISTINCT(group_name)': 3,
      'COUNT_DISTINCT(due_to_group)': 0,
      'COUNT_DISTINCT(efficiency)': 6,
    },
    {
      group_type: 'Summary Group',
      period_type: 'Standard',
      'COUNT_DISTINCT(period)': 5,
      'COUNT_DISTINCT(group_name)': 3,
      'COUNT_DISTINCT(due_to_group)': 0,
      'COUNT_DISTINCT(efficiency)': 6,
    },
    {
      group_type: 'Direct Due To Group',
      period_type: 'Standard',
      'COUNT_DISTINCT(period)': 3,
      'COUNT_DISTINCT(group_name)': 6,
      'COUNT_DISTINCT(due_to_group)': 6,
      'COUNT_DISTINCT(efficiency)': 2,
    },
    {
      group_type: 'Due To Group',
      period_type: 'Standard',
      'COUNT_DISTINCT(period)': 3,
      'COUNT_DISTINCT(group_name)': 6,
      'COUNT_DISTINCT(due_to_group)': 6,
      'COUNT_DISTINCT(efficiency)': 2,
    },
  ],
};
const queriesDataTimeSeries = {
  cache_key: 'bb08409c3c01818c025db286402da2ae',
  cached_dttm: null,
  cache_timeout: 86400,
  error: null,
  is_cached: true,
  status: 'success',
  stacktrace: null,
  rowcount: 4,
  annotation_data: [],
  data: [
    {
      __timestamp: 1508112000000,
      group_type: 1508112000000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1506297600000,
      group_type: 1506297600000,
      'COUNT_DISTINCT(period)': 5,
      'COUNT_DISTINCT(group_name)': 5,
    },
    {
      __timestamp: 1534723200000,
      group_type: 1534723200000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1505088000000,
      group_type: 1505088000000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1509926400000,
      group_type: 1509926400000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1550448000000,
      group_type: 1550448000000,
      'COUNT_DISTINCT(period)': 1,
      'COUNT_DISTINCT(group_name)': 1,
    },
    {
      __timestamp: 1535328000000,
      group_type: 1535328000000,
      'COUNT_DISTINCT(period)': 1,
      'COUNT_DISTINCT(group_name)': 1,
    },
    {
      __timestamp: 1537142400000,
      group_type: 1537142400000,
      'COUNT_DISTINCT(period)': 3,
      'COUNT_DISTINCT(group_name)': 3,
    },
    {
      __timestamp: 1518393600000,
      group_type: 1518393600000,
      'COUNT_DISTINCT(period)': 4,
      'COUNT_DISTINCT(group_name)': 4,
    },
    {
      __timestamp: 1540771200000,
      group_type: 1540771200000,
      'COUNT_DISTINCT(period)': 4,
      'COUNT_DISTINCT(group_name)': 4,
    },
    {
      __timestamp: 1502064000000,
      group_type: 1502064000000,
      'COUNT_DISTINCT(period)': 3,
      'COUNT_DISTINCT(group_name)': 3,
    },
    {
      __timestamp: 1549238400000,
      group_type: 1549238400000,
      'COUNT_DISTINCT(period)': 3,
      'COUNT_DISTINCT(group_name)': 3,
    },
    {
      __timestamp: 1535932800000,
      group_type: 1535932800000,
      'COUNT_DISTINCT(period)': 1,
      'COUNT_DISTINCT(group_name)': 1,
    },
    {
      __timestamp: 1545609600000,
      group_type: 1545609600000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1532908800000,
      group_type: 1532908800000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1513555200000,
      group_type: 1513555200000,
      'COUNT_DISTINCT(period)': 1,
      'COUNT_DISTINCT(group_name)': 1,
    },
    {
      __timestamp: 1534118400000,
      group_type: 1534118400000,
      'COUNT_DISTINCT(period)': 3,
      'COUNT_DISTINCT(group_name)': 3,
    },
    {
      __timestamp: 1515369600000,
      group_type: 1515369600000,
      'COUNT_DISTINCT(period)': 3,
      'COUNT_DISTINCT(group_name)': 3,
    },
    {
      __timestamp: 1502668800000,
      group_type: 1502668800000,
      'COUNT_DISTINCT(period)': 1,
      'COUNT_DISTINCT(group_name)': 1,
    },
    {
      __timestamp: 1532304000000,
      group_type: 1532304000000,
      'COUNT_DISTINCT(period)': 1,
      'COUNT_DISTINCT(group_name)': 1,
    },
    {
      __timestamp: 1523232000000,
      group_type: 1523232000000,
      'COUNT_DISTINCT(period)': 1,
      'COUNT_DISTINCT(group_name)': 1,
    },
    {
      __timestamp: 1520208000000,
      group_type: 1520208000000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1509321600000,
      group_type: 1509321600000,
      'COUNT_DISTINCT(period)': 1,
      'COUNT_DISTINCT(group_name)': 1,
    },
    {
      __timestamp: 1530489600000,
      group_type: 1530489600000,
      'COUNT_DISTINCT(period)': 1,
      'COUNT_DISTINCT(group_name)': 1,
    },
    {
      __timestamp: 1504483200000,
      group_type: 1504483200000,
      'COUNT_DISTINCT(period)': 1,
      'COUNT_DISTINCT(group_name)': 1,
    },
    {
      __timestamp: 1541376000000,
      group_type: 1541376000000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1517788800000,
      group_type: 1517788800000,
      'COUNT_DISTINCT(period)': 7,
      'COUNT_DISTINCT(group_name)': 7,
    },
    {
      __timestamp: 1538352000000,
      group_type: 1538352000000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1522022400000,
      group_type: 1522022400000,
      'COUNT_DISTINCT(period)': 1,
      'COUNT_DISTINCT(group_name)': 1,
    },
    {
      __timestamp: 1542585600000,
      group_type: 1542585600000,
      'COUNT_DISTINCT(period)': 3,
      'COUNT_DISTINCT(group_name)': 3,
    },
    {
      __timestamp: 1536537600000,
      group_type: 1536537600000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1512345600000,
      group_type: 1512345600000,
      'COUNT_DISTINCT(period)': 1,
      'COUNT_DISTINCT(group_name)': 1,
    },
    {
      __timestamp: 1551052800000,
      group_type: 1551052800000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1508716800000,
      group_type: 1508716800000,
      'COUNT_DISTINCT(period)': 3,
      'COUNT_DISTINCT(group_name)': 3,
    },
    {
      __timestamp: 1515974400000,
      group_type: 1515974400000,
      'COUNT_DISTINCT(period)': 3,
      'COUNT_DISTINCT(group_name)': 3,
    },
    {
      __timestamp: 1547424000000,
      group_type: 1547424000000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1519603200000,
      group_type: 1519603200000,
      'COUNT_DISTINCT(period)': 1,
      'COUNT_DISTINCT(group_name)': 1,
    },
    {
      __timestamp: 1503273600000,
      group_type: 1503273600000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1528070400000,
      group_type: 1528070400000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1531094400000,
      group_type: 1531094400000,
      'COUNT_DISTINCT(period)': 3,
      'COUNT_DISTINCT(group_name)': 3,
    },
    {
      __timestamp: 1524441600000,
      group_type: 1524441600000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1522627200000,
      group_type: 1522627200000,
      'COUNT_DISTINCT(period)': 5,
      'COUNT_DISTINCT(group_name)': 5,
    },
    {
      __timestamp: 1546214400000,
      group_type: 1546214400000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1538956800000,
      group_type: 1538956800000,
      'COUNT_DISTINCT(period)': 1,
      'COUNT_DISTINCT(group_name)': 1,
    },
    {
      __timestamp: 1541980800000,
      group_type: 1541980800000,
      'COUNT_DISTINCT(period)': 1,
      'COUNT_DISTINCT(group_name)': 1,
    },
    {
      __timestamp: 1525046400000,
      group_type: 1525046400000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1527465600000,
      group_type: 1527465600000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1545004800000,
      group_type: 1545004800000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1514764800000,
      group_type: 1514764800000,
      'COUNT_DISTINCT(period)': 1,
      'COUNT_DISTINCT(group_name)': 1,
    },
    {
      __timestamp: 1543190400000,
      group_type: 1543190400000,
      'COUNT_DISTINCT(period)': 1,
      'COUNT_DISTINCT(group_name)': 1,
    },
    {
      __timestamp: 1549843200000,
      group_type: 1549843200000,
      'COUNT_DISTINCT(period)': 1,
      'COUNT_DISTINCT(group_name)': 1,
    },
    {
      __timestamp: 1551657600000,
      group_type: 1551657600000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1523836800000,
      group_type: 1523836800000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1518998400000,
      group_type: 1518998400000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1525651200000,
      group_type: 1525651200000,
      'COUNT_DISTINCT(period)': 4,
      'COUNT_DISTINCT(group_name)': 4,
    },
    {
      __timestamp: 1526256000000,
      group_type: 1526256000000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1543795200000,
      group_type: 1543795200000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1520812800000,
      group_type: 1520812800000,
      'COUNT_DISTINCT(period)': 4,
      'COUNT_DISTINCT(group_name)': 4,
    },
    {
      __timestamp: 1521417600000,
      group_type: 1521417600000,
      'COUNT_DISTINCT(period)': 1,
      'COUNT_DISTINCT(group_name)': 1,
    },
    {
      __timestamp: 1548633600000,
      group_type: 1548633600000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1506902400000,
      group_type: 1506902400000,
      'COUNT_DISTINCT(period)': 3,
      'COUNT_DISTINCT(group_name)': 3,
    },
    {
      __timestamp: 1511740800000,
      group_type: 1511740800000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1533513600000,
      group_type: 1533513600000,
      'COUNT_DISTINCT(period)': 1,
      'COUNT_DISTINCT(group_name)': 1,
    },
    {
      __timestamp: 1505692800000,
      group_type: 1505692800000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1514160000000,
      group_type: 1514160000000,
      'COUNT_DISTINCT(period)': 4,
      'COUNT_DISTINCT(group_name)': 4,
    },
    {
      __timestamp: 1529280000000,
      group_type: 1529280000000,
      'COUNT_DISTINCT(period)': 5,
      'COUNT_DISTINCT(group_name)': 5,
    },
    {
      __timestamp: 1517184000000,
      group_type: 1517184000000,
      'COUNT_DISTINCT(period)': 1,
      'COUNT_DISTINCT(group_name)': 1,
    },
    {
      __timestamp: 1511136000000,
      group_type: 1511136000000,
      'COUNT_DISTINCT(period)': 1,
      'COUNT_DISTINCT(group_name)': 1,
    },
    {
      __timestamp: 1529884800000,
      group_type: 1529884800000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1526860800000,
      group_type: 1526860800000,
      'COUNT_DISTINCT(period)': 2,
      'COUNT_DISTINCT(group_name)': 2,
    },
    {
      __timestamp: 1516579200000,
      group_type: 1516579200000,
      'COUNT_DISTINCT(period)': 1,
      'COUNT_DISTINCT(group_name)': 1,
    },
  ],
};

const formDataBarsHorizontalLegendTop = {
  queryFields: { groupby: 'groupby', columns: 'groupby' },
  datasource: '13__table',
  vizType: 'composed',
  urlParams: {},
  timeRangeEndpoints: ['inclusive', 'exclusive'],
  timeRange: 'Last week',
  groupby: ['group_type'],
  numbersFormat: 'SMART_NUMBER',
  metrics: [
    {
      expressionType: 'SIMPLE',
      column: {
        id: 442,
        column_name: 'period',
        verbose_name: null,
        description: null,
        expression: null,
        filterable: true,
        groupby: true,
        is_dttm: false,
        type: 'TEXT',
        python_date_format: null,
        optionName: '_col_period',
      },
      aggregate: 'COUNT_DISTINCT',
      sqlExpression: null,
      isNew: false,
      hasCustomLabel: false,
      label: 'COUNT_DISTINCT(period)',
      optionName: 'metric_zz3gxsxq02_k7xt12w8zsi',
    },
    {
      expressionType: 'SIMPLE',
      column: {
        id: 439,
        column_name: 'group_name',
        verbose_name: null,
        description: null,
        expression: null,
        filterable: true,
        groupby: true,
        is_dttm: false,
        type: 'TEXT',
        python_date_format: null,
        optionName: '_col_group_name',
      },
      aggregate: 'COUNT_DISTINCT',
      sqlExpression: null,
      isNew: false,
      hasCustomLabel: false,
      label: 'COUNT_DISTINCT(group_name)',
      optionName: 'metric_qmr3yla2hfs_sobd5mwhxh',
    },
  ],
  columns: [],
  adhocFilters: [],
  rowLimit: 100,
  layout: 'horizontal',
  showLegend: true,
  legendPosition: 'top',
  labelsColor: 'white',
  chartType: 'BAR_CHART',
  barChartSubType: 'default',
  lineChartSubType: 'basis',
  areaChartSubType: 'basis',
  scatterChartSubType: 'circle',
  xAxisTickLabelAngle: '45',
  yAxisTickLabelAngle: '0',
  y2AxisTickLabelAngle: '0',
  useCategoryFormattingGroupBy0: true,
  useCategoryFormattingGroupBy1: true,
  useCategoryFormattingGroupBy2: true,
  useCategoryFormattingGroupBy3: true,
  chartTypeMetric0: 'BAR_CHART',
  barChartSubTypeMetric0: 'default',
  lineChartSubTypeMetric0: 'basis',
  areaChartSubTypeMetric0: 'basis',
  scatterChartSubTypeMetric0: 'circle',
};
const formDataBubbleHorizontalLegendTop = {
  ...formDataBarsHorizontalLegendTop,
  chartType: 'BUBBLE_CHART',
  columns: ['period_type'],
  zDimension: {
    aggregate: 'COUNT',
    column: {
      id: 633,
      column_name: 'willing_to_relocate',
      verbose_name: 'Willing To Relocate',
      description: null,
    },
    label: 'COUNT(willing_to_relocate)',
  },
};
const formDataSortedBars = {
  ...formDataBarsHorizontalLegendTop,
  vizType: 'composed',
  datasource: '23__table',
  urlParams: {},
  timeRangeEndpoints: ['inclusive', 'exclusive'],
  timeGrainSqla: 'P1D',
  timeRange: 'No filter',
  queryMode: 'aggregate',
  xColumn: [],
  yColumn: [],
  groupby: ['country_name'],
  metrics: [
    {
      label: 'COUNT(country_name)',
    },
  ],
  columns: ['clinical_stage'],
  adhocFilters: [],
  rowLimit: 100,
  layout: 'horizontal',
  showLegend: true,
  legendPosition: 'top',
  numbersFormat: 'SMART_NUMBER',
  chartType: 'BAR_CHART',
  barChartSubType: 'stacked',
  lineChartSubType: 'natural',
  areaChartSubType: 'basis',
  scatterChartSubType: 'circle',
  labelsColor: 'white',
  xAxisTickLabelAngle: '45',
  yAxisLabelAngle: '0',
  yAxisTickLabelAngle: '0',
  y2AxisLabelAngle: '0',
  y2AxisTickLabelAngle: '0',
  useCategoryFormattingGroupBy0: true,
  useOrderByMetric0: true,
  useOrderByGroupBy0: true,
  orderByTypeGroupBy0: 'ASC',
  chartTypeMetric0: 'BAR_CHART',
  barChartSubTypeMetric0: 'default',
  lineChartSubTypeMetric0: 'basis',
  areaChartSubTypeMetric0: 'basis',
  scatterChartSubTypeMetric0: 'circle',
  extraFormData: {},
};
const formDataBarsHorizontalLegendLeftY2Axis = {
  ...formDataBarsHorizontalLegendTop,
  legendPosition: 'left',
  useY2Axis: true,
  y2AxisLabel: 'Label 2',
  tickLabelAngle2: '90',
};
const formDataBarsVerticalLegendRightNumFormatAllLabels = {
  ...formDataBarsHorizontalLegendTop,
  layout: 'vertical',
  showLegend: true,
  legendPosition: 'right',
  numbersFormat: 'SMART_NUMBER',
  labelsColor: 'black',
  chartType: 'BAR_CHART',
  barChartSubType: 'stacked',
  lineChartSubType: 'basis',
  areaChartSubType: 'basis',
  scatterChartSubType: 'circle',
  xAxisLabel: 'XLabel',
  xAxisTickLabelAngle: '0',
  yAxisLabel: 'YLabel',
  yAxisTickLabelAngle: '45',
  useY2Axis: true,
  y2AxisTickLabelAngle: '0',
};
const formDataWithAllChartTypes = {
  numbersFormat: 'SMART_NUMBER',
  queryFields: { groupby: 'groupby', columns: 'groupby' },
  datasource: '13__table',
  vizType: 'composed',
  urlParams: { URL_IS_TOO_LONG_TO_SHARE: '' },
  timeRangeEndpoints: ['inclusive', 'exclusive'],
  timeRange: 'Last week',
  groupby: ['group_type'],
  metrics: [
    {
      label: 'COUNT_DISTINCT(period)',
    },
    {
      label: 'COUNT_DISTINCT(group_name)',
    },
    {
      label: 'COUNT_DISTINCT(due_to_group)',
    },
    {
      label: 'COUNT_DISTINCT(efficiency)',
    },
  ],
  columns: ['period_type'],
  adhocFilters: [],
  rowLimit: 100,
  layout: 'horizontal',
  showLegend: true,
  legendPosition: 'bottom',
  labelsColor: 'black',
  chartType: 'BAR_CHART',
  barChartSubType: 'stacked',
  lineChartSubType: 'basis',
  areaChartSubType: 'basis',
  scatterChartSubType: 'circle',
  xAxisLabel: '',
  xAxisTickLabelAngle: '0',
  yAxisLabel: 'QWEr',
  yAxisTickLabelAngle: '45',
  useY2Axis: true,
  y2AxisTickLabelAngle: '0',
  useCustomTypeMetric0: true,
  useCategoryFormattingGroupBy0: true,
  useCategoryFormattingGroupBy1: true,
  useCategoryFormattingGroupBy2: true,
  useCategoryFormattingGroupBy3: true,
  chartTypeMetric0: 'AREA_CHART',
  barChartSubTypeMetric0: 'default',
  lineChartSubTypeMetric0: 'linear',
  areaChartSubTypeMetric0: 'basis',
  scatterChartSubTypeMetric0: 'circle',
  useCustomTypeMetric1: true,
  chartTypeMetric1: 'LINE_CHART',
  barChartSubTypeMetric1: 'default',
  lineChartSubTypeMetric1: 'linear',
  areaChartSubTypeMetric1: 'basis',
  scatterChartSubTypeMetric1: 'circle',
  useCustomTypeMetric2: true,
  chartTypeMetric2: 'SCATTER_CHART',
  barChartSubTypeMetric2: 'default',
  lineChartSubTypeMetric2: 'basis',
  areaChartSubTypeMetric2: 'basis',
  scatterChartSubTypeMetric2: 'circle',
  useCustomTypeMetric3: true,
  chartTypeMetric3: 'BAR_CHART',
  barChartSubTypeMetric3: 'default',
  lineChartSubTypeMetric3: 'basis',
  areaChartSubTypeMetric3: 'basis',
  scatterChartSubTypeMetric3: 'circle',
  chartTypeMetric4: 'BAR_CHART',
  barChartSubTypeMetric4: 'stacked',
  lineChartSubTypeMetric4: 'basis',
  areaChartSubTypeMetric4: 'basis',
  scatterChartSubTypeMetric4: 'circle',
  chartTypeMetric5: 'BAR_CHART',
  barChartSubTypeMetric5: 'default',
  lineChartSubTypeMetric5: 'basis',
  areaChartSubTypeMetric5: 'basis',
  scatterChartSubTypeMetric5: 'circle',
};
const formDataWithMetricsAndBreakdownBars = {
  ...formDataWithAllChartTypes,
  legendPosition: 'top',
  useCustomTypeMetric0: false,
  useCustomTypeMetric1: false,
  useCustomTypeMetric2: false,
  useCustomTypeMetric3: false,
  useCustomTypeMetric4: false,
};
const formDataWithMetricsAndBreakdownStickyBars = {
  ...formDataWithAllChartTypes,
  legendPosition: 'top',
  useCustomTypeMetric1: false,
  useCustomTypeMetric0: true,
  chartTypeMetric0: 'SCATTER_CHART',
  scatterChartSubTypeMetric0: 'arrowUp',
  useCustomTypeMetric2: false,
  useCustomTypeMetric3: false,
  useCustomTypeMetric4: false,
};
const formDataTimeSeries = {
  ...formDataBarsHorizontalLegendTop,
  granularitySqla: 'group_type',
  timeGrainSqla: 'P1W',
  groupby: ['group_type'],
  minBarWidth: '60',
  xAxisTickLabelAngle: '0',
};

export const barsHorizontalLegendTop = {
  formData: formDataBarsHorizontalLegendTop,
  height: 400,
  queriesData: [queriesDataMetrics2],
  width: 800,
};

export const bubbleHorizontalLegendTop = {
  formData: formDataBubbleHorizontalLegendTop,
  height: 400,
  queriesData: [queriesDataMetrics2Breakdowns],
  width: 800,
};

export const barsHorizontalSorted = {
  formData: formDataSortedBars,
  height: 400,
  queriesData: [queriesDataSortedBars],
  width: 800,
};

export const barsHorizontalLegendLeftY2AxisBreakdowns = {
  formData: formDataBarsHorizontalLegendLeftY2Axis,
  height: 400,
  queriesData: [queriesDataMetrics2Breakdowns],
  width: 800,
};

export const barsVerticalLegendRightNumFormatAllLabelsBreakdowns = {
  formData: formDataBarsVerticalLegendRightNumFormatAllLabels,
  height: 400,
  queriesData: [queriesDataMetrics2Breakdowns],
  width: 800,
};

export const allChatsLegendBottomBreakdowns = {
  formData: formDataWithAllChartTypes,
  height: 400,
  queriesData: [queriesDataForAllCharts],
  width: 800,
};

export const metricsAndBreakdownBars = {
  formData: formDataWithMetricsAndBreakdownBars,
  height: 400,
  queriesData: [queriesDataForAllCharts],
  width: 800,
};

export const metricsAndBreakdownStickyBars = {
  formData: formDataWithMetricsAndBreakdownStickyBars,
  height: 400,
  queriesData: [queriesDataForAllCharts],
  width: 800,
};

export const timeSeries = {
  formData: formDataTimeSeries,
  height: 400,
  queriesData: [queriesDataTimeSeries],
  width: 800,
};
