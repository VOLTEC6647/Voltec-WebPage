import { GetServerSideProps } from "next";
import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

export default index

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: "/admin/newspaper",
      permanent: false,
    },
  };
};
