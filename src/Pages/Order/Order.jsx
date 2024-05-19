import { useState } from "react";
import orderimg from "../../../public/assets/shop/banner2.jpg";
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../../Hooks/UseMenu";
import FoodCard from "../../components/FoodCard/FoodCard";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import Helmeta from "../../components/Hemlmet/Helmet";
// import { Helmet } from "react-helmet-async";
const Order = () => {
    const categories=["salad","pizza","soup","dessert","drinks"];
    const {category}=useParams()
  
    const indexof=categories.indexOf(category)
    const [tabIndex,setTabIndex]=useState(indexof)
    
    console.log(category);
    const [data]=UseMenu();
    const dessert=data.filter(item=>item.category==="dessert")
    const soup=data.filter(item=>item.category==="soup")
    const salad=data.filter(item=>item.category==="salad")
    const Pizza=data.filter(item=>item.category==="pizza")
    // const offered=data.filter(item=>item.category==="offered")
    const drinks=data.filter(item=>item.category==="drinks")

  return (
    <div>
    <Helmeta title={"order"}></Helmeta>
      <Cover img={orderimg} title={"orderd food"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Desert</Tab>
          <Tab>Dirnks</Tab>
        </TabList>
        <TabPanel>
           <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={Pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={dessert}> </OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
