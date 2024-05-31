import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LayoutComponent from "./layout/LayoutComponent";
import { QueryClientProvider, QueryClient } from "react-query";

const App = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <LayoutComponent collapsed={collapsed} setCollapsed={setCollapsed} />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
