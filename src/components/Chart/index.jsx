import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";

const chartSetting = {
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
      width: "97%",
    },
  },
};
const dataset = [
  {
    totaljobs: 59,
    postedjobs: 57,
    appliedjobs: 86,
    totalusers: 21,
    month: "Jan",
  },
  {
    totaljobs: 50,
    postedjobs: 52,
    appliedjobs: 78,
    totalusers: 28,
    month: "Feb",
  },
  {
    totaljobs: 47,
    postedjobs: 53,
    appliedjobs: 106,
    totalusers: 41,
    month: "Mar",
  },
  {
    totaljobs: 54,
    postedjobs: 56,
    appliedjobs: 92,
    totalusers: 73,
    month: "Apr",
  },
  {
    totaljobs: 57,
    postedjobs: 69,
    appliedjobs: 92,
    totalusers: 99,
    month: "May",
  },
  {
    totaljobs: 60,
    postedjobs: 63,
    appliedjobs: 103,
    totalusers: 144,
    month: "June",
  },
  {
    totaljobs: 59,
    postedjobs: 60,
    appliedjobs: 105,
    totalusers: 319,
    month: "July",
  },
  {
    totaljobs: 65,
    postedjobs: 60,
    appliedjobs: 106,
    totalusers: 249,
    month: "Aug",
  },
  {
    totaljobs: 51,
    postedjobs: 51,
    appliedjobs: 95,
    totalusers: 131,
    month: "Sept",
  },
  {
    totaljobs: 60,
    postedjobs: 65,
    appliedjobs: 97,
    totalusers: 55,
    month: "Oct",
  },
  {
    totaljobs: 67,
    postedjobs: 64,
    appliedjobs: 76,
    totalusers: 48,
    month: "Nov",
  },
  {
    totaljobs: 61,
    postedjobs: 70,
    appliedjobs: 103,
    totalusers: 25,
    month: "Dec",
  },
];

const valueFormatter = (value) => `${value}`;

export default function BarsDataset() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: "band", dataKey: "month" }]}
      series={[
        { dataKey: "totaljobs", label: "Total Jobs", valueFormatter },
        { dataKey: "postedjobs", label: "Posted Jobs", valueFormatter },
        { dataKey: "appliedjobs", label: "Applied Jobs", valueFormatter },
        { dataKey: "totalusers", label: "Total Users", valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}
