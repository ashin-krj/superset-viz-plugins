/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { t, validateNonEmpty } from '@superset-ui/core';

import {
  sharedControls,
  ControlConfig,
  ControlPanelConfig,
  D3_FORMAT_OPTIONS,
  D3_FORMAT_DOCS,
} from '@superset-ui/chart-controls';
import { ColumnMeta, SelectControlConfig } from '@superset-ui/chart-controls/lib/types';

const rows: { name: string; config: SelectControlConfig<ColumnMeta, 'SelectControl'> } = {
  name: 'rows',
  config: {
    ...sharedControls.groupby,
    label: t('Rows'),
    description: t('One or many controls to pivot as rows'),
  },
};

const transpose: { name: string; config: ControlConfig<'CheckboxControl'> } = {
  name: 'transpose',
  config: {
    type: 'CheckboxControl',
    label: t('Transpose'),
    default: false,
    description: t('Swap Rows and Columns'),
  },
};

const showTotal: { name: string; config: ControlConfig<'CheckboxControl'> } = {
  name: 'show_total',
  config: {
    type: 'CheckboxControl',
    label: t('Show Total'),
    default: false,
    description: t('Show total for rows / columns'),
  },
};

const numberFormat: { name: string; config: ControlConfig<'SelectControl'> } = {
  name: 'number_format',
  config: {
    type: 'SelectControl',
    freeForm: true,
    label: t('Number format'),
    renderTrigger: true,
    default: 'SMART_NUMBER',
    choices: D3_FORMAT_OPTIONS,
    description: D3_FORMAT_DOCS,
  },
};

const config: ControlPanelConfig = {
  // For control input types, see: superset-frontend/src/explore/components/controls/index.js
  controlPanelSections: [
    {
      label: t('Query'),
      expanded: true,
      controlSetRows: [['metrics'], [rows], ['columns'], ['adhoc_filters'], ['row_limit', null]],
    },
    {
      label: t('Options'),
      expanded: true,
      controlSetRows: [[transpose, showTotal], [numberFormat]],
    },
  ],

  controlOverrides: {
    series: {
      validators: [validateNonEmpty],
      clearable: false,
    },
    row_limit: {
      default: 100,
    },
  },
};

export default config;
