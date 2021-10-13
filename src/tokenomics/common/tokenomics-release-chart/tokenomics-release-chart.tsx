import {
  create,
  useTheme as amchartsUseTheme,
  percent,
  options,
  color
} from '@amcharts/amcharts4/core';
import {
  DateAxis,
  IXYSeriesDataFields,
  LineSeries,
  ValueAxis,
  XYChart,
  Legend
} from '@amcharts/amcharts4/charts';
import React, { useEffect, useRef } from 'react';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import amchartsdark from '@amcharts/amcharts4/themes/amchartsdark';

import { Typography } from 'src/common/typography';
import * as styles from './tokenomics-release-chart.css';

export type TokenomicsReleaseChartProps = {
  dataFields: Array<IXYSeriesDataFields & { color: string }>;
  data?: Array<unknown>;
  id?: string;
};

options.autoSetClassName = true;
options.classNamePrefix = 'tokenomics-release-chart';

amchartsUseTheme(amchartsdark);
amchartsUseTheme(am4themes_animated);

export const TokenomicsReleaseChart: React.VFC<TokenomicsReleaseChartProps> = (
  props
) => {
  const chartRef = useRef<null | XYChart>(null);

  const { id = 'release-chart' } = props;

  useEffect(() => {
    if (!props.data?.length) return;

    chartRef.current = create(id, XYChart);
    const dateAxis = chartRef.current.xAxes.push(new DateAxis());
    dateAxis.renderer.minGridDistance = 40;
    dateAxis.width = percent(100);
    dateAxis.baseInterval = { timeUnit: 'month', count: 1 };

    dateAxis.dateFormats.setKey('month', 'MMM yyyy');

    dateAxis.userClassName = styles.date;
    dateAxis.fontSize = 12;

    dateAxis.renderer.labels.template.rotation = -45;
    dateAxis.renderer.labels.template.durationFormatter.outputFormat =
      'MM-yyyy';

    chartRef.current.data = props.data;

    props.dataFields.forEach((field, index) => {
      if (!chartRef.current) return;

      const valueAxis = chartRef.current.yAxes.push(new ValueAxis());
      if (chartRef.current.yAxes.indexOf(valueAxis) !== 0) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        valueAxis.syncWithAxis = chartRef.current.yAxes.getIndex(0);
      }

      valueAxis.userClassName = styles.percent;

      valueAxis.min = 0;
      valueAxis.max = 1000000000;
      valueAxis.strictMinMax = true;

      valueAxis.renderer.grid.template.disabled = true;
      valueAxis.renderer.labels.template.disabled = true;

      function createGrid(value: number) {
        const range = valueAxis.axisRanges.create();
        range.value = value;
        range.label.text = '{value}';
      }

      if (!index) {
        createGrid(0);
        createGrid(250000000);
        createGrid(500000000);
        createGrid(750000000);
        createGrid(1000000000);
      }

      const series = chartRef.current.series.push(new LineSeries());

      series.dataFields.valueY = field.valueY;
      series.dataFields.dateX = field.dateX;

      series.stroke = color(field.color);
      series.strokeWidth = 2;
    });

    if (props.dataFields.length > 1) {
      const legend = new Legend();

      legend.data = props.dataFields.map((seriesitem) => {
        return {
          name: seriesitem.valueY,
          fill: color(seriesitem.color)
        };
      });

      legend.userClassName = styles.percent;

      legend.markers.template.height = 12;
      legend.markers.template.width = 32;

      const marker = legend.markers.template.children.getIndex(0);
      if (marker) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        marker.cornerRadius(0, 0, 0, 0);
      }

      legend.contentAlign = 'left';

      chartRef.current.legend = legend;
    }

    return () => {
      chartRef.current?.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.data, id]);

  return (
    <div className={styles.root}>
      <Typography className={styles.title}>
        Modeled vs. actual token release schedule
      </Typography>
      <div id={id} className={styles.chart} />
    </div>
  );
};
