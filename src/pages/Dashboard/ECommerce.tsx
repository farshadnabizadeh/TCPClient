import React, { useEffect, useState } from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import ChatCard from '../../components/Chat/ChatCard';
import MapOne from '../../components/Maps/MapOne';
import TableOne from '../../components/Tables/TableOne';
import DefaultLayout from '../../layout/DefaultLayout';
import Loader from '../../common/Loader';
import { useDispatch } from 'react-redux';
import { ZohoRefreshTokengetter } from '../../hooks/zohoRefreshToken';
import { useSelector } from 'react-redux';
import { LinkAction } from '../../Memo';
const ECommerce: React.FC = () => {
  const dispatch = useDispatch();
  const [refreshToken, setRefreshToken] = useState<boolean>()
  const [token, setToken] = useState<string>()

  useEffect(() => {
    const fetchToken = async () => {
      const token = await ZohoRefreshTokengetter();
      setToken(token?.data?.access_token);
    };

    fetchToken();
  }, [refreshToken]);


  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <ChartOne dateCategorization={false} ecommerceCategorization={false} />
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
