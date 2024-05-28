import { useEffect, useState, useCallback } from 'react';
import AirOps from '@airops/airops-js';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SideBarLinks  from './components/SidebarLinks';
import WorkflowList from './components/WorkflowList';

import { sideBarLinks } from './constants';

const airopsInstance = AirOps.identify({
  userId: import.meta.env.VITE_USER_ID,
  workspaceId: import.meta.env.VITE_WORKSPACE_ID,
  hashedUserId: import.meta.env.VITE_HASHED_USER_ID,
});

function App() {
  const [appData, setAppData] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchAppData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await airopsInstance.apps.customFetch.get(`https://app.airops.com/sdk_api/airops_app_bases/${import.meta.env.VITE_APP_ID}?methods=type&include=tags`);
      setAppData(data);
      setError(null)
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [])

  useEffect(() => {
    if (!appData && !error) {
      fetchAppData();
    }
  }, [appData, error, fetchAppData])

  return (
    <div className="flex h-full">
          <Sidebar>
            <SideBarLinks links={sideBarLinks} />
        </Sidebar>
        <div className="w-full">
          <Header />
          {/* workflows={appData && [appData]} will cause WorkflowList to re-render every time this component renders. This behavior can be avoided by passing a constant array, as the component was designed to receive a constant array reference. */}
          <WorkflowList workflows={appData && [appData]} loading={loading} error={error} />
        </div>
    </div>
  )
}

export default App
