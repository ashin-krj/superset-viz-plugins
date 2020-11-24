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
import React, { FC } from 'react';
import { t } from '@superset-ui/core';
import { Grid, GridItem } from './Layout';

type HeadersOfHeaderProps<R extends string, C extends string> = {
  rows: R[];
  columns: C[];
};

const HeadersOfHeader: FC<HeadersOfHeaderProps<string, string>> = ({ rows, columns }) => (
  <Grid
    withoutOverflow
    gridColumn={`span ${rows.length || 1}`}
    gridTemplateColumns="1fr"
    gridTemplateRows={`repeat(${columns.length || 1}, max-content)`}
  >
    <GridItem bordered header bgLevel={2}>
      {t('metrics')}
    </GridItem>
    {columns.map(column => (
      // eslint-disable-next-line react/jsx-key
      <GridItem bordered header bgLevel={2}>
        {column}
      </GridItem>
    ))}
  </Grid>
);

export default HeadersOfHeader;
