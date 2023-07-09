
import * as React from 'react';
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  Category, BarSeries
} from '@syncfusion/ej2-react-charts';
// Registering Syncfusion license key
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF5cXmRCdkxxWmFZfV1gdVdMYV5bRHJPIiBoS35RdUVkWXdfcnVRQmlYUkx+');
//let data=[{x:'kajs',y:874}]
let data = [{ x: 'Course A', y: 50 }, { x: 'Course B', y: 57 }, { x: 'Course C', y: 48 }, { x: 'Course D', y: 60 },
{ x: 'Course E', y: 70 }, { x: 'Course F', y: 48 }];
const BarChart =()=> {  
  return (<ChartComponent
      primaryXAxis={{
        valueType: "Category",
        title: "Courses"
      }}
      primaryYAxis={{
        title: "Percentage completed"
      }}
    >
      <Inject services={[BarSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' type='Bar'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>);
  }

export default BarChart;