import Layout from '../../components/layout/layout';
import { Box, Grid, GridItem, Heading, Container, Center } from "@chakra-ui/react";
import LineChart from '../../components/charts/lineChart';
import PieChart from '../../components/charts/pieChart';
import AreaChart from '../../components/charts/areaChart';

const Dashboard = () => {
  const dataLineChart = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <>
      <Layout />

      <Grid
        h="200%"
        m='2em'
        templateRows="repeat(24, 1fr)"
        templateColumns="repeat(8, 1fr)"
        gap={4}
      >
        <GridItem boxShadow="dark-lg" rowSpan={4} colSpan={3} borderWidth="1px" borderRadius="lg" p={4}>
          <Heading as="h5" size="sm">
            Acessos de hoje
        </Heading>
          <LineChart data={dataLineChart} />
        </GridItem>
        <GridItem boxShadow="dark-lg" rowSpan={3} colSpan={3} borderWidth="1px" borderRadius="lg" p={4}>
          <Container>
            There are many benefits to a joint design and development system. Not only
            does it bring benefits to the design team, but it also brings benefits to
            engineering teams. It makes sure that our experiences have a consistent look
            and feel, not just in our design specs, but in production
          </Container>
        </GridItem>
        <GridItem boxShadow="dark-lg" rowSpan={4} colSpan={2} borderWidth="1px" borderRadius="lg" p={4}>
          <Heading as="h5" size="sm">
            Acessos de hoje
          </Heading>
          <PieChart />
        </GridItem>
        <GridItem boxShadow="dark-lg" rowSpan={1} colSpan={3} bg="tomato">
          <Center>
            There are many benefits to a joint design and development system.
            </Center>
        </GridItem>
        <GridItem boxShadow="dark-lg" rowSpan={4} colSpan={4} borderWidth="1px" borderRadius="lg" p={4}>
          <Heading as="h5" size="sm">
            Gráfico de área
          </Heading>
          <AreaChart />
        </GridItem>
        <GridItem boxShadow="dark-lg" rowSpan={4} colSpan={4} borderWidth="1px" borderRadius="lg" p={4}>
          <Heading as="h5" size="sm">
            Gráfico de área
          </Heading>
          <AreaChart />
        </GridItem>
      </Grid>
    </>
  );
}

export default Dashboard;