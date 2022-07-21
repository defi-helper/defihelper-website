import clsx from 'clsx';
import {
  create,
  useTheme as amchartsUseTheme,
  options,
  color,
  addLicense
} from '@amcharts/amcharts4/core';
import {
  DateAxis,
  IXYSeriesDataFields,
  LineSeries,
  ValueAxis,
  XYChart
} from '@amcharts/amcharts4/charts';
import React, { useEffect, useRef } from 'react';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import amchartsdark from '@amcharts/amcharts4/themes/amchartsdark';
import { useDebounce } from 'react-use';

import { bignumberUtils } from 'src/common/bignumber-utils';
import { Typography } from 'src/common/typography';
import { config } from 'src/config';
import * as styles from './main-chart-card.css';

export type MainChartCardProps = {
  color: 'hold' | 'autostaking';
  title: React.ReactNode;
  apy: string | number;
  sum: string | number;
  description: React.ReactNode;
  dataFields: Array<IXYSeriesDataFields>;
  data?: Array<unknown>;
  id?: string;
};

options.autoSetClassName = true;
options.classNamePrefix = 'main-chart-card';

amchartsUseTheme(amchartsdark);
amchartsUseTheme(am4themes_animated);
if (config.AMCHARTS_LICENCE) {
  addLicense(config.AMCHARTS_LICENCE);
}

const GREY_STROKE_COLOR = color('#444848');
const STROKES = {
  hold: '#977854',
  autostaking: '#CCFF3C'
};

export const MainChartCard: React.VFC<MainChartCardProps> = (props) => {
  const chartRef = useRef<null | XYChart>(null);

  const { id = 'release-chart' } = props;

  useEffect(() => {
    chartRef.current = create(id, XYChart);
    const dateAxis = chartRef.current.xAxes.push(new DateAxis());
    dateAxis.renderer.disabled = true;

    dateAxis.renderer.baseGrid.disabled = false;
    dateAxis.renderer.grid.template.disabled = true;

    chartRef.current.leftAxesContainer.width = 0;

    dateAxis.renderer.baseGrid.stroke = GREY_STROKE_COLOR;
    dateAxis.renderer.baseGrid.strokeWidth = 2;
    dateAxis.renderer.baseGrid.strokeOpacity = 1;

    chartRef.current.zoomOutButton.disabled = true;
    chartRef.current.seriesContainer.draggable = false;
    chartRef.current.seriesContainer.resizable = false;

    props.dataFields.forEach((field) => {
      if (!chartRef.current) return;

      const valueAxis = chartRef.current.yAxes.push(new ValueAxis());
      if (chartRef.current.yAxes.indexOf(valueAxis) !== 0) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        valueAxis.syncWithAxis = chartRef.current.yAxes.getIndex(0);
      }

      valueAxis.renderer.baseGrid.stroke = GREY_STROKE_COLOR;
      valueAxis.renderer.baseGrid.strokeWidth = 2;
      valueAxis.renderer.baseGrid.strokeOpacity = 1;

      valueAxis.renderer.grid.template.disabled = true;
      valueAxis.renderer.labels.template.disabled = true;

      const series = chartRef.current.series.push(new LineSeries());

      series.strokeWidth = 2;

      if (field.valueY !== props.color) {
        series.strokeDasharray = '2 2';
        series.stroke = GREY_STROKE_COLOR;
      } else {
        series.stroke = color(STROKES[props.color]);
      }

      series.dataFields.valueY = field.valueY;
      series.dataFields.dateX = field.dateX;
    });

    return () => {
      chartRef.current?.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useDebounce(
    () => {
      if (chartRef.current && props.data?.length) {
        chartRef.current.data = props.data;
      }
    },
    300,
    [props.data]
  );

  const sum = bignumberUtils.formatMax(props.sum, 1000000);

  return (
    <div className={styles.root}>
      <Typography className={clsx(styles.title, styles.grey)}>
        {props.title}
      </Typography>
      <div className={styles.subtitle}>
        <Typography variant="inherit" transform="uppercase" as="div">
          ${bignumberUtils.lt(props.sum, 0) ? 0 : sum}
        </Typography>
        <Typography
          variant="inherit"
          transform="uppercase"
          as="div"
          className={styles.color[props.color]}
        >
          {bignumberUtils.lt(props.apy, 0)
            ? 0
            : bignumberUtils.formatMax(props.apy, 10000)}
          % APY
        </Typography>
      </div>
      <div className={styles.chart} id={id} />
      <Typography variant="body2" className={styles.description}>
        {props.description}
      </Typography>
    </div>
  );
};
