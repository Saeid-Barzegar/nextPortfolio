import React from "react";
import { useRouter } from "next/router";

const PortfolioDetails = () => {
  const router = useRouter();
  return (
    <>
      <h1>Portfolio Details</h1>
      <h1>ID: {router?.query?.id}</h1>
    </>
  )
}

// const PortfolioDetails = ({query}) => {
//   return (
//     <div>
//       <h1>Portfolio Details</h1>
//       <h1>ID: {query?.id}</h1>
//     </div>
//   )
// }

// PortfolioDetails.getInitialProps = ({query}) => {
//   return {query};
// }

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