import { useRouter } from "next/router";
import React from "react";

// const PortfolioDetails = () => {
//   const router = useRouter();
//   console.log('router', router);
//   return (
//     <div>
//       <h1>Portfolio Details</h1>
//       <h1>ID: {router?.query?.id}</h1>
//     </div>
//   )
// }

const PortfolioDetails = ({query}) => {
  return (
    <div>
      <h1>Portfolio Details</h1>
      <h1>ID: {query?.id}</h1>
    </div>
  )
}

PortfolioDetails.getInitialProps = ({query}) => {
  return {query};
}

// class PortfolioDetails extends React.Component {

//   static getInitialProps({query}){
//     return {query}
//   }

//   render() {
//     return (
//       <div>
//         <h1>Portfolio Details</h1>
//         <h1>ID: {this.props.query?.id}</h1>
//       </div>
//     );
//   }
// }

export default PortfolioDetails;