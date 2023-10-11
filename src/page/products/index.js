import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import { useLocation } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import ContentLayout from '../../layout/ContentLayout';

export default function Products() {
  return (
    <>
      <Banner />
      <ContentLayout />
    </>
  );
}
